import { Project, Experience, Education } from '../types';

export const PERSONAL_INFO = {
  name: 'Shakthi P',
  title: 'Software Developer · Automation QA · Product Engineer',
  specialization: 'Python · Flask · Java · React.js · Automation QA · Machine Learning',
  location: 'Bengaluru, India',
  email: 'shakthipthulasi@gmail.com',
  phone: '+91 8217479968',
  github: 'https://github.com/shakthi-p',
  linkedin: 'https://www.linkedin.com/in/shakthi-p-',
  handle: '@shakthi-p',
  bio: 'MCA graduate with practical experience in Python and Flask through academic projects, along with foundational knowledge of React.js and MongoDB. Familiar with REST APIs, database concepts, and software development practices. Interested in developing reliable software applications and expanding full-stack development skills.',
  longBio: `I am an MCA graduate from Nitte Meenakshi Institute of Technology with hands-on internship experience in Quality Assurance (Entomo) and Business Analysis (Digital INNK).

My technical journey centers on Python and Flask web services, REST APIs, Automation QA, and applying Machine Learning models like Isolation Forest for behavioral security and PyTorch LSTM networks for time-series predictions. I am dedicated to building dependable software, refining test automation, and engineering great digital products.`,
  stats: [
    { label: 'MCA CGPA', value: '9.01 / 10' },
    { label: 'Work Experience', value: '2 Internships' },
    { label: 'Core Languages', value: 'Python, Java, JS' },
    { label: 'QA & Testing', value: 'Postman & JIRA' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'insider-threat-detection',
    title: 'Real-Time Insider Threat Detection Using Behavioral Analysis',
    category: 'MCA Major Project · Python / ML / Security',
    tagline: 'Python, Flask, Isolation Forest, JWT, bcrypt, RBAC',
    description:
      'Developed a Python-based application to identify unusual employee activities and potential insider threats through behavioural analysis, applying Isolation Forest to detect anomalous behaviour and generate security alerts.',
    highlights: [
      'Developed a Python-based application to identify unusual employee activities and potential insider threats through behavioural analysis.',
      'Applied the Isolation Forest algorithm to detect anomalous behaviour, calculate risk scores, and generate security alerts.',
      'Implemented backend functionality using Flask with JWT authentication, bcrypt password hashing, and role-based access control.',
      'Created dashboards and audit logs to support activity monitoring and investigation of suspicious file-access events.',
    ],
    technologies: ['Python', 'Flask', 'Isolation Forest', 'JWT', 'bcrypt', 'RBAC', 'REST APIs'],
    githubUrl: 'https://github.com/shakthi-p/Real-Time-Insider-Threat-Detection-Using-Behavioral-Analysis',
    liveUrl: '#',
    featured: true,
    type: 'ml',
  },
  {
    id: 'stock-sentiment-app',
    title: 'Stock Market Sentiment Analysis',
    category: 'Academic Project · Machine Learning / Natural Language Processing',
    tagline: 'Python, Machine Learning, Naive Bayes, CountVectorizer, Flask, HTML, CSS, Bootstrap',
    description:
      'Developed a web-based Stock Market Sentiment Analysis application using Python and Flask to classify stock-related tweets into Positive, Neutral, or Negative sentiment categories using Machine Learning techniques.',
    highlights: [
      'Developed a sentiment classification model using the Naive Bayes algorithm and CountVectorizer for text feature extraction.',
      'Trained the model using a labeled dataset of stock market-related tweets.',
      'Integrated the trained Machine Learning model into a Flask-based web application for live sentiment prediction.',
      'Implemented a user-friendly interface using HTML, CSS, and Bootstrap to display sentiment classification results.',
      'Saved and integrated the trained model using Python\'s Pickle format for efficient predictions.',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Naive Bayes',
      'CountVectorizer',
      'Flask',
      'Pandas',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
    githubUrl: 'https://github.com/shakthi-p/stock-sentiment-app',
    liveUrl: '#',
    featured: true,
    type: 'nlp',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'entomo',
    role: 'Quality Assurance Intern',
    company: 'Entomo',
    location: 'Bengaluru, India',
    period: 'Feb. 2026 – Sep. 2026',
    isCurrent: false,
    description: [
      'Performed functional, regression, smoke, and sanity testing to validate application functionality against requirements.',
      'Designed and executed positive, negative, and edge-case test scenarios to identify defects.',
      'Validated REST APIs using Postman, including HTTP methods, JSON request and response structures, and status codes.',
      'Tracked defects in JIRA, documented reproducible steps, and performed retesting after fixes.',
      'Supported local environment validation and pre-release testing to improve application stability.',
      'Collaborated with Product Owners and cross-functional teams to clarify requirements and verify expected application behaviour.',
    ],
    skills: ['Postman', 'REST API Testing', 'JIRA', 'Regression Testing', 'Smoke Testing', 'Functional Testing'],
  },
  {
    id: 'digital-innk',
    role: 'Business Analyst Intern',
    company: 'Digital INNK',
    location: 'Bengaluru, India',
    period: 'Aug. 2024 – Jan. 2025',
    isCurrent: false,
    description: [
      'Analysed business requirements and translated them into user stories and acceptance criteria.',
      'Participated in backlog refinement and requirement discussions with cross-functional teams.',
      'Reviewed business workflows to identify gaps and clarify expected system behaviour.',
      'Prepared project documentation and collaborated with stakeholders to align requirements with proposed solutions.',
    ],
    skills: ['Requirement Analysis', 'User Stories', 'Workflow Modeling', 'Agile / Scrum', 'Documentation'],
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Nitte Meenakshi Institute of Technology',
    period: '2024 – June 2026',
    score: 'CGPA: 9.01/10',
    details: 'Specialized in Python, Flask, Software Engineering, REST APIs, and Machine Learning.',
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Maharani Lakshmi Ammanni College for Women',
    period: '2021 – 2024',
    score: 'CGPA: 8.10/10',
    details: 'Foundations in Computer Science, Programming, Data Structures, and Database Management Systems.',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'All',
    id: 'all',
  },
  {
    category: 'Languages',
    id: 'languages',
  },
  {
    category: 'Web & Backend',
    id: 'web',
  },
  {
    category: 'Data & ML',
    id: 'data',
  },
  {
    category: 'QA & Automation',
    id: 'tools',
  },
];

export const SKILLS_LIST = [
  // Programming Languages
  { name: 'Python', category: 'languages', level: 'Advanced', icon: 'python', desc: 'Backend services with Flask, data processing, anomaly detection, automation' },
  { name: 'JavaScript', category: 'languages', level: 'Proficient', icon: 'javascript', desc: 'ES6+ syntax, asynchronous requests, DOM manipulation, web interactivity' },
  { name: 'Java', category: 'languages', level: 'Proficient', icon: 'java', desc: 'Core Java, Object-Oriented Programming (OOP), collections, backend logic' },

  // Frontend & Backend
  { name: 'Flask', category: 'web', level: 'Advanced', icon: 'flask', desc: 'REST API fundamentals, routing, JWT authentication, bcrypt security' },
  { name: 'REST API Fundamentals', category: 'web', level: 'Advanced', icon: 'api', desc: 'HTTP methods (GET, POST, PUT, DELETE), JSON structures, status codes, CRUD' },
  { name: 'React.js (Basic)', category: 'web', level: 'Foundational', icon: 'react', desc: 'Component structure, state management hooks, responsive frontend layouts' },
  { name: 'HTML5 & CSS3', category: 'web', level: 'Proficient', icon: 'backend', desc: 'Semantic markup, responsive styling, flexbox, grid, interactive UI design' },
  { name: 'SQL', category: 'web', level: 'Proficient', icon: 'sql', desc: 'Relational database queries, schema structuring, joins, normalization' },
  { name: 'MongoDB (Basic)', category: 'web', level: 'Foundational', icon: 'db', desc: 'NoSQL document schemas, BSON collections, indexing fundamentals' },

  // Testing & Development Tools
  { name: 'Postman', category: 'tools', level: 'Advanced', icon: 'postman', desc: 'API testing, HTTP request validation, JSON assertions, test suites' },
  { name: 'JIRA', category: 'tools', level: 'Advanced', icon: 'jira', desc: 'Defect logging, reproducible test reporting, sprint backlog tracking' },
  { name: 'Testing Lifecycle', category: 'tools', level: 'Advanced', icon: 'qa', desc: 'Functional testing, regression testing, smoke testing, sanity checks, edge cases' },
  { name: 'Git & GitHub', category: 'tools', level: 'Advanced', icon: 'git', desc: 'Version control, repository management, branch workflows, commits' },
  { name: 'VS Code', category: 'tools', level: 'Proficient', icon: 'backend', desc: 'Primary IDE for Python, Java, JavaScript development, debugging, and terminal workflows' },

  // Machine Learning & Core Concepts
  { name: 'Isolation Forest', category: 'data', level: 'Proficient', icon: 'anomaly', desc: 'Unsupervised behavioral anomaly detection, employee activity risk scoring' },
  { name: 'PyTorch & LSTM', category: 'data', level: 'Intermediate', icon: 'pytorch', desc: 'Recurrent neural networks, time-series forecasting, tensor operations' },
  { name: 'Data Preprocessing', category: 'data', level: 'Proficient', icon: 'pandas', desc: 'MinMax scaling, moving averages, trend analysis, feature preparation' },
  { name: 'Core Concepts', category: 'data', level: 'Advanced', icon: 'ml', desc: 'OOP, JSON, HTTP Methods, CRUD Fundamentals, software development practices' },
];
