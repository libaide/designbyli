"use client";

import { useMemo } from "react";
import CurvedLoop from "@/components/CurvedLoop";
import SectionHeader from "@/components/case-study/SectionHeader";
import ContactSection from "@/components/ContactSection";

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
    const parts: string[] = [];
    skills.forEach((group) => {
      parts.push(group.title);
      group.items.forEach((item) => parts.push(item));
    });
    return parts.join(" ✦ ") + " ✦";
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <SectionHeader title="Hi! I'm Li" dark />

          {/* Small banner marquee */}
          <div className="mt-8 overflow-hidden">
  <CurvedLoop
    marqueeText={skillsMarqueeText}
    variant="straight"
    speed={4}
    interactive={false}
    containerClassName="banner"
    svgClassName="banner"
    className="fill-white/80"
  />
</div>

          {/* Intro text */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="space-y-4 text-base leading-relaxed text-white/70">
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
            </div>
          </div>
        </div>
      </section>


      {/* Contact */}
      <ContactSection id="about-contact" title="Let’s work together" />
    </>
  );
}
