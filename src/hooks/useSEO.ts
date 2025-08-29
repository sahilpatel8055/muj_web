import { useEffect } from 'react';
import { updateMetaTags } from '@/lib/seo-utils';

interface UseSEOProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

export const useSEO = ({ title, description, keywords, canonicalUrl, jsonLd }: UseSEOProps) => {
  useEffect(() => {
    updateMetaTags({
      title,
      description,
      keywords,
      canonicalUrl: canonicalUrl || window.location.href,
      jsonLd
    });
    
    // Cleanup function to reset to default values when component unmounts
    return () => {
      updateMetaTags({
        title: "Online MANIPAL - Education That Powers Your Ambition",
        description: "Online degree programs & courses from Manipal Universities. UGC-approved programs designed to accelerate your career growth.",
        keywords: "online education, manipal university, MBA, MCA, BBA, BCA, BCom, distance learning, UGC approved"
      });
    };
  }, [title, description, keywords, canonicalUrl, jsonLd]);
};