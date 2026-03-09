"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "@/components/Button";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Case Studies" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 isolate border-b border-white/10 bg-black/45 shadow-md backdrop-blur-xl will-change-transform transform-gpu">
        <Container>
          <div className="mx-auto flex h-24 items-center justify-between gap-4">
            {/* Left side */}
            <div className="flex items-center gap-4">
              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/10 md:hidden"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-8 md:flex">
                {nav.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="relative flex flex-col items-center text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
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
            </div>

            {/* CTA always visible */}
            <Button variant="cta" asChild>
              <Link href="/contact">Let&apos;s connect</Link>
            </Button>
          </div>
        </Container>
      </header>

      {/* Mobile menu */}
      <div
        className={[
          "fixed inset-x-0 top-24 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <Container>
          <nav className="flex flex-col py-4">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={[
                    "rounded-2xl px-4 py-3 text-base transition-colors",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/80 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </Container>
      </div>
    </>
  );
}