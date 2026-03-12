import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Zewo Tech Solutions - Web Development & Full Stack Solutions',
  description = 'Leading web development company specializing in full-stack solutions, e-commerce platforms, and custom web applications. Expert React, Node.js, Express, and SQL development services.',
  keywords = 'web development, full stack development, tech solutions, React development, Node.js, Express, SQL, e-commerce development, custom web applications, website design, digital solutions',
  url = 'https://zewo.in',
  image = 'https://zewo.in/logo.jpeg'
}) => {
  // Update document title and meta tags
  if (typeof document !== 'undefined') {
    document.title = title;
    
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
  
  return null;
};

export default SEO;
