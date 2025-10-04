export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  tech: string[];
  color: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  glowClass: string;
  checkpoint: number;
  featured: boolean;
  
  // Project Story
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  
  solution: {
    title: string;
    description: string;
    approach: string[];
  };
  
  highlights: {
    title: string;
    features: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  
  // Visual Assets
  images: {
    hero: string;
    screenshots: string[];
    thumbnail: string;
  };
  
  // Metrics & Stats
  stats: {
    [key: string]: string;
  };
  
  achievements: string[];
  
  // Links
  github?: string;
  demo?: string;
  
  // Timeline
  duration: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'supermarket-billing-system',
    title: 'Supermarket Billing System',
    shortDescription: 'Full-featured Windows application for managing supermarket operations with inventory tracking, billing, and reporting.',
    category: 'Desktop Application',
    tech: ['C#', 'WinForms', 'SQL Server', '.NET'],
    color: '#00d4ff',
    colorClass: 'text-sport-blue',
    bgClass: 'bg-sport-blue/10',
    borderClass: 'border-sport-blue/30',
    glowClass: 'shadow-sport-blue/50',
    checkpoint: 1,
    featured: true,
    
    problem: {
      title: 'Slow Manual Checkout Process',
      description: 'Local supermarkets were struggling with long checkout queues, manual inventory tracking errors, and lack of real-time sales data. Store owners had no visibility into stock levels, leading to stockouts and overstocking.',
      painPoints: [
        'Average checkout time: 5-7 minutes per customer',
        'Daily inventory discrepancies of 15-20%',
        'No real-time sales analytics',
        'Manual price lookups causing delays',
        'Lost revenue due to stock mismanagement'
      ]
    },
    
    solution: {
      title: 'Automated POS System',
      description: 'Built a comprehensive point-of-sale system with barcode scanning, real-time inventory sync, and automated reporting. The system integrated with existing SQL databases and provided an intuitive Windows interface.',
      approach: [
        'Implemented barcode scanning for instant product lookup',
        'Real-time inventory updates with each transaction',
        'Automated daily, weekly, and monthly sales reports',
        'Multi-user support with role-based permissions',
        'Offline mode with auto-sync when connection restored'
      ]
    },
    
    highlights: {
      title: 'Key Features',
      features: [
        {
          title: 'Lightning Fast Checkout',
          description: 'Reduced average checkout time from 5 minutes to under 2 minutes with barcode scanning and quick payment processing.',
          icon: 'Zap'
        },
        {
          title: 'Real-Time Inventory',
          description: 'Live stock tracking with automatic alerts for low inventory, preventing stockouts and optimizing ordering.',
          icon: 'Database'
        },
        {
          title: 'Sales Analytics',
          description: 'Comprehensive dashboards showing daily sales, best-selling products, and profit margins in real-time.',
          icon: 'TrendingUp'
        },
        {
          title: 'Multi-Store Ready',
          description: 'Centralized database supporting multiple store locations with consolidated reporting.',
          icon: 'Building'
        }
      ]
    },
    
    images: {
      hero: '/projects/supermarket/hero.jpg',
      screenshots: [
        '/projects/supermarket/checkout.jpg',
        '/projects/supermarket/inventory.jpg',
        '/projects/supermarket/reports.jpg',
        '/projects/supermarket/dashboard.jpg'
      ],
      thumbnail: '/projects/supermarket/thumbnail.jpg'
    },
    
    stats: {
      users: '500+',
      performance: '98%',
      rating: '4.8/5'
    },
    
    achievements: [
      'Deployed in 3 retail stores',
      '40% faster checkout process',
      'Zero critical bugs in 6 months',
      'Handled 10,000+ transactions',
      '85% reduction in inventory errors'
    ],
    
    github: 'https://github.com/ziadteama',
    demo: undefined,
    
    duration: '3 months',
    year: '2024'
  },
  
  {
    id: '2',
    slug: 'university-management-system',
    title: 'University Management System',
    shortDescription: 'Comprehensive multi-role system for managing students, faculty, courses, and grades with advanced authentication.',
    category: 'Enterprise System',
    tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    color: '#00ff88',
    colorClass: 'text-sport-green',
    bgClass: 'bg-sport-green/10',
    borderClass: 'border-sport-green/30',
    glowClass: 'shadow-sport-green/50',
    checkpoint: 2,
    featured: true,
    
    problem: {
      title: 'Fragmented Academic Administration',
      description: 'University departments were using separate spreadsheets and manual processes for student records, course enrollment, and grade management. This led to data inconsistencies, security issues, and administrative overhead.',
      painPoints: [
        'Student data scattered across multiple Excel files',
        'Manual grade entry prone to errors',
        'No centralized authentication system',
        'Difficult to generate transcripts and reports',
        'Security concerns with shared spreadsheets'
      ]
    },
    
    solution: {
      title: 'Unified Management Platform',
      description: 'Developed an enterprise-grade system with role-based access for students, faculty, admins, registrar, and department heads. Centralized database with secure authentication and comprehensive audit trails.',
      approach: [
        'Role-based access control (RBAC) with 5 distinct user types',
        'Secure authentication with password hashing and session management',
        'Centralized MySQL database with proper normalization',
        'Automated report generation for transcripts and analytics',
        'Real-time grade posting and student notifications'
      ]
    },
    
    highlights: {
      title: 'System Capabilities',
      features: [
        {
          title: 'Multi-Role Dashboard',
          description: 'Customized interfaces for students, faculty, and administrators with role-specific features and permissions.',
          icon: 'Users'
        },
        {
          title: 'Course Management',
          description: 'Complete course lifecycle management from creation to enrollment, scheduling, and grading.',
          icon: 'BookOpen'
        },
        {
          title: 'Grade Processing',
          description: 'Automated grade calculations, GPA tracking, and transcript generation with academic integrity checks.',
          icon: 'Award'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Real-time insights into enrollment trends, course performance, and student progress tracking.',
          icon: 'BarChart'
        }
      ]
    },
    
    images: {
      hero: '/projects/university/hero.jpg',
      screenshots: [
        '/projects/university/dashboard.jpg',
        '/projects/university/enrollment.jpg',
        '/projects/university/grades.jpg',
        '/projects/university/reports.jpg'
      ],
      thumbnail: '/projects/university/thumbnail.jpg'
    },
    
    stats: {
      roles: '5',
      modules: '12',
      uptime: '99.9%'
    },
    
    achievements: [
      'Serves 1,000+ students daily',
      '5 role-based access levels',
      '12 integrated modules',
      '99.9% system uptime',
      'Reduced admin workload by 60%'
    ],
    
    github: 'https://github.com/ziadteama',
    demo: undefined,
    
    duration: '4 months',
    year: '2024'
  },
  
  {
    id: '3',
    slug: 'book-rating-platform',
    title: 'Book Rating Platform',
    shortDescription: 'Dynamic web app for book reviews and ratings with user authentication, search functionality, and real-time updates.',
    category: 'Full-Stack Web App',
    tech: ['Express.js', 'EJS', 'MongoDB', 'Node.js'],
    color: '#ff6b35',
    colorClass: 'text-sport-orange',
    bgClass: 'bg-sport-orange/10',
    borderClass: 'border-sport-orange/30',
    glowClass: 'shadow-sport-orange/50',
    checkpoint: 3,
    featured: true,
    
    problem: {
      title: 'Scattered Book Reviews',
      description: 'Book enthusiasts had no centralized platform to discover books, share reviews, and connect with fellow readers. Existing platforms were either too commercial or lacked community features.',
      painPoints: [
        'No dedicated community for book lovers',
        'Difficult to find honest, detailed reviews',
        'Commercial platforms prioritizing sales over reviews',
        'No personalized book recommendations',
        'Limited interaction between readers'
      ]
    },
    
    solution: {
      title: 'Community-Driven Platform',
      description: 'Created a full-stack web application focused on authentic book reviews and reader community. Features include user profiles, real-time reviews, advanced search, and personalized recommendations.',
      approach: [
        'User authentication with secure session management',
        'MongoDB for flexible book and review data storage',
        'Real-time review posting with instant updates',
        'Advanced search with filters (genre, rating, author)',
        'Recommendation engine based on user preferences'
      ]
    },
    
    highlights: {
      title: 'Platform Features',
      features: [
        {
          title: 'Smart Search',
          description: 'Advanced filtering by genre, author, rating, and publication year with instant results and fuzzy matching.',
          icon: 'Search'
        },
        {
          title: 'Community Reviews',
          description: 'Rich text reviews with ratings, comments, and upvoting system to surface quality content.',
          icon: 'MessageSquare'
        },
        {
          title: 'Personal Library',
          description: 'Users can create reading lists, track progress, and get personalized recommendations.',
          icon: 'Library'
        },
        {
          title: 'Real-Time Updates',
          description: 'Live notifications for new reviews, comments, and recommendations from followed users.',
          icon: 'Bell'
        }
      ]
    },
    
    images: {
      hero: '/projects/books/hero.jpg',
      screenshots: [
        '/projects/books/home.jpg',
        '/projects/books/search.jpg',
        '/projects/books/review.jpg',
        '/projects/books/profile.jpg'
      ],
      thumbnail: '/projects/books/thumbnail.jpg'
    },
    
    stats: {
      books: '1000+',
      reviews: '5000+',
      users: '200+'
    },
    
    achievements: [
      '200+ active users',
      '5,000+ community reviews',
      'Real-time rating updates',
      'Advanced search & filters',
      '70% user retention rate'
    ],
    
    github: 'https://github.com/ziadteama',
    demo: 'https://example.com',
    
    duration: '2 months',
    year: '2024'
  },
  
  {
    id: '4',
    slug: 'react-admin-dashboard',
    title: 'React Admin Dashboard',
    shortDescription: 'Modern, responsive admin dashboard with data visualization, real-time analytics, and REST API integration.',
    category: 'Frontend Application',
    tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    color: '#00d4ff',
    colorClass: 'text-sport-blue',
    bgClass: 'bg-sport-blue/10',
    borderClass: 'border-sport-blue/30',
    glowClass: 'shadow-sport-blue/50',
    checkpoint: 4,
    featured: true,
    
    problem: {
      title: 'Complex Data, Poor Interface',
      description: 'Administrators were overwhelmed with data spread across multiple tools and dashboards. No single source of truth for KPIs, and existing interfaces were not mobile-friendly.',
      painPoints: [
        'Data scattered across multiple platforms',
        'No mobile access to admin functions',
        'Slow page loads with heavy dashboards',
        'Difficult to visualize trends and patterns',
        'No real-time data updates'
      ]
    },
    
    solution: {
      title: 'Unified Dashboard Experience',
      description: 'Built a modern, TypeScript-based React dashboard with real-time data visualization, responsive design, and modular component architecture. Integrated with REST APIs for live data.',
      approach: [
        'Component-based architecture with 50+ reusable components',
        'TypeScript for type safety and better developer experience',
        'Chart.js integration for interactive data visualization',
        'Responsive design working on all device sizes',
        'Optimized bundle size with code splitting'
      ]
    },
    
    highlights: {
      title: 'Dashboard Capabilities',
      features: [
        {
          title: 'Interactive Charts',
          description: '15 different chart types including line, bar, pie, and scatter plots with drill-down capabilities.',
          icon: 'LineChart'
        },
        {
          title: 'Responsive Design',
          description: 'Fully responsive layout adapting to desktop, tablet, and mobile with touch-optimized controls.',
          icon: 'Smartphone'
        },
        {
          title: 'Real-Time Data',
          description: 'Live updates via WebSocket connections with automatic chart refreshes and notifications.',
          icon: 'Activity'
        },
        {
          title: 'Component Library',
          description: 'Reusable component system with consistent design patterns and documentation.',
          icon: 'Box'
        }
      ]
    },
    
    images: {
      hero: '/projects/dashboard/hero.jpg',
      screenshots: [
        '/projects/dashboard/overview.jpg',
        '/projects/dashboard/analytics.jpg',
        '/projects/dashboard/mobile.jpg',
        '/projects/dashboard/charts.jpg'
      ],
      thumbnail: '/projects/dashboard/thumbnail.jpg'
    },
    
    stats: {
      components: '50+',
      charts: '15',
      responsive: '100%'
    },
    
    achievements: [
      '50+ reusable components',
      '15 interactive charts',
      '100% mobile responsive',
      '60% faster admin workflow',
      '90+ Lighthouse score'
    ],
    
    github: 'https://github.com/ziadteama',
    demo: 'https://example.com',
    
    duration: '3 months',
    year: '2024'
  },
  
  {
    id: '5',
    slug: 'data-analysis-pipeline',
    title: 'Data Analysis Pipeline',
    shortDescription: 'Automated data processing and machine learning pipeline for predictive analytics using Python libraries.',
    category: 'Data Science',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'PostgreSQL'],
    color: '#00ff88',
    colorClass: 'text-sport-green',
    bgClass: 'bg-sport-green/10',
    borderClass: 'border-sport-green/30',
    glowClass: 'shadow-sport-green/50',
    checkpoint: 5,
    featured: false,
    
    problem: {
      title: 'Manual Data Analysis Bottleneck',
      description: 'Data teams were spending days manually cleaning data, running analyses, and training models. The process was error-prone, not reproducible, and couldn&apos;t scale.',
      painPoints: [
        'Manual data cleaning taking 2-3 days per dataset',
        'Inconsistent preprocessing across team members',
        'No automated model selection or tuning',
        'Difficult to reproduce results',
        'Cannot handle large datasets efficiently'
      ]
    },
    
    solution: {
      title: 'End-to-End ML Pipeline',
      description: 'Developed an automated pipeline handling data ingestion, preprocessing, feature engineering, model training, evaluation, and deployment. Reduced analysis time from days to hours.',
      approach: [
        'Automated data ingestion from multiple sources (CSV, API, SQL)',
        'Smart preprocessing with missing value handling and outlier detection',
        'Feature engineering with automated selection algorithms',
        'Multi-model training with hyperparameter optimization',
        'Model evaluation and comparison with cross-validation'
      ]
    },
    
    highlights: {
      title: 'Pipeline Features',
      features: [
        {
          title: 'Auto Feature Engineering',
          description: 'Intelligent feature creation, selection, and transformation based on data characteristics.',
          icon: 'Cpu'
        },
        {
          title: 'Model Comparison',
          description: 'Automatically trains and compares 5+ algorithms, selecting the best performer.',
          icon: 'GitCompare'
        },
        {
          title: 'Data Validation',
          description: 'Built-in data quality checks, anomaly detection, and automated reporting.',
          icon: 'CheckCircle'
        },
        {
          title: 'Scalable Processing',
          description: 'Handles large datasets efficiently with parallel processing and batch operations.',
          icon: 'Maximize'
        }
      ]
    },
    
    images: {
      hero: '/projects/ml-pipeline/hero.jpg',
      screenshots: [
        '/projects/ml-pipeline/workflow.jpg',
        '/projects/ml-pipeline/results.jpg',
        '/projects/ml-pipeline/visualization.jpg',
        '/projects/ml-pipeline/performance.jpg'
      ],
      thumbnail: '/projects/ml-pipeline/thumbnail.jpg'
    },
    
    stats: {
      accuracy: '94%',
      datasets: '10+',
      models: '5'
    },
    
    achievements: [
      '94% prediction accuracy',
      'Automated ML pipeline',
      'Processed 10+ datasets',
      '80% time reduction',
      'Reproducible results'
    ],
    
    github: 'https://github.com/ziadteama',
    demo: undefined,
    
    duration: '2 months',
    year: '2024'
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getAllProjectSlugs = () => projects.map(p => ({ slug: p.slug }));
