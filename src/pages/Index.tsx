import { useState } from "react";
import CourseCard from "@/components/CourseCard";
import CounselingForm from "@/components/CounselingForm";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const { toast } = useToast();

  const handleApplyNow = (courseName?: string) => {
    setSelectedCourse(courseName || "");
    setIsCounselingOpen(true);
  };

  const handleDownloadBrochure = (courseName: string) => {
    toast({
      title: "Brochure Download",
      description: `${courseName} brochure will be sent to your email shortly.`,
    });
  };

  const filteredCourses = () => {
    switch (activeTab) {
      case "popular":
        return courses.filter(course => ["mba", "mca", "bca", "bba", "bcom"].includes(course.id));
      case "ug":
        return courses.filter(course => ["bca", "bba", "bcom", "ba"].includes(course.id));
      case "pg":
        return courses.filter(course => ["mba", "mca", "msc-data-science", "business-analytics", "mcom", "ma-journalism", "ma"].includes(course.id));
      default:
        return courses;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/11129ed6-3d3c-4b47-98fe-0ea196d6e32a.png" 
                alt="Online Manipal Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-manipal-text-dark hover:text-manipal-orange transition-colors">Courses</a>
              <a href="#universities" className="text-manipal-text-dark hover:text-manipal-orange transition-colors">Universities</a>
              <a href="#about" className="text-manipal-text-dark hover:text-manipal-orange transition-colors">About</a>
              <Button 
                variant="manipal"
                onClick={() => handleApplyNow()}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Badges and Course Buttons */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-manipal-text-dark mb-6">
              Online Degrees From Manipal
            </h1>
            
            {/* Accreditation Badges */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-manipal-orange rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">UGC</span>
                </div>
                <p className="text-sm text-manipal-text-light">UGC-entitled</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-manipal-orange rounded-full flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">AICTE</span>
                </div>
                <p className="text-sm text-manipal-text-light">AICTE approved</p>
              </div>
            </div>

            {/* Course Quick Access Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["MBA", "MCA", "BBA", "BCA", "BCOM"].map((course) => (
                <Button
                  key={course}
                  variant="manipal-outline"
                  className="flex items-center gap-2"
                  onClick={() => handleApplyNow(course)}
                >
                  <span className="w-4 h-4 bg-manipal-orange rounded-full"></span>
                  Online {course}
                </Button>
              ))}
            </div>

            <Button 
              variant="manipal" 
              size="xl" 
              onClick={() => handleApplyNow()}
              className="mb-4"
            >
              Apply Now
            </Button>

            <div className="text-center">
              <Badge variant="destructive" className="mb-2">Admission Closing Soon</Badge>
              <p className="text-manipal-text-light">Avail No Cost EMI's</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Banner */}
      <section className="bg-manipal-orange text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-2">Speak to an admission counsellor</h2>
              <p className="text-white/90 mb-4">Avail No Cost EMI's</p>
              <div className="flex flex-col sm:flex-row gap-2 text-sm">
                <span>• Online Exam</span>
                <span>• 100% Placement Assistance</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-manipal-text-dark min-w-[400px]">
              <p className="text-sm text-manipal-text-light mb-4">We don't spam</p>
              <div className="space-y-4">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-manipal-orange focus:border-transparent">
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                  <option>Gujarat</option>
                  <option>Uttar Pradesh</option>
                </select>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-manipal-orange focus:border-transparent">
                  <option>Select Course</option>
                  <option>MBA</option>
                  <option>MCA</option>
                  <option>BCA</option>
                  <option>BBA</option>
                  <option>BCOM</option>
                </select>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-manipal-orange focus:border-transparent">
                  <option>Select University</option>
                  <option>MAHE</option>
                  <option>MUJ</option>
                  <option>SMU</option>
                </select>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-4 h-4 bg-manipal-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-manipal-text-light">Only a certified mentor will assist you</span>
                </div>
                <p className="text-xs text-manipal-text-light">
                  I authorize a representative to contact me via phone and/or email. This will override registry on DND/NDNC.
                </p>
                <Button 
                  variant="manipal" 
                  className="w-full"
                  onClick={() => handleApplyNow()}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University Branches */}
      <section id="universities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-4">
              The Manipal Legacy - Transformative education for a successful career
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-manipal-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-manipal-orange font-bold text-lg">MAHE</span>
                </div>
                <h3 className="text-xl font-bold text-manipal-text-dark mb-2">
                  Manipal Academy of Higher Education (MAHE)
                </h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-manipal-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-manipal-orange font-bold text-lg">MUJ</span>
                </div>
                <h3 className="text-xl font-bold text-manipal-text-dark mb-2">
                  Manipal University Jaipur (MUJ)
                </h3>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-manipal-orange-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-manipal-orange font-bold text-lg">SMU</span>
                </div>
                <h3 className="text-xl font-bold text-manipal-text-dark mb-2">
                  Sikkim Manipal University (SMU)
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Manipal Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-4">
              Online Manipal benefits
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Degrees from top-ranked Manipal universities",
                desc: "Graduate with UGC-entitled & AICTE-approved online degrees which are at par with on-campus degree programs."
              },
              {
                title: "Manipal alumni status",
                desc: "Become a part of a 1,50,000+ global Manipal alumni network."
              },
              {
                title: "100% placement assistance",
                desc: "Boost your employability quotient by acquiring job-ready skills & preparing for interviews to perform well in placement drives."
              },
              {
                title: "Exclusive Coursera access",
                desc: "Free access to 10K+ courses & professional certifications from top global universities."
              },
              {
                title: "Scholarships up to 30%",
                desc: "Avail scholarship benefits under merit, defense, Divyaang, alumni, and other categories."
              },
              {
                title: "Easy Financing Options",
                desc: "Improved affordability with flexible financing and no-cost EMI options."
              },
              {
                title: "Weekly webinars with industry leaders",
                desc: "Stay updated on key industry trends through our weekly webinars by industry experts."
              },
              {
                title: "Campus Immersion",
                desc: "Participate in exclusive in-person meetups at campus with your batchmates and faculty."
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-manipal-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <h3 className="font-bold text-manipal-text-dark mb-2">{benefit.title}</h3>
                  <p className="text-sm text-manipal-text-light">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Online Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-4">
              Online Programs From Manipal University
            </h2>
            <p className="text-xl text-manipal-text-light max-w-4xl mx-auto mb-8">
              Manipal University provides the Online Manipal Plus that has the benefits of e-lectures, counselling from academic advisors, career assistance, and others.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-manipal-orange rounded-full"></span>
                    <span className="text-manipal-text-light">Advantage of Integrated LMS and online lectures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-manipal-orange rounded-full"></span>
                    <span className="text-manipal-text-light">E-Library with more than 1,50,000 e-books</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-manipal-orange rounded-full"></span>
                    <span className="text-manipal-text-light">Support from academic advisors</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-manipal-orange rounded-full"></span>
                    <span className="text-manipal-text-light">Career assistance with interview tips</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-manipal-orange rounded-full"></span>
                    <span className="text-manipal-text-light">Connect with university's alumni network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Tabs and Listings */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-8">
              Online Master's & Bachelor's Program
            </h2>
            
            {/* Course Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-sm">
                {[
                  { id: "all", label: "All Courses" },
                  { id: "popular", label: "Popular Courses" },
                  { id: "ug", label: "UG Courses" },
                  { id: "pg", label: "PG Courses" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-manipal-orange text-white"
                        : "text-manipal-text-dark hover:bg-gray-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses().map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                duration={course.duration}
                fee={course.fee}
                description={course.description}
                highlights={course.highlights}
                onApplyNow={() => handleApplyNow(course.title)}
                onDownloadBrochure={() => handleDownloadBrochure(course.title)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="manipal" 
              size="lg"
              onClick={() => handleApplyNow()}
            >
              View More Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Courses Quick Links */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-manipal-text-dark mb-6">Popular Courses</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Online MBA", "Online MCA", "Online BCA", "Online BBA", "Online BCOM"].map((course) => (
                <Button
                  key={course}
                  variant="manipal-outline"
                  onClick={() => handleApplyNow(course)}
                >
                  {course}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-manipal-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dreams with Manipal University Online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleApplyNow()}
              className="bg-white text-manipal-orange px-8 py-3 rounded-lg hover:bg-white/90 transition-colors font-semibold text-lg"
            >
              Start Your Journey Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-manipal-orange transition-colors font-semibold text-lg">
              Talk to Counselor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-manipal-text-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/11129ed6-3d3c-4b47-98fe-0ea196d6e32a.png" 
                alt="Online Manipal Logo" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-gray-300">
                Leading online education provider offering UGC approved degree programs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#courses" className="hover:text-manipal-orange transition-colors">Courses</a></li>
                <li><a href="#universities" className="hover:text-manipal-orange transition-colors">Universities</a></li>
                <li><a href="#about" className="hover:text-manipal-orange transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-manipal-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-manipal-orange transition-colors">Student Portal</a></li>
                <li><a href="#" className="hover:text-manipal-orange transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-manipal-orange transition-colors">Downloads</a></li>
                <li><a href="#" className="hover:text-manipal-orange transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>📞 1800-123-4567</p>
                <p>✉️ info@onlinemanipal.com</p>
                <p>🕒 Mon-Sat: 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Online Manipal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Counseling Form Modal */}
      <CounselingForm 
        isOpen={isCounselingOpen}
        onClose={() => setIsCounselingOpen(false)}
        selectedCourse={selectedCourse}
      />
    </div>
  );
};

export default Index;
