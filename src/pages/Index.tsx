import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CourseCategories from "@/components/CourseCategories";
import UniversityBranches from "@/components/UniversityBranches";
import CourseCard from "@/components/CourseCard";
import CounselingForm from "@/components/CounselingForm";
import { courses } from "@/data/courses";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isCounselingOpen, setIsCounselingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
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
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-manipal-text-dark hover:text-manipal-orange transition-colors">Courses</a>
              <a href="#universities" className="text-manipal-text-dark hover:text-manipal-orange transition-colors">Universities</a>
              <a href="#about" className="text-manipal-text-dark hover:text-manipal-orange transition-colors">About</a>
              <button 
                onClick={() => handleApplyNow()}
                className="bg-manipal-orange text-white px-6 py-2 rounded-lg hover:bg-manipal-orange-dark transition-colors font-semibold"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection onApplyNow={() => handleApplyNow()} />

      {/* Course Categories */}
      <CourseCategories />

      {/* University Branches */}
      <div id="universities">
        <UniversityBranches />
      </div>

      {/* Featured Courses Section */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-manipal-text-dark mb-4">
              Popular IGNOU Online Courses
            </h2>
            <p className="text-xl text-manipal-text-light max-w-3xl mx-auto">
              Choose from our comprehensive range of UGC approved online degree programs with flexible learning options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 9).map((course) => (
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
            <button 
              onClick={() => handleApplyNow()}
              className="bg-manipal-orange text-white px-8 py-3 rounded-lg hover:bg-manipal-orange-dark transition-colors font-semibold text-lg"
            >
              View All Courses
            </button>
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
