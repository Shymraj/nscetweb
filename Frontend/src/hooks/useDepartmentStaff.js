import { useState, useEffect, useRef } from 'react';

// Normalization stripping salutations, single isolated initials, and non-alphanumeric chars
const normalizeCore = (name) => {
  if (!name) return '';
  let n = name.toLowerCase().replace(/dr\.|mr\.|mrs\.|ms\.|prof\./gi, ' ');
  // remove single isolated initials: e.g. " r ", " j ", " s "
  n = n.replace(/\b[a-z]\b/g, ' ');
  return n.replace(/[^a-z0-9]/g, '');
};

const getInitials = (name) => {
  if (!name) return [];
  const clean = name.toLowerCase().replace(/dr\.|mr\.|mrs\.|ms\.|prof\./gi, ' ');
  const tokens = clean.split(/[\s.]+/).filter(Boolean);
  return tokens.filter(t => t.length === 1);
};

const getWords = (name) => {
  if (!name) return [];
  return name.toLowerCase()
    .replace(/dr\.|mr\.|mrs\.|ms\.|prof\./gi, ' ')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);
};

function matchStaff(apiStaff, staticStaff) {
  if (!apiStaff || !staticStaff) return false;

  // 1. Explicit ID / slug match
  if (staticStaff.id && apiStaff.id && (staticStaff.id.toString() === apiStaff.id.toString() || staticStaff.slug === apiStaff.id.toString())) {
    return true;
  }

  // 2. Email match
  if (apiStaff.email && staticStaff.email && apiStaff.email.trim().toLowerCase() === staticStaff.email.trim().toLowerCase()) {
    return true;
  }

  // 3. Core Name Match (stripping salutations and single initials: handles Mrs. Archana R vs Mrs. R. Archana, etc.)
  const aCore = normalizeCore(apiStaff.name);
  const sCore = normalizeCore(staticStaff.name);
  if (aCore && sCore && aCore === sCore) {
    const aInitials = getInitials(apiStaff.name);
    const sInitials = getInitials(staticStaff.name);
    // If both have initials, verify they don't contradict
    if (aInitials.length > 0 && sInitials.length > 0) {
      return aInitials.some(i => sInitials.includes(i));
    }
    return true;
  }

  // 4. All main name words match regardless of word order
  const aWords = getWords(apiStaff.name);
  const sWords = getWords(staticStaff.name);
  if (aWords.length >= 2 && sWords.length >= 2 && aWords.length === sWords.length) {
    const sortedA = [...aWords].sort().join(' ');
    const sortedS = [...sWords].sort().join(' ');
    if (sortedA === sortedS) return true;
  }

  return false;
}

