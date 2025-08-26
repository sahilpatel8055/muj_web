import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, useCarousel, type CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

// Import SVG icons
import TopRankedIcon from "@/assets/svg_icons/top-ranked.svg";
import WebinarIcon from "@/assets/svg_icons/webinar.svg";
import ScholarshipIcon from "@/assets/svg_icons/scholarship.svg";
import EasyFinanceIcon from "@/assets/svg_icons/easy-finance.svg";
import AlumniIcon from "@/assets/svg_icons/alumni.svg";

const features = [
  {
    icon: TopRankedIcon,
    title: "Degree from top ranked Manipal universities",
    description: "Graduate with UGC-entitled & AICTE approved online degrees which are at par with on-campus degree programs."
  },
  {
    icon: WebinarIcon,
    title: "Exclusive Coursera access",
    description: "Free access to 10K+ courses & professional certifications from top global universities."
  },
  {
    icon: ScholarshipIcon,
    title: "Scholarships up to 30%",
    description: "Avail scholarship benefits under merit, defense, Divyaang, alumni, and other categories."
  },
  {
    icon: EasyFinanceIcon,
    title: "Easy financing options",
    description: "Improved affordability with flexible financing and no cost EMI options."
  },
  {
    icon: AlumniIcon,
    title: "Strong Alumni Network",
    description: "Connect with a vast network of successful alumni across various industries worldwide."
  }
];

const WhyChooseUs = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", updateCurrent);

    return () => {
      carouselApi.off("select", updateCurrent);
    };
  }, [carouselApi]);

  const handleDotClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Heading and Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-left">
            Why Students Choose Online Manipal
          </h2>
          <div className="flex gap-4">
            <button
              onClick={() => carouselApi?.scrollPrev()}
              className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => carouselApi?.scrollNext()}
              className="p-3 rounded-full border-2 border-gray-200 bg-white shadow-md text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            setApi={setCarouselApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-[55%] lg:basis-[35%] xl:basis-[28%]">
                  <Card className="p-6 h-full bg-gray-50 border border-gray-200 shadow-lg">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                        <img src={feature.icon} alt="" className="w-16 h-16" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary w-4 h-4 transform rotate-45" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of successful professionals who have advanced their careers with our comprehensive online programs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
              ✓ No Hidden Fees
            </Badge>
            <Badge className="px-4 py-2 bg-success/10 text-success border-success/20">
              ✓ EMI Options Available
            </Badge>
            <Badge className="px-4 py-2 bg-accent/10 text-accent-foreground border-accent/20">
              ✓ Lifetime Career Support
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
