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
      fullFee: "1,20,000",
      semesterFee: "20,000",
      emi: "5,000",
    },
    nri: {
      fullFee: "3,000",
      semesterFee: "500",
      emi: "150",
      currency: "$"
    },
    foreign: {
      fullFee: "2,500",
      semesterFee: "420",
      emi: "125",
      currency: "$"
    },
    african: {
      fullFee: "2,000",
      semesterFee: "330",
      emi: "100",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Principles of Management",
          "Business Communication",
          "Fundamentals of Accounting",
          "Business Mathematics",
          "Microeconomics",
          "Computer Applications in Business"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Organizational Behavior",
          "Marketing Management",
          "Financial Accounting",
          "Business Statistics",
          "Macroeconomics",
          "Business Environment"
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
          "Research Methodology",
          "International Business",
          "Entrepreneurship Development"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Strategic Management",
          "Financial Management",
          "Business Ethics",
          "Project Management",
          "Digital Marketing",
          "Business Analytics"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "12-15 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "120 Credits"
  }
};

// BCA Course Data
export const bcaCourseData = {
  fees: {
    indian: {
      fullFee: "90,000",
      semesterFee: "15,000",
      emi: "3,750",
    },
    nri: {
      fullFee: "2,500",
      semesterFee: "420",
      emi: "125",
      currency: "$"
    },
    foreign: {
      fullFee: "2,000",
      semesterFee: "330",
      emi: "100",
      currency: "$"
    },
    african: {
      fullFee: "1,800",
      semesterFee: "300",
      emi: "90",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Programming Fundamentals",
          "Computer Organization",
          "Digital Electronics",
          "Mathematics-I",
          "Communication Skills",
          "Environmental Studies"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Object Oriented Programming",
          "Data Structures",
          "Computer Networks",
          "Mathematics-II",
          "Database Management Systems",
          "Web Development"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Software Engineering",
          "Operating Systems",
          "Computer Graphics",
          "System Analysis & Design",
          "Mobile Application Development",
          "Project Work"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Artificial Intelligence",
          "Cloud Computing",
          "Cyber Security",
          "Data Analytics",
          "IoT & Embedded Systems",
          "Final Project"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "15-18 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "120 Credits"
  }
};

// BCOM Course Data
export const bcomCourseData = {
  fees: {
    indian: {
      fullFee: "75,000",
      semesterFee: "12,500",
      emi: "3,125",
    },
    nri: {
      fullFee: "2,200",
      semesterFee: "370",
      emi: "110",
      currency: "$"
    },
    foreign: {
      fullFee: "1,800",
      semesterFee: "300",
      emi: "90",
      currency: "$"
    },
    african: {
      fullFee: "1,500",
      semesterFee: "250",
      emi: "75",
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
          "Business Communication",
          "Business Economics",
          "Business Mathematics",
          "Computer Applications",
          "Environmental Studies"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Corporate Accounting",
          "Cost Accounting",
          "Business Statistics",
          "Marketing Management",
          "Business Law",
          "Principles of Management"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Income Tax",
          "Auditing",
          "Banking & Insurance",
          "International Trade",
          "E-Commerce",
          "Research Methodology"
        ]
      },
      {
        semester: "Semester 4",
        color: "bg-green-200",
        subjects: [
          "Financial Management",
          "Goods & Service Tax",
          "Investment Analysis",
          "Entrepreneurship",
          "Project Management",
          "Dissertation"
        ]
      }
    ],
    duration: "36 months",
    hoursPerWeek: "12-15 Hours Per Week",
    totalSemesters: "6 Sem",
    credits: "120 Credits"
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
      fullFee: "52,000",
      semesterFee: "13,000",
      emi: "2,167",
    },
    nri: {
      fullFee: "1,800",
      semesterFee: "450",
      emi: "90",
      currency: "$"
    },
    foreign: {
      fullFee: "1,500",
      semesterFee: "375",
      emi: "75",
      currency: "$"
    },
    african: {
      fullFee: "1,200",
      semesterFee: "300",
      emi: "60",
      currency: "$"
    }
  },
  curriculum: {
    year1: [
      {
        semester: "Semester 1",
        color: "bg-blue-200",
        subjects: [
          "Advanced Financial Accounting",
          "Research Methodology",
          "Advanced Business Statistics",
          "Corporate Finance",
          "International Business",
          "Strategic Management"
        ]
      },
      {
        semester: "Semester 2",
        color: "bg-green-200",
        subjects: [
          "Advanced Cost Accounting",
          "Financial Management",
          "Investment Analysis",
          "Banking & Insurance",
          "International Finance",
          "Business Analytics"
        ]
      }
    ],
    year2: [
      {
        semester: "Semester 3",
        color: "bg-blue-200",
        subjects: [
          "Advanced Taxation",
          "Auditing & Assurance",
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
          "Risk Management",
          "Project Finance",
          "Entrepreneurship",
          "Business Ethics",
          "Dissertation - II"
        ]
      }
    ],
    duration: "24 months",
    hoursPerWeek: "15-18 Hours Per Week",
    totalSemesters: "4 Sem",
    credits: "90 Credits"
  }
};

// BA SMU Course Data
export const baSmaCourseData = {
  fees: {
    indian: {
      fullFee: "36,000",
      semesterFee: "6,000",
      emi: "1,500",
    },
    nri: {
      fullFee: "1,200",
      semesterFee: "200",
      emi: "60",
      currency: "$"
    },
    foreign: {
      fullFee: "1,000",
      semesterFee: "170",
      emi: "50",
      currency: "$"
    },
    african: {
      fullFee: "800",
      semesterFee: "135",
      emi: "40",
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
      fullFee: "80,000",
      semesterFee: "20,000",
      emi: "3,333",
    },
    nri: {
      fullFee: "2,500",
      semesterFee: "625",
      emi: "125",
      currency: "$"
    },
    foreign: {
      fullFee: "2,000",
      semesterFee: "500",
      emi: "100",
      currency: "$"
    },
    african: {
      fullFee: "1,800",
      semesterFee: "450",
      emi: "90",
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