export const useDepartmentStaff = (departmentMatchStrings, staticFallbackData) => {
  const [faculties, setFaculties] = useState(staticFallbackData || []);

  // Compute a stable primitive string key from departmentMatchStrings to prevent infinite re-fetch loops
  const deptKey = Array.isArray(departmentMatchStrings)
    ? departmentMatchStrings.map(s => String(s).toLowerCase().trim()).sort().join('|')
    : String(departmentMatchStrings || '').toLowerCase().trim();

  const staticRef = useRef(staticFallbackData);
  staticRef.current = staticFallbackData;

  useEffect(() => {
    let isMounted = true;
    const staticData = staticRef.current || [];
    const matchArray = Array.isArray(departmentMatchStrings) ? departmentMatchStrings : [departmentMatchStrings];

    const apiBase = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000'
      : '';

    fetch(`${apiBase}/api/admin/staff`)
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return;

        if (data.success && Array.isArray(data.data)) {
          const isRequestingME = matchArray.some(s => {
            const cl = String(s).toLowerCase();
            return cl.includes('m.e') || cl.includes('me ') || cl.includes('me-');
          });

          const apiDeptStaff = data.data.filter(s => {
            if (!s.department) return false;
            const deptLower = s.department.toLowerCase().trim();
            const isStaffME = deptLower.includes('m.e.') || deptLower.includes('m.e -') || deptLower.includes('me-') || deptLower.startsWith('me ');

            // If page is requesting UG, do not include M.E. staff
            if (!isRequestingME && isStaffME) return false;
            // If page is requesting M.E., do not include UG staff
            if (isRequestingME && !isStaffME) return false;

            return matchArray.some(matchStr => {
              const cleanMatch = String(matchStr).toLowerCase().trim();
              if (cleanMatch.length <= 4) {
                const regex = new RegExp(`(^|[^a-z0-9])${cleanMatch}([^a-z0-9]|$)`, 'i');
                return regex.test(deptLower);
              }
              const strippedMatch = cleanMatch.replace(/[^a-z0-9]/g, '');
              const strippedDept = deptLower.replace(/[^a-z0-9]/g, '');
              return strippedDept.includes(strippedMatch) || deptLower.includes(cleanMatch);
            });
          });

          if (apiDeptStaff.length > 0) {
            const matchedStaticIndices = new Set();

            const parseList = (val, fallback = []) => {
              if (!val) return fallback;
              if (Array.isArray(val)) return val;
              try {
                const p = JSON.parse(val);
                if (Array.isArray(p)) return p;
              } catch (e) {
                /* ignore json parse error */
              }
              return String(val).split('\n').filter(Boolean);
            };

            const formattedApiData = apiDeptStaff.map(staff => {
              const localMatchIdx = staticData.findIndex(localStaff => matchStaff(staff, localStaff));
              const localMatch = localMatchIdx !== -1 ? staticData[localMatchIdx] : null;

              if (localMatchIdx !== -1) {
                matchedStaticIndices.add(localMatchIdx);
              }

              const finalId = localMatch?.id || (staff.id ? staff.id.toString() : `staff-${Math.random()}`);
              const finalSlug = localMatch?.slug || localMatch?.id || (staff.id ? staff.id.toString() : `staff-${Math.random()}`);

              // Image resolution: preserve static local image if present
              let finalImage = null;
              if (localMatch && localMatch.image) {
                finalImage = localMatch.image;
              } else if (staff.photo_url) {
                finalImage = staff.photo_url.startsWith('http')
                  ? staff.photo_url
                  : `${apiBase}${staff.photo_url.startsWith('/') ? '' : '/'}${staff.photo_url}`;
              } else {
                finalImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(staff.name || 'Faculty')}&background=1e3a8a&color=fff&size=400`;
              }

              return {
                id: finalId,
                slug: finalSlug,
                name: staff.name,
                desig: staff.designation || (localMatch ? localMatch.desig : "Assistant Professor"),
                qual: staff.qualifications || (localMatch ? localMatch.qual : ""),
                email: staff.email || (localMatch ? localMatch.email : "staff@nscet.org"),
                image: finalImage,
                fallbackImage: localMatch?.image || null,
                cardDesc: localMatch?.cardDesc || undefined,
                spec: staff.spec || staff.research || (localMatch ? localMatch.spec : ""),
                objectPosition: localMatch ? localMatch.objectPosition : "center 10%",
                linkedin: staff.linkedin || (localMatch ? localMatch.linkedin : ""),
                about: staff.about || (localMatch ? localMatch.about : ""),
                publications: parseList(staff.publications, localMatch ? localMatch.publications : []),
                projects: parseList(staff.projects, localMatch ? localMatch.projects : []),
                patents: parseList(staff.patents, localMatch ? localMatch.patents : []),
                awards: parseList(staff.awards, localMatch ? localMatch.awards : []),
                experience: parseList(staff.experience, localMatch ? localMatch.experience : []),
                profile_pdf: staff.profile_pdf ? (staff.profile_pdf.startsWith('http') ? staff.profile_pdf : `${apiBase}${staff.profile_pdf.startsWith('/') ? '' : '/'}${staff.profile_pdf}`) : null,
                profile_url: staff.profile_url || null,
                isHOD: staff.is_hod === 1 || staff.is_hod === true || staff.is_hod === '1' || staff.is_hod === 'true' || localMatch?.id === 'hod' || (localMatch?.desig && localMatch.desig.toLowerCase().includes('head'))
              };
            });

            // Append unmatched static fallback faculty (e.g. static faculty members not yet in the DB)
            const unmatchedStatic = staticData
              .filter((_, idx) => !matchedStaticIndices.has(idx))
              .map((st, idx) => ({
                ...st,
                id: st.id || `static-${idx}`,
                slug: st.slug || st.id || `static-${idx}`,
                fallbackImage: st.image || null,
                isHOD: st.id === 'hod' || st.isHOD || (st.desig && st.desig.toLowerCase().includes('head'))
              }));

            const combined = [...formattedApiData, ...unmatchedStatic];
            // Sort so HOD is first
            combined.sort((a, b) => (b.isHOD ? 1 : 0) - (a.isHOD ? 1 : 0));
            setFaculties(combined);
          }
        }
      })
      .catch(err => console.error("Error fetching staff:", err));

    return () => {
      isMounted = false;
    };
  }, [deptKey]);

  return faculties;
};

