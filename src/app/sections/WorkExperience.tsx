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
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto c-space">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl mb-12 font-semibold dark:text-accent-foreground"
        >
          Experiência Profissional
        </motion.h2>

        <div className="space-y-12 outfit">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
