import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ToastViewport } from "@/components/ui/toast";

const fontDisplay = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});
const fontBody = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Unity Threads | Boutique Autism Advocacy Apparel",
    template: "%s | Unity Threads"
  },
  description:
    "Unity Threads is a boutique clothing brand centering autism acceptance, sensory-friendly comfort, and community care.",
  metadataBase: new URL("https://unity-threads.example.com"),
  openGraph: {
    title: "Unity Threads | Boutique Autism Advocacy Apparel",
    description:
      "Boutique apparel that celebrates neurodiversity and wraps every body in warmth, dignity, and care.",
    url: "https://unity-threads.example.com",
    siteName: "Unity Threads",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fontDisplay.variable} ${fontBody.variable}`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <ToastViewport />
        </div>
      </body>
    </html>
  );
}

