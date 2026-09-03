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
  const deptData = registry[deptId];
  if (!deptData) return null;

  if (!facultyId) return deptData[0];
  
  const cleanedId = facultyId.toLowerCase().trim();
  const found = deptData.find(f => f.id === cleanedId || f.slug === cleanedId);
  return found || null;
}

export function getDepartmentName(deptId) {
  return departmentNames[deptId] || "Department";
}
