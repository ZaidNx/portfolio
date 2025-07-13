'use client';

import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectSectionProps {
  title: string;
  subtitle: string;
  projects: Project[];
  icon: string;
}

export function ProjectSection({
  title,
  subtitle,
  projects,
  icon,
}: ProjectSectionProps) {
  return (
    <section className="py-20 px-8 sm:px-12 lg:px-16 relative bg-background min-h-screen flex items-center justify-center">
      {/* Background container to prevent content bleeding through */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Gradient overlay at the top - grey to black */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-muted to-transparent"></div>

      {/* Gradient overlay at the bottom - black to grey */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-muted to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-4xl">{icon}</span>
            <h2 className="text-3xl sm:text-4xl font-bold glow-text">
              {title}
            </h2>
          </motion.div>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full max-w-sm"
              style={{ marginBottom: '4rem !important' }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
