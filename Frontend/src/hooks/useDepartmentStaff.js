import { useState, useEffect } from 'react';

export const useDepartmentStaff = (departmentMatchStrings, staticFallbackData) => {
  const [faculties, setFaculties] = useState(staticFallbackData);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/staff")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const apiDeptStaff = data.data.filter(s => {
            if (!s.department) return false;
            const deptLower = s.department.toLowerCase();
            return departmentMatchStrings.some(name => deptLower.includes(name.toLowerCase()));
          });
          
          if (apiDeptStaff.length > 0) {
            const formattedApiData = apiDeptStaff.map(staff => {
              const normalizeName = (name) => name.replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
              const staffNorm = normalizeName(staff.name);
              
              const localMatch = staticFallbackData.find(localStaff => {
                const localNorm = normalizeName(localStaff.name);
                return localNorm.includes(staffNorm) || staffNorm.includes(localNorm);
              });

              const finalId = localMatch ? localMatch.id : staff.id.toString();
              const finalSlug = localMatch ? localMatch.slug : staff.id.toString();

              return {
                id: finalId,
                slug: finalSlug,
                name: staff.name,
                desig: staff.designation || "Assistant Professor",
                qual: staff.qualifications || "",
                email: staff.email || "staff@nscet.org",
                image: (localMatch && localMatch.image) ? localMatch.image : (staff.photo_url ? `http://localhost:5000${staff.photo_url}` : "https://via.placeholder.com/150"),
                spec: staff.research || (localMatch ? localMatch.spec : ""),
                objectPosition: localMatch ? localMatch.objectPosition : "center 10%",
                linkedin: localMatch ? localMatch.linkedin : "",
                about: localMatch ? localMatch.about : "",
                publications: localMatch ? localMatch.publications : [],
                projects: localMatch ? localMatch.projects : [],
                patents: localMatch ? localMatch.patents : [],
                awards: localMatch ? localMatch.awards : [],
                experience: localMatch ? localMatch.experience : [],
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
