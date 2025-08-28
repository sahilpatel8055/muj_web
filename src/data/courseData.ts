// Course-specific data for fees and curriculum

export interface CourseFee {
  indian: {
    fullFee: string;
    semesterFee: string;
    emi: string;
  };
  nri: {
    fullFee: string;
    semesterFee: string;
    emi: string;
    currency: string;
  };
  foreign: {
    fullFee: string;
    semesterFee: string;
    emi: string;
    currency: string;
  };
  african: {
    fullFee: string;
    semesterFee: string;
    emi: string;
    currency: string;
  };
}

export interface Semester {
  semester: string;
  color: string;
  subjects: string[];
}

export interface CourseCurriculum {
  year1: Semester[];
  year2: Semester[];
  duration: string;
  hoursPerWeek: string;
  totalSemesters: string;
  credits: string;
}

// MBA Course Data
export const mbaCourseData = {
  fees: {
    indian: {
      fullFee: "1,75,000",
      semesterFee: "43,750",
      emi: "7,292",
    },
    nri: {
      fullFee: "4,000",
      semesterFee: "1,000",
      emi: "200",
      currency: "$"
    },
    foreign: {
      fullFee: "3,000",
      semesterFee: "750",
      emi: "150",
      currency: "$"
    },
    african: {
      fullFee: "2,500",
      semesterFee: "625",
      emi: "125",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Entrepreneurial Practice",
          "Business Communication (WAC)",
          "Managerial Economics",
          "Financial Accounting",
          "Data Visualisation (Excel/Tableau)",
          "Organizational Behaviour",
          "Marketing Management"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Business Research Methods (R/Python)",
          "Operation Management",
          "Human Resource Management",
          "Management Accounting",
          "Financial Management",
          "Legal Aspects of Business",
          "Business Communication (VAC)"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Core Subjects",
          "Strategic Management",
          "Term Paper",
          "Specialization elective subjects"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Core Subjects",
          "International Business Management",
          "Project"
        ]
      }
    ],
    duration: "24 months",
    hoursPerWeek: "15-20 Hours Per Week",
    totalSemesters: "4 Sem",
    credits: "90 Credits"
  }
};

// BBA Course Data
export const bbaCourseData = {
  fees: {
    indian: {
      fullFee: "1,35,000",
      semesterFee: "25,500",
      emi: "3,750",
    },
    nri: {
      fullFee: "2,046",
      semesterFee: "341",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "2,388",
      semesterFee: "398",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "1,800",
      semesterFee: "300",
      emi: "NA",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Business and Management Functions",
          "Financial Accounting",
          "Microeconomics",
          "Entrepreneurship and Innovation Management",
          "Microeconomics",
          "Office Automation Tools",
          "Universal Human Values"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Organizational Behavior",
          "Introduction to Python",
          "Financial Management",
          "Business Statistics",
          "Macroeconomics",
          "Business Communication"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Human Resource Management",
          "Operations Management",
          "Cost Accounting",
          "Marketing Management",
          "Business and Corporate Laws",
          "Entrepreneurship Development"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Indian Financial System",
          "Business Research Methods",
          "Supply Chain Management",
          "E-Commerce",
          "Digital Marketing",
          "Technology Management"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "12-15 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "126 Credits"
  }
};

// BCA Course Data
export const bcaCourseData = {
  fees: {
    indian: {
      fullFee: "1,35,000",
      semesterFee: "22,500",
      emi: "3,750",
    },
    nri: {
      fullFee: "2,196",
      semesterFee: "366",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "2,556",
      semesterFee: "426",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "1,920",
      semesterFee: "320",
      emi: "NA",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Fundamentals of Mathematics",
          "Technical Communication",
          "C Programming",
          "Mathematics-I",
          "Introduction to Web Programming",
          "C Programming Lab",
          "Web Programming Lab",
          "Environmental Science"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Basic Statistics and Probability",
          "Data Structures",
          "Principle of Programming Languages",
          "Mathematics-II",
          "Object-Oriented Programming using C++",
          "Data Structures using C++ Lab"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Operating Systems",
          "Artificial Intelligence for Problem Solving",
          "Data Communication & Protocols",
          "Java Programming",
          "Computer Organization and Architecture",
          "Operating System Lab"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Python Programming",
          "Software Engineering",
          "Data Mining & Visualization",
          "Introduction to Network Security",
          "Python Programming Lab",
          "Data Mining and Visualization Lab"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "15-18 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "127 Credits"
  }
};

// BCOM Course Data
export const bcomCourseData = {
  fees: {
    indian: {
      fullFee: "99,000",
      semesterFee: "16,500",
      emi: "2,750",
    },
    nri: {
      fullFee: "1,458",
      semesterFee: "243",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "1,698",
      semesterFee: "283",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "1,278",
      semesterFee: "213",
      emi: "NA",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Financial Accounting",
          "Principles of Business Management",
          "Business Organization",
          "Fundamentals of Accounting I",
          "Economic Theory",
          "General English"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Fundamentals of Entrepreneurship and Innovation",
          "Economic Environment in India",
          "Business Law",
          "Fundamentals of Accounting II",
          "Marketing Management",
          "Computer Awareness and Internet"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Business Communication",
          "Financial Management",
          "Banking & Insurance",
          "Cost Accounting",
          "Business Statistics",
          "Financial Statement Interpretation"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Financial Services",
          "Goods & Service Tax",
          "Corporate Accounting",
          "Financial Services",
          "Human Resource Management",
          "Dissertation"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "12-15 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "132 Credits"
  }
};

// MCA Course Data
export const mcaCourseData = {
  fees: {
    indian: {
      fullFee: "1,58,000",
      semesterFee: "39,500",
      emi: "6,583",
    },
    nri: {
      fullFee: "2,432",
      semesterFee: "608",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "2,836",
      semesterFee: "709",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "2,128",
      semesterFee: "532",
      emi: "na",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Funtamentals of Computer",
          "Fundamentals of Mathematics",
          "Python Programming",
          "Programming & Problem-Solving using C",
          "Relational Database Management System",
          "Data Visualization",
          "Python Programming – Lab",
          "Programming & Problem-Solving using C – Lab"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Data Structures & Algorithms",
          "Operating Systems",
          "Computer Networks & Protocols",
          "Object Oriented Programming using java",
          "Object Oriented Programming using JAVA – Lab",
          "Data Structure and Algorithms – Lab",
          "Specialization Elective course"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Artificial Intelligence",
          "Machine Learning",
          "Unix & Shell Programming",
          "Web Technology",
          "Software Engineering & Project Management",
          "Unix & Shell Programming – Lab"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Banking and Insurance Management",
          "Project Work",
          "Specialization elective 1",
          "Specialization elective 2"
        ]
      }
    ],
    duration: "24 months",
    hoursPerWeek: "18-20 Hours Per Week",
    totalSemesters: "4 Sem",
    credits: "85 Credits"
  }
};

// MCOM Course Data
export const mcomCourseData = {
  fees: {
    indian: {
      fullFee: "1,08,000",
      semesterFee: "27,000",
      emi: "4,500",
    },
    nri: {
      fullFee: "1,620",
      semesterFee: "405",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "1,892",
      semesterFee: "473",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "1,420",
      semesterFee: "355",
      emi: "NA",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Management Concepts and Organizational Behavior",
          "Managerial Economics",
          "Financial Management",
          "Cost Control & Analysis",
          "Business & Economic Laws",
          "Financial Accounting and Reporting"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Research Methodology and Statistical Analysis",
          "Management Accounting",
          "Marketing Management",
          "Business Environment",
          "Project Planning, Appraisal and Control",
          "Management of Financial Institutions, Market and Service"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Advanced Taxation",
          "International Business",
          "Portfolio Management",
          "Corporate Governance",
          "E-Commerce",
          "Dissertation - I"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Financial Markets",
          "Audit and Insurance",
          "Project Report",
          "Entrepreneurship",
          "Project Report",
          "Dissertation - II"
        ]
      }
    ],
    duration: "24 months",
    hoursPerWeek: "15-18 Hours Per Week",
    totalSemesters: "4 Sem",
    credits: "100 Credits"
  }
};

