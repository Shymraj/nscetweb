import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch, FaUserTie } from 'react-icons/fa';
import './TeachingFaculty.css';

// Helper to normalize names by removing salutations and isolated initials
const normalizeCore = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/dr\.|mr\.|mrs\.|ms\.|prof\./gi, ' ')
    .replace(/\b[a-z]\b/g, ' ')
    .replace(/[^a-z0-9]/g, '');
};

// Robust search normalization helper (strips titles, punctuation, maps phonetic 'dh' -> 'th')
const normalizeSearch = (str) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .replace(/dr\.|mr\.|mrs\.|ms\.|prof\./gi, ' ')
    .replace(/dh/g, 'th')
    .replace(/[^a-z0-9]/g, '');
};

// Comprehensive search match across faculty data and department info
const matchesFaculty = (dept, facultyMember, query) => {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return true;

  // Split query into individual keywords/tokens (e.g. "ece pradhap" -> ["ece", "pradhap"])
  const tokens = cleanQuery.split(/\s+/).filter(Boolean);

  const rawFields = [
    facultyMember.name,
    facultyMember.designation,
    facultyMember.qualification,
    facultyMember.aufin,
    facultyMember.aicteId,
    (facultyMember.aicteId || '').replace(/-/g, ''), // without hyphens
    dept.name,
    dept.badge,
    dept.degree,
    dept.id,
    facultyMember.isHOD ? 'hod head of the department' : ''
  ].filter(Boolean).map(s => s.toLowerCase());

  const fullRawText = rawFields.join(' ');
  const fullNormText = rawFields.map(normalizeSearch).join(' ');

  // All tokens must match either directly or normalized
  return tokens.every(token => {
    const rawTok = token.toLowerCase();
    const normTok = normalizeSearch(token);

    if (fullRawText.includes(rawTok)) return true;
    if (normTok && fullNormText.includes(normTok)) return true;
    return false;
  });
};

