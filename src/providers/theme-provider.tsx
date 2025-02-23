
import { createContext, useContext, useEffect, useState } from "react";

type ThemeColor = 
  | "light" 
  | "dark" 
  | "jellyfish" 
  | "dracula" 
  | "github" 
  | "nord" 
  | "sunset"
  | "forest";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeColor;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
};

const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeColor>(
    () => (localStorage.getItem(storageKey) as ThemeColor) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const themeColors = [
      "light",
      "dark",
      "jellyfish",
      "dracula",
      "github",
      "nord",
      "sunset",
      "forest",
    ];

    // Remove all existing theme classes
    themeColors.forEach((color) => {
      root.classList.remove(color);
    });

    // Add the new theme class
    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: ThemeColor) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
