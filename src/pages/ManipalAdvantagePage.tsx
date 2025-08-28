import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseraBenefitsSection from '@/components/CourseraBenefitsSection';
import ConvocationSlider from '@/components/convocation-slider';
import WhyChooseUs from '@/components/WhyChooseUs';
import CareerAssistance from '@/components/career-assistance';
import Faq from '@/components/Faq';
import BellNotification from '@/components/BellNotification';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import OnlineAdvantagesSection from '@/components/OnlineAdvantagesSection';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const ManipalAdvantagePage = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0">
        <OnlineAdvantagesSection />
        <CourseraBenefitsSection />
        <ConvocationSlider />
        <WhyChooseUs />
        <CareerAssistance />
        <Faq />
      </main>
      <Footer />
      
      {/* Bell Notification */}
      <BellNotification onApplyNowClick={triggerPopup} />
      
      {/* Counseling Form Popup */}
      <CounselingFormPopup 
        isOpen={showPopup} 
        onClose={hidePopup}
        trigger="auto"
      />
    </div>
  );
};

export default ManipalAdvantagePage;