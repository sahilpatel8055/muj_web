import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RankingsAccreditations from '@/components/RankingsAccreditations';
import OnlineAdvantagesSection from '@/components/OnlineAdvantagesSection';
import CourseCurriculumSection from '@/components/CourseCurriculumSection';
import CourseFeesSection from '@/components/CourseFeesSection';
import ManipalSampleDegreeSection from '@/components/ManipalSampleDegreeSection';
import SpecializationCard from '@/components/SpecializationCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Clock, Users, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase, Globe, FileText } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import smuLogo from '@/assets/smulogo.jpg';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const MA_SMU = () => {
  const { triggerPopup } = useCounselingPopup();
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
    { icon: Globe, title: 'English Literature' },
    { icon: FileText, title: 'Journalism & Mass Communication' },
    { icon: TrendingUp, title: 'Economics' },
    { icon: Users, title: 'Psychology' },
    { icon: BookOpen, title: 'Political Science' },
    { icon: Award, title: 'History' },
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
      
      
      <main className="pt-0">
        {/* Hero Section */}
        <section 
          id="overview" 
          ref={(el) => sectionsRef.current.overview = el}
          className="relative py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20 pt-28"
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
                    Master of Arts
                    <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                      (Online MA)
                    </span>
                  </h1>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Award key={i} className="w-5 h-5 fill-current" />
                      ))}
                      <Award className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-lg font-semibold">4.3</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  The online Master of Arts (MA) from Sikkim Manipal University offers advanced study 
                  in humanities and social sciences, developing research and analytical skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary" onClick={triggerPopup}>
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
                  <div className="font-bold">Multiple</div>
                </Card>
                
                <Card className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course fee</div>
                  <div className="font-bold">INR 48,000</div>
                  <div className="text-xs text-muted-foreground">INR 12,000 per semester</div>
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Advanced Liberal Arts Studies
              </h2>
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

        {/* Rankings and Accreditations */}
        <RankingsAccreditations />

        {/* Advantages Section */}
        <OnlineAdvantagesSection />

        {/* Curriculum Section */}
        <CourseCurriculumSection />

        {/* Sample Degree Section */}
        <ManipalSampleDegreeSection />

        {/* Fees Section */}
        <CourseFeesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default MA_SMU;