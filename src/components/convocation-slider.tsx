import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

// Import all 7 images with the correct paths
import convocation1 from "@/assets/covocation/1.jpg";
import convocation2 from "@/assets/covocation/2.jpg";
import convocation3 from "@/assets/covocation/3.jpg";
import convocation4 from "@/assets/covocation/4.jpg";
import convocation5 from "@/assets/covocation/5.jpg";
import convocation6 from "@/assets/covocation/6.jpg";
import convocation7 from "@/assets/covocation/7.png";

const slides = [
  { src: convocation1, alt: "Convocation Ceremony 1" },
  { src: convocation2, alt: "Convocation Ceremony 2" },
  { src: convocation3, alt: "Convocation Ceremony 3" },
  { src: convocation4, alt: "Convocation Ceremony 4" },
  { src: convocation5, alt: "Convocation Ceremony 5" },
  { src: convocation6, alt: "Convocation Ceremony 6" },
  { src: convocation7, alt: "Convocation Ceremony 7" },
];

const ConvocationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Handle manual scrolling
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsAutoPlaying(false);
    
    if (e.deltaY > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
    
    // Resume auto-playing after 2 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Glimpses of <span className="text-orange-600">the Convocation Ceremony</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrate graduation during the Convocation event at our campus, interact with fellow graduates, meet faculty, and foster professional connections for career growth.
          </p>
        </div>
        
        {/* 3D Carousel Container */}
        <div 
          className="convocation-3d-container w-full max-w-[500px] h-[300px] md:h-[350px] mx-auto mb-8 px-4 md:px-0"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onWheel={handleWheel}
        >
          <div 
            className="convocation-carousel"
            style={{
              transform: `translateZ(-540px) rotateY(${-currentIndex * (360 / slides.length)}deg)`
            }}
          >
            {slides.map((slide, index) => {
              const angle = (index * 360) / slides.length;
              const isActive = index === currentIndex;
              
              return (
                <img
                  key={index}
                  src={slide.src}
                  alt={slide.alt}
                  className={cn(
                    "convocation-carousel-image",
                    isActive ? "active" : ""
                  )}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(540px) scale(${isActive ? 1 : 0.8})`,
                    opacity: isActive ? 1 : 0.5
                  }}
                  onClick={() => goToSlide(index)}
                />
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <button 
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
            onClick={goToPrevious}
          >
            &#8249;
          </button>
          
          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-8 h-8 rounded-full text-sm font-medium transition-all duration-300",
                  index === currentIndex 
                    ? "bg-primary text-primary-foreground scale-110" 
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                )}
                onClick={() => goToSlide(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button 
            className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
            onClick={goToNext}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConvocationSlider;
