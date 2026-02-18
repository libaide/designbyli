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
    <SectionHeader title="I'm Li" dark titleClassName="text-7xl md:text-[10rem]" />

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
    {/*
      Here's the change:
      - Removed max-w-2xl from this div to allow columns to spread.
      - Added grid grid-cols-1 md:grid-cols-2 for responsive columns.
      - Added gap-12 for spacing between columns.
      - Wrapped paragraphs in a div to treat them as a single flow within the grid item.
    */}
    <div className="mx-auto mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
      {/* Column 1 - First part of the text */}
      <div className="space-y-4 text-base leading-relaxed text-[#c9c9d3]">
        <p>
          I believe that great design isn't just about aesthetics, it's about crafting intuitive experiences that empower users and solve real-world problems.
        </p>

        <p>
          My journey into UX/UI design began almost by chance, sparking a deep fascination for the field. While working as a lead web designer, I was introduced to Aprikot, an in-house QA tool for customer support. Diving into this project, I quickly discovered the scientific and psychological aspects of UX/UI, like understanding user behavior, content scanning patterns, and what truly drives people. This close collaboration with development teams and the continuous challenge of turning complex problems into clean, intuitive solutions solidified my passion.
        </p>

        <p>
          With over six years of experience, I've specialized in designing digital products that are clear, functional, and thoughtfully crafted. I've spent most of my career working on complex internal tools and SaaS platforms, where usability, consistency, and attention to detail truly matter. My passion lies in taking messy challenges and transforming them into elegant solutions that simplify complex workflows, empower users, and drive efficiency and business growth. I'm particularly excited about leveraging AI as a powerful tool to enhance creativity and improve design outcomes, always seeking to create more and create better.
        </p>
      </div>

      {/* Column 2 - Second part of the text and profile picture */}
      <div className="space-y-4 text-base leading-relaxed text-[#c9c9d3]">
        <p>
          My approach is very hands-on and system-driven, balancing visual design with real user needs and business goals. Colleagues often describe me as highly creative, efficient, and effective, constantly asking 'How can I be more creative?' I believe this stems from a deep curiosity about the world, whether it's science, art, history, music, philosophy, comedy, or psychology, I simply love learning and understanding our universe better. This broad perspective allows me to connect disparate ideas and 'put stuff together' in unique ways to create something truly great. I also thrive on feedback, prioritizing delivering a client's vision with good design principles over being 'right,' and excel at guiding clients to both what they want and what they truly need from my design expertise.
        </p>

        <p>Alongside product design, I also work on website design and branding, helping ideas take shape visually and structurally. I like building things that can grow over time.</p>

        <p>When I'm not designing, you'll likely find me immersed in music, playing and recording progressive metal guitar, or producing electronic tracks. I'm always looking for opportunities to build meaningful connections and collaborate on impactful work.</p>

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
