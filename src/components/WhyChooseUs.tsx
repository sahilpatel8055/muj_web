import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Students Choose Manipal for Online Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience excellence in online education with our unique blend of academic rigor, industry relevance, and student-centric approach
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="p-6 h-full bg-gray-50 border border-gray-200 shadow-lg">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4">
                        <img src={feature.icon} alt="" className="w-8 h-8" />
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
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-6">
            <img 
              src="/src/assets/scroll-dots.png" 
              alt="Navigation dots" 
              className="h-4 w-auto opacity-60"
            />
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