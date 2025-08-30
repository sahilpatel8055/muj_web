import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BellNotification from '@/components/BellNotification';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const Disclaimer = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-card-foreground mb-8">Disclaimer</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-base leading-relaxed">
                This website is owned and operated by AVEDU, an official partner for Manipal University online admissions. This is not the official Manipal University website. For official details, visit{" "}
                <a href="https://www.onlinemanipal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.onlinemanipal.com
                </a>.
              </p>
              
              <p className="text-base leading-relaxed">
                It should be noted that the student will directly apply with the university for all Online Degree Programs, all the admission and post admission procedures will happen directly with the university.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <BellNotification onApplyNowClick={triggerPopup} />
      <WhatsAppButton />
      
      <CounselingFormPopup 
        isOpen={showPopup} 
        onClose={hidePopup}
        trigger="auto"
      />
    </div>
  );
};

export default Disclaimer;