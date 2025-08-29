import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { generateBreadcrumbStructuredData } from '@/lib/seo-utils';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface SEOBreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const SEOBreadcrumbs = ({ items, className = '' }: SEOBreadcrumbsProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from current path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { name: 'Home', href: '/' }
    ];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        name,
        href: currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();
  
  // Add structured data
  React.useEffect(() => {
    const structuredData = generateBreadcrumbStructuredData(
      breadcrumbs.map(item => ({
        name: item.name,
        url: `https://onlinemanipals.com${item.href}`
      }))
    );
    
    let script = document.getElementById('breadcrumb-structured-data') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script') as HTMLScriptElement;
      script.id = 'breadcrumb-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);
    
    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [breadcrumbs]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      className={`flex items-center space-x-2 text-sm text-muted-foreground ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            
            {index < breadcrumbs.length - 1 ? (
              <>
                <Link 
                  to={item.href}
                  className="hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
              </>
            ) : (
              <span 
                className="text-foreground font-medium"
                aria-current="page"
                itemProp="name"
              >
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default SEOBreadcrumbs;