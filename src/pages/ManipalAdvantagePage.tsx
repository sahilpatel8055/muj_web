import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseraBenefitsSection from '@/components/CourseraBenefitsSection'; // Renamed from previous context
import ConvocationSlider from '@/components/convocation-slider';
import WhyChooseUs from '@/components/WhyChooseUs';
import CareerAssistance from '@/components/career-assistance';
import Faq from '@/components/Faq';
import BellNotification from '@/components/BellNotification';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

// Placeholder for OnlineAdvantagesSection, as it was not provided.
// You should replace this with your actual component content.
const OnlineAdvantagesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Discover Online Manipal's Unique Advantages
        </h2>
        <p className="text-lg text-gray-600">
          Explore the benefits that set our online programs apart and empower your learning journey.
        </p>
        {/* Add more content for your Online Advantages section here */}
      </div>
    </section>
  );
};

const ManipalAdvantagePage = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-0"> {/* Adjust pt-XX as needed based on header height */}
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
