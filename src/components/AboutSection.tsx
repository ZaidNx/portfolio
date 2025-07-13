'use client';

export function AboutSection() {
  const techStack = {
    frontend: [
      'React',
      'Redux Toolkit',
      'React Native',
      'TypeScript',
      'TailwindCSS',
    ],
    backend: ['Ruby on Rails', 'Node.js', 'Express.js'],
    mobile: ['React Native (Android + iOS, with Offline capabilities)'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB'],
    devops: ['GitHub Actions', 'Render', 'Vercel'],
    tools: ['Jest', 'RSpec', 'Postman', 'ESLint', 'Figma'],
  };

  const highlights = [
    '🧠 Architected a modular offline-sync engine for React Native that handled CRUD queuing, retries, race conditions, and eventual consistency with backend',
    '🔐 Implemented JWT-secured login flows and role-based access control (RBAC) for web and mobile',
    '📊 Built real-time dashboards and insight widgets powered by backend analytics and cron jobs',
    '📥 Integrated email notifications and webhooks for appointment confirmations and reminders',
    '🧾 Developed PDF generation & download workflows for invoices and receipts',
    '📦 Set up dynamic form builders and reusable component libraries in React',
    '🔍 Delivered smart filtering and search UIs using debounce, tag selectors, and client-server sync',
    '🚦 Built custom rate limiters and validation logic to ensure safe backend job processing',
    '🧪 Covered all major business logic with unit, integration, and feature specs in RSpec & Jest',
    '🌐 Created a public appointment booking portal with availability-based time slot filtering',
    '🤖 Experimented with custom chatbot UI, fetching dynamic data from business settings',
  ];

  return (
    <section className="min-h-screen bg-background relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      {/* Background container to prevent content bleeding through */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Gradient overlay at the bottom - black to grey */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-muted to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start w-full">
          {/* Left Column - Profile */}
          <div className="space-y-12 w-full ai-style-change-1 ">
            {/* Profile Header */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold glow-text leading-tight">
                Zaid Naeem
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-semibold">
                Full-Stack Software Engineer
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Full-Stack Software Engineer with over{' '}
                <span className="text-primary font-semibold">3 years</span> of
                experience building and scaling SaaS applications. Currently
                working at{' '}
                <span className="text-primary font-semibold">7Vals</span>, Zaid
                has contributed to platforms like{' '}
                <span className="text-primary font-semibold">
                  EZOfficeInventory
                </span>
                , <span className="text-primary font-semibold">EZRentOut</span>,{' '}
                <span className="text-primary font-semibold">AssetSonar</span>,
                and <span className="text-primary font-semibold">EZO CMMS</span>
                , used globally by{' '}
                <span className="text-primary font-semibold">
                  Fortune 500 companies
                </span>
                .
              </p>
            </div>

            {/* Personal Focus */}
            <div className="bg-muted p-8 rounded-lg border border-border w-full">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">🌟</span>
                Personal Focus
              </h3>
              <p className="text-muted-foreground">
                Currently focused on performance-driven, cross-platform app
                development and building intuitive, AI-powered user experiences.
              </p>
            </div>
          </div>

          {/* Right Column - Tech Stack & Highlights */}
          <div className="space-y-12 w-full ai-style-change-1">
            {/* Tech Stack */}
            <div className="space-y-6 ai-style-change-1">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <span className="text-primary">🧑‍💻</span>
                Tech Stack
              </h3>
              <div className="space-y-8 ai-style-change-3">
                {Object.entries(techStack).map(([category, techs]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-3 justify-start">
                      {techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-muted text-sm font-mono rounded border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Major Highlights - Centered Section */}
        <div className="mt-20 w-full">
          <div className="text-center mb-12" style={{ paddingTop: '32px' }}>
            <h3 className="text-3xl font-bold text-foreground flex items-center justify-center gap-3">
              <span className="text-primary">🛠️</span>
              Major Highlights
            </h3>
          </div>

          {/* Two-column layout for highlights */}
          <div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            style={{ paddingTop: '24px' }}
          >
            {/* Left Column */}
            <div className="space-y-4">
              {highlights
                .slice(0, Math.ceil(highlights.length / 2))
                .map((highlight, idx) => (
                  <div
                    key={idx}
                    className="text-muted-foreground flex items-start gap-4"
                  >
                    <span className="text-primary mt-1 text-sm">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {highlights
                .slice(Math.ceil(highlights.length / 2))
                .map((highlight, idx) => (
                  <div
                    key={idx + Math.ceil(highlights.length / 2)}
                    className="text-muted-foreground flex items-start gap-4"
                  >
                    <span className="text-primary mt-1 text-sm">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
