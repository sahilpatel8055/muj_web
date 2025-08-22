import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Play } from 'lucide-react';
import heroImage from '@/assets/ChatGPT_Image_Aug_22__2025__02_36_01_PM-removebg-preview.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-pattern overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center lg:h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* UGC Badge */}
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary" />
              <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                UGC-Entitled
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Education That
                <br />
                Powers Your{' '}
                <span className="relative">
                  <span className="text-gradient">Ambition</span>
                  <svg 
                    className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M0,8 Q25,2 50,6 T100,4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Online degree programs & courses from{' '}
                <span className="text-primary font-semibold">Manipal Universities</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary text-lg px-8 py-6"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          {/* Decreased the height of the image section by ~20% */}
          <div className="relative flex justify-center items-center lg:h-[80%]"> 
            <div className="relative w-full lg:h-full flex items-center justify-center">
              <img
                src={heroImage}
                alt="Successful student giving thumbs up"
                className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-2xl lg:h-full" 
              />
              
              {/* Floating Badge */}
              <div className="absolute top-8 left-8 bg-primary text-primary-foreground rounded-full p-3 shadow-primary">
                <div className="text-center">
                  <div className="text-lg font-bold">360°</div>
                  <div className="text-xs">DEGREE OF SUCCESS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
