'use client';

import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectSectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  projects: Project[];
  background?: 'teal' | 'blue' | 'navy';
  columns?: 'two' | 'three';
  compact?: boolean;
}

const backgroundClass = {
  teal: 'bg-gradient-grey-teal',
  blue: 'bg-gradient-blue-purple',
  navy: 'bg-gradient-navy-purple',
};

export function ProjectSection({
  id,
  eyebrow,
  title,
  subtitle,
  projects,
  background = 'teal',
  columns = 'two',
  compact = false,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className={`section-shell ${backgroundClass[background]}`}
    >
      <div className={`section-overlay ${backgroundClass[background]}`} />
      <div className="section-fade section-fade-top" />
      <div className="section-fade section-fade-bottom" />

      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="section-header"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
          <p>{subtitle}</p>
        </motion.div>

        <div className={`project-grid project-grid-${columns}`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              compact={compact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
