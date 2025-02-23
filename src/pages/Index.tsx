
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">School Management</h1>
        <ThemeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">
            Welcome to School Management System
          </h2>
          <p className="text-xl text-muted-foreground">
            A comprehensive solution for managing students, attendance, assignments,
            and more.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
