'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { ParallaxText, ScrollProgress } from '../components/ScrollSection';
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
  // Removed unused scrollYProgress

  const featuredProject = getFeaturedProject();
  const webProjects = getWebProjects();
  const mobileProjects = getMobileProjects();

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  // Handle form submission with Nodemailer API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset status after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground relative"
    >
      <ScrollProgress />

      {/* Hero Section - Centered Image with Text on Sides */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 sm:px-12 lg:px-16 bg-background">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>

        {/* Main content container - centered */}
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image
            src="/zaid-hero.png"
            alt="Zaid Hero Background"
            fill
            className="object-contain opacity-20"
            priority
          />
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-background/10"></div>
        </div>

        {/* Content on top of background image */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto">
          {/* Left text - "Hey, there" */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-end lg:pr-8 mb-8 lg:mb-0"
          >
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-foreground text-center lg:text-right drop-shadow-lg"
              style={{ lineHeight: 1.1 }}
            >
              Hey, there
            </h2>
          </motion.div>

          {/* Center spacing */}
          <div className="flex-shrink-0 mx-4 w-32 lg:w-48"></div>

          {/* Right text - "I AM ZAID" */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-start lg:pl-8 mt-8 lg:mt-0"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground glow-text mb-2 drop-shadow-lg">
                I AM ZAID
              </h1>
              <h3 className="text-lg md:text-xl lg:text-2xl font-mono text-primary drop-shadow-lg max-w-2xl">
                Full Stack Engineer | React, Node.js, MongoDB, Rails, React
                Native | Web & Mobile App Development | AI-Enhanced UX
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Floating elements for extra effect */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-primary/60 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Featured Project Section */}
      {featuredProject && (
        <section className="py-20 px-8 sm:px-12 lg:px-16 bg-muted relative min-h-screen flex items-center justify-center">
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto pb-4">
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

        <div className="w-full relative z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold glow-text mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Ready to build something amazing together?
            </p>
          </motion.div>

          {/* Fixed Grid Layout */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full"
            style={{
              width: '100%',
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
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-6 w-full px-8 lg:px-12 lg:justify-self-end lg:max-w-md"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full"
                style={{ marginBottom: '12px' }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full p-4 bg-muted border border-border rounded-lg focus:border-primary focus:outline-none font-mono"
                  style={{ paddingLeft: '6px' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full"
                style={{ marginBottom: '12px' }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full p-4 bg-muted border border-border rounded-lg focus:border-primary focus:outline-none font-mono"
                  style={{ paddingLeft: '6px' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full"
                style={{ marginBottom: '12px' }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                  className="w-full p-4 bg-muted border border-border rounded-lg focus:border-primary focus:outline-none font-mono resize-none"
                  style={{ paddingLeft: '6px' }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 font-mono font-semibold rounded-lg glow transition-transform mb-6 ${
                  isSubmitting
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-primary text-background hover:scale-105'
                }`}
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center p-3 bg-green-400/10 rounded-lg border border-green-400/20"
                >
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center p-3 bg-red-400/10 rounded-lg border border-red-400/20"
                >
                  ❌ Failed to send message. Please try again or email me
                  directly.
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer with Parallax */}
      <footer className="py-12 px-8 sm:px-12 lg:px-16 border-t border-border bg-background relative">
        {/* Background container to prevent content bleeding through */}
        <div className="absolute inset-0 bg-background"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex justify-center">
          <ParallaxText speed={0.1}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-6"
            >
              <p className="text-muted-foreground font-mono text-center w-full">
                --
              </p>
              <div className="flex flex-wrap justify-center gap-6 w-full">
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
              <p className="text-sm text-muted-foreground text-center w-full">
                © 2025 Zaid Naeem. All rights reserved.
              </p>
            </motion.div>
          </ParallaxText>
        </div>
      </footer>
    </div>
  );
}
