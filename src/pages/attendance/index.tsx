
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DataTable } from "@/components/ui/data-table";
import { Check, X, Search, UserPlus } from "lucide-react";
import type { Student, AttendanceRecord } from "@/types";

// Temporary mock data
const mockStudents: Student[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@school.com",
    role: "student",
    studentId: "STU001",
    grade: "10A",
    attendance: [],
    assignments: [],
    ratings: [],
    dues: [],
    clubs: [],
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@school.com",
    role: "student",
    studentId: "STU002",
    grade: "10A",
    attendance: [],
    assignments: [],
    ratings: [],
    dues: [],
    clubs: [],
  },
];

const AttendancePage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState(mockStudents);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    studentId: "",
    grade: "",
  });

  const handleMarkAttendance = (studentId: string, status: "present" | "absent") => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === studentId) {
          const attendance: AttendanceRecord = {
            date: format(date, "yyyy-MM-dd"),
            status,
            remarks: "",
          };
          return {
            ...student,
            attendance: [...student.attendance, attendance],
          };
        }
        return student;
      })
    );
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudentData: Student = {
      id: String(students.length + 1),
      ...newStudent,
      role: "student",
      attendance: [],
      assignments: [],
      ratings: [],
      dues: [],
      clubs: [],
    };
    setStudents((prev) => [...prev, newStudentData]);
    setShowAddStudent(false);
    setNewStudent({ name: "", email: "", studentId: "", grade: "" });
  };

  const columns = [
    { header: "ID", accessorKey: "studentId" as keyof Student },
    { header: "Name", accessorKey: "name" as keyof Student },
    { header: "Grade", accessorKey: "grade" as keyof Student },
    {
      header: "Attendance",
      accessorKey: "id" as keyof Student,
      cell: (student: Student) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="bg-green-500/10 hover:bg-green-500/20"
            onClick={() => handleMarkAttendance(student.id, "present")}
          >
            <Check className="h-4 w-4 text-green-500" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-red-500/10 hover:bg-red-500/20"
            onClick={() => handleMarkAttendance(student.id, "absent")}
          >
            <X className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      ),
    },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Attendance Management</h1>
        <Button onClick={() => setShowAddStudent(true)}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <div className="w-full md:w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            className="rounded-md border"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex gap-2 items-center">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <DataTable data={filteredStudents} columns={columns} />
        </div>
      </div>

      {showAddStudent && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-lg">
            <div className="border bg-card text-card-foreground p-6 rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Add New Student</h2>
              <form onSubmit={handleAddStudent} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newStudent.name}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newStudent.email}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    value={newStudent.studentId}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, studentId: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grade">Grade</Label>
                  <Input
                    id="grade"
                    value={newStudent.grade}
                    onChange={(e) =>
                      setNewStudent({ ...newStudent, grade: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddStudent(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Add Student</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendancePage;
