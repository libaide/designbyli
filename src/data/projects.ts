export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
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
    tags: ["Product Design", "UX", "Mobile"],
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
    title: "Skin Studio",
    category: "UX / UI",
    description:
      "Marketing website and custom HPP payment integration for a skincare clinic.",
    tags: ["Payments", "Web Design","HPP",],
    cover: "/covers/skin-studio.png",
  },
  {
    slug: "realtor",
    title: "Realtor",
    category: "Front-End Development",
    description:
      "A responsive real estate website focused on performance, clarity, and clean UI.",
    tags: ["Front-End", "React", "UI"],
    cover: "/covers/realtor.png",
  },
];
