import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPageMobile = 2; // Two cards per "page" in the 2-row mobile scroll

  const totalPages = Math.ceil(assistanceFeatures.length / cardsPerPageMobile);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      // Calculate card width dynamically for better responsiveness
      const firstCard = scrollContainerRef.current.querySelector('.snap-center');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(scrollContainerRef.current).gap);
        setCurrentPage(Math.round(scrollLeft / cardWidth));
      }
    }
  };

  const handleDotClick = (pageIndex) => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.snap-center');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(scrollContainerRef.current).gap);
        scrollContainerRef.current.scrollTo({
          left: pageIndex * cardWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.snap-center');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(scrollContainerRef.current).gap);
        scrollContainerRef.current.scrollBy({
          left: -cardWidth,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector('.snap-center');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + parseFloat(getComputedStyle(scrollContainerRef.current).gap);
        scrollContainerRef.current.scrollBy({
          left: cardWidth,
          behavior: 'smooth',
        });
      }
    }
  };

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

          {/* Right side with cards - Desktop/Tablet View (md and up) */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {assistanceFeatures.map((feature, index) => (
              <Card key={index} className="p-6 transition-colors duration-300 hover:bg-orange-600 hover:text-white group">
                <CardContent className="flex flex-col gap-4 p-0">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex-shrink-0"> {/* Container for the icon */}
                      <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-white">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side with cards - Mobile View (sm and below) */}
          <div className="md:hidden">
            <div className="flex justify-end gap-4 mb-4">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="grid gap-4 grid-flow-col auto-cols-[85%] grid-rows-2 snap-x snap-mandatory overflow-x-auto pb-4"
            >
              {assistanceFeatures.map((feature, index) => (
                <Card key={index} className="snap-center p-6 h-full transition-colors duration-300 hover:bg-red-600 hover:text-white group">
                  <CardContent className="flex flex-col gap-4 p-0">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex-shrink-0"> {/* Container for the icon */}
                        <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-white">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage ? "bg-primary w-4 h-4 transform rotate-45" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAssistance;
