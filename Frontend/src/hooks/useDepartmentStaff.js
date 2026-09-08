import { useState, useEffect } from 'react';

export const useDepartmentStaff = (departmentMatchStrings, staticFallbackData) => {
  const [faculties, setFaculties] = useState(staticFallbackData);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/staff")
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          const isRequestingME = departmentMatchStrings.some(s => {
            const cl = s.toLowerCase();
            return cl.includes('m.e') || cl.includes('me ') || cl.includes('me-');
          });

          const apiDeptStaff = data.data.filter(s => {
            if (!s.department) return false;
            const deptLower = s.department.toLowerCase().trim();
            const isStaffME = deptLower.includes('m.e.') || deptLower.includes('m.e -') || deptLower.includes('me-') || deptLower.startsWith('me ');

            // If page is requesting UG, do not include M.E. staff!
            if (!isRequestingME && isStaffME) return false;
            // If page is requesting M.E., do not include UG staff!
            if (isRequestingME && !isStaffME) return false;

            return departmentMatchStrings.some(matchStr => {
              const cleanMatch = matchStr.toLowerCase().trim();
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
            const formattedApiData = apiDeptStaff.map(staff => {
              const getKeywords = (name) => (name || '')
                .toLowerCase()
                .replace(/dr\.|mr\.|mrs\.|ms\./gi, '')
                .replace(/[^a-z0-9\s]/gi, ' ')
                .split(/\s+/)
                .filter(w => w.length >= 3);

              const staffWords = getKeywords(staff.name);

              const localMatch = staticFallbackData.find(localStaff => {
                const localWords = getKeywords(localStaff.name);
                // Check if any major keyword (>= 3 chars) matches
                const hasWordMatch = staffWords.some(sw => localWords.includes(sw));
                if (hasWordMatch) return true;

                // Fallback direct name normalization
                const normalizeName = (name) => (name || '').replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
                const sNorm = normalizeName(staff.name);
                const lNorm = normalizeName(localStaff.name);
                return sNorm.includes(lNorm) || lNorm.includes(sNorm);
              });

              const finalId = localMatch ? localMatch.id : staff.id.toString();
              const finalSlug = localMatch ? localMatch.slug : staff.id.toString();

              const parseList = (val, fallback = []) => {
                if (!val) return fallback;
                if (Array.isArray(val)) return val;
                try {
                  const p = JSON.parse(val);
                  if (Array.isArray(p)) return p;
                } catch (e) { }
                return String(val).split('\n').filter(Boolean);
              };

              return {
                id: finalId,
                slug: finalSlug,
                name: staff.name,
                desig: staff.designation || "Assistant Professor",
                qual: staff.qualifications || (localMatch ? localMatch.qual : ""),
                email: staff.email || (localMatch ? localMatch.email : "staff@nscet.org"),
                image: (localMatch && localMatch.image && !staff.photo_url)
                  ? localMatch.image
                  : (staff.photo_url ? (staff.photo_url.startsWith('http') ? staff.photo_url : `http://localhost:5000${staff.photo_url}`) : (localMatch?.image || "https://via.placeholder.com/150")),
                spec: staff.spec || staff.research || (localMatch ? localMatch.spec : ""),
                objectPosition: localMatch ? localMatch.objectPosition : "center 10%",
                linkedin: staff.linkedin || (localMatch ? localMatch.linkedin : ""),
                about: staff.about || (localMatch ? localMatch.about : ""),
                publications: parseList(staff.publications, localMatch ? localMatch.publications : []),
                projects: parseList(staff.projects, localMatch ? localMatch.projects : []),
                patents: parseList(staff.patents, localMatch ? localMatch.patents : []),
                awards: parseList(staff.awards, localMatch ? localMatch.awards : []),
                experience: parseList(staff.experience, localMatch ? localMatch.experience : []),
                profile_pdf: staff.profile_pdf ? (staff.profile_pdf.startsWith('http') ? staff.profile_pdf : `http://localhost:5000${staff.profile_pdf}`) : null,
                profile_url: staff.profile_url || null,
                isHOD: staff.is_hod === 1 || staff.is_hod === true || staff.is_hod === '1' || staff.is_hod === 'true'
              };
            });

            // Sort so HOD is first
            formattedApiData.sort((a, b) => b.isHOD - a.isHOD);
            setFaculties(formattedApiData);
          }
        }
      })
      .catch(err => console.error("Error fetching staff:", err));
  }, [departmentMatchStrings, staticFallbackData]);

  return faculties;
};
