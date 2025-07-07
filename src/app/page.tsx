'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code,
  Terminal,
  Database,
  Globe,
  Smartphone,
  Zap,
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';
import {
  ScrollSection,
  ParallaxText,
  StickySection,
  ScrollProgress,
  FloatingElement,
} from '../components/ScrollSection';
import { AboutSection } from '../components/AboutSection';
import { FeaturedProject } from '../components/FeaturedProject';
import { ProjectSection } from '../components/ProjectSection';
import {
  getFeaturedProject,
  getWebProjects,
  getMobileProjects,
} from '../data/projects';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const featuredProject = getFeaturedProject();
  const webProjects = getWebProjects();
  const mobileProjects = getMobileProjects();

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground relative"
    >
      <ScrollProgress />

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 matrix-bg opacity-20"></div>

        {/* Floating background elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
          <ParallaxText speed={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-8 w-full"
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold glow-text leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Hi, I'm Zaid 👋
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Full-Stack Software Engineer | SaaS Specialist | Mobile
                Developer
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full max-w-md sm:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-mono font-semibold rounded-lg glow hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 border border-primary text-primary font-mono font-semibold rounded-lg hover:bg-primary hover:text-background transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </motion.button>
                <motion.a
                  href="https://github.com/ZaidNx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 border border-secondary text-secondary font-mono font-semibold rounded-lg hover:bg-secondary hover:text-background transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </ParallaxText>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Featured Project Section */}
      {featuredProject && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted relative min-h-screen flex items-center justify-center">
          {/* Background container to prevent content bleeding through */}
          <div className="absolute inset-0 bg-muted"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold glow-text mb-4">
                Featured Project
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My latest and most impactful work
              </p>
            </motion.div>
            <FeaturedProject project={featuredProject} />
          </div>
        </section>
      )}

      {/* Web Projects Section */}
      <ProjectSection
        title="Web Projects"
        subtitle="Enterprise SaaS applications built for global scale"
        projects={webProjects}
        icon="💻"
      />

      {/* Mobile Projects Section */}
      <ProjectSection
        title="Mobile Projects"
        subtitle="Cross-platform mobile applications with offline capabilities"
        projects={mobileProjects}
        icon="📱"
      />

      {/* Contact Section with Fixed Layout */}
      <section className="py-20 px-8 sm:px-12 lg:px-16 relative bg-background">
        {/* Background container to prevent content bleeding through */}
        <div className="absolute inset-0 bg-background"></div>

        <div className="max-w-6xl mx-auto w-full relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold glow-text mb-4">
              Let's Connect
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Ready to build something amazing together?
            </p>
          </motion.div>

          {/* Fixed Grid Layout */}
          <div
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 w-full pt-10 pb-10"
            style={{
              gridTemplateColumns: '1fr 1fr',
              paddingTop: '16px',
              paddingBottom: '16px',
              paddingLeft: '16px',
              paddingRight: '16px',
            }}
          >
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-8 w-full px-8 lg:px-12"
              style={{ gridColumn: '1' }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always interested in new opportunities and exciting
                  projects. Let's discuss how we can work together!
                </p>
              </div>
              <div className="flex flex-col space-y-8">
                {[
                  {
                    icon: Mail,
                    text: 'zaid.ch20@gmail.com',
                    href: 'mailto:zaid.ch20@gmail.com',
                  },
                  {
                    icon: Linkedin,
                    text: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/zaid-naeem-1b24611a8',
                  },
                  {
                    icon: Github,
                    text: 'GitHub',
                    href: 'https://github.com/ZaidNx',
                  },
                ].map((item, index) => (
                  <motion.a
                    key={item.text}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary hover:text-secondary transition-colors p-4 rounded-lg hover:bg-muted/50 border border-transparent hover:border-primary/20"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-6 w-full px-8 lg:px-12 lg:ml-auto lg:max-w-md lg:mr-8"
              style={{ gridColumn: '2' }}
            >
              {[
                { type: 'text', placeholder: 'Your Name' },
                { type: 'email', placeholder: 'Your Email' },
                { type: 'textarea', placeholder: 'Your Message' },
              ].map((field, index) => (
                <motion.div
                  key={field.placeholder}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full"
                  style={{ marginBottom: '12px' }}
                >
                  {field.type === 'textarea' ? (
                    <textarea
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full p-4 bg-muted border border-border rounded-lg focus:border-primary focus:outline-none font-mono resize-none"
                      style={{ paddingLeft: '6px' }}
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full p-4 bg-muted border border-border rounded-lg focus:border-primary focus:outline-none font-mono"
                      style={{ paddingLeft: '6px' }}
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-background font-mono font-semibold rounded-lg glow hover:scale-105 transition-transform mb-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer with Parallax */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background relative">
        {/* Background container to prevent content bleeding through */}
        <div className="absolute inset-0 bg-background"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <ParallaxText speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-6"
            >
              <p className="text-muted-foreground font-mono text-center">
                Built with ❤️ using Cursor + Deployed on Vercel
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="/resume.pdf"
                  className="text-muted-foreground hover:text-primary transition-colors font-mono"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Resume
                </motion.a>
                <motion.a
                  href="https://github.com/ZaidNx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-mono"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  GitHub
                </motion.a>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                © 2024 Zaid Naeem. All rights reserved.
              </p>
            </motion.div>
          </ParallaxText>
        </div>
      </footer>
    </div>
  );
}
