
import { PlacementStat, DepartmentIntake } from './types';

export const PLACEMENT_HISTORY: PlacementStat[] = [
  { year: '2019', offers: 1144, medianSalary: 3.5, highestPackage: 8.0 },
  { year: '2022', offers: 1304, medianSalary: 4.76, highestPackage: 15.0 },
  { year: '2023', offers: 1561, medianSalary: 4.85, highestPackage: 20.0 },
  { year: '2024', offers: 1401, medianSalary: 7.00, highestPackage: 20.0 },
  { year: '2025', offers: 853, medianSalary: 7.43, highestPackage: 47.0 },
];

export const DEPARTMENTS: DepartmentIntake[] = [
  { name: 'CSE', intake: 180, category: 'Engineering' },
  { name: 'ECE', intake: 180, category: 'Engineering' },
  { name: 'IT', intake: 120, category: 'Technology' },
  { name: 'AI & Data Science', intake: 120, category: 'Technology' },
  { name: 'Biomedical', intake: 60, category: 'Engineering' },
  { name: 'EEE', intake: 60, category: 'Engineering' },
  { name: 'Mechanical', intake: 60, category: 'Engineering' },
  { name: 'CSBS', intake: 60, category: 'Technology' },
  { name: 'Civil', intake: 60, category: 'Engineering' },
];

export const CAMPUS_UPDATES = `
LATEST CAMPUS UPDATES (Feb 2026):
- [EVENT] Annual Symposium 'VSB-TECH 2026' scheduled for Feb 25-26. Registration open.
- [NEWS] Amazon Web Services (AWS) recruitment drive for 2026 batch starts Feb 12.
- [ANNOUNCEMENT] Internal Assessment-II (IAT-2) for all UG years starts Feb 18.
- [EVENT] Inter-College Cricket Tournament Finals: VSB vs GCT - Today at 4 PM (College Ground).
- [NOTICE] New "AI & ML Center of Excellence" inaugurated in the IT block.
`;

export const DAILY_SCHEDULES = `
DAILY CAMPUS ROUTINE:
- 08:30 AM: College Commencement (Strict entry).
- 08:30 AM - 12:45 PM: Academic Sessions (4 periods).
- 12:45 PM - 01:45 PM: Lunch Break.
- 01:45 PM - 04:30 PM: Practical Labs / Skill Training.
- 04:30 PM - 05:30 PM: Remedial Classes / Sports.
- 06:30 PM - 08:30 PM: Mandatory Study Hour (Hostellers).
- 09:30 PM - 10:30 PM: Phone Usage Hour (Hostellers).
`;

export const VSB_KNOWLEDGE_BASE = `
VSB Engineering College (Karur Campus) is a Private Autonomous Institution affiliated with Anna University.
- NAAC: B++ Grade (Currently undergoing renewal).
- NBA Accredited: CSE, ECE, EEE, Mechanical (Valid until June 2028), Biotech, Biomedical, Chemical (Valid until June 2027), Civil, IT (Valid until June 2025).
- Rankings: NIRF 2025 (201-300 Band), Ranked 42nd by Vidyavision 2024.
- Placement: 1,401 offers in 2024. 853+ offers in 2025. Highest package: 47 LPA (Amazon).
- CDC Model: 3 Streams (Service, Product, Super Pack). Daily coding assessments on HackerRank/SkillRack.
- Dress Code (Boys): Formal shirts tucked in, formal pants, black leather shoes, black socks, clean-shaven. No beards.
- Dress Code (Girls): Churidars with V-shaped pinned dupattas, hair plaited.
- Hostel: Strictly disciplined, phone usage limited (9:30-10:30 PM), mandatory study hours (6:30-8:30 PM).
- Fees: UG ~55,000 (Govt Quota), ~87,500 (Management Quota). Hostel ~45,000 - 75,000.
- Green Campus: 3,000+ trees, 32.28 acres, Best Green Campus Award.
- Founder: Mr. V.S. Balsamy. Principal: Dr. C. Vennila.

${CAMPUS_UPDATES}
${DAILY_SCHEDULES}
`;
