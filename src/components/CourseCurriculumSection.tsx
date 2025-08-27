import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CourseCurriculumSection = () => {
  const [activeYear, setActiveYear] = useState('Year 1');

  const year1Content = [
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
  ];

  const year2Content = [
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
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100" onClick={() => {
              // This is a generic Download Brochure button, we'll trigger the counseling popup
              if (typeof window !== 'undefined' && window.parent) {
                window.parent.postMessage({ type: 'TRIGGER_COUNSELING_POPUP' }, '*');
              }
            }}>
              Download MBA Brochure
            </Button>
          </div>
        </div>

        {/* Desktop View (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {contentToDisplay.map((semester, index) => (
            <Card key={index} className="bg-white p-6 text-black rounded-lg">
              <div className={`inline-block px-4 py-1 rounded-full text-black font-semibold mb-4 ${semester.color}`}>
                {semester.semester}
              </div>
              <ul className="space-y-4">
                {semester.subjects.map((subject, subjectIndex) => (
                  <li key={subjectIndex} className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-gray-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 12l10 10 10-10-10-10z" />
                      </svg>
                    </span>
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Mobile View (sm and below) */}
        <div className="md:hidden">
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {contentToDisplay.map((semester, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className={`w-full py-4 px-6 text-left font-semibold text-white ${semester.color} rounded-t-lg transition-colors`}>
                  {semester.semester}
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 text-black rounded-b-lg">
                  <ul className="space-y-4">
                    {semester.subjects.map((subject, subjectIndex) => (
                      <li key={subjectIndex} className="flex items-start gap-2">
                        <span className="flex-shrink-0 text-gray-500 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 12l10 10 10-10-10-10z" />
                          </svg>
                        </span>
                        <span>{subject}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseCurriculumSection;
