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

interface Project {
  name: string;
  image: string;
  link?: string;
  github?: string;
  description: string;
  tech: string[];
  featured?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    name: "Modulo de Recursos Humanos",
    image: "/projects/MRH.png",
    link: "https://malesoftware.vercel.app",
    github: "https://github.com/yurimanhica-dev/malesoftware_tech",
    description:
      "Modulo de RH para sistema de gestão empresarial, facilitando a administração de funcionários e processos de pagamento.",
    tech: ["C#", "ASP.NET", "Windows Forms", "WPF"],
  },
  {
    name: "MALEcaixa",
    image: "/projects/malecaixa.png",
    link: "https://malecaixa.vercel.app",
    github: "https://github.com/yurimanhica-dev/malecaixa",
    description:
      "Website institucional para empresa financeira, destacando soluções de crédito.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "maleseguros",
    image: "/projects/maleseguros.png",
    link: "https://maleseguros.vercel.app",
    github: "https://github.com/yurimanhica-dev/maleseguros",
    description:
      "Website institucional para empresa de correctora, exibindo planos de cobertura e benefícios.",
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
