import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RankingsAccreditations from '@/components/RankingsAccreditations';
import OnlineAdvantagesSection from '@/components/OnlineAdvantagesSection';
import CourseCurriculumSection from '@/components/CourseCurriculumSection';
import CourseFeesSection from '@/components/CourseFeesSection';
import SpecializationCard from '@/components/SpecializationCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import smuLogo from '@/assets/smulogo.jpg';

const MBA_SMU = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const navigationDots = [
    { id: 'overview', label: 'Overview' },
    { id: 'specializations', label: 'Specializations' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'fees', label: 'Fees' },
    { id: 'advantages', label: 'Advantages' },
  ];

  const specializations = [
    { icon: TrendingUp, title: 'Marketing Management' },
    { icon: DollarSign, title: 'Financial Management' },
    { icon: Users, title: 'Human Resource Management' },
    { icon: Briefcase, title: 'Operations Management' },
    { icon: BookOpen, title: 'Information Technology Management' },
    { icon: Award, title: 'International Business' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
        {navigationDots.map((dot) => (
          <button
            key={dot.id}
            onClick={() => scrollToSection(dot.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
              activeSection === dot.id ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-primary/60'
            }`}
            title={dot.label}
          >
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {dot.label}
            </span>
          </button>
        ))}
      </div>

      <main className="pt-20">
        {/* Hero Section */}
        <section 
          id="overview" 
          ref={(el) => sectionsRef.current.overview = el}
          className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={smuLogo} alt="SMU Logo" className="h-16 w-auto" />
                  <Badge className="bg-green-600 text-white">NAAC A+ Accredited</Badge>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Master of Business Administration
                    <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                      (Online MBA with Dual Specialization)
                    </span>
                  </h1>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold">4.5</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The online Master of Business Administration (MBA) with dual specialization from Sikkim Manipal 
                  University (SMU), a NAAC A+-accredited institution, is designed to prepare professionals with core 
                  business management skills to excel in today's competitive landscape.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary">
                    Download Brochure
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-4 text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course duration</div>
                  <div className="font-bold">24 months • 4 Sem</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Specialization</div>
                  <div className="font-bold">Dual</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course fee</div>
                  <div className="font-bold">INR 1,10,000</div>
                  <div className="text-xs text-muted-foreground">INR 27,500 per semester</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Last date of admission</div>
                  <div className="font-bold text-green-600">23rd Aug</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations Section */}
        <section 
          id="specializations" 
          ref={(el) => sectionsRef.current.specializations = el}
          className="py-20"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose Your Dual Specialization
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Gain expertise in two domains and enhance your career prospects with our diverse specialization options.
              </p>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
              {specializations.map((spec, index) => (
                <SpecializationCard
                  key={index}
                  icon={spec.icon}
                  title={spec.title}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section 
          id="curriculum" 
          ref={(el) => sectionsRef.current.curriculum = el}
        >
          <CourseCurriculumSection />
        </section>

        {/* Fees Section */}
        <section 
          id="fees" 
          ref={(el) => sectionsRef.current.fees = el}
        >
          <CourseFeesSection />
        </section>

        {/* Advantages Section */}
        <section 
          id="advantages" 
          ref={(el) => sectionsRef.current.advantages = el}
        >
          <OnlineAdvantagesSection />
        </section>

        {/* Rankings and Accreditations */}
        <RankingsAccreditations />
      </main>
      
      <Footer />
    </div>
  );
};

export default MBA_SMU;