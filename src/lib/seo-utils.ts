// SEO utility functions for dynamic meta tags and structured data

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

export const updateMetaTags = (config: SEOConfig) => {
  // Update document title
  document.title = config.title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', config.description);
  }
  
  // Update keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', config.keywords);
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', config.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', config.description);
  }
  
  // Update canonical URL
  if (config.canonicalUrl) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonicalUrl);
  }
  
  // Add/update JSON-LD structured data
  if (config.jsonLd) {
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(config.jsonLd);
  }
};

export const generateCourseStructuredData = (courseData: {
  name: string;
  description: string;
  provider: string;
  price: string;
  duration: string;
  mode: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.name,
    "description": courseData.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": courseData.provider,
      "url": "https://onlinemanipals.com"
    },
    "offers": {
      "@type": "Offer",
      "price": courseData.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "courseMode": courseData.mode,
    "timeRequired": courseData.duration,
    "educationalLevel": "graduate"
  };
};

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};