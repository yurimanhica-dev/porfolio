"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "MALEsoftware",
    period: "2022 — Presente",
    description:
      "Desenvolvimento de aplicações web e desktop para instituições financeiras, com foco em performance, segurança e automação de processos empresariais.",
    tech: ["C#", ".NET", "Blazor", "SQL Server", "Docker"],
  },
  {
    role: "Database Administrator",
    company: "MALEcaixa",
    period: "2020 — 2022",
    description:
      "Administração e otimização de bases de dados críticas, garantindo integridade, backups automáticos e consultas de alta eficiência em ambientes produtivos.",
    tech: ["SQL Server", "PL/SQL", "PostgreSQL", "Oracle"],
  },
  {
    role: "Software Support & Analyst",
    company: "MALEholding",
    period: "2019 — 2020",
    description:
      "Atendimento técnico e manutenção de sistemas de gestão empresarial, com foco em estabilidade, documentação e melhoria contínua dos processos internos.",
    tech: ["Windows Server", "ERP Systems", "Networking"],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-8 md:py-18 bg-background text-foreground relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 -mt-70 w-[15rem] h-[15rem] bg-terciar translate-x-1/2 translate-y-1/2 rotate-45 z-0 opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 0.3, scaleY: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute right-10 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-terciar to-transparent z-0"
      />
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 0.2, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute right-22 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent z-0"
      />
      <div className="container mx-auto c-space">
        <h2 className="text-4xl mb-12 font-semibold dark:text-accent-foreground">
          Experiência Profissional
        </h2>

        <div className="space-y-12 outfit">
          {experiences.map((exp, i) => (
            <div key={i} className="border-b border-border pb-8">
              <h3 className="text-2xl font-semibold dark:text-accent-foreground">
                {exp.role}
              </h3>
              <p className="text-lg text-muted-foreground">{exp.company}</p>
              <p className="text-sm mt-1 text-muted-foreground">{exp.period}</p>
              <p className="mt-4 text-lg leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-terciar/20 text-terciar rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
