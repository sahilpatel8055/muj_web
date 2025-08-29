// Prerender API endpoint for SEO optimization
// This helps search engines crawl SPA pages effectively

export const prerenderRoutes = [
  '/',
  '/all-courses',
  '/mba',
  '/mca', 
  '/bba',
  '/bca',
  '/bcom',
  '/mcom',
  '/muj',
  '/smu',
  '/mahe',
  '/manipal-advantage',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer'
];

export const generateStaticPages = async () => {
  const pages = [];
  
  for (const route of prerenderRoutes) {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_URL || 'https://onlinemanipals.com'}${route}`);
      const html = await response.text();
      
      pages.push({
        route,
        html,
        lastModified: new Date().toISOString()
      });
    } catch (error) {
      console.error(`Failed to prerender ${route}:`, error);
    }
  }
  
  return pages;
};

// Middleware for bot detection and prerendered content serving
export const botUserAgents = [
  'googlebot',
  'bingbot', 
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'telegram'
];

export const isBotRequest = (userAgent: string): boolean => {
  const ua = userAgent.toLowerCase();
  return botUserAgents.some(bot => ua.includes(bot));
};