import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onApplyNow: () => void;
}

export default function HeroSection({ onApplyNow }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-manipal-orange via-manipal-orange to-manipal-orange-dark text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/lovable-uploads/11129ed6-3d3c-4b47-98fe-0ea196d6e32a.png" 
                alt="Online Manipal Logo" 
                className="h-12 w-auto"
              />
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  UGC Entitled
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  AICTE Approved
                </Badge>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Education That Powers Your{" "}
              <span className="relative">
                <span className="relative z-10">Ambition</span>
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-4" 
                  viewBox="0 0 200 20" 
                  fill="none"
                >
                  <path 
                    d="M0 15C50 5, 150 5, 200 15" 
                    stroke="white" 
                    strokeWidth="3" 
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl mb-8 text-white/90">
              Online degrees & courses from IGNOU through Manipal Universities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="secondary" 
                size="xl" 
                onClick={onApplyNow}
                className="bg-white text-manipal-orange hover:bg-white/90 font-bold"
              >
                Apply Now
              </Button>
              <Button 
                variant="manipal-outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-manipal-orange"
              >
                Download Free Brochure
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Online</div>
              </div>
              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/80">Placement</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Last Chance to Enroll!</h3>
              <p className="text-lg mb-6 text-white/90">Limited Seats Available.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>UGC & AICTE Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>NAAC A++ Accredited</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Equally Credible to Offline Degree</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>100% Placement Assistance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}