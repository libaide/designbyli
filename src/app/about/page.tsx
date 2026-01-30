"use client";

import { useMemo } from "react";
import CurvedLoop from "@/components/CurvedLoop";
import SectionHeader from "@/components/case-study/SectionHeader";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

const skills = [
  {
    title: "UX & Research",
    items: [
      "Design Thinking",
      "User Interviews & Usability Testing",
      "Journey Mapping",
      "Information Architecture",
      "UX Strategy",
    ],
  },
  {
    title: "UI & Visual Design",
    items: [
      "UI Design",
      "Design Systems",
      "Responsive Web Design",
      "Branding",
      "Prototyping",
    ],
  },
  {
    title: "Technical & Collaboration",
    items: [
      "Agile / Scrum",
      "Design Documentation",
      "Cross-functional Collaboration",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Tools",
    items: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Next.js", "Tailwind"],
  },
];

export default function AboutPage() {
  const skillsMarqueeText = useMemo(() => {
    const items = skills
      .filter((group) => group.title !== "Tools") // exclude Tools
      .flatMap((group) => group.items); // ignore titles

    return items.join(" ✦ ") + " ✦";
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <SectionHeader title="Hi! I'm Li" dark titleClassName="text-7xl md:text-[10rem]" />

          {/* Small banner marquee */}
          <div className="mt-8 overflow-hidden">
            <CurvedLoop
              marqueeText={skillsMarqueeText}
              variant="straight"
              speed={4}
              interactive={false}
              containerClassName="banner"
              svgClassName="banner"
              className="fill-white text-5xl md:text-7xl"
            />
          </div>

          {/* Intro text */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="space-y-4 text-base leading-relaxed text-[#c9c9d3]">
              <p>
                I’m a UX/UI designer with over six years of experience designing digital products
                that are clear, functional, and thoughtfully crafted. I’ve spent most of my career
                working on complex internal tools and SaaS platforms, where usability, consistency,
                and attention to detail really matter.
              </p>

              <p>
                I enjoy taking messy problems and turning them into clean, intuitive experiences.
                My approach is very hands-on and system-driven, balancing visual design with real
                user needs and business goals.
              </p>

              <p>
                Alongside product design, I also work on website design and branding, helping ideas
                take shape visually and structurally. I like building things that can grow over time.
              </p>

              <p>
                Outside of design, I’m deeply interested in creativity and technology, always
                learning and experimenting with new tools and ideas.
              </p>
              {/* Profile picture */}
<div className="mt-12 flex justify-center">
  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-sm">
    <Image
      src="/ProfilePic.png"
      alt="Portrait of Li"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection id="about-contact" title="Let’s work together" />
    </>
  );
}
