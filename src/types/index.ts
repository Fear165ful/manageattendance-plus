
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "teacher" | "student";
}

export interface Student extends User {
  role: "student";
  studentId: string;
  grade: string;
  attendance: AttendanceRecord[];
  assignments: Assignment[];
  ratings: Rating[];
  dues: Due[];
  clubs: Club[];
}

export interface AttendanceRecord {
  date: string;
  status: "present" | "absent";
  remarks: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  grade?: string;
}

export interface Rating {
  id: string;
  subject: string;
  score: number;
  date: string;
  feedback: string;
}

export interface Due {
  id: string;
  title: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending";
}

export interface Club {
  id: string;
  name: string;
  role: "member" | "leader";
  joinedDate: string;
}
