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
  const mujCourses = [
    {
      id: 1,
      title: 'Online MBA',
      description: 'Master of Business Administration',
      image: courseMBA,
      duration: '2 Years',
      students: '15,000+',
      rating: '4.8',
      popular: true,
      href: '/mba',
      university: 'MUJ'
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
      href: '/mca',
      university: 'MUJ'
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
      href: '/bba',
      university: 'MUJ'
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
      href: '/bca',
      university: 'MUJ'
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
      href: '/bcom',
      university: 'MUJ'
    }
  ];

  const smuCourses = [
    {
      id: 6,
      title: 'Online BA',
      description: 'Bachelor of Arts',
      image: courseBBA, // Using similar image for now
      duration: '3 Years',
      students: '5,000+',
      rating: '4.5',
      popular: false,
      href: '/ba-smu',
      university: 'SMU'
    },
    {
      id: 7,
      title: 'Online MA',
      description: 'Master of Arts',
      image: courseMBA, // Using similar image for now
      duration: '2 Years',
      students: '3,000+',
      rating: '4.6',
      popular: false,
      href: '/ma-smu',
      university: 'SMU'
    },
    {
      id: 8,
      title: 'Online BCom (SMU)',
      description: 'Bachelor of Commerce',
      image: courseBCom,
      duration: '3 Years',
      students: '8,000+',
      rating: '4.4',
      popular: true,
      href: '/bcom-smu',
      university: 'SMU'
    },
    {
      id: 9,
      title: 'Online MCom (SMU)',
      description: 'Master of Commerce',
      image: courseMCA, // Using similar image for now
      duration: '2 Years',
      students: '4,000+',
      rating: '4.5',
      popular: false,
      href: '/mcom-smu',
      university: 'SMU'
    }
  ];

  const mujScrollRef = useRef(null);
  const smuScrollRef = useRef(null);
  const [currentMujPage, setCurrentMujPage] = useState(0);
  const [currentSmuPage, setCurrentSmuPage] = useState(0);

  const mujPages = Math.ceil(mujCourses.length / 2);
  const smuPages = Math.ceil(smuCourses.length / 2);

  const createScrollHandlers = (scrollRef, setCurrentPage, courses) => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.querySelector('.snap-center')?.offsetWidth || 200;
        const newPage = Math.round(scrollLeft / cardWidth);
        setCurrentPage(newPage);
      }
    };

    const scrollPrev = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.querySelector('.snap-center')?.offsetWidth || 200;
        scrollRef.current.scrollBy({
          left: -cardWidth,
          behavior: 'smooth',
        });
      }
    };

    const scrollNext = () => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.querySelector('.snap-center')?.offsetWidth || 200;
        scrollRef.current.scrollBy({
          left: cardWidth,
          behavior: 'smooth',
        });
      }
    };

    const handleDotClick = (pageIndex) => {
      if (scrollRef.current) {
        const cardWidth = scrollRef.current.querySelector('.snap-center')?.offsetWidth || 200;
        scrollRef.current.scrollTo({
          left: pageIndex * cardWidth,
          behavior: 'smooth',
        });
      }
    };

    return { handleScroll, scrollPrev, scrollNext, handleDotClick };
  };

  const mujHandlers = createScrollHandlers(mujScrollRef, setCurrentMujPage, mujCourses);
  const smuHandlers = createScrollHandlers(smuScrollRef, setCurrentSmuPage, smuCourses);


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

        {/* Manipal University Jaipur Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <img src={mujLogo} alt="MUJ" className="w-8 h-8 object-contain" />
            <h3 className="text-2xl font-bold text-foreground">Manipal University Jaipur</h3>
          </div>

          {/* Desktop Grid (lg and up) */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-4">
            {mujCourses.map((course) => (
              <a href={course.href} key={course.id}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
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
                        <h4 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                          {course.title}
                        </h4>
                        <p className="text-muted-foreground">{course.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-lg">₹</span>
                          <span>₹99,000</span>
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

          {/* Tablet & Mobile Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex justify-end gap-4 mb-4">
              <button
                onClick={mujHandlers.scrollPrev}
                className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={mujHandlers.scrollNext}
                className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div
              ref={mujScrollRef}
              onScroll={mujHandlers.handleScroll}
              className="grid gap-4 grid-flow-col auto-cols-[85%] grid-rows-2 snap-x snap-mandatory overflow-x-auto pb-4"
            >
              {mujCourses.map((course) => (
                <a href={course.href} key={course.id} className="snap-center">
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
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
                          <h4 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                            {course.title}
                          </h4>
                          <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-lg">₹</span>
                            <span>₹99,000</span>
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
              {[...Array(mujPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => mujHandlers.handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMujPage ? "bg-primary w-4 h-4 transform rotate-45" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sikkim Manipal University Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SMU</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">Sikkim Manipal University</h3>
          </div>

          {/* Desktop Grid (lg and up) */}
          <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-4">
            {smuCourses.map((course) => (
              <a href={course.href} key={course.id}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
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
                        <h4 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                          {course.title}
                        </h4>
                        <p className="text-muted-foreground">{course.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="text-lg">₹</span>
                          <span>₹99,000</span>
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

          {/* Tablet & Mobile Horizontal Scroll */}
          <div className="lg:hidden">
            <div className="flex justify-end gap-4 mb-4">
              <button
                onClick={smuHandlers.scrollPrev}
                className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={smuHandlers.scrollNext}
                className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div
              ref={smuScrollRef}
              onScroll={smuHandlers.handleScroll}
              className="grid gap-4 grid-flow-col auto-cols-[85%] grid-rows-2 snap-x snap-mandatory overflow-x-auto pb-4"
            >
              {smuCourses.map((course) => (
                <a href={course.href} key={course.id} className="snap-center">
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 hover:border-primary/20">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
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
                          <h4 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-smooth">
                            {course.title}
                          </h4>
                          <p className="text-muted-foreground">{course.description}</p>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-lg">₹</span>
                            <span>₹99,000</span>
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
              {[...Array(smuPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => smuHandlers.handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSmuPage ? "bg-primary w-4 h-4 transform rotate-45" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
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
