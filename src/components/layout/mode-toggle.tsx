"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      onClick={toggleTheme}
      aria-label="테마 변경"
      className="rounded-full cursor-pointer w-full h-full"
    >
      {
        theme === 'light' 
        ? (<Sun size={24} />) 
        : (<Moon size={24} />)
      }
    </div>
  );
} 