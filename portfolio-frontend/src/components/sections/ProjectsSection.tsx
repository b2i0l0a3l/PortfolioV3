import React from "react";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  projects: any[]; // Depending on the actual type, fallback to any or interface from feature later
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Selected Work</h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto md:mx-0"></div>
          </div>
          <p className="text-white/50 max-w-md text-lg text-center md:text-right">
            A collection of my recent projects highlighting my expertise in modern web development and design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shrink-0">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id || idx} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
           <div className="text-center text-white/50 py-24 bg-card border border-border rounded-3xl">
             <span className="block text-2xl mb-2">🚧</span>
             More projects coming soon.
           </div>
        )}
      </div>
    </section>
  );
}
