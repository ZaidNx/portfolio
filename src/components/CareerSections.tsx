'use client';

import { motion } from 'framer-motion';
import { Award, BriefcaseBusiness, GraduationCap, MapPin } from 'lucide-react';

const roles = [
  {
    title: 'Senior Software Engineer',
    dates: 'Jul 2025 – Present',
    bullets: [
      'Owned and extended the shared listing-filter platform across four SaaS products, working across reusable React components, Redux state, Rails services, code reviews and team knowledge sharing.',
      'Delivered major React modernization and product work across Members, Provisioning, Vendors and Documents, alongside Dispatch Center and the CMDB/ITSM integration.',
      'Completed the CloudFront and S3 rollout for frontend asset delivery, resolving remaining QA and production issues and helping reduce measured page-load time by roughly 50% across validated environments.',
    ],
  },
  {
    title: 'Software Engineer II',
    dates: 'Jul 2024 – Jun 2025',
    bullets: [
      'Designed an offline-first React Native/Rails work-order workflow using SQLite caching, queued writes, batched reconnect synchronization and server-side background processing.',
      'Expanded into React web and platform work through persisted filter-state handling, React performance improvements, Rails query/N+1 optimization and a self-directed TypeScript/ESLint initiative.',
    ],
  },
  {
    title: 'Software Engineer',
    dates: 'Jul 2022 – Jun 2024',
    bullets: [
      'Built React Native versions of mature web workflows across reservations, audits, orders, work orders, Request Portal, scanning, inventory and scheduling.',
      'Delivered listings, detail pages and resource actions with Redux Thunk while adding Rails REST endpoints, serializers, typed mappings and pagination where mobile APIs were missing.',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell bg-gradient-blue-purple">
      <div className="section-overlay bg-gradient-blue-purple" />
      <div className="section-fade section-fade-top" />
      <div className="section-fade section-fade-bottom" />

      <div className="section-content">
        <div className="section-header">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Four years of continuous product engineering</h2>
          <p>
            Two promotions at 7Vals, growing from mobile feature delivery into
            broader React web and platform ownership while remaining hands-on.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="experience-card"
        >
          <div className="experience-company">
            <BriefcaseBusiness aria-hidden="true" />
            <div>
              <h3>7Vals — Product Engineering for EZO</h3>
              <p>
                <MapPin aria-hidden="true" /> Lahore, Pakistan
              </p>
              <p className="company-context">
                Enterprise SaaS products spanning asset management, IT
                operations, maintenance and equipment rental.
              </p>
            </div>
          </div>

          <div className="timeline">
            {roles.map((role) => (
              <div key={role.title} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-role">
                  <div>
                    <h4>{role.title}</h4>
                    <span>{role.dates}</span>
                  </div>
                  <ul className="timeline-bullets">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="section-shell compact-section bg-gradient-purple-blue">
      <div className="section-overlay bg-gradient-purple-blue" />
      <div className="section-fade section-fade-top" />

      <div className="section-content">
        <div className="section-header">
          <p className="eyebrow">Education & certification</p>
          <h2 className="section-title">Academic foundation</h2>
        </div>

        <div className="credential-grid">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            className="credential-card"
          >
            <GraduationCap aria-hidden="true" />
            <div>
              <span className="credential-label">Education · 2018 – 2022</span>
              <h3>BS Computer Science</h3>
              <p>National University of Computer and Emerging Sciences (FAST-NUCES)</p>
              <ul>
                <li>Dean&apos;s List — Fall 2020 and Fall 2021</li>
                <li>Full four-year merit scholarship</li>
              </ul>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            className="credential-card"
          >
            <Award aria-hidden="true" />
            <div>
              <span className="credential-label">Certification</span>
              <h3>AWS Certified Cloud Practitioner</h3>
              <p>CLF-C02</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
