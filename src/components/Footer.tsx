import Container from "./Container";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <p className="text-sm text-gray-300">
            © 2025 Exeli Baide. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 transition hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 transition hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
