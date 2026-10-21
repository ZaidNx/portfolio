export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  iosUrl?: string;
  androidUrl?: string;
  featureLabel?: string;
  stackLabel?: string;
  eyebrow?: string;
  category: 'professional' | 'product' | 'mobile' | 'public';
}

export const professionalWork: Project[] = [
  {
    id: 'listing-filter-platform',
    title: 'Multi-product listing filter platform',
    description:
      'Owned and extended a shared filtering platform used across four enterprise SaaS products and their React Native clients.',
    features: [
      'Built on an existing YAML-driven structure with reusable React components, Redux state and Rails filter services',
      'Solved persisted-filter restoration by rebuilding Redux state from URL parameters after a hard browser refresh',
      'Became the main technical reference over time and ran a knowledge-sharing session for the wider team',
    ],
    techStack: ['React', 'TypeScript', 'Redux', 'Redux Thunk', 'Ruby on Rails', 'YAML'],
    featureLabel: 'Ownership and contribution',
    eyebrow: 'Platform ownership',
    category: 'professional',
  },
  {
    id: 'dashboard-modernization',
    title: 'Multi-product dashboard & data-visualization modernization',
    description:
      'Implemented a React modernization of the main dashboard across four enterprise SaaS products, replacing legacy dashboard rendering with reusable, Figma-aligned data-visualization components.',
    features: [
      'Built reusable visualization components for stat/KPI tiles, donut, bar, line and funnel views, including a generic funnel component reused across product-specific sales and license funnels',
      'Implemented typed data parsers over backend contracts, per-widget state with stale-request guards, and lazy visible-card fetching for responsive loading',
      'Delivered configurable dashboards with widget reordering, custom reports and product-specific alerts across all four products',
    ],
    techStack: ['React', 'TypeScript', 'Redux', 'Data Visualization', 'Ruby on Rails'],
    featureLabel: 'Implementation scope',
    eyebrow: 'Data visualization',
    category: 'professional',
  },
  {
    id: 'accessibility-implementation',
    title: 'Production accessibility for blind and low-vision users',
    description:
      'Implemented WCAG-aligned accessibility improvements in production React interfaces, based on requirements raised by a major enterprise customer.',
    features: [
      'Added semantic HTML structure, ARIA labels and accessible form controls across customer-facing interfaces',
      'Implemented keyboard navigation and visible focus states so interfaces remain usable without a mouse',
      'Worked interface-by-interface so existing functionality and layout stayed intact for all users',
    ],
    techStack: ['React', 'WCAG', 'ARIA', 'Semantic HTML', 'Keyboard Navigation'],
    featureLabel: 'Accessibility work',
    eyebrow: 'Accessibility',
    category: 'professional',
  },
  {
    id: 'legacy-react-modernization',
    title: 'Legacy-to-React modernization',
    description:
      'Implemented React modernization across mature SaaS modules while preserving permissions, behavior and feature parity.',
    features: [
      'Implemented substantial migration work across Members, Provisioning and Documents, and inherited and finalized the in-progress Vendors migration',
      'Worked with two other engineers on the large, permission-heavy Members migration',
      'Preserved existing permissions and business behavior while replacing repeated server-rendered page loads with faster React interactions',
    ],
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'React Query', 'Ruby on Rails', 'REST APIs'],
    featureLabel: 'Selected contribution',
    eyebrow: 'Frontend modernization',
    category: 'professional',
  },
  {
    id: 'offline-work-orders',
    title: 'Offline-first mobile work orders',
    description:
      'Designed and implemented an offline-first React Native and Rails workflow for field and maintenance teams working with unreliable connectivity.',
    features: [
      'Added connectivity detection, background caching, SQLite storage and offline-aware UX',
      'Queued offline writes and synchronized them in batches after reconnecting',
      'Used server-side background processing to protect stability during reconnect bursts',
    ],
    techStack: ['React Native', 'TypeScript', 'SQLite', 'Redux Thunk', 'Ruby on Rails', 'DelayedJob'],
    featureLabel: 'Architecture and delivery',
    eyebrow: 'Mobile architecture',
    category: 'professional',
  },
  {
    id: 'dispatch-center',
    title: 'Dispatch Center',
    description:
      'Built Dispatch Center in React, a unified request-management workspace combining multiple operational workflows with a customized scheduling/calendar experience.',
    features: [
      'Supported multiple request types and asset reservation and checkout timelines',
      'Worked closely with product, UX and QA on the customized scheduling experience',
      'Guided a junior engineer on backend data shapes and React debugging',
    ],
    techStack: ['React', 'TypeScript', 'Redux', 'REST APIs', 'Ruby on Rails'],
    featureLabel: 'Selected contribution',
    eyebrow: 'Product engineering',
    category: 'professional',
  },
  {
    id: 'cmdb-integration',
    title: 'CMDB cross-product integration',
    description:
      'Integrated an existing React CMDB module into a separate PHP/GLPI ITSM application despite having no prior professional PHP experience.',
    features: [
      'Created a dedicated esbuild entry point and deployment-time bundle distribution through AWS S3',
      'Resolved same-origin API proxying, route allowlisting, authentication, session and CSS-collision issues',
      'Documented the production-safe integration for other developers',
    ],
    techStack: ['React', 'esbuild', 'PHP / GLPI', 'REST APIs', 'AWS S3'],
    featureLabel: 'Integration work',
    eyebrow: 'Cross-product integration',
    category: 'professional',
  },
  {
    id: 'frontend-delivery',
    title: 'Frontend delivery performance',
    description:
      'Completed the CloudFront/S3 rollout for frontend asset delivery after taking over the in-progress initiative and resolving remaining QA issues.',
    features: [
      'Completed rollout work across validated staging and production environments',
      'Helped reduce measured page-load time by roughly half across validated staging and production measurements',
    ],
    techStack: ['AWS CloudFront', 'AWS S3', 'React', 'CodeDeploy', 'Performance debugging'],
    featureLabel: 'Delivery and outcome',
    eyebrow: 'Performance engineering',
    category: 'professional',
  },
];

