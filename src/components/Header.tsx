import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Search } from 'lucide-react'; // MoreVertical removed as it's unused
import { cn } from '@/lib/utils'; // cn is imported but not used in this snippet
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import CounselingFormPopup from './CounselingFormPopup'; // Ensure this path is correct

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isCounselingPopupOpen, setIsCounselingPopupOpen] = useState(false);
  const [institutionsSubDropdown, setInstitutionsSubDropdown] = useState<string | null>('Manipal University Jaipur'); // Changed initial state to null or default university

  // Ref for managing desktop dropdown hover timeout
  const dropdownHoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
            { name: 'Online MCom', href: '/mcom-muj' },
            { name: 'Online MA JMC', href: '/ma-jmc' },
            { name: 'Online MA Economics', href: '/ma-economics' },
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
      href: '/manipal-advantage'
    }
  ];

  // Logic for desktop dropdown hover
  const handleMouseEnterDropdown = (title: string) => {
    if (dropdownHoverTimeoutRef.current) {
      clearTimeout(dropdownHoverTimeoutRef.current);
    }
    setOpenDropdown(title);
  };

  const handleMouseLeaveDropdown = () => {
    dropdownHoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Small delay to allow cursor to move to sub-items
  };

  // Logic for mobile dropdown toggling
  const handleMobileDropdownToggle = (title: string) => {
    // If opening 'Institutions' for the first time or from closed state, default to Manipal University Jaipur
    if (title === 'Institutions' && (openDropdown !== 'Institutions')) {
        setInstitutionsSubDropdown('Manipal University Jaipur');
    }
    setOpenDropdown(openDropdown === title ? null : title);
  };

  // Logic for mobile institutions sub-dropdown toggling
  const handleInstitutionsSubDropdownToggle = (name: string) => {
    setInstitutionsSubDropdown(institutionsSubDropdown === name ? null : name);
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
                onMouseEnter={() => item.hasDropdown && handleMouseEnterDropdown(item.title)}
                onMouseLeave={item.hasDropdown ? handleMouseLeaveDropdown : undefined}
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
                          onMouseEnter={() => handleMouseEnterDropdown(item.title)} // Keep open when hovering over content
                          onMouseLeave={handleMouseLeaveDropdown} // Close when leaving content
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
                                      {/* View All Courses link for desktop */}
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
              onClick={() => setIsCounselingPopupOpen(true)}
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
                            <button
                              className="w-full flex items-center justify-between px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-smooth font-medium border-b border-border/30 pb-1"
                              onClick={() => handleInstitutionsSubDropdownToggle(subItem.name)}
                            >
                              <span>{subItem.name}</span>
                              <ChevronDown className={`w-4 h-4 transition-transform ${
                                institutionsSubDropdown === subItem.name ? 'rotate-180' : ''
                              }`} />
                            </button>
                            {subItem.courses && subItem.courses.length > 0 && institutionsSubDropdown === subItem.name && (
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
                                {/* View All Courses link for mobile */}
                                <a
                                  href={subItem.href}
                                  className="block px-2 py-1 text-xs text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-md transition-smooth font-medium mt-2"
                                >
                                  View All Courses →
                                </a>
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
                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
                  onClick={() => setIsCounselingPopupOpen(true)}
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      <CounselingFormPopup 
        isOpen={isCounselingPopupOpen}
        onClose={() => setIsCounselingPopupOpen(false)}
        trigger="header-apply-now"
      />
    </header>
  );
};

export default Header;
