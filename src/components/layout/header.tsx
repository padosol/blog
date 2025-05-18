"use client";

import { ModeToggle } from "@/components/layout/mode-toggle";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 32) {
        setIsHeaderVisible(false); // Scroll down
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true); // Scroll up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-xs supports-[backdrop-filter]:bg-background/60 h-16 flex items-center transition-transform duration-300 ease-in-out ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
      aria-label="Site Header"
      tabIndex={0}
    >
      <div className="container flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-6 md:gap-10 pl-4">
          <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage" tabIndex={0}>
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