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
  { name: "UGC Entitled", image: UGC },
  { name: "NAAC A+ Grade", image: NAAC },
  { name: "NIRF Ranked", image: NIRF },
  { name: "AICTE Approved", image: AICTE },
  { name: "ACU Member", image: ACU },
  { name: "WES Recognized", image: WES },
  { name: "ICAS Member", image: ICAS },
  { name: "IQAS Recognized", image: IQAS },
  { name: "Career360 Ranked", image: Career360 },
  { name: "The Week Ranked", image: TheWeek },
];

const RankingsAccreditations = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rankings & Accreditations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Manipal University Jaipur is recognized by leading educational bodies and consistently ranks among top institutions
          </p>
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
              {accreditations.map((accreditation, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card className="h-32 flex items-center justify-center p-4 bg-card hover:shadow-lg transition-shadow duration-300 border border-border/50">
                    <img
                      src={accreditation.image}
                      alt={accreditation.name}
                      className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RankingsAccreditations;