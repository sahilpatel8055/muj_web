import React, { useState, useRef, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, Clock, Users, BookOpen, Award, CheckCircle, Brain, Lock, Lightbulb, TrendingUp, Handshake, Globe, BarChart2, ChevronLeft, ChevronRight, Calculator, DollarSign, FileText } from "lucide-react";
import MCOMImage from "@/assets/course-bcom.jpg";
import SpecializationCard from "@/components/SpecializationCard";
import RankingsAccreditations from "@/components/RankingsAccreditations";
import OnlineAdvantagesSection from "@/components/OnlineAdvantagesSection";
import CourseraBenefitsSection from "@/components/CourseraBenefitsSection";
import CourseCurriculumSection from "@/components/CourseCurriculumSection";
import ManipalSampleDegreeSection from "@/components/ManipalSampleDegreeSection";
import CourseFeesSection from "@/components/CourseFeesSection";
import CounselingFormPopup from "@/components/CounselingFormPopup";
import { useCounselingPopup } from '@/hooks/useCounselingPopup';
import { mcomCourseData } from '@/data/courseData';

const mcomSpecializations = [
  { icon: Calculator, title: "Financial Management" },
  { icon: Globe, title: "International Business" },
  { icon: DollarSign, title: "Banking & Finance" },
  { icon: FileText, title: "Taxation" },
  { icon: BarChart2, title: "Business Analytics" },
  { icon: Lightbulb, title: "E-Commerce" },
  { icon: TrendingUp, title: "Investment Management" },
  { icon: Users, title: "Corporate Finance" },
  { icon: Handshake, title: "Financial Markets" },
  { icon: BookOpen, title: "Research Methodology" },
];

const MCOM = () => {
  const { triggerPopup } = useCounselingPopup();
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCounselingPopupOpen, setIsCounselingPopupOpen] = useState(false);

  const totalCards = mcomSpecializations.length;
  const cardsPerView = 5; 
  const totalPages = Math.ceil(totalCards / cardsPerView);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const newIndex = Math.round((scrollLeft / scrollWidth) * (totalPages - 1));
      setActiveIndex(newIndex);
    }
  };

  const handleDotClick = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / totalCards;
      const cardsInPage = 5; 
      const scrollToPosition = index * cardWidth * cardsInPage;
      scrollContainerRef.current.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      

      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#E6E0FF' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src="src/assets/muj_logo-removebg-preview.png" alt="MUJ" className="h-12" />
                <div className="w-px h-12 bg-border"></div>
                <Badge className="bg-success/10 text-success border-success/20">NAAC A+ Accredited</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Master of Commerce
              </h1>
              <h2 className="text-xl text-muted-foreground mb-4">
                (Online MCom Degree)
              </h2>
              
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <span className="text-lg font-semibold">4.2</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The online Master of Commerce (MCom) program from Manipal University Jaipur (MUJ) is designed to equip learners with the essential skills to fast-track their careers in the evolving business and commerce landscape.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setIsCounselingPopupOpen(true)}
                >
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" onClick={triggerPopup}>
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={MCOMImage} 
                alt="MCom Program" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Offered Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-foreground text-left">
              Specialization Areas
            </h2>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                onClick={scrollLeft}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
                onClick={scrollRight}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="grid grid-flow-col-dense grid-rows-2 gap-4 overflow-x-auto snap-x snap-mandatory rounded-3xl pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {mcomSpecializations.map((spec, index) => (
              <div key={index} className="w-64 md:w-72 lg:w-80 flex-shrink-0 snap-start">
                <SpecializationCard
                  icon={spec.icon}
                  title={spec.title}
                />
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                  activeIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings & Accreditations Section */}
      <RankingsAccreditations />

      {/* Online Advantages Section */}
      <OnlineAdvantagesSection />
      
      {/* Coursera Benefits Section */}
      <CourseraBenefitsSection />

      {/* Course Curriculum Section */}
      <CourseCurriculumSection courseData={mcomCourseData} courseName="MCom" />
      
      {/* Sample Degree Section */}
      <ManipalSampleDegreeSection />

      {/* Course Fees Section */}
      <CourseFeesSection courseData={mcomCourseData} courseName="MCom" />

      {/* Key Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-left text-foreground mb-12">
            Program Highlights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2 Years Duration</h3>
              <p className="text-muted-foreground">Complete your MCom in 2 years with flexible learning schedule</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commerce Experts</h3>
              <p className="text-muted-foreground">Learn from experienced commerce professionals and academicians</p>
            </Card>
            
            <Card className="p-6 text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-muted-foreground">Updated syllabus covering modern commerce and business practices</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">UGC Recognized</h3>
              <p className="text-muted-foreground">Degree equivalent to traditional on-campus programs</p>
            </Card>
            
            <Card className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
              <p className="text-muted-foreground">Real business case studies and practical applications</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-muted-foreground">Professional career counseling and placement support</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Excel in Commerce & Business
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Build your expertise in commerce and business with our comprehensive MCom program
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setIsCounselingPopupOpen(true)}
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => setIsCounselingPopupOpen(true)}
            >
              Request Callback
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      
      <CounselingFormPopup 
        isOpen={isCounselingPopupOpen}
        onClose={() => setIsCounselingPopupOpen(false)}
        trigger="mcom-course-page"
      />
    </div>
  );
};

export default MCOM;