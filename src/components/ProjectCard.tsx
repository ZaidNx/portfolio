'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play, Github, Smartphone } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isMobileProject = project.category === 'mobile';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative w-full h-full"
    >
      <motion.div
        className="bg-muted rounded-lg border border-border overflow-hidden hover:border-primary transition-all duration-300 h-full w-full p-4"
        whileHover={{
          scale: 1.02,
          y: -5,
          boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Project Header */}
        <div
          className="border-b border-border m-4"
          style={{
            paddingLeft: '12px !important',
            paddingRight: '12px !important',
            paddingTop: '12px !important',
            paddingBottom: '12px !important',
          }}
        >
          <div className="flex items-start justify-between mb-3">
            <motion.h3
              className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1 pr-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {project.title}
            </motion.h3>
            <div className="flex gap-2 flex-shrink-0">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              )}
              {project.demoUrl && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Play className="h-4 w-4" />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              )}
            </div>
          </div>
          <motion.p
            className="text-muted-foreground text-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* App Store Buttons for Mobile Projects */}
        {isMobileProject && (project.iosUrl || project.androidUrl) && (
          <motion.div
            className="border-b border-border m-4"
            style={{
              paddingLeft: '12px !important',
              paddingRight: '12px !important',
              paddingTop: '12px !important',
              paddingBottom: '12px !important',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-primary" />
              Download App
            </h4>
            <div className="flex flex-wrap gap-3">
              {project.iosUrl && (
                <motion.a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <span className="pr-2">iOS App</span>
                </motion.a>
              )}
              {project.androidUrl && (
                <motion.a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-background border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span className="pr-2">Android App</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        )}

        {/* Project Features */}
        <div
          className="m-4"
          style={{
            paddingLeft: '12px !important',
            paddingRight: '12px !important',
            paddingTop: '12px !important',
            paddingBottom: '12px !important',
          }}
        >
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Features:
            </h4>
            <ul className="space-y-1">
              {project.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1 + 0.4 + idx * 0.05,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="text-xs text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-foreground mb-2">
              Tech Stack:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.1 + 0.6 + idx * 0.05,
                    duration: 0.5,
                  }}
                  viewport={{ once: true }}
                  className="bg-background text-xs font-mono rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  style={{
                    paddingLeft: '6px !important',
                    paddingRight: '6px !important',
                    paddingTop: '1px !important',
                    paddingBottom: '1px !important',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
