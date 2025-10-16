"use client";

import { projects } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-background">
      {/* Bolhas flutuantes */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 right-10 w-32 h-32 bg-terciar rounded-full blur-xl z-0"
      />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-terciar rounded-full blur-xl z-0"
      />
      <div className="container mx-auto c-space">
        {/* Header Section */}
        <div className="text-start mb-16">
          <h2 className="text-4xl font-semibold dark:text-accent-foreground">
            Projectos Relevantes
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16 outfit text-xl">
          <p className="mb-6 uppercase font-semibold ">
            Interessado em ver mais trabalhos?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-terciar dark:text-accent-foreground rounded-xl hover:bg-terciar hover:text-accent-foreground transition-all font-medium up"
          >
            Entrar em contacto
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
