import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/config/provider/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Padosol Blog - 개인 블로그",
  description: "Padosol 기술 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <section className="mx-auto mt-12 w-full max-w-[850px] px-4">
            <main className="flex flex-1 flex-col">{children}</main>
          </section>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <GoogleAnalytics gaId="G-3DTT6CGCG8" />
      </body>
    </html>
  );
}