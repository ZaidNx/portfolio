/* eslint-disable @next/next/no-img-element -- Apple and Google provide these official store badges as externally hosted assets. */
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
  compact?: boolean;
}

export function ProjectCard({ project, index = 0, compact = false }: ProjectCardProps) {
  const hasStoreLinks = Boolean(project.iosUrl || project.androidUrl);

  return (
    <motion.article
      initial={{ opacity: 0, y: 56, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.72,
        delay: Math.min(index * 0.11, 0.33),
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.18 }}
      className={`project-card ${compact ? 'project-card-compact' : ''}`}
    >
      <div className="project-card-topline" />
      <div className="project-card-header">
        <div>
          <span className="project-kind">
            {project.eyebrow ?? (project.category === 'public'
              ? 'AI-assisted prototype'
              : project.category === 'mobile'
                ? 'Production mobile app'
                : project.category === 'product'
                  ? 'Enterprise SaaS product'
                  : 'Professional work')}
          </span>
          <h3>{project.title}</h3>
        </div>
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <ExternalLink aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      {project.features.length > 0 && (
        <div className="project-detail">
          <h4>{project.featureLabel ?? 'Selected contributions'}</h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.techStack.length > 0 && (
        <div className="tag-list project-tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}

      {hasStoreLinks && (
        <div className="store-links">
          <span className="store-label">
            <Smartphone aria-hidden="true" /> Download app
          </span>
          <div className="store-badges">
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge store-badge-apple"
                aria-label={`Download ${project.title} on the App Store`}
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                />
              </a>
            )}
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge store-badge-google"
                aria-label={`Get ${project.title} on Google Play`}
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                />
              </a>
            )}
          </div>
        </div>
      )}
    </motion.article>
  );
}
