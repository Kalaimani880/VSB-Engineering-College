
export interface PlacementStat {
  year: string;
  offers: number;
  medianSalary: number;
  highestPackage: number;
}

export interface DepartmentIntake {
  name: string;
  intake: number;
  category: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export enum Page {
  HOME = 'home',
  ADMISSIONS = 'admissions',
  PLACEMENTS = 'placements',
  CAMPUS_LIFE = 'campus-life',
  ACADEMICS = 'academics'
}
