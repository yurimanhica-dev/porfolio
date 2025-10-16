/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  project,
  hoveredProject,
  setHoveredProject,
}: {
  project: any;
  hoveredProject: string | null;
  setHoveredProject: (name: string | null) => void;
}) => {
  const { name, image, link, github, description, tech, featured, year } =
    project;

  return (
    <button
      className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
      onMouseEnter={() => setHoveredProject(name)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      {/* Year Badge */}
      {year && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
          <Calendar className="w-3 h-3" />
          20010
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 relative z-10 items-start flex flex-col h-[calc(100%-288px)]">
        {/* Title */}
        <div className="flex mb-3">
          <h3 className="font-bold uppercase text-2xl text-foreground pr-4 outfit dark:text-accent-foreground">
            {name}
          </h3>
        </div>

        {/* Description and Tech */}
        <div>
          {/* Description */}
          {description && (
            <p className="text-start text-lg mb-4 line-clamp-3 leading-relaxed  outfit">
              {description}
            </p>
          )}

          {/* Technologies */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6 outfit">
              {tech.slice(0, 4).map((t: string) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm bg-terciar/20 text-terciar rounded-full"
                >
                  {t}
                </span>
              ))}
              {tech.length > 4 && (
                <span className="px-3 py-1 text-sm bg-terciar/20 text-terciar rounded-full">
                  +{tech.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto outfit font-semibold uppercase">
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

      {/* Hover Border Effect - Apenas no desktop */}
      <div className="absolute inset-0 border-2 border-transparent md:group-hover:border-primary/20 rounded-3xl transition-all duration-300 pointer-events-none" />
    </button>
  );
};
