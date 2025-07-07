export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  category: 'featured' | 'web' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 'stockpioneer',
    title: 'StockPioneer – MERN Inventory Manager',
    description:
      'A full-stack inventory tracking solution for retailers and SMBs.',
    features: [
      'Inventory check-in/out, return, damage, sale',
      'Multi-location & supplier management',
      'Real-time dashboards & action logs',
      'JWT-secured login, cloud-first architecture',
    ],
    techStack: ['MERN Stack', 'TailwindCSS'],
    liveUrl: 'https://stockpioneer-backend.onrender.com',
    demoUrl: 'https://www.youtube.com/watch?v=klnyU4ILK8Y',
    category: 'featured',
  },
  {
    id: 'intelliserve-crm',
    title: 'IntelliServe CRM – Full-Stack Appointment & Service Management',
    description:
      'A robust, full-stack CRM application tailored for service-based businesses like mechanics, beauticians, and dentists.',
    features: [
      'End-to-end customer relationship management',
      'Appointment scheduling with public booking interface',
      'Multi-business type support (Mechanic, Beautician, Dentist, Tutor)',
      'Dashboard with insights, services management, and customer tracking',
      'AI chatbot for customer queries (WIP)',
    ],
    techStack: [
      'React',
      'Vite',
      'TailwindCSS',
      'Node.js',
      'Express',
      'MongoDB Atlas',
    ],
    liveUrl: 'https://intelliserve-crm.onrender.com',
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
    techStack: ['Ruby on Rails', 'React', 'Redux', 'MySQL', 'AWS'],
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
    techStack: ['Ruby on Rails', 'React', 'MySQL'],
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
    techStack: ['Rails', 'React', 'Redux'],
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
    techStack: ['Ruby on Rails', 'React', 'jQuery'],
    liveUrl: 'https://www.ezrentout.com',
    category: 'web',
  },
  {
    id: 'ezofficeinventory-mobile',
    title: 'EZOfficeInventory (Mobile)',
    description: 'Track assets on the go with barcode scanning.',
    features: ['Offline check-in/out', 'QR/barcode scans', 'Web-app sync'],
    techStack: ['React Native', 'Redux'],
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
    techStack: ['React Native', 'Redux Thunk'],
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
    techStack: ['React Native', 'TypeScript'],
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
    techStack: ['React Native', 'Redux'],
    category: 'mobile',
  },
];

export const getFeaturedProject = () =>
  projects.find((p) => p.category === 'featured');
export const getWebProjects = () =>
  projects.filter((p) => p.category === 'web');
export const getMobileProjects = () =>
  projects.filter((p) => p.category === 'mobile');
