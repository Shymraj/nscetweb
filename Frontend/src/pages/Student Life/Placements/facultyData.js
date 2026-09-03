import geethaImg from './images/Geetha.jpeg';
import ramkumarImg from './images/Ramkumar.jpeg';
import megaImg from './images/Mega.jpeg';
import subathamaniImg from './images/Subathamani.jpeg';

export const placementOfficerData = {
  id: "geetha",
  slug: "geetha",
  name: "Mrs. C. Geetha ",
  desig: "Training and Placement Officer",
  image: geethaImg,
  spec: "Corporate Relations, Career Guidance",
  objectPosition: "center 20%",
};

export const placementCoordinatorsData = [
  {
    id: "ramkumar",
    slug: "ramkumar",
    name: "Mr. K. Ramkumar",
    qual: "B.E., MBA.",
    desig: "Training and Placement Coordinator",
    image: ramkumarImg,
    spec: "Placement Training",
  },
  {
    id: "megha",
    slug: "megha",
    name: "Megha S",
    qual: "B.Sc",
    desig: "Training and Placement Coordinator",
    image: megaImg,
    spec: "Agriculture and Placement Training",
    email: "meghaagri1507@gmail.com",
    linkedin: "http://www.linkedin.com/in/megha-sagayaraj-a8b051373",
    about: "Placement Training and Placement Coordinator with experience in student career development, placement training, and industry-oriented activities. She supports students in improving their employability skills and coordinates placement-related initiatives to help students prepare for career opportunities.",
    projects: ["3"],
    experience: ["3.5 Years and 9 Months"],
  },
  {
    id: "subathamani",
    slug: "subathamani",
    name: "Mrs. T. Subathamani",
    qual: "M.A., B.Ed., M.Phil.",
    desig: "Training and Placement Coordinator",
    image: subathamaniImg,
    spec: "Communication",
  }
];

export const placementsFacultyData = [placementOfficerData, ...placementCoordinatorsData];
