export const INITIAL_JOBS = [
  {
    id: "job-1",
    title: "Software Engineer - Backend (SDE-1)",
    company: "Razorpay",
    logoBg: "bg-blue-600",
    companyInitial: "RZ",
    location: "Bengaluru, India (Hybrid)",
    workMode: "Hybrid",
    type: "Full-Time",
    experience: "0 - 2 Years",
    salary: "₹18,000,00 - ₹24,000,00 LPA",
    category: "Software Engineering",
    postedDate: "2 days ago",
    urgent: true,
    tags: ["Go", "Node.js", "MySQL", "Distributed Systems", "Redis"],
    description: "Razorpay is looking for passionate Software Engineers to join our core Payments & Billing Infrastructure team. You will be responsible for building ultra-reliable, high-throughput financial transaction processing engines.",
    responsibilities: [
      "Design and maintain high-concurrency microservices processing millions of daily transactions.",
      "Optimize database queries, caching layers, and asynchronous event queues.",
      "Collaborate with Product Managers and Security engineers to ensure PCI-DSS compliance.",
      "Write clean, well-tested code with unit and integration coverage."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, IT, or equivalent experience.",
      "Strong proficiency in Golang, Java, or Node.js.",
      "Solid understanding of RESTful API design, database indexing, and caching using Redis/Memcached.",
      "Good grasp of Data Structures, Algorithms, and System Design basics."
    ],
    perks: ["Health Insurance for Family", "Flexible Working Hours", "Learning Stipend (₹50k/yr)", "Annual Retreats"],
    applyLink: "https://razorpay.com/careers"
  },
  {
    id: "job-2",
    title: "Frontend Developer (React.js / Next.js)",
    company: "Zomato",
    logoBg: "bg-red-600",
    companyInitial: "ZM",
    location: "Gurugram, India (On-site)",
    workMode: "Onsite",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹16,000,00 - ₹22,000,00 LPA",
    category: "Frontend",
    postedDate: "1 day ago",
    urgent: true,
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit"],
    description: "Zomato is hiring Frontend Engineers to build slick, high-performance web applications that power the food delivery and Blinkit ordering experiences for tens of millions of users.",
    responsibilities: [
      "Develop responsive and accessible web UIs using React, Next.js, and TypeScript.",
      "Optimize web application performance (Core Web Vitals, SSR, Bundle size optimization).",
      "Work closely with UI/UX designers to implement pixel-perfect micro-interactions.",
      "Build modular reusable component libraries."
    ],
    requirements: [
      "1+ years of experience building modern frontend applications.",
      "Deep understanding of JavaScript (ES6+), CSS3, and DOM manipulation.",
      "Experience with state management (Redux Toolkit, Zustand, or React Query).",
      "Familiarity with Web Vitals, Web Workers, and PWA capabilities."
    ],
    perks: ["Unlimited Food Discounts", "Wellness Allowance", "Stock Options (ESOPs)", "MacBook Pro provided"],
    applyLink: "https://zomato.com/careers"
  },
  {
    id: "job-3",
    title: "Graduate Software Trainee (2025/2026 Batch)",
    company: "TCS Digital",
    logoBg: "bg-purple-600",
    companyInitial: "TCS",
    location: "Pan India (Multiple Locations)",
    workMode: "Onsite",
    type: "Full-Time",
    experience: "Freshers (0 Yrs)",
    salary: "₹7,00,000 - ₹9,00,000 LPA",
    category: "Software Engineering",
    postedDate: "Today",
    urgent: false,
    tags: ["Java", "Python", "SQL", "Cloud Basics", "Data Structures"],
    description: "Tata Consultancy Services (TCS) invites applications for TCS Digital Cadre. Target audience: 2025 & 2026 Graduating B.E/B.Tech/M.E/M.Tech/MCA/M.Sc candidates with strong coding skills.",
    responsibilities: [
      "Participate in enterprise software development projects across Cloud, AI, and Fullstack domains.",
      "Learn and apply modern CI/CD pipelines, automated testing, and agile methodologies.",
      "Collaborate with global clients and technical leads."
    ],
    requirements: [
      "B.E. / B.Tech / M.E. / M.Tech / MCA / M.Sc in CS, IT, ECE, EEE or related branches.",
      "Minimum 60% or 6.0 CGPA throughout 10th, 12th, and Graduation.",
      "No active backlogs at the time of joining.",
      "Good problem-solving skills in C++, Java, or Python."
    ],
    perks: ["Industry Standard Certification Sponsorship", "Health Coverage", "Relocation Assistance"],
    applyLink: "https://nextstep.tcs.com"
  },
  {
    id: "job-4",
    title: "Associate Software Engineer (Java / AWS)",
    company: "Amazon",
    logoBg: "bg-amber-600",
    companyInitial: "AMZ",
    location: "Hyderabad, India (Hybrid)",
    workMode: "Hybrid",
    type: "Full-Time",
    experience: "0 - 1 Years",
    salary: "₹28,00,000 - ₹34,00,000 LPA",
    category: "Software Engineering",
    postedDate: "3 days ago",
    urgent: true,
    tags: ["Java", "AWS", "DynamoDB", "System Design", "Algorithms"],
    description: "Amazon Web Services (AWS) team is seeking Software Development Engineers (SDE-1) to build large-scale cloud infrastructure tools used by developers worldwide.",
    responsibilities: [
      "Solve complex scalability challenges using AWS primitives (Lambda, DynamoDB, SQS, ECS).",
      "Write high-quality object-oriented Java code.",
      "Participate in code reviews, design reviews, and operational on-call rotations."
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related STEM field.",
      "Strong CS fundamentals in Object Oriented Design, Data Structures & Algorithms.",
      "Hands-on project experience with Java, C++, or Python.",
      "Familiarity with cloud platforms (AWS, GCP, Azure) is a plus."
    ],
    perks: ["Sign-on Bonus", "RSU Stocks", "Comprehensive Health Insurance", "Transport Facility"],
    applyLink: "https://amazon.jobs"
  },
  {
    id: "job-5",
    title: "Data Analyst & Business Intelligence Trainee",
    company: "Deloitte",
    logoBg: "bg-emerald-600",
    companyInitial: "DEL",
    location: "Mumbai / Bengaluru, India",
    workMode: "Hybrid",
    type: "Full-Time",
    experience: "0 - 2 Years",
    salary: "₹9,50,000 - ₹12,00,000 LPA",
    category: "Data & Analytics",
    postedDate: "4 days ago",
    urgent: false,
    tags: ["SQL", "Python", "Power BI", "Tableau", "Excel"],
    description: "Deloitte US-India Offices is hiring Data Analysts to transform raw enterprise datasets into actionable executive dashboards and predictive analytical insights.",
    responsibilities: [
      "Extract, clean, and analyze multi-terabyte datasets using SQL and Python (Pandas/Polars).",
      "Build dynamic dashboards in Power BI and Tableau for fortune 500 clients.",
      "Automate reporting pipelines using Python scripts."
    ],
    requirements: [
      "Proficiency in SQL (Joins, Window Functions, Aggregations).",
      "Familiarity with Python data packages (Pandas, NumPy, Matplotlib).",
      "Strong analytical mindset and verbal communication skills."
    ],
    perks: ["Tuition Reimbursement", "Hybrid Flex Work", "Mental Health Support"],
    applyLink: "https://deloitte.com/careers"
  },
  {
    id: "job-6",
    title: "DevOps & Cloud Operations Engineer",
    company: "Flipkart",
    logoBg: "bg-yellow-600",
    companyInitial: "FK",
    location: "Bengaluru, India (On-site)",
    workMode: "Onsite",
    type: "Full-Time",
    experience: "1 - 3 Years",
    salary: "₹17,00,000 - ₹25,00,000 LPA",
    category: "DevOps & Infrastructure",
    postedDate: "5 days ago",
    urgent: false,
    tags: ["Kubernetes", "Docker", "Terraform", "CI/CD", "Prometheus"],
    description: "Join Flipkart's Core Infrastructure team supporting Big Billion Days scale events serving 100,000+ requests per second.",
    responsibilities: [
      "Manage Kubernetes clusters across private and public cloud environments.",
      "Automate Infrastructure-as-Code using Terraform and Ansible.",
      "Maintain Grafana/Prometheus monitoring and incident response automated alerts."
    ],
    requirements: [
      "Strong Linux administration and Bash/Python scripting.",
      "Hands-on experience with Docker, Kubernetes, and Helm.",
      "Knowledge of network routing, load balancers, and DNS."
    ],
    perks: ["Big Billion Day Bonuses", "Free On-premise Meals", "Fitness Center"],
    applyLink: "https://flipkartcareers.com"
  },
  {
    id: "job-7",
    title: "AI / Machine Learning Engineer Intern",
    company: "Google",
    logoBg: "bg-red-500",
    companyInitial: "GOOG",
    location: "Bengaluru / Hyderabad, India",
    workMode: "Hybrid",
    type: "Internship",
    experience: "Freshers / Pre-final Year",
    salary: "₹1,20,000 / month Stipend",
    category: "AI / ML",
    postedDate: "Today",
    urgent: true,
    tags: ["Python", "PyTorch", "TensorFlow", "NLP", "LLMs"],
    description: "Google Software Engineering Intern - Machine Learning program offers students the opportunity to work directly on cutting-edge Gemini AI models, Search algorithms, and Google Cloud AI infrastructure.",
    responsibilities: [
      "Train, fine-tune, and evaluate deep learning models using TensorFlow/PyTorch.",
      "Optimize latency and throughput of model inference pipelines.",
      "Publish research documentation and present findings to engineering teams."
    ],
    requirements: [
      "Currently enrolled in B.Tech/M.Tech/Ph.D. in Computer Science or related quantitative discipline.",
      "Solid foundation in Linear Algebra, Probability, Calculus, and Data Structures.",
      "Demonstrated experience in ML frameworks via projects or publications."
    ],
    perks: ["High conversion rate to Full-Time SDE", "Free Gourmet Meals", "Relocation & Housing Allowance"],
    applyLink: "https://careers.google.com"
  },
  {
    id: "job-8",
    title: "Specialist Programmer (SP) / Digital Specialist Engineer",
    company: "Infosys",
    logoBg: "bg-blue-700",
    companyInitial: "INFY",
    location: "Pan India (Bengaluru, Pune, Mysuru)",
    workMode: "Hybrid",
    type: "Full-Time",
    experience: "Freshers (0 Yrs)",
    salary: "₹6,25,000 - ₹9,50,000 LPA",
    category: "Software Engineering",
    postedDate: "2 days ago",
    urgent: false,
    tags: ["Data Structures", "Algorithms", "Competitive Programming", "Java/C++"],
    description: "Infosys Specialist Programmer role focuses on high-impact coding, enterprise solution architecture, and rapid prototyping for top global accounts.",
    responsibilities: [
      "Solve algorithmic problems and build enterprise grade microservices.",
      "Work with cutting edge frameworks across Cloud Native architectures."
    ],
    requirements: [
      "2025/2026 Batch B.E / B.Tech / M.Tech / MCA.",
      "Strong performance in HackWithInfy or Infytq certifications.",
      "Solid understanding of OOPs, DBMS, and DSA."
    ],
    perks: ["Mysuru Campus World Class Training", "Fast-track Promotion Path"],
    applyLink: "https://infosys.com/careers"
  }
];
