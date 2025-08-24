import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Search, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import mujLogo from '@/assets/muj_logo-removebg-preview.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        { name: 'Manipal University Jaipur', href: '/muj' },
        { name: 'Manipal Academy of Higher Education', href: '/mahe' },
        { name: 'Sikkim Manipal University', href: '/smu' },
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
                className="h-16 w-auto object-contain"
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
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth font-medium">
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                     {openDropdown === item.title && (
                       <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg p-2 z-50 backdrop-blur-sm">
                         {item.items?.map((subItem) => (
                           <a
                             key={subItem.name}
                             href={subItem.href}
                             className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth"
                           >
                             {subItem.name}
                           </a>
                         ))}
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
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary">
              Apply Now
            </Button>
          </div>

          {/* Mobile navigation (visible on mobile) */}
          <div className="flex items-center space-x-4 lg:hidden">
            {navigationItems.filter(item => item.hasDropdown).map(item => (
              <div key={item.title} className="relative">
                <button
                  onClick={() => handleMobileDropdownToggle(item.title)}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth font-medium"
                >
                  <span>{item.title.split(' ')[0]}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    openDropdown === item.title && "rotate-180"
                  )} />
                </button>
                 {openDropdown === item.title && (
                   <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg p-2 z-50 backdrop-blur-sm">
                     {item.items?.map((subItem) => (
                       <a
                         key={subItem.name}
                         href={subItem.href}
                         className="block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-smooth"
                       >
                         {subItem.name}
                       </a>
                     ))}
                   </div>
                 )}
              </div>
            ))}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu content (visible when toggled) */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="space-y-4">
              <a
                href={navigationItems.find(item => !item.hasDropdown)?.href}
                className="block text-foreground hover:text-primary transition-smooth font-medium"
              >
                {navigationItems.find(item => !item.hasDropdown)?.title}
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search Courses
                </Button>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-smooth">
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
