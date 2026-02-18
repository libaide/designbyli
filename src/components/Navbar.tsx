"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "@/components/logo";
// import Button from "@/components/Button"; // Button is no longer used in the Navbar

const nav = [
  { href: "/about", label: "Lore" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" }, // Added Contact here as a regular nav item
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/45 backdrop-blur-xl border-b border-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo = Home */}
          <Link href="/" className="flex items-center gap-2 text-white">
            <Logo size={54} />
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  // These classes are shared with other nav items
                  className="relative flex flex-col items-center text-m text-white/80 hover:text-white transition-colors"
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={[
                      "mt-1 h-[2px] w-full rounded-full transition-opacity duration-200",
                      isActive ? "bg-white opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                </Link>
              );
            })}

            {/* CTA Contact - This section has been removed */}
          </nav>
        </div>
      </Container>
    </header>
  );
}