import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Search } from 'lucide-react'; // Removed MoreVertical as it's not used
import { cn } from '@/lib/utils'; // cn is not directly used in the provided snippet
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import { Link } from 'react-router-dom';
// import { useCounselingPopup } from '@/hooks/useCounselingPopup'; // We'll use local state for now

const Header = () => {
  // Using local state for the popup, as per your reference code
  const [isCounselingPopupOpen, setIsCounselingPopupOpen] = useState(false);
  // If you want to use the global hook again, uncomment the line below and remove local state
  // const { triggerPopup } = useCounselingPopup(); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [institutionsSubDropdown, setInstitutionsSubDropdown] = useState<string>('Manipal University Jaipur');

  const navigationItems = [
    {
      title: 'Courses',
      hasDropdown: true,
      items: [
        { name: 'Online MBA', href: '/mba' },
        { name: 'Online MCA', href: '/mca' },
        { name: 'Online BBA', href: '/bba' },
        { name: 'Online BCA', href: '/bca' },
        { name: 'Online BCom', href: '/bcom' },
        { name: 'Online MCom', href: '/mcom' },
      ]
    },
    {
      title: 'Institutions',
      hasDropdown: true,
      items: [
        { 
          name: 'Manipal University Jaipur', 
          href: '/muj',
          isUniversity: true,
          courses: [
            { name: 'Online MBA', href: '/mba' },
            { name: 'Online MCA', href: '/mca' },
            { name: 'Online BBA', href: '/bba' },
            { name: 'Online BCA', href: '/bca' },
            { name: 'Online BCom', href: '/bcom' },
          ]
        },
        { 
          name: 'Manipal Academy of Higher Education', 
          href: '/mahe',
          isUniversity: true,
          courses: []
        },
        { 
          name: 'Sikkim Manipal University', 
          href: '/smu',
          isUniversity: true,
          courses: [
            { name: 'Online BA', href: '/ba-smu' },
            { name: 'Online MA', href: '/ma-smu' },
            { name: 'Online BCom', href: '/bcom-smu' },
            { name: 'Online MCom', href: '/mcom-smu' },
          ]
        },
      ]
    },
    {
      title: 'The Manipal Advantage',
      hasDropdown: false,
      href: '/advantage'
    }
  ];

  const handleMobileDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] lg:w-[85%] z-50 bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-lg">
      <div className="px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={mujLogo} 
                alt="Online Manipal - Education Platform" 
                className="h-16 w-auto object-contain max-w-[320px]"
              />
            </Link>
          </div>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.title)}
                onMouseLeave={() => item.hasDropdown && setTimeout(() => setOpenDropdown(null), 300)}
              >
                {item.hasDropdown ? (
                  <>
                    <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth font-medium">
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.title && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg p-3 z-50 backdrop-blur-sm"
                          onMouseEnter={() => setOpenDropdown(item.title)}
                          onMouseLeave={() => setTimeout(() => setOpenDropdown(null), 300)}
                        >
                          {item.title === 'Institutions' ? (
                            // Special layout for institutions with sub-courses
                            <div className="space-y-4">
                              {item.items?.map((subItem) => (
                                <div key={subItem.name} className="space-y-2">
                                  <div 
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => setInstitutionsSubDropdown(
                                      institutionsSubDropdown === subItem.name ? '' : subItem.name
                                    )}
                                  >
                                    <a
                                      href={subItem.href}
                                      className="block px-3 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth font-medium border-b border-border pb-2 flex-1"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {subItem.name}
                                    </a>
                                    <button className="p-1 hover:bg-accent rounded">
                                      <ChevronDown className={`w-4 h-4 transition-transform ${
                                        institutionsSubDropdown === subItem.name ? 'rotate-180' : ''
                                      }`} />
                                    </button>
                                  </div>
                                  {subItem.courses && subItem.courses.length > 0 && institutionsSubDropdown === subItem.name && (
                                    <div className="pl-4 space-y-1">
                                      {subItem.courses.map((course) => (
                                        <a
                                          key={course.name}
                                          href={course.href}
                                          className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-smooth"
                                        >
                                          {course.name}
                                        </a>
                                      ))}
                                      <a
                                        href={subItem.href}
                                        className="block px-3 py-1 text-sm text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-md transition-smooth font-medium mt-2"
                                      >
                                        View All Courses →
                                      </a>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Regular dropdown for other items
                            item.items?.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth"
                              >
                                {subItem.name}
                              </a>
                            ))
                          )}
                        </div>
                      )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            
            {/* Apply Now Button - Desktop */}
            <Button 
              size="sm" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary" 
              onClick={() => setIsCounselingPopupOpen(true)} // Using local state setter
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile navigation (visible on mobile) */}
          <div className="flex items-center space-x-4 lg:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu content (visible when toggled) */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="space-y-4">
              {/* Dropdown items under three dots */}
              {navigationItems.filter(item => item.hasDropdown).map(item => (
                <div key={item.title} className="space-y-2">
                  <button 
                    className="font-medium text-foreground px-2 flex items-center justify-between w-full"
                    onClick={() => handleMobileDropdownToggle(item.title)}
                  >
                    {item.title}
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      openDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.title === 'Institutions' ? (
                        // Special handling for institutions with courses
                        item.items?.map((subItem) => (
                          <div key={subItem.name} className="space-y-1">
                            <a
                              href={subItem.href}
                              className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-smooth font-medium border-b border-border/30 pb-1"
                            >
                              {subItem.name}
                            </a>
                            {subItem.courses && subItem.courses.length > 0 && (
                              <div className="pl-3 space-y-0.5">
                                {subItem.courses.map((course) => (
                                  <a
                                    key={course.name}
                                    href={course.href}
                                    className="block px-2 py-0.5 text-xs text-muted-foreground hover:text-primary transition-smooth"
                                  >
                                    {course.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        // Regular dropdown for courses
                        item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {subItem.name}
                          </a>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={navigationItems.find(item => !item.hasDropdown)?.href}
                className="block text-foreground hover:text-primary transition-smooth font-medium px-2"
              >
                {navigationItems.find(item => !item.hasDropdown)?.title}
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Courses
                </Button>
                {/* Apply Now Button - Mobile */}
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-smooth" 
                  onClick={() => {
                    setIsCounselingPopupOpen(true); // Using local state setter
                    setIsMenuOpen(false); // Close mobile menu when popup opens
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Basic local popup component for testing */}
      {isCounselingPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button 
              onClick={() => setIsCounselingPopupOpen(false)} 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Free Counseling</h3>
            <p className="text-gray-700 mb-6">This is a placeholder for your counseling form.</p>
            {/* You would replace this with your actual form */}
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded-md" />
              <input type="tel" placeholder="Your Phone Number" className="w-full p-2 border border-gray-300 rounded-md" />
              <Button onClick={() => setIsCounselingPopupOpen(false)} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
