import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BellNotification from '@/components/BellNotification';
import CounselingFormPopup from '@/components/CounselingFormPopup';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const PrivacyPolicy = () => {
  const { showPopup, hidePopup, triggerPopup } = useCounselingPopup();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-card-foreground mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <section>
                <p className="text-base leading-relaxed mb-6">
                  Online Manipal University is a leading digital education platform from the Manipal Education and Medical Group, 
                  dedicated to delivering high-quality, accessible online degree and certification programs. It serves as a 
                  comprehensive hub offering UGC-approved programs from prestigious institutions like Manipal University Jaipur (MUJ), 
                  Manipal Academy of Higher Education (MAHE), and Sikkim Manipal University (SMU). Through its flexible online delivery 
                  model, Online Manipal empowers students globally to pursue academic excellence and career advancement from anywhere, 
                  at any time, bridging geographical barriers to quality education.
                </p>
                
                <p className="text-base leading-relaxed mb-6">
                  Your privacy is paramount to us at onlinemanipals.com. This Privacy Policy details how we collect, use, and protect 
                  your personal information in connection with our website and services. By using our website and services, you consent 
                  to the collection and use of your information as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">1. Information We Collect</h2>
                <p className="text-base leading-relaxed mb-4">
                  We collect information from you to provide and improve our services. The types of data we collect include:
                </p>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-card-foreground mb-2">Personal Information:</h3>
                  <p className="text-base leading-relaxed mb-4">
                    This is information that can be used to identify you. We collect this when you voluntarily provide it to us by 
                    filling out forms on our website, such as our counseling form. This may include your name, email address, 
                    mobile number, and other information related to your educational and career interests.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium text-card-foreground mb-2">Usage and Log Data:</h3>
                  <p className="text-base leading-relaxed mb-4">
                    We automatically collect certain information when you visit our website. This data is non-personal and includes 
                    your IP address, browser type, operating system, pages visited, the time and date of your visit, and the resources 
                    you access. This helps us analyze user behavior and improve our site's functionality.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium text-card-foreground mb-2">Cookies and Tracking Technologies:</h3>
                  <p className="text-base leading-relaxed mb-4">
                    Our website uses cookies and similar tracking technologies to enhance your experience. These are small files stored 
                    on your device that help us remember your preferences, recognize you on repeat visits, and track your usage patterns. 
                    We also use third-party advertising services including Google Ads, Meta (Facebook) Ads, and other remarketing platforms 
                    that may place cookies on your device for personalized advertising purposes. You can manage your cookie preferences 
                    through your browser settings.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-medium text-card-foreground mb-2">Marketing and Advertising Data:</h3>
                  <p className="text-base leading-relaxed mb-4">
                    We may collect information about your interactions with our advertisements and marketing campaigns across various 
                    platforms including Google, Meta (Facebook), and other advertising networks. This helps us understand the effectiveness 
                    of our marketing efforts and provide you with relevant educational opportunities.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-base leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed mb-4">
                  <li><strong>To Provide Counseling Services:</strong> Your contact details are used to reach out to you via calls, messages, and emails to offer our free, neutral counseling services, tailored to your specific academic and career preferences. If you do not want to receive calls, emails, or messages from us, you can opt out at any time.</li>
                  <li><strong>To Improve Our Services:</strong> We use collected data to analyze website traffic, identify user trends, and make improvements to our content and services.</li>
                  <li><strong>For Communication and Marketing:</strong> We may use your contact information to send you updates, promotional material, or information about other services we feel may be of interest to you. You can opt out of these communications at any time.</li>
                  <li><strong>For Advertising and Remarketing:</strong> We use Google Ads, Meta (Facebook) Ads, and other advertising platforms to show you relevant educational content. This may include remarketing to users who have visited our website.</li>
                  <li><strong>To Ensure Compliance:</strong> Your information may be used to enforce our Terms & Conditions and to comply with legal obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">3. Sharing and Disclosure of Information</h2>
                <p className="text-base leading-relaxed mb-4">
                  We are committed to protecting your privacy. We want to be clear that we do not sell, rent, or share your personal 
                  information with any third parties. The only exception is when we are required to disclose your information to comply 
                  with a valid legal obligation, such as a court order or law enforcement request.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">4. Data Security</h2>
                <p className="text-base leading-relaxed mb-4">
                  We implement reasonable security measures to protect your personal information from unauthorized access, alteration, 
                  disclosure, or destruction. While we strive to use commercially acceptable means to protect your data, no method of 
                  transmission over the Internet or method of electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">5. Third-Party Links</h2>
                <p className="text-base leading-relaxed mb-4">
                  Our website may contain links to third-party websites, including university portals. We are not responsible for the 
                  privacy practices or the content of these external sites. We encourage you to review the privacy policies of any 
                  third-party websites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">6. Cookie Consent and Opt-Out Options</h2>
                <p className="text-base leading-relaxed mb-4">You have full control over your privacy preferences:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-card-foreground mb-2">Cookie Management:</h3>
                    <p className="text-base leading-relaxed">
                      You can disable cookies through your browser settings. Please note that disabling cookies may affect the 
                      functionality of our website.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card-foreground mb-2">Advertising Opt-Out:</h3>
                    <p className="text-base leading-relaxed">
                      You can opt out of personalized advertising by visiting Google Ad Settings, Facebook Ad Preferences, or the 
                      Digital Advertising Alliance's opt-out page. This will stop personalized ads but you may still see 
                      non-personalized advertisements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-card-foreground mb-2">Communication Preferences:</h3>
                    <p className="text-base leading-relaxed">
                      If you do not want to receive calls, emails, or messages from us, you can opt out by contacting us at 
                      info@onlinemanipals.com or through the unsubscribe links in our communications.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">7. Data Retention</h2>
                <p className="text-base leading-relaxed mb-4">
                  We retain your personal information only as long as necessary to provide our services and comply with legal 
                  obligations. Typically, we retain contact information for up to 3 years from your last interaction with us, 
                  unless you request earlier deletion. Marketing data and cookies are retained according to the respective platform 
                  policies (Google, Meta, etc.).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">8. Your Rights and Choices</h2>
                <p className="text-base leading-relaxed mb-4">
                  You have the right to access and control your personal information. If you wish to unsubscribe from our 
                  communications or have your data removed from our systems, you can contact us directly at info@onlinemanipals.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">9. Grievance Officer</h2>
                <p className="text-base leading-relaxed mb-4">
                  In accordance with Indian law, if you have any questions or concerns regarding this Privacy Policy or our data 
                  handling practices, you may contact our Grievance Officer at info@onlinemanipals.com.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-card-foreground mb-4">10. Changes to this Policy</h2>
                <p className="text-base leading-relaxed mb-4">
                  We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the 
                  "Last Updated" date will be revised. We encourage you to review this policy periodically to stay informed about 
                  how we are protecting your information.
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

export default PrivacyPolicy;