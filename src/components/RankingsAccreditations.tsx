import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import all accreditation images
import ACU from "@/assets/icons/ACU-3.jpg";
import AICTE from "@/assets/icons/AICTE-3.jpg";
import Career360 from "@/assets/icons/Career360-1.jpg";
import ICAS from "@/assets/icons/ICAS-1.jpg";
import IQAS from "@/assets/icons/IQAS_Online-Manipal-Website.jpg";
import TheWeek from "@/assets/icons/SMU_Rankings_The-Week.jpg";
import WES from "@/assets/icons/WES-2.jpg";
import NAAC from "@/assets/icons/naac.png";
import NIRF from "@/assets/icons/nirf.png";
import UGC from "@/assets/icons/ugc.png";

const accreditations = [
  { 
    name: "UGC Entitled", 
    image: UGC,
    description: "UGC-entitled Online Degrees Equivalent to Campus Degree"
  },
  { 
    name: "NAAC A+ Grade", 
    image: NAAC,
    description: "Rajasthan's 1st NAAC A+ Accredited University"
  },
  { 
    name: "NIRF Ranked", 
    image: NIRF,
    description: "Ranked 64 amongst India's top universities in 2024"
  },
  { 
    name: "AICTE Approved", 
    image: AICTE,
    description: "AICTE Norms Compliant"
  },
  { 
    name: "ACU Member", 
    image: ACU,
    description: "Association of Commonwealth Universities member institution"
  },
  { 
    name: "WES Recognized", 
    image: WES,
    description: "World Education Services recognized for global credential evaluation"
  },
  { 
    name: "ICAS Member", 
    image: ICAS,
    description: "International Congress of Academic Specialists member"
  },
  { 
    name: "IQAS Recognized", 
    image: IQAS,
    description: "Degrees Evaluated by-International Qualifications Assessment Service"
  },
  { 
    name: "Career360 Ranked", 
    image: Career360,
    description: "Ranked among top universities by Career360 education magazine"
  },
  { 
    name: "The Week Ranked", 
    image: TheWeek,
    description: "Featured and ranked by The Week magazine for educational excellence"
  },
];

const RankingsAccreditations = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rankings & Accreditations
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {accreditations.map((accreditation, index) => {
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[45.5%] md:basis-[23%] lg:basis-[17.5%]">
                    <Card 
                      className="h-[14rem] md:h-[20rem] flex flex-col items-center justify-center p-4 shadow-lg border bg-gray-50 text-black border-gray-200"
                    >
                      <img
                        src={accreditation.image}
                        alt={accreditation.name}
                        className="max-h-32 max-w-full object-contain mb-2"
                      />
                      <p className="text-xs text-center leading-tight">
                        {accreditation.description}
                      </p>
                    </Card>
                  </CarouselItem>
                );
              })}
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
      </div>
    </section>
  );
};

export default RankingsAccreditations;
