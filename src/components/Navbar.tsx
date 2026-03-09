"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Button from "@/components/Button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Case Studies" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 border-b border-white/10 top-0 z-50 bg-black/45 backdrop-blur-xl isolate will-change-transform transform-gpu shadow-md">
      <Container>
        <div className="flex h-24 items-center justify-between mx-auto">
          
          {/* Left Nav */}
          <nav className="flex items-center gap-8">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex flex-col items-center text-sm text-white/80 hover:text-white transition-colors"
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
          </nav>

          {/* CTA Right */}
          <Button variant="cta" asChild>
  <Link href="/contact">Let's connect</Link>
</Button>

        </div>
      </Container>
    </header>
  );
}