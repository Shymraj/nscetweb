import { civilFacultyData } from "./civil/facultyData";
import { cseFacultyData } from "./cse/facultyData";
import { itFacultyData } from "./cse/it/facultyData";
import { aidsFacultyData } from "./cse/aids/facultyData";
import { electronicsFacultyData } from "./electronics/facultyData";
import { electricalFacultyData } from "./electrical/facultyData";
import { mechanicalFacultyData } from "./mechanical/facultyData";
import { shFacultyData } from "./s&h/facultyData";
import { mecseFacultyData } from "./cse/mecse/facultyData";
import { meembeddedFacultyData } from "./electrical/meembedded/facultyData";
import { memanufacturingFacultyData } from "./mechanical/memanufacturing/facultyData";
import { mestructuralFacultyData } from "./civil/mestructural/facultyData";
import { placementsFacultyData } from "../Student Life/Placements/facultyData";
import { sportsFacultyData } from "../Student Life/Sports/facultyData";

const registry = {
  civil: civilFacultyData,
  cse: cseFacultyData,
  it: itFacultyData,
  aids: aidsFacultyData,
  electronics: electronicsFacultyData,
  electrical: electricalFacultyData,
  mechanical: mechanicalFacultyData,
  "science-humanities": shFacultyData,
  "me-cse": mecseFacultyData,
  "me-embedded": meembeddedFacultyData,
  "me-manufacturing": memanufacturingFacultyData,
  "me-structural": mestructuralFacultyData,
  "placements": placementsFacultyData,
  "sports": sportsFacultyData
};

export const departmentNames = {
  civil: "Civil Engineering",
  cse: "Computer Science & Engineering",
  it: "Information Technology",
  aids: "Artificial Intelligence & Data Science",
  electronics: "Electronics & Communication Engineering",
  electrical: "Electrical & Electronics Engineering",
  mechanical: "Mechanical Engineering",
  "science-humanities": "Science & Humanities",
  "me-cse": "M.E. Computer Science & Engineering",
  "me-embedded": "M.E. Embedded System Technologies",
  "me-manufacturing": "M.E. Manufacturing Engineering",
  "me-structural": "M.E. Structural Engineering",
  "placements": "Training & Placement Cell",
  "sports": "Department of Physical Education"
};

export function getFacultyData(deptId, facultyId) {
  const cleanedId = (facultyId || "").toLowerCase().trim();
  if (!cleanedId) return registry[deptId]?.[0] || null;

  const normalize = (str) => (str || "").replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/gi, '').toLowerCase();
  const getKeywords = (str) => (str || "")
    .toLowerCase()
    .replace(/dr\.|mr\.|mrs\.|ms\./gi, '')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);

  const targetNorm = normalize(cleanedId);
  const targetWords = getKeywords(cleanedId);

  const matchesFaculty = (f) => {
    if (!f) return false;
    if (f.id?.toLowerCase() === cleanedId || f.slug?.toLowerCase() === cleanedId) return true;
    if (normalize(f.id) === targetNorm || normalize(f.slug) === targetNorm) return true;
    if (normalize(f.name) === targetNorm) return true;
    
    // Check keyword intersection
    const fWords = [...getKeywords(f.name), ...getKeywords(f.id), ...getKeywords(f.slug)];
    if (targetWords.length > 0 && targetWords.some(tw => fWords.includes(tw))) return true;

    if (targetNorm.length >= 4 && (normalize(f.name).includes(targetNorm) || targetNorm.includes(normalize(f.name)))) {
      return true;
    }
    return false;
  };

  // 1. Direct match in requested department
  const deptData = registry[deptId];
  if (deptData && Array.isArray(deptData)) {
    const found = deptData.find(matchesFaculty);
    if (found) return found;
  }

  // 2. Cross-department fallback across all registries in case deptId was mismatched
  for (const [key, data] of Object.entries(registry)) {
    if (Array.isArray(data)) {
      const found = data.find(matchesFaculty);
      if (found) {
        if (!found._detectedDept) found._detectedDept = key;
        return found;
      }
    }
  }

  return null;
}

export function getDepartmentName(deptId, faculty) {
  if (faculty && faculty._detectedDept && departmentNames[faculty._detectedDept]) {
    return departmentNames[faculty._detectedDept];
  }
  if (faculty && faculty.department && departmentNames[faculty.department]) {
    return departmentNames[faculty.department];
  }
  return departmentNames[deptId] || "Department";
}

const deptMap = {
  civil: "Civil Engineering",
  cse: "Computer Science and Engineering",
  it: "Information Technology",
  aids: "Artificial Intelligence & Data Science",
  electronics: "Electronics and Communication Engineering",
  electrical: "Electrical and Electronics Engineering",
  mechanical: "Mechanical Engineering",
  "science-humanities": "Science and Humanities",
  "me-cse": "Computer Science and Engineering",
  "me-embedded": "Electrical and Electronics Engineering",
  "me-manufacturing": "Mechanical Engineering",
  "me-structural": "Civil Engineering"
};

export function getAllStaticStaff() {
  const list = [];
  const seen = new Set();

  for (const [key, deptFaculty] of Object.entries(registry)) {
    const deptName = deptMap[key];
    if (!deptName || !Array.isArray(deptFaculty)) continue;

    deptFaculty.forEach((f, idx) => {
      const normName = (f.name || '').toLowerCase().replace(/dr\.|mr\.|mrs\.|ms\./gi, '').replace(/[^a-z0-9]/gi, '');
      const uniqueKey = `${normName}_${deptName}`.toLowerCase();
      if (seen.has(uniqueKey)) return;
      seen.add(uniqueKey);

      list.push({
        id: f.id || `static-${key}-${idx}`,
        name: f.name,
        designation: f.desig || 'Assistant Professor',
        department: deptName,
        qualifications: f.qual || '',
        email: f.email || '',
        photo_url: f.image || '',
        research: f.spec || '',
        is_hod: f.id === 'hod' || (f.desig && f.desig.toLowerCase().includes('head')) ? 1 : 0,
        about: f.about || '',
        linkedin: f.linkedin || '',
        spec: f.spec || '',
        experience: f.experience || [],
        publications: f.publications || [],
        projects: f.projects || [],
        patents: f.patents || [],
        awards: f.awards || [],
        profile_pdf: f.profile_pdf || null,
        profile_url: f.profile_url || null
      });
    });
  }
  return list;
}

