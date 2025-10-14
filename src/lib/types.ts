export const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

type Project = {
  name: string;
  image: string;
  link?: string;
  github?: string;
  description: string;
  tech: string[];
  featured?: boolean;
  year?: string;
};

export const projects: Project[] = [
  // {
  //   name: "MALEsoftware Dashboard",
  //   image: "/images/malesoftware.png",
  //   link: "https://malesoftware.co.mz",
  //   github: "https://github.com/username/malesoftware",
  //   description:
  //     "Dashboard moderno e responsivo para gestão financeira e relatórios em tempo real.",
  //   tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  // },
  // {
  //   name: "Website MALEcaixa",
  //   image: "/projects/malecaixa.png",
  //   link: "https://malecaixa.vercel.app/",
  // },
  // {
  //   name: "Website MALEseguros",
  //   image: "/projects/maleseguros.png",
  //   link: "https://maleseguros.vercel.app/",
  // },
  // {
  //   name: "Website MALEholding (beta)",
  //   image: "/projects/maleholding.png",
  //   link: "https://maleholding.vercel.app/",
  // },
  // {
  //   name: "Website MALEsoftware (beta)",
  //   image: "/projects/malesoftware.png",
  //   link: "https://malesoftware.vercel.app/",
  // },
  // {
  //   name: "Amigo Oculto Online",
  //   image: "/projects/secret_friend.png",
  //   link: "https://secretfriends.vercel.app/",
  // },
  {
    name: "MALEsoftware Dashboard",
    image: "/projects/malesoftware.png",
    link: "https://maleseguros.co.mz",
    github: "https://github.com/username/malesoftware",
    description:
      "Dashboard moderno e responsivo para gestão financeira e relatórios em tempo real.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "MALEcaixa System",
    image: "/projects/maleseguros.png",
    link: "https://male-caixa.com",
    github: "https://github.com/username/malecaixa",
    description: "Plataforma de crédito e gestão de reembolsos automatizados.",
    tech: [".NET", "C#", "SQL Server"],
  },
  {
    name: "MALEcaixa Systm",
    image: "/projects/maleseguros.png",
    link: "https://male-caixa.com",
    github: "https://github.com/username/malecaixa",
    description: "Plataforma de crédito e gestão de reembolsos automatizados.",
    tech: [".NET", "C#", "SQL Server"],
  },
];
