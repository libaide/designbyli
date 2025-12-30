import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Your Name — UI/UX Designer",
    template: "%s — Your Name",
  },
  description: "Personal website and portfolio.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Your Name — UI/UX Designer",
    description: "Personal website and portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-background text-foreground">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
