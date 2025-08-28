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
import { Clock, Calendar, Award, BookOpen, TrendingUp, DollarSign, Briefcase, BarChart, Calculator } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const MCOM_MUJ = () => {
  const { triggerPopup } = useCounselingPopup();
  const [activeSection, setActiveSection] = useState('overview');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const specializations = [
    { icon: Calculator, title: 'Advanced Accounting' },
    { icon: BarChart, title: 'Financial Analysis' },
    { icon: TrendingUp, title: 'Strategic Management' },
    { icon: DollarSign, title: 'Corporate Finance' },
    { icon: Briefcase, title: 'Business Analytics' },
    { icon: Award, title: 'International Trade' },
  ];

  const courseData = {
    fees: {
      indian: {
        fullFee: "60,000",
        semesterFee: "15,000",
        emi: "2,500",
      },
      nri: {
        fullFee: "2,000",
        semesterFee: "500",
        emi: "100",
        currency: "$"
      },
      foreign: {
        fullFee: "1,800",
        semesterFee: "450",
        emi: "90",
        currency: "$"
      },
      african: {
        fullFee: "1,500",
        semesterFee: "375",
        emi: "75",
        currency: "$"
      }
    },
    curriculum: {
      year1: [
        {
          semester: "Semester 1",
          color: "bg-blue-200",
          subjects: [
            "Advanced Financial Accounting",
            "Research Methodology in Commerce",
            "Advanced Business Statistics",
            "Corporate Finance & Investment",
            "International Business Environment",
            "Strategic Management Concepts"
          ]
        },
        {
          semester: "Semester 2",
          color: "bg-green-200",
          subjects: [
            "Advanced Cost & Management Accounting",
            "Financial Markets & Institutions",
            "Investment Analysis & Portfolio Management",
            "Banking & Financial Services",
            "International Finance & Trade",
            "Business Analytics & Data Interpretation"
          ]
        }
      ],
      year2: [
        {
          semester: "Semester 3",
          color: "bg-blue-200",
          subjects: [
            "Advanced Taxation & Tax Planning",
            "Auditing & Corporate Governance",
            "Project Finance & Appraisal",
            "Corporate Restructuring",
            "E-Commerce & Digital Business",
            "Dissertation - Phase I"
          ]
        },
        {
          semester: "Semester 4",
          color: "bg-green-200",
          subjects: [
            "Financial Risk Management",
            "Derivatives & Financial Engineering",
            "Mergers & Acquisitions",
            "Entrepreneurship & Innovation",
            "Business Ethics & CSR",
            "Dissertation - Phase II"
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
        <section className="relative py-20 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-800/20 pt-28">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={mujLogo} alt="MUJ Logo" className="h-16 w-auto" />
                  <Badge className="bg-orange-600 text-white">NAAC A+ Accredited</Badge>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Master of Commerce
                  <span className="block text-2xl md:text-3xl text-muted-foreground mt-2">
                    (Online MCom - MUJ)
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The online Master of Commerce (MCom) from Manipal University Jaipur offers advanced 
                  study in commerce, finance, and business management with cutting-edge curriculum.
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
                  <div className="font-bold">INR 60,000</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Commerce Specializations</h2>
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
        <CourseCurriculumSection courseData={courseData} courseName="MCom (MUJ)" />
        <ManipalSampleDegreeSection />
        <CourseFeesSection courseData={courseData} courseName="MCom (MUJ)" />
      </main>
      
      <Footer />
    </div>
  );
};

export default MCOM_MUJ;