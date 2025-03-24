"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="테마 변경"
      className="rounded-full w-9 h-9 hover:bg-muted cursor-pointer"
    >
      {
        theme === 'light' 
        ? (<Sun />) 
        : (<Moon />)
      }
    </Button>
  );
} 