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
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const Index = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  return (
    <div className="min-h-screen bg-background">
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
