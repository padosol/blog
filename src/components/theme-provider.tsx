"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 필요한 props만 정의하고 나머지는 NextThemesProvider에 전달
interface ThemeProviderProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 