import React from 'react';

interface SEOStructuredDataProps {
  type?: 'website' | 'course' | 'university';
  title?: string;
  description?: string;
  courseName?: string;
  coursePrice?: string;
  universityName?: string;
}

const SEOStructuredData = ({ 
  type = 'website', 
  title = "Online MANIPAL - Education That Powers Your Ambition",
  description = "Online degree programs & courses from Manipal Universities. UGC-approved MBA, MCA, BBA, BCA, BCom programs designed to accelerate your career growth.",
  courseName,
  coursePrice,
  universityName
}: SEOStructuredDataProps) => {
  
  const getStructuredData = () => {
    const baseOrganization = {
      "@type": "Organization",
      "name": "Online Manipal",
      "url": "https://onlinemanipals.com",
      "logo": "https://onlinemanipals.com/src/assets/muj_logo-removebg-preview.png",
      "sameAs": [
        "https://www.facebook.com/OnlineManipal",
        "https://www.linkedin.com/company/online-manipal"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-77951-33908",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      }
    };

    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://onlinemanipals.com/#website",
              "url": "https://onlinemanipals.com",
              "name": "Online MANIPAL",
              "description": description,
              "potentialAction": [{
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://onlinemanipals.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }]
            },
            {
              "@type": "WebPage",
              "@id": "https://onlinemanipals.com/#webpage",
              "url": "https://onlinemanipals.com",
              "name": title,
              "isPartOf": {
                "@id": "https://onlinemanipals.com/#website"
              },
              "description": description
            },
            baseOrganization,
            {
              "@type": "EducationalOrganization",
              "name": "Manipal University Jaipur",
              "alternateName": "MUJ",
              "url": "https://jaipur.manipal.edu",
              "description": "Premier university offering online degree programs",
              "foundingDate": "2011",
              "accreditation": "UGC, NAAC A+ Grade",
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "UGC Recognition",
                  "credentialCategory": "Government Recognition"
                },
                {
                  "@type": "EducationalOccupationalCredential", 
                  "name": "NAAC A+ Grade",
                  "credentialCategory": "Quality Assurance"
                }
              ]
            }
          ]
        };

      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": courseName,
          "description": description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": universityName || "Manipal University Jaipur",
            "url": "https://jaipur.manipal.edu"
          },
          "offers": {
            "@type": "Offer",
            "price": coursePrice,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString()
          },
          "courseMode": "online",
          "educationalLevel": "graduate",
          "timeRequired": "P24M",
          "applicationDeadline": "2025-12-31",
          "startDate": "2025-01-01"
        };

      case 'university':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": universityName,
          "description": description,
          "url": "https://onlinemanipals.com",
          "logo": "https://onlinemanipals.com/src/assets/muj_logo-removebg-preview.png",
          "accreditation": "UGC, NAAC A+ Grade",
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "name": "UGC Recognition"
            }
          ],
          "offers": {
            "@type": "EducationalOccupationalProgram",
            "name": "Online Degree Programs",
            "programType": "online education"
          }
        };

      default:
        return {};
    }
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(getStructuredData());
    script.id = `structured-data-${type}`;
    
    // Remove existing script if it exists
    const existingScript = document.getElementById(`structured-data-${type}`);
    if (existingScript) {
      existingScript.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, title, description, courseName, coursePrice, universityName]);

  return null;
};

export default SEOStructuredData;