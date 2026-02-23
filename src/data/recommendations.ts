export type Recommendation = {
  name: string;
  title: string;
  text: string;
  source?: "LinkedIn";
  href?: string;
};

export const recommendations: Recommendation[] = [
  {
    name: "Liz Love",
    title: "Product Leader",
    text:
      "You can count on Exeli to create well thought-out designs with the user in mind, to spec, and on time. Even under pressure and tight deadlines, Exeli helped our team to create designs for products and features that solved user problems in an elegant way. Collaborating with him was a pleasure, practicing strong opinions, loosely held; he is opinionated about how to provide the best experience but is graceful to suggestions, feedback, and new ways of doing things. Working with Exeli was an absolute pleasure, and he would be a great addition to any Product Design team.",
    source: "LinkedIn",
  },
  {
    name: "Rob Tony",
    title: "Brand Identity Design Specialist",
    text:
      "I’ve known Exeli since 2019. We first crossed paths when I worked at BentoBox, while he was transitioning into UX/UI Design | Product Design | Interaction Design at PartnerHero. Later, when I joined PartnerHero myself, we worked together multiple times, giving me a closer look at his approach and skill.What stood out was his ability to translate complex ideas and briefs into intuitive, user-centered interfaces that earned immediate recognition from leadership. His design thinking | attention to detail | problem-solving skills consistently delivered work that elevated the user experience and solved real usability challenges.Beyond his craft, Exeli is a collaborative teammate—humble, approachable, and always willing to share knowledge. He brings a rare mix of discipline | creativity | execution, making him one of the best colleagues I’ve had the chance to work with.",
    source: "LinkedIn",
  },
  {
    name: "Samuel Sauceda",
    title: "Domus - Founder & CEO",
    text:
      "Working with Exeli on DOMUS has been a very positive experience for us. From the beginning, he helped us turn our idea into a well-structured digital product. He gave us clarity around the MVP scope, defined the core user flows, and organized a roadmap that made it easier to see how the project could grow. Beyond UX/UI design, Exeli always approached the product strategically. He didn’t just focus on how the app looked, but on how it should work, how it could realistically be developed, and how it could scale in the Honduran market. That mix of design, product vision, and technical coordination helped us make decisions with much more confidence.",
    source: "LinkedIn",
  },
  {
    name: "Daniel Le'Sage",
    title: "Dever - Founder & CEO",
    text:
      "I’ve known and worked with Li for years! we actually started in QA together back in the Quora days. Even then, he thought beyond the task in front of him. He cared about how things worked, how users experienced them, and how everything connected. Later, when we worked together on Operator, I got to see him fully in his element as a designer. He doesn’t just make things look good, he thinks through flows, edge cases, and real-world constraints. As a developer, that makes a huge difference. His designs are clear, intentional, and actually buildable. He’s calm, thoughtful, and really solid to collaborate with. If you’re working with him, you’re getting someone who genuinely cares about doing things right.",
    source: "LinkedIn",
  },
    {
    name: "Katty Baide",
    title: "Skin Studio - Founder & CEO",
    text:
      "When I decided to build a website for Skin Studio, I wanted something that would truly elevate my business. In Honduras, it’s still not very common for small businesses to have a professional website where clients can easily pay for services online. I wanted to be ahead of that. Exeli understood that vision immediately. He didn’t just design a website, he helped me create a stronger digital presence for my brand. Everything feels intentional, clean, and aligned with the level of quality I offer in my business. Having a professional site with integrated online payments has changed the way clients see my studios. It builds trust, makes the process smoother, and sets Skin Studio apart. I’m really proud of what we created, and I’m grateful to have worked with someone who truly cares about helping businesses grow.",
    source: "LinkedIn",
  },
];
