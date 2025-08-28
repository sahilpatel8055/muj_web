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
import { Clock, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase, BarChart, Calculator, PieChart, LineChart, Target } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const MA_ECONOMICS = () => {
  const { triggerPopup } = useCounselingPopup();
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const specializations = [
    { icon: BarChart, title: 'Development Economics' },
    { icon: TrendingUp, title: 'Financial Economics' },
    { icon: Calculator, title: 'Econometrics' },
    { icon: PieChart, title: 'Public Economics' },
    { icon: LineChart, title: 'International Economics' },
    { icon: Target, title: 'Policy Analysis' },
  ];

  const courseData = {
    fees: {
      indian: {
        fullFee: "45,000",
        semesterFee: "11,250",
        emi: "1,875",
      },
      nri: {
        fullFee: "1,500",
        semesterFee: "375",
        emi: "75",
        currency: "$"
      },
      foreign: {
        fullFee: "1,300",
        semesterFee: "325",
        emi: "65",
        currency: "$"
      },
      african: {
        fullFee: "1,100",
        semesterFee: "275",
        emi: "55",
        currency: "$"
      }
    },
    curriculum: {
      year1: [
        {
          semester: "Semester 1",
          color: "bg-blue-200",
          subjects: [
            "Microeconomic Theory",
            "Macroeconomic Theory",
            "Mathematical Economics",
            "Statistical Methods in Economics",
            "Research Methodology",
            "History of Economic Thought"
          ]
        },
        {
          semester: "Semester 2",
          color: "bg-green-200",
          subjects: [
            "Advanced Microeconomics",
            "Advanced Macroeconomics",
            "Econometrics",
            "Development Economics",
            "International Economics",
            "Environmental Economics"
          ]
        }
      ],
      year2: [
        {
          semester: "Semester 3",
          color: "bg-blue-200",
          subjects: [
            "Financial Economics",
            "Public Economics",
            "Industrial Economics",
            "Labor Economics",
            "Economic Policy Analysis",
            "Dissertation - I"
          ]
        },
        {
          semester: "Semester 4",
          color: "bg-green-200",
          subjects: [
            "Behavioral Economics",
            "Health Economics",
            "Agricultural Economics",
            "Urban Economics",
            "Economic Forecasting",
            "Dissertation - II"
          ]
        }
      ],
      duration: "24 months",
      hoursPerWeek: "15-18 Hours Per Week",
      totalSemesters: "4 Sem",
      credits: "90 Credits"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        <section className="relative py-20 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-800/20 pt-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={mujLogo} alt="MUJ Logo" className="h-16 w-auto" />
                  <Badge className="bg-purple-600 text-white">NAAC A+ Accredited</Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Master of Arts in Economics
                  <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                    (Online MA Economics)
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The online Master of Arts in Economics from Manipal University Jaipur offers advanced 
                  training in economic theory, quantitative methods, and policy analysis.
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
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm text-muted-foreground">Course fee</div>
                  <div className="font-bold">INR 45,000</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Economics Specializations</h2>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory">
              {specializations.map((spec, index) => (
                <SpecializationCard key={index} icon={spec.icon} title={spec.title} />
              ))}
            </div>
          </div>
        </section>

        <RankingsAccreditations />
        <OnlineAdvantagesSection />
        <CourseCurriculumSection courseData={courseData} courseName="MA Economics" />
        <ManipalSampleDegreeSection />
        <CourseFeesSection courseData={courseData} courseName="MA Economics" />
      </main>
      
      <Footer />
    </div>
  );
};

export default MA_ECONOMICS;