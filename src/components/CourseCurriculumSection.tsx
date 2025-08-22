import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, GraduationCap, Trophy } from "lucide-react";

const CourseCurriculumSection = () => {
  const [activeYear, setActiveYear] = useState('Year 1');

  const year1Content = [
    {
      semester: "Semester 1",
      color: "bg-blue-500",
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
      color: "bg-green-500",
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
  ];

  const year2Content = [
    {
      semester: "Semester 3",
      color: "bg-blue-500",
      subjects: [
        "Core Subjects",
        "Strategic Management",
        "Term Paper",
        "Specialization elective subjects"
      ]
    },
    {
      semester: "Semester 4",
      color: "bg-green-500",
      subjects: [
        "Core Subjects",
        "International Business Management",
        "Project"
      ]
    }
  ];

  const contentToDisplay = activeYear === 'Year 1' ? year1Content : year2Content;

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Course Curriculum
            </h2>
            <div className="flex flex-wrap items-center space-x-4 mb-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24 months</span>
              <span className="flex items-center gap-2"><Trophy className="w-4 h-4" /> 15-20 Hours Per Week</span>
              <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> 4 Sem</span>
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> 90 Credits</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex border border-gray-600 rounded-full overflow-hidden">
              <button
                onClick={() => setActiveYear('Year 1')}
                className={`px-6 py-2 transition-colors duration-300 ${activeYear === 'Year 1' ? 'bg-white text-gray-900 font-semibold' : 'hover:bg-gray-800'}`}
              >
                Year 1
              </button>
              <button
                onClick={() => setActiveYear('Year 2')}
                className={`px-6 py-2 transition-colors duration-300 ${activeYear === 'Year 2' ? 'bg-white text-gray-900 font-semibold' : 'hover:bg-gray-800'}`}
              >
                Year 2
              </button>
            </div>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
              Download MBA Brochure Now
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentToDisplay.map((semester, index) => (
            <Card key={index} className="bg-white p-0 rounded-lg overflow-hidden">
              <div className={`h-2 ${semester.color}`}></div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-4">{semester.semester}</h3>
                <ul className="space-y-4 text-black">
                  {semester.subjects.map((subject, subjectIndex) => (
                    <li key={subjectIndex} className="flex items-start gap-2">
                      <span className="flex-shrink-0 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculumSection;
