import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bree_Serif } from "next/font/google";

const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designbyli.com"), // replace with real domain
  title: {
    default: "Design by Li",
    template: "%s | Design by Li",
  },
  description:
    "UX/UI Designer crafting clear, functional, and beautiful digital experiences for web and SaaS products.",
  openGraph: {
    title: "Design by Li",
    description:
      "Clear, functional, and beautiful digital experiences for web and apps.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`dark ${breeSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground" suppressHydrationWarning>
        <Navbar />
        <main className="pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}