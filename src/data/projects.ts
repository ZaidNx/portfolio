export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
  image?: string;
  category: 'featured' | 'web' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 'stockpioneer',
    title: 'StockPioneer – MERN Inventory Manager',
    description:
      'A full-stack, cloud-based inventory tracking system designed for retailers and small businesses. StockPioneer helps manage stock movement, suppliers, and real-time analytics across multiple business locations.',
    features: [
      'Full inventory lifecycle: check-in/out, return, damage, sale',
      'Multi-location tracking & linked supplier profiles',
      'Visual dashboards with low-stock alerts & trends',
      'Action logs with real-time activity tracking',
      'Add/edit/delete items with quantity, category & pricing',
      'JWT-auth with protected routes and role-based access',
      'Responsive UI with dark mode support',
      'Built-in data validations and toast notifications',
    ],
    techStack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'TailwindCSS',
      'JWT',
      'Mongoose',
      'Toastify',
    ],
    liveUrl: 'https://stockpioneer-backend.onrender.com',
    demoUrl: 'https://www.youtube.com/watch?v=klnyU4ILK8Y',
    category: 'featured',
  },
  {
    id: 'intelliserve-crm',
    title: 'IntelliServe CRM – Service Business Manager',
    description:
      'A modern, full-stack CRM solution tailored for small, service-based businesses. IntelliServe simplifies daily operations with real-time scheduling, customer engagement, and revenue analytics—all from an intuitive, mobile-responsive interface. Designed for studios, salons, and consultancies, it streamlines client management and boosts operational efficiency.',
    features: [
      '📅 Appointment scheduling with time-slot management',
      '👥 Customer tracking with insights on growth & retention',
      '🛠️ Manage services offered with dynamic pricing support',
      '📈 Business performance dashboards: revenue, satisfaction, booking rate',
      '📊 Analytics widgets with visual insights & KPIs',
      '🔐 Secure login and user roles (Admin, Manager, etc.)',
      '🖥️ Responsive UI with dark mode support',
      '📨 Email reminder integrations for appointments (extendable)',
    ],
    techStack: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Vite',
      'Toastify',
      'Day.js',
      'Chart.js',
    ],
    liveUrl: 'https://intelliservecrm.onrender.com/',
    demoUrl: 'https://www.youtube.com/watch?v=nsMJt55dDmM',
    category: 'featured',
  },
  {
    id: 'ezofficeinventory-web',
    title: 'EZOfficeInventory (Web)',
    description: 'Asset Management platform for global enterprises.',
    features: [
      'Asset tracking, inventory flows',
      'Maintenance scheduling',
      'Reporting and dashboards',
    ],
    techStack: [
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Ruby on Rails',
      'MySQL',
      'AWS S3',
      'Elasticsearch',
      'JWT',
      'RSpec',
    ],
    liveUrl: 'https://www.ezofficeinventory.com',
    category: 'web',
  },
  {
    id: 'assetsonar-web',
    title: 'AssetSonar (Web)',
    description: 'IT asset management with licensing insights.',
    features: [
      'License tracking',
      'Hardware categorization',
      'Performance tuning',
    ],
    techStack: [
      'React',
      'REST API',
      'Styled Components',
      'Elasticsearch',
      'Docker',
      'Sidekiq',
      'OpenAPI',
      'RuboCop',
    ],
    liveUrl: 'https://www.assetsonar.com',
    category: 'web',
  },
  {
    id: 'ezocmms-web',
    title: 'EZO CMMS (Web)',
    description: 'Maintenance and work order management.',
    features: [
      'Preventive maintenance scheduling',
      'Role-based views',
      'Work order generation',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Ransack',
      'Redis',
      'AWS SES',
      'Delayed Job',
      'Stripe',
      'FactoryBot',
    ],
    liveUrl: 'https://www.ezocmms.com',
    category: 'web',
  },
  {
    id: 'ezrentout-web',
    title: 'EZRentOut (Web)',
    description: 'Rental management software for equipment.',
    features: [
      'Rental lifecycle flows',
      'Role-based access',
      'Invoice and listing management',
    ],
    techStack: [
      'React',
      'GraphQL',
      'MUI',
      'Redis',
      'AWS CloudWatch',
      'Capistrano',
      'Devise JWT',
      'Capybara',
    ],
    liveUrl: 'https://www.ezrentout.com',
    category: 'web',
  },
  {
    id: 'ezofficeinventory-mobile',
    title: 'EZOfficeInventory (Mobile)',
    description: 'Track assets on the go with barcode scanning.',
    features: ['Offline check-in/out', 'QR/barcode scans', 'Web-app sync'],
    techStack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Redux Toolkit',
      'React Navigation',
      'React Native Elements',
      'SQLite',
      'Axios',
      'BLE Manager',
      'Firebase Analytics',
    ],
    iosUrl: 'https://apps.apple.com/us/app/ezo/id516935177',
    androidUrl:
      'https://play.google.com/store/apps/details?id=com.ezofficeinventory.mobile2',
    category: 'mobile',
  },
  {
    id: 'assetsonar-mobile',
    title: 'AssetSonar (Mobile)',
    description: 'Mobile tool for IT asset management.',
    features: [
      'License scanning',
      'Memoized performance',
      'Offline inventory logs',
    ],
    techStack: [
      'React Native',
      'React',
      'React Redux',
      'React Native Reanimated',
      'TypeORM',
      'AsyncStorage',
      'NetInfo',
      'Expo Local Authentication',
      'Stripe',
      'React Native Maps',
    ],
    iosUrl: 'https://apps.apple.com/us/app/ezo-assetsonar/id1477590025',
    androidUrl:
      'https://play.google.com/store/apps/details?id=com.assetsonar.mobile',
    category: 'mobile',
  },
  {
    id: 'ezocmms-mobile',
    title: 'EZO CMMS (Mobile)',
    description: 'Manage maintenance directly from the field.',
    features: [
      'Push notifications',
      'Maintenance task tracking',
      'Work order views',
    ],
    techStack: [
      'React Native',
      'Expo',
      'Redux Toolkit',
      'React Native Gesture Handler',
      'Expo Secure Store',
      'React Native Offline',
      'Crypto-JS',
      'Square In-App Payments',
      'RFID SDK',
      'Expo Location',
    ],
    iosUrl: 'https://apps.apple.com/jp/app/ezo-cmms/id6448132457?l=en-US',
    androidUrl:
      'https://play.google.com/store/apps/details?id=com.ezocmms.mobile',
    category: 'mobile',
  },
  {
    id: 'ezrentout-mobile',
    title: 'EZRentOut (Mobile)',
    description: 'Rental operations and inventory access.',
    features: [
      'Booking/return features',
      'Item views with filters',
      'Offline-friendly UI',
    ],
    techStack: [
      'React Native',
      'TypeScript',
      'React Navigation',
      'React Native Elements',
      'React Native Camera',
      'Image Picker',
      'Firebase Crashlytics',
      'i18n-js',
      'Moment.js',
    ],
    iosUrl: 'https://apps.apple.com/us/app/ezrentout/id907018745',
    androidUrl:
      'https://play.google.com/store/apps/details?id=com.ezrentout.mobile',
    category: 'mobile',
  },
];

export function getFeaturedProject(): Project | null {
  return projects.find((project) => project.category === 'featured') || null;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.category === 'featured');
}

export function getWebProjects(): Project[] {
  return projects.filter((project) => project.category === 'web');
}

export function getMobileProjects(): Project[] {
  return projects.filter((project) => project.category === 'mobile');
}
