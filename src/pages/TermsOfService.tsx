import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BellNotification from '@/components/BellNotification';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const TermsOfService = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-card-foreground mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <p className="text-base leading-relaxed mb-6">
                  Welcome to Online Manipal. These Terms of Service ("Terms") govern your use of our website and services. 
                  By accessing or using our platform, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-base leading-relaxed mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">2. Use License</h2>
                <p className="text-base leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Online Manipal's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this 
                  license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed mb-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">3. Disclaimer</h2>
                <p className="text-base leading-relaxed mb-4">
                  The materials on Online Manipal's website are provided on an 'as is' basis. Online Manipal makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied 
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                  property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">4. Limitations</h2>
                <p className="text-base leading-relaxed mb-4">
                  In no event shall Online Manipal or its suppliers be liable for any damages (including, without limitation, damages 
                  for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials 
                  on the website, even if Online Manipal or its authorized representative has been notified orally or in writing of 
                  the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or 
                  limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">5. Accuracy of Materials</h2>
                <p className="text-base leading-relaxed mb-4">
                  The materials appearing on Online Manipal's website could include technical, typographical, or photographic errors. 
                  Online Manipal does not warrant that any of the materials on its website are accurate, complete, or current. 
                  Online Manipal may make changes to the materials contained on its website at any time without notice. However, 
                  Online Manipal does not make any commitment to update the materials.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">6. Links</h2>
                <p className="text-base leading-relaxed mb-4">
                  Online Manipal has not reviewed all of the sites linked to our website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by Online Manipal of the site. 
                  Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">7. Modifications</h2>
                <p className="text-base leading-relaxed mb-4">
                  Online Manipal may revise these terms of service for its website at any time without notice. By using this 
                  website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">8. Governing Law</h2>
                <p className="text-base leading-relaxed mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably 
                  submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">9. Contact Information</h2>
                <p className="text-base leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at info@onlinemanipals.com.
                </p>
              </section>
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

export default TermsOfService;