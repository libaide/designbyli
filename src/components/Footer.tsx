import Container from "./Container";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <p className="text-sm text-muted">
            © 2025 Exeli Baide. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>

            <Link
              href="/contact"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-accent hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
