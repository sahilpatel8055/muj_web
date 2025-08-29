import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RankingsAccreditations from '@/components/RankingsAccreditations';
import TopRankedUniversities from '@/components/TopRankedUniversities';
import CourseGrid from '@/components/CourseGrid';
import OurImpact from '@/components/OurImpact';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import ConvocationSlider from '@/components/convocation-slider';
import CareerAssistance from '@/components/career-assistance';
import BellNotification from '@/components/BellNotification';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import Faq from '@/components/Faq'; // Import the new Faq component
import WhatsAppButton from '@/components/WhatsAppButton';
import SEOStructuredData from '@/components/SEOStructuredData';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();
  
  // SEO optimization for homepage
  useSEO({
    title: "Online MANIPAL - Education That Powers Your Ambition | UGC Approved Degrees",
    description: "Online degree programs & courses from Manipal Universities. UGC-approved MBA, MCA, BBA, BCA, BCom programs designed to accelerate your career growth. Apply now!",
    keywords: "online education, manipal university, MBA online, MCA online, BBA online, BCA online, BCom online, distance learning, UGC approved, online degree, higher education",
    canonicalUrl: "https://onlinemanipals.com"
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOStructuredData type="website" />
      <Header />
      <main className="pt-0">
        <HeroSection />
        <RankingsAccreditations />
        <TopRankedUniversities />
        <CourseGrid />
        <OurImpact />
        <WhyChooseUs />
        <ConvocationSlider />
        <CareerAssistance />
        <Faq /> {/* Render the Faq component here */}
      </main>
      <Footer />
      
      {/* Bell Notification */}
      <BellNotification onApplyNowClick={triggerPopup} />
      <WhatsAppButton />
      
      {/* Counseling Form Popup */}
      <CounselingFormPopup 
        isOpen={showPopup} 
        onClose={hidePopup}
        trigger="auto"
      />
    </div>
  );
};

export default Index;
