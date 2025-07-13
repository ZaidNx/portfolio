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
            <div
              className="flex flex-wrap gap-0"
              style={{ marginTop: '8px !important' }}
            >
              {project.iosUrl && (
                <motion.a
                  href={project.iosUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-0 py-0 bg-transparent border-none rounded-lg shadow-none hover:shadow-none transition-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    width: '120px',
                    height: '36px',
                    padding: 0,
                    background: 'none',
                    border: 'none',
                    marginRight: '2px !important',
                  }}
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </motion.a>
              )}
              {project.androidUrl && (
                <motion.a
                  href={project.androidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-0 py-0 bg-transparent border-none rounded-lg shadow-none hover:shadow-none transition-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{
                    width: '120px',
                    height: '40px',
                    padding: 0,
                    background: 'none',
                    border: 'none',
                    marginLeft: '-8px',
                  }}
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
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

      {/* Gorgeous Open Web App Button for Web Projects */}
      {project.category === 'web' && project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 text-background font-semibold text-lg shadow-lg backdrop-blur border border-primary/30 transition hover:scale-105 hover:shadow-2xl hover:bg-primary hover:text-white active:scale-100 mt-6 mb-2"
          style={{}}
        >
          <span>Open Web App</span>
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition" />
        </a>
      )}
    </motion.div>
  );
}
