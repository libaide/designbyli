"use client";

import { useMemo, useState } from "react";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import SplitTextFX from "@/components/SplitTextFX";
import RiseInOnView from "@/components/RiseInOnView";

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
  const [titleDone, setTitleDone] = useState(false);

  const skillsMarqueeText = useMemo(() => {
    const items = skills
      .filter((group) => group.title !== "Tools")
      .flatMap((group) => group.items);

    return items.join(" ✦ ") + " ✦";
  }, []);

  return (
    <>
      {/* Intro */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <SplitTextFX
            text="I'm Li"
            tag="h1"
            className="text-7xl md:text-[10rem] tracking-tight text-white"
            delay={35}
            duration={1.1}
            from={{ opacity: 0, y: 28 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-120px"
            textAlign="center"
            onComplete={() => setTitleDone(true)}
          />

          {/* Keep content mounted to preserve layout height */}
          <RiseInOnView staggerChildren={true} staggerMs={90} className="mt-10">
            <div
              className={[
                "mx-auto mt-10 grid grid-cols-1 gap-12 md:grid-cols-2",
                // Locked until title is done (no layout shift)
                titleDone
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-3 pointer-events-none",
                "transition-[opacity,transform] duration-300 ease-out",
              ].join(" ")}
            >
              {/* Column 1 */}
              <div className="space-y-4 font-light text-base leading-relaxed text-[#c9c9d3]">
                <p className="text-xl text-white font-medium">
                  I believe that great design isn't just about aesthetics, it's about crafting intuitive
                  experiences that empower users and solve real-world problems.
                </p>

                <p>
                  My journey into UX/UI design began serendipitously as a lead web designer. Introduced to an
                  in-house QA tool, I quickly became fascinated by the scientific and psychological aspects
                  of UX/UI. This close collaboration with development teams and the continuous challenge of
                  transforming complex problems into clean, intuitive solutions solidified my passion.
                </p>

                <p>
                  I'm a truly well-rounded designer with diverse experience far beyond typical UX/UI. I've
                  delivered branding, logo designs, complete websites, social media ads, print posters, video
                  banners, and even marketing animations. My capabilities also extend to audio design and
                  production, backed by formal training at a music production institute. This breadth of
                  skills enables a holistic and integrated design approach to every project.
                </p>

                <p>
                  With over 8 years in design, I specialize in clear, functional, and thoughtfully crafted
                  digital products. My career has focused on complex internal tools and SaaS platforms, where
                  usability, consistency, and attention to detail are paramount. I'm also excited to leverage
                  AI as a powerful tool to enhance creativity and improve design outcomes, always striving to
                  create more and create better.
                </p>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 text-base leading-relaxed text-[#c9c9d3]">
                <p>
                  My approach is hands-on and system-driven, balancing visual design with user needs and
                  business goals. Colleagues often describe me as highly creative, efficient, and effective,
                  constantly asking 'How can I be more creative?' This stems from a deep curiosity across
                  science, art, history, music, philosophy, comedy, and psychology, allowing me to connect
                  disparate ideas and 'put stuff together' uniquely. I prioritize delivering a client's
                  vision with sound design principles, excelling at guiding them to both what they want and
                  what they truly need.
                </p>

                <p>
                  When I’m not designing, you’ll usually find me spending quality time with my wife and
                  daughter, maybe exploring the beautiful river lodges near El Cangrejal for a swim. I also
                  dedicate time to my passion for music, playing and recording progressive metal guitar or
                  producing electronic tracks. I’m always looking for opportunities to build meaningful
                  connections and collaborate on impactful work.
                </p>

                {/* Profile + meta */}
                <div className="mt-12 flex justify-end">
                  <div className="flex items-center gap-4">
                    {/* Text (left of image) */}
                    <div className="text-right">
                      <p className="text-lg font-medium text-gray-300">Exelí Baide</p>

                      <p className="mt-1 flex items-center justify-end gap-2 text-sm text-gray-300 font-light">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                          <path d="M12 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                        </svg>

                        <span>La Ceiba, Honduras</span>
                      </p>
                    </div>

                    {/* Avatar (right side) */}
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-sm">
                      <Image
                        src="/ProfilePic.png"
                        alt="Portrait of Exelí Baide"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RiseInOnView>
        </div>
      </section>

      {/* Contact */}
      <ContactSection id="about-contact" title="Let’s work together" />
    </>
  );
}
