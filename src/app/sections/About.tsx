"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 dark:!bg-background dark:md:!bg-foreground bg-background md:bg-foreground "
    >
      <div className="container mx-auto c-space text-foreground md:text-background dark:text-accent-foreground dark:md:!text-background">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl mt-10 md:mt-0 font-semibold"
        >
          Sobre mim
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl lg:text-2xl outfit mt-6 leading-relaxed"
        >
          Sou Desenvolvedor Full Stack e Administrador de Bancos de Dados, com
          experiência em aplicações desktop, APIs RESTful e soluções web ({" "}
          <span className="text-terciar">ASP.NET, Spring Boot, React</span> ).
          Proficiência em ({" "}
          <span className="text-terciar">Java, TypeScript e C#</span>),
          utilizando Docker para conteinerização. Especialista em SQL Server,
          Oracle e PostgreSQL, com foco em desempenho e segurança. Base sólida
          em metodologias ágeis (Scrum) e entregas orientadas a resultados.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
