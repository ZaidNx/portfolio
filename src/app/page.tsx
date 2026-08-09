'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { AboutSection } from '../components/AboutSection';
import { EducationSection, ExperienceSection } from '../components/CareerSections';
import { ProjectSection } from '../components/ProjectSection';
import { ScrollProgress } from '../components/ScrollSection';
import {
  mobileProjects,
  professionalWork,
  productProjects,
  publicProjects,
} from '../data/projects';

const navItems = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Work', '#work'],
  ['Contact', '#contact'],
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Message could not be sent');

      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="site-root">
      <ScrollProgress />

      <section className="hero bg-animated-gradient">
        <div className="hero-background" aria-hidden="true">
          <Image
            src="/zaid-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-background-image"
          />
        </div>
        <div className="hero-vignette" />

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#top" className="nav-name" aria-label="Zaid Naeem, home">
            ZN<span>.</span>
          </a>
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </nav>

        <div id="top" className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="availability-line">
              <span className="status-dot" />
              Lahore, Pakistan
            </div>
            <p className="hero-kicker">Senior Frontend Engineer</p>
            <h1>ZAID NAEEM</h1>
            <p className="hero-stack">React · TypeScript · React Native · Enterprise SaaS</p>
            <p className="hero-summary">
              Building production web and mobile experiences across complex
              enterprise SaaS products, with a focus on frontend architecture,
              state management, performance and API-driven workflows.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Selected work <ArrowDown aria-hidden="true" />
              </a>
              <a href="mailto:zaid.ch20@gmail.com" className="button button-secondary">
                Contact me <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="hero-facts" aria-label="Professional summary">
              <div>
                <strong>4+</strong>
                <span>years in production software</span>
              </div>
              <div>
                <strong>2</strong>
                <span>promotions at 7Vals</span>
              </div>
              <div>
                <strong>Web + mobile</strong>
                <span>hands-on product engineering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />
      <ExperienceSection />

      <ProjectSection
        id="work"
        eyebrow="Selected professional work"
        title="Engineering work with clear ownership"
        subtitle="A selection of long-running platform work, product delivery and technical initiatives from the EZO enterprise SaaS suite."
        projects={professionalWork}
        background="teal"
        columns="two"
      />

      <ProjectSection
        id="products"
        eyebrow="Professional product context"
        title="Work across the EZO product suite"
        subtitle="Selected contributions across the EZO product suite through my work at 7Vals."
        projects={productProjects}
        background="blue"
        columns="two"
        compact
      />

      <ProjectSection
        id="mobile"
        eyebrow="Production mobile apps"
        title="React Native work used in the field"
        subtitle="Public store links provide direct evidence of the production applications I have contributed to since 2022."
        projects={mobileProjects}
        background="navy"
        columns="two"
        compact
      />

      <ProjectSection
        id="projects"
        eyebrow="Public side projects"
        title="AI-assisted prototypes"
        subtitle="Self-directed AI-assisted prototypes for exploring product ideas and rapid implementation."
        projects={publicProjects}
        background="teal"
        columns="two"
      />

      <EducationSection />

      <section id="contact" className="section-shell contact-section bg-gradient-navy-purple">
        <div className="section-overlay bg-gradient-navy-purple" />
        <div className="section-fade section-fade-top" />
        <div className="section-content">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s connect</h2>
            <p>
              Interested in discussing frontend engineering, React and
              TypeScript systems, or product engineering opportunities? Feel
              free to reach out.
            </p>
          </div>

          <div className="contact-grid">
            <motion.div
              initial={{ opacity: 0, x: -44 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.25 }}
              className="contact-details"
            >
              <div>
                <MapPin aria-hidden="true" />
                <span>Lahore, Pakistan</span>
              </div>
              <a href="mailto:zaid.ch20@gmail.com">
                <Mail aria-hidden="true" />
                <span>zaid.ch20@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/zaidnaeem-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ZaidNx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:zaid.ch20@gmail.com?subject=Resume%20request"
                className="resume-note"
              >
                Résumé available on request <ArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.25 }}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <label>
                Name
                <input
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                />
              </label>
              <label>
                Message
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                />
              </label>
              <button type="submit" className="button button-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
              <div className="form-status" aria-live="polite">
                {submitStatus === 'success' && 'Message sent. Thank you — I’ll be in touch.'}
                {submitStatus === 'error' && 'The form could not send. Please email me directly.'}
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Zaid Naeem. All rights reserved.</p>
        <div>
          <a href="mailto:zaid.ch20@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/zaidnaeem-dev/">LinkedIn</a>
          <a href="https://github.com/ZaidNx">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
