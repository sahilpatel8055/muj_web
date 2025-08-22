import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/src/assets/muj_logo-removebg-preview.png" 
              alt="Manipal University Jaipur" 
              className="h-18 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                      <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg p-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-card-foreground hover:bg-accent rounded-md transition-smooth"
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
          </nav>

          {/* Right side - Search and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              <Search className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-primary">
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-2">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                        className="flex items-center justify-between w-full text-left text-foreground hover:text-primary transition-smooth font-medium"
                      >
                        <span>{item.title}</span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.title && "rotate-180"
                        )} />
                      </button>
                      {openDropdown === item.title && (
                        <div className="pl-4 space-y-2">
                          {item.items?.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 text-muted-foreground hover:text-primary transition-smooth"
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
                      className="block text-foreground hover:text-primary transition-smooth font-medium"
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
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
