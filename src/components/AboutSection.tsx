'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skillGroups = {
  Frontend: [
    'React',
    'TypeScript',
    'JavaScript (ES6+)',
    'Redux Toolkit',
    'Redux Thunk',
    'React Query',
    'React Router',
    'HTML',
    'CSS / SCSS',
    'Material UI',
    'Tailwind CSS',
    'tss-react',
    'Framer Motion',
    'esbuild',
  ],
  'Accessibility': ['WCAG', 'ARIA', 'Semantic HTML', 'Keyboard Navigation'],
  Mobile: ['React Native', 'SQLite', 'Offline-first workflows'],
  'Backend / APIs': [
    'Ruby on Rails',
    'REST APIs',
    'Controllers',
    'ActiveModelSerializers',
    'Presenters',
    'MySQL / SQL',
    'CanCanCan',
    'DelayedJob',
  ],
  'Cloud / Delivery': ['AWS S3', 'CloudFront', 'CodeDeploy', 'GitHub Actions'],
  Tools: ['Git', 'GitHub', 'Cursor', 'Claude', 'Postman', 'Redmine'],
};

export function AboutSection() {
  return (
    <section id="about" className="section-shell bg-gradient-purple-blue">
      <div className="section-overlay bg-gradient-purple-blue" />
      <div className="section-fade section-fade-bottom" />

      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="about-grid"
        >
          <div className="profile-frame">
            <Image
              src="/Zaid-Profile-Picture.JPG"
              alt="Zaid Naeem"
              fill
              sizes="(max-width: 768px) 176px, 224px"
              className="profile-image"
            />
          </div>

          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title text-left">Hands-on frontend ownership</h2>
            <p className="about-lead">
              I&apos;m a Senior Software Engineer with 4+ years of experience
              building React, TypeScript and React Native applications for the
              EZO enterprise SaaS suite.
            </p>
            <p className="body-copy">
              My work spans large-scale frontend modernization, complex
              Redux-driven workflows, offline-first mobile features, REST API
              integration and frontend performance. I work primarily on
              frontend systems while regularly collaborating across Ruby on
              Rails APIs and backend data flows.
            </p>
            <p className="body-copy">
              My architecture and ownership experience grew out of years of
              implementation, debugging and code review. I still spend most of
              my time building and improving production software.
            </p>

            <div className="about-notes">
              <div className="note-card">
                <span className="note-label">Engineering initiative</span>
                <p>
                  Proposed and implemented TypeScript and ESLint enforcement in
                  the React Native repository so unresolved type and lint issues
                  could not be pushed.
                </p>
              </div>
              <div className="note-card">
                <span className="note-label">AI-assisted development</span>
                <p>
                  I use Cursor and Claude for implementation, debugging and
                  refactoring with a review-first workflow, while retaining full
                  ownership of the code I ship.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.16 }}
          className="skills-panel"
        >
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Core skills</p>
              <h3 className="subsection-title">Tools used in production work</h3>
            </div>
            <p className="section-aside">
              Frontend-focused, with practical Rails and API collaboration.
            </p>
          </div>

          <div className="skills-grid">
            {Object.entries(skillGroups).map(([group, skills]) => (
              <div key={group} className="skill-group">
                <h4>{group}</h4>
                <div className="tag-list">
                  {skills.map((skill) => (
                    <span key={skill} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