// ============================================================================
// 12 DEPARTMENTS OFFICIAL VERIFIED FACULTY DATA
// Strict Order Requested:
// 1. civil
// 2. structural (M.E. Structural Engineering)
// 3. cse (Computer Science and Engineering)
// 4. me cse (M.E. Computer Science and Engineering)
// 5. ece (Electronics and Communication Engineering)
// 6. embedded systems (M.E. Embedded Systems and Technology)
// 7. eee (Electrical and Electronics Engineering)
// 8. mech (Mechanical Engineering)
// 9. manufacturing (M.E. Manufacturing Engineering)
// 10. aids (Artificial Intelligence and Data Science)
// 11. it (Information Technology)
// 12. s and h (Science and Humanities)
// Headers: S. No | AU-FIN | Name & Designation | Photo (Passport Size)
// ============================================================================
export const departmentFacultyData = {
  // 1. CIVIL
  civil: {
    id: 'civil',
    name: 'Civil Engineering',
    degree: 'B.E.',
    badge: 'CE',
    faculty: [
      { aufin: '2661821984', aicteId: '1-2493575923', name: 'Mr. N. Nagarathinam', designation: 'Assistant Professor & Head', qualification: 'M.E., M.I.S.T.E., (Ph.D)', photo: '/teaching_faculty/civil/nagarathinam.jpg', isHOD: true },
      { aufin: '2690911989', aicteId: '1-3543541864', name: 'Mrs. S. Gayathri', designation: 'Assistant Professor', qualification: 'M.E., M.I.S.T.E.', photo: '/teaching_faculty/civil/gayathri.jpg' },
      { aufin: '2620481994', aicteId: '1-4224126907', name: 'Mr. R. Shanmugapriyan', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/civil/shanmugapriyan.jpg' },
      { aufin: '2664111992', aicteId: '1-43476250635', name: 'Mrs. M. Kanimozhi', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/civil/kanimozhi.jpg' },
      { aufin: '2696951994', aicteId: '-', name: 'Mr. P. Arul Jebaraj', designation: 'Assistant Professor', qualification: 'M.Tech', photo: '/teaching_faculty/civil/aruljebaraj.jpg' },
      { aufin: '2686931994', aicteId: '1-44718497412', name: 'Mrs. R. Nathirun Sabinash', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/civil/nathirunsabinash.jpg' },
      { aufin: '2620741992', aicteId: '1-44812372894', name: 'Mr. T. Hariprasath', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/civil/hariprasath.jpg' },
      { aufin: '2687271996', aicteId: '-', name: 'Mrs. P. Aadhitya', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/civil/aadhithya.jpg' },
      { aufin: '2686711993', aicteId: '1-44745699211', name: 'Mrs. K. Benita Merlin Isabella', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/civil/Benita Photo.jpg' },
      { aufin: '2629031997', aicteId: '1-9314598361', name: 'Mrs. M. Sindhu', designation: 'Assistant Professor', qualification: 'M.E., (Ph.D)', photo: '/teaching_faculty/civil/sindhu.jpg' },
      { aufin: '2656021988', aicteId: '-', name: 'Dr. S. Premkumar', designation: 'Assistant Professor', qualification: 'B.E, M.E, Ph.D', photo: '/teaching_faculty/civil/General Engg - Premkumar.jpg' }
    ]
  },

  // 2. STRUCTURAL (M.E. Structural Engineering)
  structural: {
    id: 'structural',
    name: 'Structural Engineering',
    degree: 'M.E.',
    badge: 'SE',
    faculty: [
      { aufin: '2629031997', aicteId: '1-9314598361', name: 'Mrs. M. Sindhu', designation: 'Assistant Professor', qualification: 'M.E., (Ph.D)', photo: '/teaching_faculty/structural/sindhu.jpg' },
      { aufin: '2686711993', aicteId: '1-44745699211', name: 'Mrs. K. Benita Merlin Isabella', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/structural/Benita Photo.jpg' }
    ]
  },

  // 3. CSE
  cse: {
    id: 'cse',
    name: 'Computer Science and Engineering',
    degree: 'B.E.',
    badge: 'CSE',
    faculty: [
      { aufin: '2666381985', aicteId: '1-2194745092', name: 'Dr. J. Mathalai Raj', designation: 'Assistant Professor & Head [I/C]', qualification: 'M.E , Ph.D', photo: '/teaching_faculty/cse/mathalairaj.jpg', isHOD: true },
      { aufin: '2618151983', aicteId: '1-476934111', name: 'Dr. K. Velkumar', designation: 'Assistant Professor', qualification: 'M.E, Ph.D', photo: '/teaching_faculty/cse/velkumar.jpg' },
      { aufin: '2656391990', aicteId: '1-43491562074', name: 'Mrs. R. Archana', designation: 'Assistant Professor', qualification: 'M.E., (Ph.D)', photo: '/teaching_faculty/cse/archana.jpeg' },
      { aufin: '2637211999', aicteId: '1-44718722194', name: 'Ms. S. Abirami Kayathiri', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/cse/abirami.jpeg' },
      { aufin: '2672171998', aicteId: '1-43705048522', name: 'Mrs. M. Venkata Lakshmi', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/cse/venkatalakshmi.JPG' },
      { aufin: '2669711989', aicteId: '1-4803087809', name: 'Mrs. V. Anusuya', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE', photo: '/teaching_faculty/cse/ANUSUYA VAIRAMUTHU.jpg' },
      { aufin: '2634261990', aicteId: '-', name: 'Mrs. V. Vinothini', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - Software', photo: '/teaching_faculty/cse/Vinothini.jpeg' },
      { aufin: '2636791991', aicteId: '-', name: 'Mr. G. R. Naveenkarthick', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE', photo: '/teaching_faculty/cse/karthick.jpeg' },
      { aufin: '2797121982', aicteId: '-', name: 'Mrs. T. Rathimala', designation: 'Assistant Professor', qualification: 'M.E. CSE', photo: '/teaching_faculty/cse/rathimala.jpg' },
      { aufin: '-', aicteId: '-', name: 'Ms. J. S. Snega Priyanka', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE', photo: '/teaching_faculty/cse/Snega Priyanka.png' }
    ]
  },

  // 4. ME CSE (M.E. Computer Science and Engineering)
  mecse: {
    id: 'mecse',
    name: 'Computer Science and Engineering',
    degree: 'M.E.',
    badge: 'ME CSE',
    faculty: [
      { aufin: '2646141985', aicteId: '-', name: 'Dr. M. Sathya', designation: 'Vice Principal & Professor', qualification: 'B.E - CSE, M.Tech. - IT, Ph.D - Information & Communication', photo: '/teaching_faculty/mecse/sathya.jpeg' },
      { aufin: '2636791991', aicteId: '-', name: 'Mr. G. R. Naveenkarthick', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE (Networks)', photo: '/teaching_faculty/mecse/karthick.jpeg' }
    ]
  },

  // 5. ECE
  ece: {
    id: 'ece',
    name: 'Electronics and Communication Engineering',
    degree: 'B.E.',
    badge: 'ECE',
    faculty: [
      { aufin: '2688231988', aicteId: '1-2186295159', name: 'Dr. T. Venishkumar', designation: 'Professor & Head [I/C]', qualification: 'B.E - ECE, M.E - VLSI Design, Ph.D', photo: '/teaching_faculty/ece/venishkumar.jpg', isHOD: true },
      { aufin: '2699641989', aicteId: '-', name: 'Dr. N. Mathavan', designation: 'Assistant Professor', qualification: 'B.Tech - ECE, M.E, Ph.D', photo: '/teaching_faculty/ece/Mathavan.jpg' },
      { aufin: '2619581984', aicteId: '1-1443212434', name: 'Mr. M. Idhayachandran', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - VLSI Design', photo: '/teaching_faculty/ece/idhayachandran.jpg' },
      { aufin: '2628941989', aicteId: '-', name: 'Mr. S. Prathap', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - Communication Systems', photo: null },
      { aufin: '2647591982', aicteId: '1-2649907763', name: 'Mr. R. Pradeep Kumar', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - Applied Electronics', photo: '/teaching_faculty/ece/pradeepkumar.jpg' },
      { aufin: '2631871989', aicteId: '1-3360065352', name: 'Mrs. T. Tamilselvi', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.Tech - VLSI Design', photo: '/teaching_faculty/ece/tamilselvi.jpg' },
      { aufin: '2669881993', aicteId: '1-7375205106', name: 'Mrs. P. Shantha Devi', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - VLSI Design', photo: '/teaching_faculty/ece/shanthadevi.jpg' },
      { aufin: '2667011990', aicteId: '1-44033761346', name: 'Mrs. A. Gowthami', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - Communication Systems', photo: '/teaching_faculty/ece/gowthami.jpg' },
      { aufin: '2612721990', aicteId: '1-9321842836', name: 'Mr. K. Bharathi Kannan', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - VLSI Design', photo: '/teaching_faculty/ece/bharathikannan.jpg' },
      { aufin: '2688551984', aicteId: '1-2303358265', name: 'Mrs. S. Kalaivani', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - VLSI & Embedded System', photo: '/teaching_faculty/ece/kalaivani.jpg' }
    ]
  },

  // 6. EMBEDDED SYSTEMS (M.E. Embedded Systems and Technology)
  embedded: {
    id: 'embedded',
    name: 'Embedded Systems and Technology',
    degree: 'M.E.',
    badge: 'ME EST',
    faculty: [
      { aufin: '2698141984', aicteId: '1-3541523422', name: 'Dr. R. Athilingam', designation: 'Associate Professor & Head', qualification: 'B.E - EIE, M.E - Applied Electronics, Ph.D - Information & Communication', photo: '/teaching_faculty/embedded/athilingam.jpg', isHOD: true },
      { aufin: '2688551984', aicteId: '1-2303358265', name: 'Mrs. S. Kalaivani', designation: 'Assistant Professor', qualification: 'B.E - ECE, M.E - VLSI & Embedded System', photo: '/teaching_faculty/embedded/kalaivani.jpg' }
    ]
  },

  // 7. EEE
  eee: {
    id: 'eee',
    name: 'Electrical and Electronics Engineering',
    degree: 'B.E.',
    badge: 'EEE',
    faculty: [
      { aufin: '2698141984', aicteId: '1-3541523422', name: 'Dr. R. Athilingam', designation: 'Associate Professor & Head', qualification: 'B.E, M.E - Applied Electronics, Ph.D', photo: '/teaching_faculty/eee/athilingam.jpg', isHOD: true },
      { aufin: '2656031988', aicteId: '1-10734369291', name: 'Mr. R. Raja Karthick', designation: 'Assistant Professor', qualification: 'B.E - ICE, M.E - Applied Electronics', photo: '/teaching_faculty/eee/raja_karthick.jpg' },
      { aufin: '2680041992', aicteId: '1-43491562001', name: 'Mrs. A. Nishetha Jeflin Nixon', designation: 'Assistant Professor', qualification: 'B.E - EEE, M.E - Power Electronics and Drives', photo: '/teaching_faculty/eee/Nishetha_jeflin_nixon.jpg' },
      { aufin: '2664041991', aicteId: '1-43843091721', name: 'Mrs. M. Vijayalakshmi', designation: 'Assistant Professor', qualification: 'B.E - EEE, M.E - Power Systems', photo: '/teaching_faculty/eee/Vijayalakshmi.jpg' },
      { aufin: '2625541993', aicteId: '1-3582673746', name: 'Mr. C. Shiva', designation: 'Assistant Professor', qualification: 'B.E - EEE, M.E - Power Electronics and Drives', photo: '/teaching_faculty/eee/shiva.jpg' },
      { aufin: '2632871988', aicteId: '1-4490009812', name: 'Mrs. R. Chitra', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/eee/chitra.jpg' },
      { aufin: '2653551994', aicteId: '1-44811028854', name: 'Mrs. H. Juriya Banu', designation: 'Assistant Professor', qualification: 'B.E - EEE, M.E - Power Systems', photo: '/teaching_faculty/eee/juriyabanu.jpg' },
      { aufin: '2685611988', aicteId: '1-44731627274', name: 'Dr. N. Pandi Selvi', designation: 'Assistant Professor', qualification: 'B.E - EEE, M.E - Power Systems, Ph.D', photo: '/teaching_faculty/eee/pandiselvi.jpeg' },
      { aufin: '2666411989', aicteId: '1-3175749327', name: 'Mr. K. Ganesh', designation: 'Assistant Professor', qualification: 'B.E - EEE, M.Tech - Power Systems, (Ph.D)', photo: '/teaching_faculty/eee/ganesh.jpg' }
    ]
  },

  // 8. MECH
  mech: {
    id: 'mech',
    name: 'Mechanical Engineering',
    degree: 'B.E.',
    badge: 'ME',
    faculty: [
      { aufin: '2690451991', aicteId: '1-4224126611', name: 'Dr. B. Radha krishnan', designation: 'Professor & Head [I/C]', qualification: 'B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical', photo: '/teaching_faculty/mech/radhakrishnan.jpg', isHOD: true },
      { aufin: '2659441989', aicteId: '1-7361556856', name: 'Mr. R. Nagaraja', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Engineering Design', photo: '/teaching_faculty/mech/nagaraja.jpg' },
      { aufin: '2633361985', aicteId: '1-3543273743', name: 'Mr. J. Chakaravarthy Samy Durai', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Manufacturing', photo: '/teaching_faculty/mech/chakravarthysamydurai.jpg' },
      { aufin: '2688911992', aicteId: '1-3180844435', name: 'Mr. S. Harikishore', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Manufacturing', photo: '/teaching_faculty/mech/harikishore.jpg' },
      { aufin: '2649541986', aicteId: '1-7374451770', name: 'Mr. V. Sivaganesan', designation: 'Assistant Professor / Deputy COE', qualification: 'B.E - Mechanical, M.E - Engineering Design', photo: '/teaching_faculty/mech/sivaganesan.jpg' },
      { aufin: '2612441990', aicteId: '1-735974194', name: 'Dr. B. Nagarajan', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical', photo: '/teaching_faculty/mech/nagarajan.jpg' },
      { aufin: '2653271987', aicteId: '1-2669069913', name: 'Mr. P. Surulimani', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Manufacturing', photo: '/teaching_faculty/mech/Surulimani.jpg' },
      { aufin: '2661551985', aicteId: '1-461036221', name: 'Dr. A. Vembathurajesh', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Thermal, Ph.D - Mechanical', photo: '/teaching_faculty/mech/vembathurajesh.png' },
      { aufin: '2625401991', aicteId: '1-4223735824', name: 'Mr. G. Arunkumar', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Manufacturing', photo: '/teaching_faculty/mech/arunkumar.jpg' },
      { aufin: '2662271993', aicteId: '1-3362665526', name: 'Dr. A. Vennimalai Rajan', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E, Ph.D', photo: '/teaching_faculty/mech/Vennimalairajan.jpg' }
    ]
  },

  // 9. MANUFACTURING (M.E. Manufacturing Engineering)
  manufacturing: {
    id: 'manufacturing',
    name: 'Manufacturing Engineering',
    degree: 'M.E.',
    badge: 'ME MFE',
    faculty: [
      { aufin: '2615041979', aicteId: '1-459164159', name: 'Dr. C. Mathalai Sundaram', designation: 'Principal', qualification: 'B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical', photo: '/teaching_faculty/manufacturing/mathalai sundharam.png' },
      { aufin: '2662271993', aicteId: '1-3362665526', name: 'Dr. A. Vennimalai Rajan', designation: 'Assistant Professor', qualification: 'B.E - Mechanical, M.E - Manufacturing, Ph.D - Mechanical', photo: '/teaching_faculty/manufacturing/Vennimalairajan.jpg' }
    ]
  },

  // 10. AIDS
  aids: {
    id: 'aids',
    name: 'Artificial Intelligence and Data Science',
    degree: 'B.Tech.',
    badge: 'AI & DS',
    faculty: [
      { aufin: '2655811988', aicteId: '1-7450454038', name: 'Dr. L. S. Vignesh', designation: 'Assistant Professor & Head [I/C]', qualification: 'B.E - CSE, M.E - CSE, Ph.D', photo: '/teaching_faculty/aids/vignesh.jpg', isHOD: true },
      { aufin: '2662281995', aicteId: '1-10532725594', name: 'Mr. J. Vinoth Kumar', designation: 'Assistant Professor', qualification: 'M.E., (Ph.D)', photo: '/teaching_faculty/aids/vinothkumar.jpg' },
      { aufin: '2642661998', aicteId: '1-44732668686', name: 'Mrs. G. Geerthiga', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/aids/Geerthiga.jpg' },
      { aufin: '2621001994', aicteId: '1-44885345874', name: 'Mrs. M. Pavithra', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/aids/Pavithra.jpg' },
      { aufin: '2644391988', aicteId: '1-9539338208', name: 'Mrs. S. Sunitha', designation: 'Assistant Professor', qualification: 'B.Tech. - IT, M.E - CSE', photo: '/teaching_faculty/aids/sunitha.jpg' },
      { aufin: '2656071990', aicteId: '1-47942661062', name: 'Mr. S. Kodeeswaran', designation: 'Assistant Professor', qualification: 'B.Tech. - IT, M.Tech. - IT', photo: '/teaching_faculty/aids/Kodeeswaran.jpeg' },
      { aufin: '2798201993', aicteId: '1-47948380662', name: 'Mrs. V. Nithyapriya', designation: 'Assistant Professor', qualification: 'M.E.', photo: '/teaching_faculty/aids/Nithyapriya.png' },
      { aufin: '2696041986', aicteId: '-', name: 'Mrs. K. Jenifer', designation: 'Assistant Professor', qualification: 'B.E, M.E', photo: '/teaching_faculty/aids/Jenifer.jpeg' }
    ]
  },

  // 11. IT
  it: {
    id: 'it',
    name: 'Information Technology',
    degree: 'B.Tech.',
    badge: 'IT',
    faculty: [
      { aufin: '2626711985', aicteId: '1-2651552423', name: 'Dr. C. Prathap', designation: 'Assistant Professor & Head', qualification: 'B.E - CSE, M.Tech - CSE', photo: '/teaching_faculty/it/prathap c.jpg', isHOD: true },
      { aufin: '2649351987', aicteId: '1-1471752431', name: 'Mr. R. Udhayakumar', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE, M.B.A - ITM', photo: '/teaching_faculty/it/udhayakumar.jpg' },
      { aufin: '2647541984', aicteId: '1-453158406', name: 'Mr. N. Kesavamoorthy', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE', photo: '/teaching_faculty/it/kesavamoorthy.jpg' },
      { aufin: '2691151990', aicteId: '1-44728767777', name: 'Mrs. B. Sai Suganya', designation: 'Assistant Professor', qualification: 'B.Tech. - IT, M.Tech. - IT', photo: '/teaching_faculty/it/sai suganya.jpg' },
      { aufin: '2675141990', aicteId: '1-11340852810', name: 'Mr. M. Bhavani', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.Tech - CSE', photo: '/teaching_faculty/it/Bhavani.jpg' },
      { aufin: '2626451991', aicteId: '1-9593345041', name: 'Mrs. P. Jasmine Jose', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE', photo: '/teaching_faculty/it/jasminejose.png' },
      { aufin: '-', aicteId: '-', name: 'Mrs. M. Mareeswari', designation: 'Assistant Professor', qualification: 'B.E - CSE, M.E - CSE', photo: '/teaching_faculty/it/Mareeswari M.jpg' }
    ]
  },

  // 12. S AND H
  sh: {
    id: 'sh',
    name: 'Science and Humanities',
    degree: 'First Year & S&H',
    badge: 'S&H',
    faculty: [
      { aufin: '2661551985', aicteId: '1-461036221', name: 'Dr. A. Vembathurajesh', designation: 'Assistant Professor & Head [I/C] / S&H', qualification: 'B.E, M.E, Ph.D', photo: '/teaching_faculty/sh/vembathurajesh.png', isHOD: true },
      { aufin: '2670801974', aicteId: '1-9507814168', name: 'Dr. C. Chithra', designation: 'Professor & Co-Ordinator (Mathematics)', qualification: 'M.Sc, Ph.D', photo: '/teaching_faculty/sh/CHITHRA.jpg' },
      { aufin: '2613491985', aicteId: '1-3589577843', name: 'Dr. N. David Mathan', designation: 'Professor (Chemistry)', qualification: 'M.Sc, Ph.D', photo: '/teaching_faculty/sh/davidmathan.jpg' },
      { aufin: '2666891976', aicteId: '1-44891333634', name: 'Dr. R. Valarmathi', designation: 'Assistant Professor (English)', qualification: 'Ph.D', photo: '/teaching_faculty/sh/Valar Mathi.jpg' },
      { aufin: '2659891982', aicteId: '1-11316396283', name: 'Dr. S. R. Krishnamoorthi', designation: 'Associate Professor (Physics)', qualification: 'M.Sc., M.Phil., Ph.D., MISTE', photo: '/teaching_faculty/sh/krishnamoorthy.jpg' },
      { aufin: '2653291992', aicteId: '-', name: 'Mr. M. Murugan', designation: 'Assistant Professor (Mathematics)', qualification: 'B.Sc., M.Sc – Maths (SET)', photo: '/teaching_faculty/sh/Murugan.jpeg' },
      { aufin: '2623691995', aicteId: '1-47942834113', name: 'Dr. S. Srinithi', designation: 'Assistant Professor (Chemistry)', qualification: 'B.Sc., M.Sc., Ph.D', photo: '/teaching_faculty/sh/Srinithi.jpeg' },
      { aufin: '2664061993', aicteId: '1-47942834092', name: 'Dr. P. Diana', designation: 'Assistant Professor (Physics)', qualification: 'B.Sc., M.Sc., Ph.D', photo: '/teaching_faculty/sh/diana.jpg' },
      { aufin: '2688901963', aicteId: '1-44888641004', name: 'Dr. P. Malarvizhi', designation: 'Assistant Professor (English)', qualification: 'M.A., M.Phil., Ph.D.', photo: '/teaching_faculty/sh/malarvizhi.jpg' },
      { aufin: '2672851975', aicteId: '1-10958035723', name: 'Dr. R. Saravanakumar', designation: 'Associate Professor (Chemistry)', qualification: 'M.Sc., Ph.D.', photo: '/teaching_faculty/sh/Saravanakumar.png' },
      { aufin: '2642401996', aicteId: '1-44811041756', name: 'Mrs. S. Rajeshshree', designation: 'Assistant Professor (General Engg)', qualification: 'B.E - ECE, M.E', photo: '/teaching_faculty/sh/Rajeshshree.jpeg' },
      { aufin: '2680081992', aicteId: '1-45331256145', name: 'Mrs. N. Thisha', designation: 'Assistant Professor (General Engg)', qualification: 'B.A., M.A., NET', photo: '/teaching_faculty/sh/thisha.jpeg' },
      { aufin: '2666051973', aicteId: '1-736760530', name: 'Dr. B. Mallaiyasamy', designation: 'Associate Professor (Mathematics)', qualification: 'M.Sc, M.Phil', photo: '/teaching_faculty/sh/mailysamy.jpg' },
      { aufin: '2696611982', aicteId: '1-44811622064', name: 'Dr. S. Selvapriya', designation: 'Assistant Professor (English)', qualification: 'M.A., M.Phil., Ph.D.', photo: '/teaching_faculty/sh/Selvapriya.jpg' },
      { aufin: '2632101992', aicteId: '-', name: 'Dr. M. Sumathra', designation: 'Assistant Professor (Chemistry)', qualification: 'B.Sc., M.Sc., Ph.D', photo: '/teaching_faculty/sh/Sumathra.jpeg' },
      { aufin: '2675711985', aicteId: '-', name: 'Mrs. V. Sangeetha', designation: 'Assistant Professor (English)', qualification: 'B.A., M.A., English (NET)', photo: '/teaching_faculty/sh/Sangeetha.jpeg' },
      { aufin: '2655231992', aicteId: '-', name: 'Dr. M. Easwari', designation: 'Assistant Professor (Physics)', qualification: 'B.Sc., M.Sc., Ph.D', photo: '/teaching_faculty/sh/Easwari.jpeg' },
      { aufin: '2657821983', aicteId: '1-44811029123', name: 'Dr. S. Devimeenakshmi', designation: 'Assistant Professor (Chemistry)', qualification: 'B.Sc., M.Sc., Ph.D', photo: '/teaching_faculty/sh/DEVI MEENAKSHI.jpg' },
      { aufin: '2681241993', aicteId: '1-44811622826', name: 'Dr. R. Bhuvaneshwari', designation: 'Assistant Professor (Physics)', qualification: 'B.Sc., M.Sc., Ph.D.', photo: '/teaching_faculty/sh/Buvaneswarih.jpg' },
      { aufin: '2684071994', aicteId: '1-47439259952', name: 'Mr. K. Ram Kumar', designation: 'Assistant Professor (General Engg)', qualification: 'B.E - EEE, M.B.A', photo: '/teaching_faculty/sh/ramkumar.jpeg' }
    ]
  }
};

// Strict display order requested by client:
export const departmentOrder = [
  'civil',
  'structural',
  'cse',
  'mecse',
  'ece',
  'embedded',
  'eee',
  'mech',
  'manufacturing',
  'aids',
  'it',
  'sh'
];

const TeachingFaculty = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dynamicStaff, setDynamicStaff] = useState([]);

  // Fetch dynamic staff from database for updating photos dynamically
  useEffect(() => {
    const apiBase = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ? 'http://localhost:5000'
      : '';

    fetch(`${apiBase}/api/admin/staff`)
      .then(res => res.json())
      .then(data => {
        if (data && data.success && Array.isArray(data.data)) {
          setDynamicStaff(data.data);
        }
      })
      .catch(() => {});
  }, []);

  // Enrich static verified faculty data with DB photo updates and clean deduplication
  const enrichedDepartments = useMemo(() => {
    const result = {};

    departmentOrder.forEach(deptKey => {
      const dept = departmentFacultyData[deptKey];
      if (!dept) return;

      const updatedFaculty = dept.faculty.map(f => {
        const normStatic = normalizeCore(f.name);

        const dbMatch = dynamicStaff.find(st => {
          if (!st || !st.name) return false;
          const normDb = normalizeCore(st.name);
          if (!normStatic || !normDb) return false;
          // Exact match or strict AU-FIN match
          if (normStatic === normDb) return true;
          if (f.aufin && f.aufin !== '-' && st.aufin && st.aufin === f.aufin) return true;
          // Exact equality without initials
          const staticParts = normStatic.split(/\s+/).filter(p => p.length > 2);
          const dbParts = normDb.split(/\s+/).filter(p => p.length > 2);
          if (staticParts.length > 0 && dbParts.length > 0 && staticParts.join('') === dbParts.join('')) {
            return true;
          }
          return false;
        });

        const staticPhoto = f.photo || null;
        let photo = f.photo || null;

        if (f.photo) {
          const rawImg = dbMatch ? (dbMatch.photo_url || dbMatch.image_url) : null;
          if (rawImg && typeof rawImg === 'string' && rawImg.trim() !== '') {
            const trimmed = rawImg.trim();
            if (trimmed.startsWith('/uploads/')) {
              // Uploaded staff photo served by backend
              const apiBase = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
                ? 'http://localhost:5000'
                : '';
              photo = `${apiBase}${trimmed}`;
            } else if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
              photo = trimmed;
            }
          }
        }

        return { ...f, photo, staticPhoto };
      });

      // Strict Deduplication within department
      const seenNames = new Set();
      const seenAufins = new Set();
      const uniqueFaculty = [];

      updatedFaculty.forEach(member => {
        const norm = normalizeCore(member.name);
        if (norm && seenNames.has(norm)) return;
        if (norm) seenNames.add(norm);

        if (member.aufin && member.aufin !== '-') {
          if (seenAufins.has(member.aufin)) return;
          seenAufins.add(member.aufin);
        }

        uniqueFaculty.push(member);
      });

      result[deptKey] = {
        ...dept,
        faculty: uniqueFaculty.map((f, i) => ({ ...f, sNo: i + 1 }))
      };
    });

    return result;
  }, [dynamicStaff]);

  // Compute filtered faculty departments and total matches
  const { filteredDepartments, totalMatches } = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    const list = [];
    let count = 0;

    departmentOrder.forEach(deptKey => {
      const dept = enrichedDepartments[deptKey];
      if (!dept) return;

      const matchingFaculty = dept.faculty.filter(f => matchesFaculty(dept, f, trimmedQuery));
      if (matchingFaculty.length > 0) {
        count += matchingFaculty.length;
        list.push({
          ...dept,
          faculty: matchingFaculty
        });
      }
    });

    return { filteredDepartments: list, totalMatches: count };
  }, [enrichedDepartments, searchQuery]);

  return (
    <div className="tf-page-wrapper">
      <div className="tf-container">

        {/* HEADER SECTION */}
        <div className="tf-nav-section">
          <span className="tf-super-badge">Academic Faculty Verification</span>
          <h1 className="tf-main-title">TEACHING FACULTY DIRECTORY</h1>
          <p className="tf-subtitle">
            Anna University CAI & AICTE Approved Teaching Faculty Records
          </p>

          {/* SEARCH BAR */}
          <div className="tf-search-wrapper">
            <FaSearch className="tf-search-icon" />
            <input
              type="text"
              className="tf-search-input"
              placeholder="Search faculty by name, AU-FIN number, designation, qualification..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setSearchQuery('');
              }}
            />
            {searchQuery && (
              <button
                type="button"
                className="tf-search-clear"
                onClick={() => setSearchQuery('')}
                title="Clear Search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ONE FULL BOX - SINGLE CONTINUOUS OFFICIAL TABLE FOR ALL TEACHING FACULTY */}
        <div className="tf-single-box">
          <div className="tf-table-responsive">
            <table className="tf-official-table">
              <thead>
                <tr>
                  <th className="tf-th-sno">S. No</th>
                  <th className="tf-th-aufin">AU-FIN</th>
                  <th className="tf-th-aicte">AICTE ID</th>
                  <th className="tf-th-name">Name & Designation</th>
                  <th className="tf-th-photo">Photo (Passport Size)</th>
                </tr>
              </thead>
              <tbody>
                {searchQuery.trim() && totalMatches === 0 ? (
                  /* NO RESULTS EMPTY STATE */
                  <tr>
                    <td colSpan="5" className="tf-no-results-cell">
                      <div className="tf-no-results-container">
                        <FaSearch className="tf-no-results-icon" />
                        <h3 className="tf-no-results-title">No faculty records found</h3>
                        <p className="tf-no-results-desc">
                          We could not find any faculty member matching &quot;<strong>{searchQuery}</strong>&quot;. Try searching by name (e.g. Nagarathinam, Prathap), department (e.g. ECE, CSE, Civil), designation, AU-FIN number, or AICTE ID.
                        </p>
                        <button
                          type="button"
                          className="tf-reset-search-btn"
                          onClick={() => setSearchQuery('')}
                        >
                          View All Faculty
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredDepartments.map((dept) => {
                    return (
                      <React.Fragment key={dept.id}>
                        {/* DEPARTMENT BANNER ROW - SPANS ALL 5 COLUMNS */}
                        <tr className="tf-dept-banner-row">
                          <td colSpan="5" className="tf-dept-banner-cell">
                            <div className="tf-dept-banner-inner">
                              <span className="tf-dept-banner-title">
                                Department: {dept.name}
                              </span>
                              {dept.degree && (
                                <span className="tf-dept-banner-degree">({dept.degree})</span>
                              )}
                              <span className="tf-dept-banner-count">
                                {dept.faculty.length} {dept.faculty.length === 1 ? 'Faculty' : 'Faculties'}
                              </span>
                            </div>
                          </td>
                        </tr>

                        {/* FACULTY ROWS IN THIS DEPARTMENT */}
                        {dept.faculty.map((member, index) => {
                          const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=004d99&color=ffffff&size=150&font-size=0.36`;

                          return (
                            <tr
                              key={member.aufin !== '-' ? `${dept.id}-${member.aufin}-${index}` : `${dept.id}-${member.name}-${index}`}
                              className="tf-faculty-row"
                            >
                              {/* 1. S. No (Restarting at 1 per department) */}
                              <td className="tf-td-sno">
                                {index + 1}
                              </td>

                              {/* 2. AU-FIN */}
                              <td className="tf-td-aufin">
                                {member.aufin && member.aufin !== '-' ? (
                                  <span className="tf-aufin-code">{member.aufin}</span>
                                ) : (
                                  <span className="tf-aufin-dash">-</span>
                                )}
                              </td>

                              {/* 3. AICTE ID */}
                              <td className="tf-td-aicte">
                                {member.aicteId && member.aicteId !== '-' ? (
                                  <span className="tf-aicte-code">{member.aicteId}</span>
                                ) : (
                                  <span className="tf-aufin-dash">-</span>
                                )}
                              </td>

                              {/* 4. Name & Designation */}
                              <td className="tf-td-name">
                                <div className="tf-name-row">
                                  <span className="tf-faculty-name">{member.name}</span>
                                  {member.isHOD && (
                                    <span className="tf-hod-tag">HOD</span>
                                  )}
                                </div>
                                <div className="tf-faculty-desig">{member.designation}</div>
                                {member.qualification && (
                                  <div className="tf-faculty-qual">{member.qualification}</div>
                                )}
                              </td>

                              {/* 5. Photo (Passport Size) */}
                              <td className="tf-td-photo">
                                <div className="tf-passport-frame">
                                  {member.photo ? (
                                    <img
                                      src={member.photo}
                                      alt={member.name}
                                      className="tf-passport-img"
                                      loading="lazy"
                                      onError={(e) => {
                                        // If a dynamic backend photo failed, fall back to the guaranteed static local photo
                                        if (member.staticPhoto && !e.target.dataset.triedStatic) {
                                          e.target.dataset.triedStatic = 'true';
                                          if (e.target.src !== member.staticPhoto) {
                                            e.target.src = member.staticPhoto;
                                            return;
                                          }
                                        }
                                        e.target.onerror = null;
                                        e.target.src = fallbackAvatar;
                                      }}
                                    />
                                  ) : member.staticPhoto ? (
                                    <img
                                      src={member.staticPhoto}
                                      alt={member.name}
                                      className="tf-passport-img"
                                      loading="lazy"
                                    />
                                  ) : (
                                    <div className="tf-passport-placeholder">
                                      <FaUserTie className="tf-placeholder-icon" />
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeachingFaculty;