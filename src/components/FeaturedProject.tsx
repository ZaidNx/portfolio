'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play, Star } from 'lucide-react';
import { Project } from '../data/projects';

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      {/* Featured Badge */}
      <div className="absolute -top-4 left-6 z-10">
        <motion.div
          className="flex items-center gap-2 py-3 bg-primary text-background rounded-full text-sm font-semibold"
          style={{ paddingLeft: '16px', paddingRight: '19px' }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
          viewport={{ once: true }}
        >
          <Star className="h-4 w-4" />
          Featured Project
        </motion.div>
      </div>

      <motion.div
        className="bg-gradient-to-br from-muted to-background rounded-xl border border-primary/20 overflow-hidden relative w-full p-12"
        whileHover={{
          scale: 1.02,
          y: -10,
          boxShadow: '0 25px 50px rgba(0, 255, 136, 0.15)',
        }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <div
          className="relative z-10 m-8"
          style={{
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '20px',
            paddingBottom: '20px',
          }}
        >
          {/* Project Header */}
          <div className="p-10 sm:p-12 border-b border-border/50">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
              <div className="flex-1">
                <motion.h2
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-4 glow-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-3 font-semibold min-w-[160px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live App
                  </motion.a>
                )}
                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-12 py-4 border border-primary text-primary rounded-lg hover:bg-primary hover:text-background transition-colors flex items-center justify-center gap-3 font-semibold min-w-[160px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Play className="h-5 w-5" />
                    Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-10 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="text-primary">✅</span>
                  Key Features
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground flex items-start gap-3 sm:gap-4"
                    >
                      <span className="text-primary mt-1 text-sm">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="text-primary">🛠️</span>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {project.techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="px-3 sm:px-4 py-2 sm:py-3 bg-background text-sm font-mono rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
