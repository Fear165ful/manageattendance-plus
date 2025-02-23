
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="animate-fade-in">
          {theme === "light" && <Sun className="h-5 w-5" />}
          {theme === "dark" && <Moon className="h-5 w-5" />}
          {theme !== "light" && theme !== "dark" && (
            <Palette className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("jellyfish")}>
          Jellyfish
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dracula")}>
          Dracula
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("github")}>
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("nord")}>
          Nord
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("sunset")}>
          Sunset
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("forest")}>
          Forest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
