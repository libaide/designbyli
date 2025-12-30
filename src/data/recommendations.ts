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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec eros purus. Sed nec consequat nunc. In est lectus, dictum id tempor id, varius sed quam. Nam pharetra interdum placerat. Nulla facilisis tellus dui. Cras euismod ante sem, et mollis tortor dictum ac. Phasellus nec nibh sem. Fusce dignissim nibh eget semper vehicula. Vestibulum gravida lorem ut egestas placerat. Vestibulum lacinia placerat metus id maximus. Aliquam sed felis sed ante tristique efficitur. Donec vehicula pellentesque facilisis. Duis consectetur, enim ut eleifend dignissim, metus libero sodales risus, in iaculis quam risus ac elit. Proin eget mollis metus.",
    source: "LinkedIn",
  },
  {
    name: "Daniel Le'Sage",
    title: "Dever - Founder & CEO",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec eros purus. Sed nec consequat nunc. In est lectus, dictum id tempor id, varius sed quam. Nam pharetra interdum placerat. Nulla facilisis tellus dui. Cras euismod ante sem, et mollis tortor dictum ac. Phasellus nec nibh sem. Fusce dignissim nibh eget semper vehicula. Vestibulum gravida lorem ut egestas placerat. Vestibulum lacinia placerat metus id maximus. Aliquam sed felis sed ante tristique efficitur. Donec vehicula pellentesque facilisis. Duis consectetur, enim ut eleifend dignissim, metus libero sodales risus, in iaculis quam risus ac elit. Proin eget mollis metus.",
    source: "LinkedIn",
  },
];
