'use client';

import * as React from 'react';
const NextThemesProvider = dynamic(
  () => import('next-themes').then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
)

import { type ThemeProviderProps } from 'next-themes/dist/types'
import dynamic from 'next/dynamic';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// import { ThemeProvider as NextThemesProvider } from 'next-themes';
// export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
//   return (
//     <NextThemesProvider attribute='class' defaultTheme='system' {...props}>
//       {children}
//     </NextThemesProvider>
//   );
// }