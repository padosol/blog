"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/layout/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Padosol Blog</span>
          </Link>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
} 