export const productProjects: Project[] = [
  {
    id: 'ezo-web',
    title: 'EZO / EZOfficeInventory',
    description:
      'Asset and equipment-management platform. Contributions span React modernization, shared filters, asset workflows and React Native field operations.',
    features: [],
    techStack: [],
    liveUrl: 'https://ezo.io/ezofficeinventory/',
    featureLabel: 'Selected contributions',
    category: 'product',
  },
  {
    id: 'assetsonar-web',
    title: 'AssetSonar',
    description:
      'IT asset-management platform. Contributions include React/React Native workflows, shared filtering and the CMDB-to-ITSM integration.',
    features: [],
    techStack: [],
    liveUrl: 'https://ezo.io/assetsonar/',
    featureLabel: 'Selected contributions',
    category: 'product',
  },
  {
    id: 'ezocmms-web',
    title: 'EZO CMMS',
    description:
      'Maintenance and work-order platform. Contributions include mobile work-order experiences, planner/scheduling work and offline-first field workflows.',
    features: [],
    techStack: [],
    liveUrl: 'https://ezo.io/ezo-cmms/',
    featureLabel: 'Selected contributions',
    category: 'product',
  },
  {
    id: 'ezrentout-web',
    title: 'EZRentOut',
    description:
      'Equipment-rental platform. Contributions include orders and reservations, shared filters, mobile workflows and Dispatch Center.',
    features: [],
    techStack: [],
    liveUrl: 'https://ezo.io/ezrentout/',
    featureLabel: 'Selected contributions',
    category: 'product',
  },
];

export const mobileProjects: Project[] = [
  {
    id: 'ezo-mobile',
    title: 'EZO Mobile',
    description:
      'For operations teams managing equipment in the field: scan QR and barcodes, check items in and out, run location and custody audits, and manage reservations and carts on the go.',
    features: [],
    techStack: [],
    iosUrl: 'https://apps.apple.com/us/app/ezo/id516935177',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.ezofficeinventory.mobile2',
    featureLabel: 'Selected contributions',
    category: 'mobile',
  },
  {
    id: 'assetsonar-mobile',
    title: 'AssetSonar Mobile',
    description:
      'For IT teams managing hardware and software lifecycles: scan and update assets, verify custody, run audits, and keep accurate ITAM records from the field.',
    features: [],
    techStack: [],
    iosUrl: 'https://apps.apple.com/us/app/ezo-assetsonar/id1477590025',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.assetsonar.mobile',
    featureLabel: 'Selected contributions',
    category: 'mobile',
  },
  {
    id: 'ezocmms-mobile',
    title: 'EZO CMMS Mobile',
    description:
      'For maintenance technicians and field teams: manage assigned work orders and maintenance tasks, record work logs offline, and synchronize updates when connectivity returns.',
    features: [],
    techStack: [],
    iosUrl: 'https://apps.apple.com/jp/app/ezo-cmms/id6448132457?l=en-US',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.ezocmms.mobile',
    featureLabel: 'Selected contributions',
    category: 'mobile',
  },
  {
    id: 'ezrentout-mobile',
    title: 'EZRentOut Mobile',
    description:
      'For equipment-rental teams in the office or field: rent out and return orders, scan equipment, check availability, and manage customers, vendors and locations on the go.',
    features: [],
    techStack: [],
    iosUrl: 'https://apps.apple.com/us/app/ezrentout/id907018745',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.ezrentout.mobile',
    featureLabel: 'Selected contributions',
    category: 'mobile',
  },
];

export const publicProjects: Project[] = [
  {
    id: 'intelliserve-crm',
    title: 'IntelliServe CRM',
    description:
      'An AI-assisted rapid prototype exploring service-business CRM workflows through appointments, customers, dashboards and analytics.',
    features: ['Appointment and customer workflows', 'Responsive dashboards and analytics', 'Service-business management concepts'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node / Express', 'MongoDB'],
    liveUrl: 'https://intelliservecrm.onrender.com/',
    githubUrl: 'https://github.com/ZaidNx/IntelliServeCRM',
    featureLabel: 'Prototype scope',
    category: 'public',
  },
  {
    id: 'stockpioneer',
    title: 'StockPioneer',
    description:
      'An AI-assisted inventory-management prototype covering stock, suppliers, locations and core inventory workflows.',
    features: ['Stock and item management', 'Supplier and location records', 'Inventory activity and dashboard views'],
    techStack: ['React', 'Tailwind CSS', 'Node / Express', 'MongoDB'],
    liveUrl: 'https://stockpioneer-backend.onrender.com/',
    githubUrl: 'https://github.com/ZaidNx/StockPioneer',
    featureLabel: 'Prototype scope',
    category: 'public',
  },
];