// BA SMU Course Data
export const baSmaCourseData = {
  fees: {
    indian: {
      fullFee: "75,000",
      semesterFee: "12,500",
      emi: "2,083",
    },
    nri: {
      fullFee: "1,020",
      semesterFee: "170",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "1,020",
      semesterFee: "170",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "1020",
      semesterFee: "170",
      emi: "NA",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "English Literature",
          "Political Science",
          "History",
          "Economics",
          "Sociology",
          "Environmental Studies"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Contemporary Literature",
          "Public Administration",
          "Modern History",
          "Microeconomics",
          "Social Psychology",
          "Computer Applications"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Creative Writing",
          "International Relations",
          "Indian History",
          "Development Economics",
          "Research Methods",
          "Philosophy"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Comparative Literature",
          "Governance Studies",
          "Cultural Studies",
          "Applied Economics",
          "Project Work",
          "Dissertation"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "10-12 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "120 Credits"
  }
};

// MBA SMU Course Data
export const mbaSmuCourseData = {
  fees: {
    indian: {
      fullFee: "1,10,000",
      semesterFee: "27,500",
      emi: "4,583",
    },
    nri: {
      fullFee: "1,375",
      semesterFee: "344",
      emi: "NA",
      currency: "$"
    },
    foreign: {
      fullFee: "1,375",
      semesterFee: "344",
      emi: "NA",
      currency: "$"
    },
    african: {
      fullFee: "1,375",
      semesterFee: "344",
      emi: "NA",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Management Principles",
          "Organizational Behavior",
          "Managerial Economics",
          "Accounting for Managers",
          "Business Communication",
          "Quantitative Methods"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Marketing Management",
          "Financial Management",
          "Human Resource Management",
          "Operations Management",
          "Business Law",
          "Research Methodology"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Strategic Management",
          "International Business",
          "Entrepreneurship",
          "Project Management",
          "Specialization Subjects",
          "Summer Internship"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Business Ethics",
          "Innovation Management",
          "Digital Business",
          "Leadership Development",
          "Capstone Project",
          "Dissertation"
        ]
      }
    ],
    duration: "24 months",
    hoursPerWeek: "15-18 Hours Per Week",
    totalSemesters: "4 Sem",
    credits: "90 Credits"
  }
};
