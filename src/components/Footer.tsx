import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import fevicon from '@/assets/fevicon.png';

const Footer = () => {
  const [showFullDisclaimer, setShowFullDisclaimer] = useState(false);
  
  const courseCategories = [
    { name: 'Online MBA', href: '/online-mba-courses' },
    { name: 'Online MCA', href: '/online-mca-courses' },
    { name: 'Online BBA', href: '/online-bba-courses' },
    { name: 'Online BCA', href: '/online-bca-courses' },
    { name: 'Online BCom', href: '/online-bcom-courses' },
    { name: 'Online MCom', href: '/online-mcom-courses' },
  ];

  const universities = [
    { name: 'Manipal University Jaipur', href: '/muj' },
    { name: 'Manipal Academy of Higher Education', href: '/mahe' },
    { name: 'Sikkim Manipal University', href: '/smu' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Support', href: '/support' },
    { name: 'Career Services', href: '/careers' },
    { name: 'Alumni Network', href: '/alumni' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img src={fevicon} alt="Online Manipal's Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-bold text-card-foreground">Online Manipal's</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
                This website is owned and operated by Avedu Pvt Ltd, an official partner for Manipal University online admissions. This is not the official Manipal University website. For official details, visit{" "}
                <a href="https://www.onlinemanipal.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.onlinemanipal.com
                </a>.
              </p>
              
              {showFullDisclaimer && (
                <p className="text-muted-foreground leading-relaxed text-sm">
                  It should be noted that the student will directly apply with the university for all Online Degree Programs, all the admission and post admission procedures will happen directly with the university.
                </p>
              )}
              
              <button 
                onClick={() => setShowFullDisclaimer(!showFullDisclaimer)}
                className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-smooth text-sm"
              >
                <span>{showFullDisclaimer ? 'See Less' : 'See More'}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showFullDisclaimer ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-card-foreground">Popular Courses</h3>
            <ul className="space-y-3">
              {courseCategories.map((course) => (
                <li key={course.name}>
                  <a 
                    href={course.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Universities */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-card-foreground">Our Universities</h3>
            <ul className="space-y-3">
              {universities.map((university) => (
                <li key={university.name}>
                  <a 
                    href={university.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {university.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-card-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-card-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p>Manipal University jaipur</p>
                  <p>Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+91 77951 33908</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@onlinemanipals.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-card-foreground mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-smooth text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Online Manipal's Avedu Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/disclaimer" className="text-muted-foreground hover:text-primary transition-smooth">
                Disclaimer
              </a>
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
