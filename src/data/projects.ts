export type Project = {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  cover: string;
};

export const projects: Project[] = [
  {
    slug: "operator",
    title: "Operator",
    category: "UX / UI",
    description:
    "Supercharge customer support teams by providing powerful tools for quality assurance, AI-driven agent assistance, and advanced analytics.",
    tags: ["UX", "UI", "Internal Tools"],
    cover: "/covers/operator.png",
  },
      {
    slug: "domus",
    title: "Domus",
    category: "Product Design",
    description:
      "A mobile application that connects clients in Honduras with verified home service professionals such as plumbers, electricians, gardeners, and more. ",
    tags: ["Product Design", "UX", "UI"],
    cover: "/covers/domus.png",
  },
  {
    slug: "humanize",
    title: "Humanize",
    category: "Web Design & Payments",
    description:
      "A Shopify application that enables store owners to offer 24/7 email support backed by a team of expert customer service associates at rates that stores of any size can afford. ",
    tags: ["UX", "UI", "Shopify App"],
    cover: "/covers/humanize1.png",
  },
  {
    slug: "skin-studio",
    title: "Skin Studio: Website and HPP Integration",
    category: "Web Design & HPP Integration",
    description:
      "Marketing website and custom HPP payment integration for a skincare clinic.",
    tags: ["Web Design", "Front-End","HPP Integration",],
    cover: "/covers/skin-studio.png",
  },
  {
    slug: "properly",
    title: "Properly",
    category: "SaaS Product Design",
    description:
      "A property management application designed to streamline job management, inspections, and data integration.",
    tags: ["UX", "UI", "SaaS Product"],
    cover: "/covers/properly.png",
  },
  {
    slug: "hema-sync",
    title: "HemaSync",
    category: "SaaS Product Design",
    description:
      "A laboratory information management system for a laboratory in Honduras.",
    tags: ["UX", "UI", "SaaS Product"],
    cover: "/covers/HemaSync.png",
  },
  {
    slug: "hoffman-lens",
    title: "The Hoffman Lens",
    category: "Front-End Development",
    description:
      "An AI-powered Chrome extension inspired by the cult classic film 'They Live'.",
    tags: ["Creative Coding", "Chrome Extension", "Generative AI"],
    cover: "/covers/hoffman-lens.png",
  },
];
