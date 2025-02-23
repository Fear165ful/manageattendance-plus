
export type UserRole = "admin" | "management" | "teacher" | "student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
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

export interface Teacher extends User {
  role: "teacher";
  teacherId: string;
  subjects: string[];
  classes: string[];
}

export interface Admin extends User {
  role: "admin";
}

export interface Management extends User {
  role: "management";
  department: string;
}

export interface AttendanceRecord {
  date: string;
  status: "present" | "absent" | "late";
  remarks?: string;
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  grade?: string;
}

export interface Rating {
  subject: string;
  score: number;
  term: string;
  teacherId: string;
}

export interface Due {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: "pending" | "paid";
}

export interface Club {
  id: string;
  name: string;
  description: string;
  members: string[];
  supervisor: string;
}

export interface Request {
  id: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected";
  userId: string;
  userRole: UserRole;
  createdAt: string;
}
