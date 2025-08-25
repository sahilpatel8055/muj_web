import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import courseMBA from '@/assets/course-mba.jpg';
import courseMCA from '@/assets/course-mca.jpg';
import courseBBA from '@/assets/course-bba.jpg';
import courseBCA from '@/assets/course-bca.jpg';
import courseBCom from '@/assets/course-bcom.jpg';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';

const CourseGrid = () => {
  const courses = [
    {
      id: 1,
      title: 'Online MBA',
      description: 'Master of Business Administration',
      image: courseMBA,
      duration: '2 Years',
      students: '15,000+',
      rating: '4.8',
      popular: true,
      href: '/mba'
    },
    {
      id: 2,
      title: 'Online MCA',
      description: 'Master of Computer Applications',
      image: courseMCA,
      duration: '2 Years',
      students: '8,000+',
      rating: '4.7',
      popular: false,
      href: '/mca'
    },
    {
      id: 3,
      title: 'Online BBA',
      description: 'Bachelor of Business Administration',
      image: courseBBA,
      duration: '3 Years',
      students: '12,000+',
      rating: '4.6',
      popular: true,
      href: '/bba'
    },
    {
      id: 4,
      title: 'Online BCA',
      description: 'Bachelor of Computer Applications',
      image: courseBCA,
      duration: '3 Years',
      students: '10,000+',
      rating: '4.5',
      popular: false,
      href: '/bca'
    },
    {
      id: 5,
      title: 'Online BCom',
      description: 'Bachelor of Commerce',
      image: courseBCom,
      duration: '3 Years',
      students: '18,000+',
      rating: '4.7',
      popular: true,
      href: '/bcom'
    }
  ];

  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(courses.length / 2);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.querySelector('.snap-center').offsetWidth;
      const newPage = Math.round(scrollLeft / cardWidth);
      setCurrentPage(newPage);
    }
  };

  const handleDotClick = (pageIndex) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.snap-center').offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: pageIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.snap-center').offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.snap-center').offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Online Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of UGC-approved online degree programs
            designed to accelerate your career growth.
          </p>
        </div>

        {/* Desktop Grid (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {courses.map((course) => (
            <a href={course.href} key={course.id}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white flex items-center gap-1 text-xs">
                      <img src={mujLogo} alt="" className="w-3 h-3 object-contain" />
                      Manipal University Jaipur
                    </Badge>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2">
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground">{course.description}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-muted-foreground">Learn More</span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Mobile Horizontal Scroll (hidden on md and up) */}
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
            {courses.map((course) => (
              <a href={course.href} key={course.id} className="snap-center">
                <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Badge className="absolute top-3 left-3 bg-blue-600 text-white flex items-center gap-1 text-xs">
                        <img src={mujLogo} alt="" className="w-3 h-3 object-contain" />
                        Manipal University Jaipur
                      </Badge>
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full p-2">
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                          {course.title}
                        </h3>
                        <p className="text-muted-foreground">{course.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-muted-foreground">Learn More</span>
                        <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(pages)].map((_, index) => (
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/all-courses"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-smooth font-medium"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
