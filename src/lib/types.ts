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
  // {
  //   name: "MALEsoftware (demo)",
  //   image: "/projects/malesoftware.png",
  //   link: "https://malesoftware.vercel.app",
  //   github: "https://github.com/yurimanhica-dev/malesoftware_tech",
  //   description:
  //     "Website institucional para empresa de software, apresentando serviços e portfólio.",
  //   tech: ["Vite", "TypeScript", "TailwindCSS", "Framer Motion"],
  // },
  {
    name: "MALEcaixa (demo)",
    image: "/projects/malecaixa.png",
    link: "https://malecaixa.vercel.app",
    github: "https://github.com/yurimanhica-dev/malecaixa",
    description:
      "Website institucional para empresa financeira, destacando soluções de crédito.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "maleseguros (demo)",
    image: "/projects/maleseguros.png",
    link: "https://maleseguros.vercel.app",
    github: "https://github.com/yurimanhica-dev/maleseguros",
    description:
      "Website institucional para empresa de correctora, exibindo planos e benefícios.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "API SOAP",
    image: "/projects/soapUi.png",
    link: "http://197.249.6.128:64174/ATServices.asmx?WSDL",
    github: "http://197.249.6.128:64174/ATServices.asmx?WSDL",
    description:
      "API SOAP para serviços de finanças, permitindo integração com sistemas (desktop com dashboards online).",
    tech: ["SOAP", "WSDL", "ASMX", "XSD"],
  },
];
