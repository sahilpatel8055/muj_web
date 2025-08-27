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
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import smuLogo from '@/assets/smulogo.jpg';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const MBA_SMU = () => {
  const { triggerPopup } = useCounselingPopup();
  const [isCounselingPopupOpen, setIsCounselingPopupOpen] = useState(false);
  
  const specializations = [
    { icon: TrendingUp, title: 'Marketing Management' },
    { icon: DollarSign, title: 'Financial Management' },
    { icon: Users, title: 'Human Resource Management' },
    { icon: Briefcase, title: 'Operations Management' },
    { icon: BookOpen, title: 'Information Technology Management' },
    { icon: Award, title: 'International Business' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-800/20">
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
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary" onClick={triggerPopup}>
                    Download Brochure
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => setIsCounselingPopupOpen(true)}
                  >
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
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
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
        <section className="py-12">
          <CourseCurriculumSection />
        </section>

        {/* Fees Section */}
        <section className="py-12">
          <CourseFeesSection />
        </section>

        {/* Sample Degree Section */}
        <section className="py-12">
          <ManipalSampleDegreeSection />
        </section>

        {/* Advantages Section */}
        <section className="py-12">
          <OnlineAdvantagesSection />
        </section>

        {/* Rankings and Accreditations */}
        <section className="py-12">
          <RankingsAccreditations />
        </section>
      </main>
      
      <Footer />
      
      <CounselingFormPopup 
        isOpen={isCounselingPopupOpen}
        onClose={() => setIsCounselingPopupOpen(false)}
        trigger="mba-smu-course-page"
      />
    </div>
  );
};

export default MBA_SMU;