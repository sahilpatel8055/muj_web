import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

// Import the image directly
import placementImage from "@/assets/placement.png";

// Import new icon paths
import contractIcon from "@/assets/svg_icons/contract.png";
import certificateIcon from "@/assets/svg_icons/certificate_4474687.png";
import companyIcon from "@/assets/svg_icons/company_13075933.png";
import globalEducationIcon from "@/assets/svg_icons/global-education_3459574.png";
import scienceBookIcon from "@/assets/svg_icons/science-book_17488414.png";
import certificationIcon from "@/assets/svg_icons/certification_15616451.png";

const assistanceFeatures = [
  {
    icon: contractIcon,
    title: "25,000 +",
    description: "learners offered placement support.",
  },
  {
    icon: certificateIcon,
    title: "20,000 +",
    description: "Job Opportunities Created",
  },
  {
    icon: companyIcon,
    title: "500 +",
    description: "Hiring Recruiters",
  },
  {
    icon: globalEducationIcon,
    title: "1,000 +",
    description: "Industry-readiness videos, live Lectures",
  },
  {
    icon: scienceBookIcon,
    title: "AI-Powered Resume Builder",
    description: "Instantly create professional resumes tailored to your profile using AI.",
  },
  {
    icon: certificationIcon,
    title: "Job Openings",
    description: "Explore curated job opportunities across top companies and sectors.",
  },
];

const CareerAssistance = () => {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Career Assistance
        </h2>
        <p className="text-center text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          Get end-to-end career support including resume building, mock interviews, skill training, and job placement assistance to boost your employability after completing your online UG or PG course.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side with image */}
          <div className="flex justify-center items-center">
            <img 
              src={placementImage} 
              alt="A working professional" 
              className="w-full max-w-sm md:max-w-xs lg:max-w-sm rounded-lg shadow-lg h-auto" 
            />
          </div>

          {/* Right side with cards - Unified View */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {assistanceFeatures.map((feature, index) => (
              <Card key={index} className="p-4 md:p-6 transition-colors duration-300 hover:bg-orange-600 hover:text-white group flex flex-col items-start text-left">
                <CardContent className="flex flex-col gap-2 p-0 items-start">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold mt-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-white">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssistance;
