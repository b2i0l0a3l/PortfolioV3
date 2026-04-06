"use client";

import React from 'react';
import { Project } from '@/types';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Github = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      {/* Decorative Gradient Blob on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="h-56 bg-background relative overflow-hidden shrink-0">
        {project.imageUrl && project.imageUrl.startsWith('http') ? (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
            />
        ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/50 text-white/30 text-sm border-b border-border">
              <span className="mb-2 opacity-50">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </span>
              No Preview
            </div>
        )}
      </div>
      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10 bg-gradient-to-b from-transparent to-black/20">
        <h3 className="text-2xl font-bold mb-3 text-white tracking-tight">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-4 items-center mt-auto pt-5 border-t border-border/50">
          {project.repositoryUrl && (
            <a 
              href={project.repositoryUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="group/link text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Github size={18} className="group-hover/link:text-accent transition-colors" /> 
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="group/link ml-auto text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <span>Live Demo</span>
              <ExternalLink size={18} className="group-hover/link:text-accent transition-colors" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
