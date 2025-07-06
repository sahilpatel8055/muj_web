export interface Course {
  id: string;
  title: string;
  duration: string;
  fee: string;
  description: string;
  highlights: string[];
  category: string;
  university: string;
  eligibility: string;
}

export const courses: Course[] = [
  // Management Courses
  {
    id: "mba",
    title: "Master of Business Administration (MBA)",
    duration: "2 Years",
    fee: "₹2,40,000",
    description: "Comprehensive business management program with specializations in Finance, Marketing, HR, and Operations.",
    highlights: [
      "Industry-relevant curriculum",
      "Live projects and case studies",
      "100% placement assistance",
      "Flexible online learning",
      "Guest lectures by industry experts"
    ],
    category: "Management",
    university: "MAHE & SMU",
    eligibility: "Bachelor's degree with 50% marks"
  },
  {
    id: "bba",
    title: "Bachelor of Business Administration (BBA)",
    duration: "3 Years",
    fee: "₹1,80,000",
    description: "Foundation program in business administration covering all aspects of modern business management.",
    highlights: [
      "Comprehensive business foundation",
      "Industry exposure through internships",
      "Soft skills development",
      "Entrepreneurship focus",
      "Digital business modules"
    ],
    category: "Management",
    university: "MUJ & SMU",
    eligibility: "12th pass with 50% marks"
  },

  // Information Technology Courses
  {
    id: "mca",
    title: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    fee: "₹2,00,000",
    description: "Advanced computer science program focusing on software development, data structures, and emerging technologies.",
    highlights: [
      "Latest programming languages",
      "AI & Machine Learning modules",
      "Industry projects",
      "Cloud computing specialization",
      "High-demand career opportunities"
    ],
    category: "Information Technology",
    university: "MAHE & SMU",
    eligibility: "BCA/B.Sc with Mathematics"
  },
  {
    id: "bca",
    title: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years",
    fee: "₹1,50,000",
    description: "Comprehensive computer science program covering programming, database management, and web technologies.",
    highlights: [
      "Programming fundamentals",
      "Web development technologies",
      "Database management systems",
      "Software engineering practices",
      "Industry-ready skills"
    ],
    category: "Information Technology",
    university: "All Branches",
    eligibility: "12th pass with Mathematics"
  },

  // Data Science Courses
  {
    id: "msc-data-science",
    title: "M.Sc in Data Science",
    duration: "2 Years",
    fee: "₹2,50,000",
    description: "Advanced program in data analytics, machine learning, and artificial intelligence applications.",
    highlights: [
      "Python & R programming",
      "Machine learning algorithms",
      "Big data analytics",
      "Statistical modeling",
      "Industry capstone projects"
    ],
    category: "Data Science",
    university: "MAHE & MUJ",
    eligibility: "Bachelor's in Science/Engineering"
  },
  {
    id: "business-analytics",
    title: "M.Sc in Business Analytics",
    duration: "2 Years",
    fee: "₹2,30,000",
    description: "Specialized program combining business knowledge with analytical skills for data-driven decision making.",
    highlights: [
      "Business intelligence tools",
      "Predictive analytics",
      "Data visualization",
      "Strategic decision making",
      "Industry consulting projects"
    ],
    category: "Data Science",
    university: "MAHE & MUJ",
    eligibility: "Bachelor's degree with 50% marks"
  },

  // Commerce Courses
  {
    id: "bcom",
    title: "Bachelor of Commerce (BCOM)",
    duration: "3 Years",
    fee: "₹1,20,000",
    description: "Comprehensive commerce program covering accounting, finance, taxation, and business law.",
    highlights: [
      "Financial accounting principles",
      "Business law and ethics",
      "Taxation and auditing",
      "Economics and statistics",
      "Professional skill development"
    ],
    category: "Commerce",
    university: "All Branches",
    eligibility: "12th pass from any stream"
  },
  {
    id: "mcom",
    title: "Master of Commerce (M.Com)",
    duration: "2 Years",
    fee: "₹1,60,000",
    description: "Advanced commerce program with specializations in Accounting, Finance, and Business Management.",
    highlights: [
      "Advanced accounting concepts",
      "Financial management",
      "Research methodology",
      "Corporate governance",
      "Professional certification preparation"
    ],
    category: "Commerce",
    university: "MAHE & SMU",
    eligibility: "BCOM with 50% marks"
  },

  // Media & Journalism
  {
    id: "ma-journalism",
    title: "MA in Journalism & Mass Communication",
    duration: "2 Years",
    fee: "₹2,00,000",
    description: "Comprehensive media program covering print, electronic, and digital journalism with practical training.",
    highlights: [
      "News reporting and writing",
      "Digital media production",
      "Media ethics and law",
      "Public relations",
      "Internships with media houses"
    ],
    category: "Media & Journalism",
    university: "MUJ",
    eligibility: "Bachelor's degree in any discipline"
  },

  // Arts & Humanities
  {
    id: "ba",
    title: "Bachelor of Arts (BA)",
    duration: "3 Years",
    fee: "₹1,00,000",
    description: "Liberal arts program offering multiple specializations in humanities and social sciences.",
    highlights: [
      "Multiple specialization options",
      "Critical thinking development",
      "Research and writing skills",
      "Cultural and social awareness",
      "Flexible career pathways"
    ],
    category: "Arts & Humanities",
    university: "All Branches",
    eligibility: "12th pass from any stream"
  },
  {
    id: "ma",
    title: "Master of Arts (MA)",
    duration: "2 Years",
    fee: "₹1,40,000",
    description: "Advanced arts program with specializations in English, Psychology, Economics, and Political Science.",
    highlights: [
      "Subject specialization",
      "Research methodology",
      "Academic writing skills",
      "Critical analysis abilities",
      "Preparation for higher studies"
    ],
    category: "Arts & Humanities",
    university: "MAHE & SMU",
    eligibility: "Bachelor's degree in relevant field"
  }
];

export const getCoursesByCategory = (category: string) => {
  return courses.filter(course => course.category === category);
};

export const getCourseById = (id: string) => {
  return courses.find(course => course.id === id);
};