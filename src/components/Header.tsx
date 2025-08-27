import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Search, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import { useCounselingPopup } from '@/hooks/useCounselingPopup';

const Header = () => {
  const { triggerPopup } = useCounselingPopup();
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
            
            {/* Apply Now Button */}
             <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary" onClick={triggerPopup}>
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
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth" onClick={triggerPopup}>
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
