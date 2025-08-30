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
                It should be noted that the student will directly apply with the university for all Online Degree Programs, all the admission and post admission procedures will happen directly with the university. We do not act as a university or an admission authority.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-card-foreground">Essential Points</h2>
                <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                  <li>All university names, logos, and trademarks used are for informational purposes only.</li>
                  <li>Our role is to provide updates, information, and guidance on universities regarding their distance or online education programs.</li>
                  <li>We do not charge students any fees for counselling or guidance on university applications.</li>
                  <li>We do not issue degrees, mark sheets, or certificates in the name of any university.</li>
                  <li>Our aim is to offer free and unbiased counselling to help students choose the right path.</li>
                  <li>We respect the integrity and reputation of all listed universities and do not engage in any activity that damages their credibility.</li>
                  <li>Users are encouraged to verify information from official university portals before making decisions.</li>
                  <li>Our services are transparent, legal, and purely for student support.</li>
                </ul>
              </div>
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
