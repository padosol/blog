"use client";

import { ModeToggle } from "@/components/layout/mode-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-background/60 h-16 flex items-center">
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-6 md:gap-10 pl-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Padosol Blog</span>
          </Link>
        </div>
        <div className="flex items-center pr-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
} 