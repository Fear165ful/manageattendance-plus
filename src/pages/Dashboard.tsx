
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCheck,
  BookOpen,
  Star,
  DollarSign,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: "Overview", path: "" },
  { icon: UserCheck, label: "Attendance", path: "attendance" },
  { icon: BookOpen, label: "Assignments", path: "assignments" },
  { icon: Star, label: "Ratings", path: "ratings" },
  { icon: DollarSign, label: "Dues", path: "dues" },
  { icon: Users, label: "Clubs", path: "clubs" },
  { icon: MessageSquare, label: "Requests", path: "requests" },
  { icon: Settings, label: "Settings", path: "settings" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">School Manager</h2>
            <ThemeToggle />
          </div>
          <nav className="space-y-2 flex-1">
            {SIDEBAR_LINKS.map(({ icon: Icon, label, path }) => (
              <Button
                key={path}
                variant={activeLink === path ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveLink(path);
                  navigate(path);
                }}
              >
                <Icon className="mr-2 h-4 w-4" />
                {label}
              </Button>
            ))}
          </nav>
          <Button
            variant="outline"
            className="mt-auto"
            onClick={() => navigate("/login")}
          >
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Routes>
          <Route path="/" element={<div>Overview Dashboard</div>} />
          <Route path="/attendance" element={<div>Attendance Page</div>} />
          <Route path="/assignments" element={<div>Assignments Page</div>} />
          <Route path="/ratings" element={<div>Ratings Page</div>} />
          <Route path="/dues" element={<div>Dues Page</div>} />
          <Route path="/clubs" element={<div>Clubs Page</div>} />
          <Route path="/requests" element={<div>Requests Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
