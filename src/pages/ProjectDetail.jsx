import { useParams, Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { slug } = useParams();

  const projects = {
    'chinnamart': { 
      name: 'Chinnamart', 
      category: 'E-Commerce',
      tech: 'Full Stack E-Commerce',
      year: '2024',
      client: 'Chinnamart Retail',
      duration: '3 months',
      desc: 'Complete e-commerce platform with product management, shopping cart, and secure payment integration.',
      challenge: 'Building a scalable e-commerce platform that handles inventory management, secure payments, and provides seamless user experience across devices.',
      solution: 'Developed a full-stack solution with React frontend, Express.js backend, SQL database, integrated payment gateway, and real-time inventory tracking. Implemented responsive design for mobile and desktop users.',
      features: ['Product catalog management', 'Shopping cart & checkout', 'Secure payment integration', 'Order tracking', 'User authentication', 'Admin dashboard'],
      technologies: ['React', 'Express.js', 'SQL', 'Node.js', 'Payment Gateway', 'Responsive Design'],
      img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80',
      link: 'https://chinnamart.in'
    },
    'blood-donation-platform': { 
      name: 'Blood Donation Platform', 
      category: 'Web Application',
      tech: 'Full Stack Application',
      year: '2026',
      client: 'Healthcare Initiative',
      duration: '4 months',
      desc: 'Blood donation management system connecting donors with recipients, featuring real-time availability and request management.',
      challenge: 'Creating a platform that efficiently connects blood donors with recipients while maintaining data privacy and ensuring real-time updates.',
      solution: 'Built with React and Vite frontend, Express.js backend, SQL database with real-time notifications, geolocation services to find nearby donors, and secure user authentication. Implemented emergency request system with instant alerts.',
      features: ['Donor registration', 'Blood request system', 'Real-time availability', 'Geolocation matching', 'Emergency alerts', 'Donation history tracking'],
      technologies: ['React', 'Vite', 'Express.js', 'SQL', 'Node.js', 'Google Maps API'],
      img: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=1200&q=80',
      link: 'https://hk-blood-donation.vercel.app'
    },
    'badevaripalem-pacs-fertilizers': { 
      name: 'BADEVARIPALEM PACS Fertilizers', 
      category: 'Business Website',
      tech: 'Full Stack Website',
      year: '2025',
      client: 'BADEVARIPALEM PACS',
      duration: '1 month',
      desc: 'Professional website for fertilizer company showcasing products, services, and agricultural solutions.',
      challenge: 'Creating an informative and professional website that effectively showcases agricultural products and builds trust with farmers and distributors.',
      solution: 'Designed a clean, professional website with React and Vite, Express.js backend, SQL database for product management, detailed product information, agricultural tips, and easy contact system. Implemented SEO optimization for better reach to target audience.',
      features: ['Product showcase', 'Agricultural solutions', 'Contact system', 'Product catalog', 'Company information', 'SEO optimized'],
      technologies: ['React', 'Vite', 'Express.js', 'SQL', 'Node.js', 'Responsive Design', 'SEO'],
      img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80',
      link: 'https://dad-pacs.vercel.app'
    },
    'tobacco-export-company': { 
      name: 'Tobacco Export Company', 
      category: 'Corporate Website',
      tech: 'Frontend Website',
      year: '2025',
      client: 'Export Trading Company',
      duration: '2.5 months',
      desc: 'Export-focused website for tobacco company with product catalog and international trade information.',
      challenge: 'Building a professional export-oriented website that showcases products to international clients and facilitates business inquiries.',
      solution: 'Created a modern, professional frontend website with React and Vite, detailed product specifications, export documentation information, and WhatsApp-integrated contact system for international inquiries.',
      features: ['Product catalog', 'Export information', 'WhatsApp integration', 'Company profile', 'Trade documentation', 'Responsive Design'],
      technologies: ['React', 'Vite', 'WhatsApp API', 'Responsive Design'],
      img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
      link: '#'
    },
    'infrastructure-projects': { 
      name: 'Infrastructure Projects', 
      category: 'Infrastructure',
      tech: 'Frontend Website',
      year: '2025',
      client: 'Construction Company',
      duration: '5 months',
      desc: 'Comprehensive infrastructure project showcase website with project portfolio and company information.',
      challenge: 'Developing a professional website to showcase infrastructure projects, company capabilities, and facilitate client inquiries.',
      solution: 'Built a modern frontend website with React and Vite, featuring project galleries, company profile, service offerings, and WhatsApp-integrated contact system for instant client communication.',
      features: ['Project showcase', 'Company portfolio', 'Service information', 'WhatsApp integration', 'Image galleries', 'Contact system'],
      technologies: ['React', 'Vite', 'WhatsApp API', 'Responsive Design', 'Image Optimization'],
      img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
      link: '#'
    },
    'promoads': {
      name: 'PromoAds',
      category: 'Advertising',
      tech: 'Frontend Website',
      year: '2026',
      client: 'PromoAds',
      duration: '1.5 months',
      desc: 'Digital advertising platform showcasing promotional services and ad campaign solutions for businesses.',
      challenge: 'Creating a compelling advertising platform website that effectively communicates services and attracts business clients.',
      solution: 'Built a modern, visually engaging frontend website with React and Vite, featuring service showcases, campaign portfolio, and WhatsApp-integrated contact for quick client onboarding.',
      features: ['Service showcase', 'Campaign portfolio', 'WhatsApp integration', 'Client testimonials', 'Pricing plans', 'Contact system'],
      technologies: ['React', 'Vite', 'WhatsApp API', 'Responsive Design'],
      img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80',
      link: 'https://promoads.co.in'
    },
    'aluris-global-trade': {
      name: 'Aluris Global Trade',
      category: 'Corporate Website',
      tech: 'Frontend Website',
      year: '2026',
      client: 'Aluris Global Trade',
      duration: '1 month',
      desc: 'Professional global trade company website with product catalog and international business information.',
      challenge: 'Building a professional corporate website that establishes credibility in international trade and facilitates global business inquiries.',
      solution: 'Designed a clean, professional frontend website with React and Vite, featuring product catalog, trade information, company profile, and WhatsApp-integrated contact for international clients.',
      features: ['Product catalog', 'Trade information', 'Company profile', 'WhatsApp integration', 'International inquiry system', 'Responsive Design'],
      technologies: ['React', 'Vite', 'WhatsApp API', 'Responsive Design'],
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      link: 'https://alurisglobaltrade.com'
    },
    'alphazone-fashions': {
      name: 'The Alphazone Fashions',
      category: 'E-Commerce',
      tech: 'Full Stack E-Commerce',
      year: '2026',
      client: 'The Alphazone Fashions',
      duration: '0.5 months',
      desc: 'Modern fashion website showcasing clothing collections with WhatsApp-integrated ordering system.',
      challenge: 'Creating an attractive fashion website that showcases collections effectively and drives customer engagement and orders.',
      solution: 'Built a stylish, modern frontend website with React and Vite, featuring collection galleries, product showcases, and WhatsApp-integrated ordering for seamless customer experience.',
      features: ['Collection showcase', 'Product gallery', 'order management','razorpay integration', 'Size guide', 'New arrivals', 'Contact system'],
      technologies: ['React', 'Vite','Express','SQL', 'Razorpay API', 'Responsive Design'],
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
      link: 'https://thealphazone.in'
    }
  };

  const project = projects[slug];

  if (!project) {
    return <div style={{ padding: '150px 5%', textAlign: 'center' }}><h1>Project not found</h1></div>;
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px', background: 'linear-gradient(135deg, #f0f8ff 0%, #e1fafa 100%)' }} className="page-enter">
      {/* Hero Section */}
      <div style={{ width: '100vw', height: '60vh', backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(0,20,40,0.75) 0%, rgba(0,50,80,0.5) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#fff', padding: '2.5rem 3rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
            <p style={{ color: '#006496', fontSize: '1rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>{project.category}</p>
            <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1rem', color: '#fff' }}>{project.name}</h1>
            <p style={{ fontSize: '1.3rem', color: '#f0f0f0' }}>{project.tech} • {project.year}</p>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1.5rem' }}>Project Overview</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>{project.desc}</p>
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#006496', marginBottom: '1rem' }}>The Challenge</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>{project.challenge}</p>
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#006496', marginBottom: '1rem' }}>Our Solution</h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>{project.solution}</p>
          </div>
          
          <div>
            <div style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)', padding: '2rem', borderRadius: '15px', marginBottom: '2rem', border: '1px solid rgba(0,100,150,0.15)', boxShadow: '0 8px 32px rgba(0,100,150,0.08)' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1.5rem' }}>Project Details</h3>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem' }}>Client</p>
                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#1a1a1a' }}>{project.client}</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem' }}>Duration</p>
                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#1a1a1a' }}>{project.duration}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: '#999', marginBottom: '0.3rem' }}>Year</p>
                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#1a1a1a' }}>{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '2rem' }}>Key Features</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {project.features.map((feature, index) => (
              <div key={index} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', borderRadius: '10px', borderLeft: '4px solid #006496', border: '1px solid rgba(0,100,150,0.15)' }}>
                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#1a1a1a' }}>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '2rem' }}>Technologies Used</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.technologies.map((tech, index) => (
              <span key={index} style={{ padding: '0.7rem 1.5rem', backgroundColor: '#006496', color: '#fff', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '600' }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(20px)', borderRadius: '20px', border: '1px solid rgba(0,100,150,0.15)', boxShadow: '0 8px 32px rgba(0,100,150,0.1)' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem' }}>Interested in a similar project?</h3>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>Let's discuss how we can help bring your vision to life.</p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ padding: '1rem 2.5rem', backgroundColor: '#006496', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Get In Touch</Link>
            {project.link && project.link !== '#' && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2.5rem', backgroundColor: 'transparent', color: '#006496', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', border: '2px solid #006496' }}>Visit Live Site</a>
            )}
            <Link to="/works" style={{ padding: '1rem 2.5rem', backgroundColor: 'transparent', color: '#006496', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', border: '2px solid #006496' }}>View More Projects</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          div[style*="gridTemplateColumns: '2fr 1fr'"] { grid-template-columns: 1fr !important; }
          div[style*="gridTemplateColumns: 'repeat(3, 1fr)'"] { grid-template-columns: 1fr !important; }
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
