import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/config/provider/theme-provider";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Padosol Blog - 개인 블로그",
  description: "Padosol 기술 블로그",
  verification: {
    google: '4_riABZ12h5sQRaEMSQxNZhHJa8WgsxPzX2aVUq8LaQ', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <section className="mt-16 flex flex-1 flex-col">
            <main className="w-full mx-auto max-w-[850px]">{children}</main>
          </section>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <GoogleAnalytics gaId="G-3DTT6CGCG8" />
        <GoogleTagManager gtmId="G-3DTT6CGCG8" />
      </body>
    </html>
  );
}