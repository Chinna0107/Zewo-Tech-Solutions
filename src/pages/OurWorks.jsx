import { Link } from 'react-router-dom';

const OurWorks = () => {
  const projects = [
    { id: 1, slug: 'chinnamart', category: 'E-Commerce', name: 'Chinnamart', location: 'Full Stack E-Commerce', year: '2024', desc: 'Complete e-commerce platform with product management, shopping cart, and secure payment integration.', style: 'Modern E-Commerce', scope: 'Full Stack Development', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', bg: '#fff', link: 'https://chinnamart.in' },
    { id: 2, slug: 'blood-donation-platform', category: 'Web Application', name: 'Blood Donation Platform', location: 'Full Stack Application', year: '2024', desc: 'Blood donation management system connecting donors with recipients, featuring real-time availability and request management.', style: 'Healthcare Solution', scope: 'Full Stack Development', img: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80', bg: '#f9f9f9', link: 'https://hk-blood-donation.vercel.app' },
    { id: 3, slug: 'dad-pacs-fertilizers', category: 'Business Website', name: 'DAD PACS Fertilizers', location: 'Full Stack Website', year: '2024', desc: 'Professional website for fertilizer company showcasing products, services, and agricultural solutions.', style: 'Corporate Website', scope: 'Full Stack Development', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', bg: '#fff', link: 'https://dad-pacs.vercel.app' },
    { id: 4, slug: 'tobacco-export-company', category: 'Corporate Website', name: 'Tobacco Export Company', location: 'Frontend Website', year: '2024', desc: 'Export-focused website for tobacco company with product catalog and WhatsApp-integrated contact system.', style: 'Export Business', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', bg: '#f9f9f9', link: '#' },
    { id: 5, slug: 'infrastructure-projects', category: 'Infrastructure', name: 'Infrastructure Projects', location: 'Frontend Website', year: '2024', desc: 'Comprehensive infrastructure project showcase website with portfolio and WhatsApp-integrated contact.', style: 'Project Showcase', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', bg: '#fff', link: '#' }
  ];

  return (
    <div style={{ minHeight: '100vh' }} className="page-enter">
      {/* Hero Section */}
      <div className="hero-section" style={{ width: '100vw', height: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(2px)' }}></div>
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 5%', maxWidth: '900px' }} className="fade-in-up">
          <p style={{ color: '#c1a96c', fontSize: '1rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>Our Legacy</p>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '2rem', lineHeight: '1.1', background: 'linear-gradient(135deg, #fff 0%, #c1a96c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textShadow: 'none' }}>Building<br />Digital Solutions.</h1>
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginBottom: '3rem', color: '#f0f0f0', fontWeight: '400', textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>We transform ideas into powerful web applications and memorable brand identities.</p>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#1a1a1a', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.4s ease', boxShadow: '0 10px 30px rgba(193, 169, 108, 0.5)', border: '2px solid #c1a96c' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 15px 40px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 30px rgba(193, 169, 108, 0.5)'; }}><span>←</span> Return to Home</Link>
        </div>
      </div>

      {/* Projects */}
      {projects.map((project, index) => (
        <div key={project.id} style={{ padding: '6rem 5%', backgroundColor: project.bg }} className="fade-in-up">
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="project-showcase">
            {index % 2 === 0 ? (
              <>
                <div className="scale-in stagger-1">
                  <img src={project.img} alt={project.name} style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.transform = 'scale(1.02)'; e.target.style.boxShadow = '0 25px 70px rgba(193, 169, 108, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }} />
                </div>
                <div className="fade-in-right stagger-2">
                  <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>{project.category}</p>
                  <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '0.5rem', lineHeight: '1.2' }}>{project.name}</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.5rem' }}>{project.location}</p>
                  <p style={{ fontSize: '1rem', color: '#c1a96c', fontWeight: '700', marginBottom: '2rem' }}>{project.year}</p>
                  <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>{project.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', padding: '2rem', backgroundColor: project.bg === '#fff' ? '#f9f9f9' : '#fff', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Style</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.style}</p></div>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Scope</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.scope}</p></div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link to="/portfolio" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: '#c1a96c', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.4)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.4)'; }}>Explore Full Portfolio</Link>
                    <Link to={`/project/${project.slug}`} style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'transparent', color: '#c1a96c', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', border: '2px solid #c1a96c' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>Visit Now</Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="fade-in-left stagger-2">
                  <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>{project.category}</p>
                  <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '0.5rem', lineHeight: '1.2' }}>{project.name}</h2>
                  <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.5rem' }}>{project.location}</p>
                  <p style={{ fontSize: '1rem', color: '#c1a96c', fontWeight: '700', marginBottom: '2rem' }}>{project.year}</p>
                  <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>{project.desc}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem', padding: '2rem', backgroundColor: project.bg === '#fff' ? '#f9f9f9' : '#fff', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Style</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.style}</p></div>
                    <div><p style={{ fontSize: '0.85rem', color: '#999', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Scope</p><p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.scope}</p></div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <Link to="/portfolio" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: '#c1a96c', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.4)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.4)'; }}>Explore Full Portfolio</Link>
                    <Link to={`/project/${project.slug}`} style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'transparent', color: '#c1a96c', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', border: '2px solid #c1a96c' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>Visit Now</Link>
                  </div>
                </div>
                <div className="scale-in stagger-1">
                  <img src={project.img} alt={project.name} style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', transition: 'all 0.4s ease', cursor: 'pointer' }} onMouseOver={(e) => { e.target.style.transform = 'scale(1.02)'; e.target.style.boxShadow = '0 25px 70px rgba(193, 169, 108, 0.3)'; }} onMouseOut={(e) => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'; }} />
                </div>
              </>
            )}
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 968px) {
          .project-showcase { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 3rem !important; }
          p { font-size: 1rem !important; }
          div[style*="backgroundAttachment: 'fixed'"] { background-attachment: scroll !important; }
          .project-showcase img { display: none !important; }
          .hero-section {
            background-image: url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80) !important;
            background-position: center !important;
            height: 100vh !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurWorks;
