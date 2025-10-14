"use client";

import { projects } from "@/lib/types";
import { ArrowRight, Calendar, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-start mb-16">
          <h2 className="text-5xl  font-semibold ">Projectos Relevantes</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(
            ({
              name,
              image,
              link,
              github,
              description,
              tech,
              featured,
              year,
            }) => (
              <div
                key={name}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Featured Badge */}
                {featured && (
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-yellow-500 text-yellow-950 px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    Destaque
                  </div>
                )}

                {/* Year Badge */}
                {year && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <Calendar className="w-3 h-3" />
                    {year}
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 ">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground flex-1 pr-4">
                      {name}
                    </h3>
                    <ArrowRight
                      className={`w-5 h-5 text-primary mt-1 transition-all duration-300 ${
                        hoveredProject === name
                          ? "translate-x-1 -translate-y-1"
                          : ""
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="outfit">
                    {/* Description */}
                    {description && (
                      <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                        {description}
                      </p>
                    )}

                    {/* Technologies */}
                    {tech && tech.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {tech.slice(0, 4).map((t: string) => (
                          <span
                            key={t}
                            className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                        {tech.length > 4 && (
                          <span className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 rounded-full">
                            +{tech.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div
                    className={`flex gap-3 transition-all duration-500 ${
                      hoveredProject === name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {link && (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Link>
                    )}
                    {github && (
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border bg-background text-foreground rounded-xl hover:bg-muted transition-all font-medium text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </Link>
                    )}
                  </div>

                  {/* Fallback hover state for mobile */}
                  <div className="flex gap-3 md:hidden mt-4">
                    {link && (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Link>
                    )}
                    {github && (
                      <Link
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border bg-background text-foreground rounded-xl hover:bg-muted transition-all font-medium text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </Link>
                    )}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-all duration-300 pointer-events-none" />
              </div>
            )
          )}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais do meu trabalho?
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all font-medium"
          >
            Ver Todos os Projectos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
