import { Link } from 'react-router-dom';

const OurWorks = () => {
  const projects = [
    { id: 1, slug: 'chinnamart', category: 'E-Commerce', name: 'Chinnamart', location: 'Full Stack E-Commerce', year: '2024', desc: 'Complete e-commerce platform with product management, shopping cart, and secure payment integration.', style: 'Modern E-Commerce', scope: 'Full Stack Development', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', link: 'https://chinnamart.in' },
    { id: 2, slug: 'blood-donation-platform', category: 'Web Application', name: 'Blood Donation Platform', location: 'Full Stack Application', year: '2024', desc: 'Blood donation management system connecting donors with recipients, featuring real-time availability and request management.', style: 'Healthcare Solution', scope: 'Full Stack Development', img: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80', link: 'https://hk-blood-donation.vercel.app' },
    { id: 3, slug: 'dad-pacs-fertilizers', category: 'Business Website', name: 'DAD PACS Fertilizers', location: 'Full Stack Website', year: '2024', desc: 'Professional website for fertilizer company showcasing products, services, and agricultural solutions.', style: 'Corporate Website', scope: 'Full Stack Development', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', link: 'https://dad-pacs.vercel.app' },
    { id: 4, slug: 'tobacco-export-company', category: 'Corporate Website', name: 'Tobacco Export Company', location: 'Frontend Website', year: '2024', desc: 'Export-focused website for tobacco company with product catalog and WhatsApp-integrated contact system.', style: 'Export Business', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', link: '#' },
    { id: 5, slug: 'infrastructure-projects', category: 'Infrastructure', name: 'Infrastructure Projects', location: 'Frontend Website', year: '2024', desc: 'Comprehensive infrastructure project showcase website with portfolio and WhatsApp-integrated contact.', style: 'Project Showcase', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', link: '#' },
    { id: 6, slug: 'promoads', category: 'Advertising', name: 'PromoAds', location: 'Frontend Website', year: '2025', desc: 'Digital advertising platform showcasing promotional services and ad campaign solutions.', style: 'Advertising Platform', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', link: 'https://promoads.co.in' },
    { id: 7, slug: 'aluris-global-trade', category: 'Corporate Website', name: 'Aluris Global Trade', location: 'Frontend Website', year: '2025', desc: 'Professional global trade company website with product catalog and international business information.', style: 'Global Trade', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', link: 'https://alurisglobaltrade.com' },
    { id: 8, slug: 'alphazone-fashions', category: 'E-Commerce', name: 'The Alphazone Fashions', location: 'Frontend Website', year: '2025', desc: 'Modern fashion e-commerce website showcasing clothing collections with WhatsApp-integrated ordering.', style: 'Fashion E-Commerce', scope: 'Frontend Development', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', link: 'https://thealphazone.in' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }} className="page-enter">

      {/* Hero */}
      <div style={{ width: '100vw', height: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hero-works">
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,20,40,0.75) 0%, rgba(0,50,80,0.5) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', maxWidth: '800px', background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '32px', padding: '3.5rem 4rem', boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' }} className="fade-in-up">
          <p style={{ color: '#006496', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Our Legacy</p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.05', background: 'linear-gradient(135deg, #fff 0%, #006496 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Building<br />Digital Solutions.</h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', lineHeight: '1.8', marginBottom: '2.5rem', color: '#f0f0f0', fontWeight: '400' }}>We transform ideas into powerful web applications and memorable brand identities.</p>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #006496, #19647d)', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(0,100,150,0.5), inset 0 1px 0 rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.15)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,100,150,0.65)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,100,150,0.5)'; }}>← Return to Home</Link>
        </div>
      </div>

      {/* Projects */}
      {projects.map((project, index) => (
        <div key={project.id} style={{ padding: 'clamp(3rem, 6vw, 7rem) 5%', background: index % 2 === 0 ? '#fff' : 'linear-gradient(135deg, #e1fafa 0%, #f0f8ff 100%)', borderBottom: '1px solid rgba(0,0,0,0.05)' }} className="fade-in-up">
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

            {/* Number badge */}
            <p style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: '900', color: 'rgba(0,100,150,0.08)', lineHeight: 1, marginBottom: '-1rem', userSelect: 'none' }}>0{project.id}</p>

            <div style={{ display: 'grid', gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'center' }} className="project-showcase">
              {index % 2 === 0 ? (
                <>
                  {/* Image */}
                  <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,100,150,0.15)', border: '1px solid rgba(0,100,150,0.1)' }} className="project-img-wrap">
                    <img src={project.img} alt={project.name} style={{ width: '100%', height: 'clamp(300px, 45vw, 600px)', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }} className="project-img-hover" />
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.5rem 1.2rem', background: 'rgba(0,100,150,0.85)', backdropFilter: 'blur(10px)', color: '#fff', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</div>
                  </div>
                  {/* Content */}
                  <div>
                    <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{project.year}</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.15' }}>{project.name}</h2>
                    <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem', fontWeight: '500' }}>{project.location}</p>
                    <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: '1.85', color: '#555', marginBottom: '2rem' }}>{project.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(0,100,150,0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(0,100,150,0.15)' }}>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.4rem' }}>Style</p>
                        <p style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.style}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.4rem' }}>Scope</p>
                        <p style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.scope}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link to={`/project/${project.slug}`} style={{ padding: '0.9rem 2rem', backgroundColor: '#006496', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.3s ease', boxShadow: '0 8px 25px rgba(0,100,150,0.4)' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#19647d'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#006496'; e.currentTarget.style.transform = 'translateY(0)'; }}>View Project</Link>
                      <Link to="/portfolio" style={{ padding: '0.9rem 2rem', backgroundColor: 'transparent', color: '#006496', textDecoration: 'none', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.3s ease', border: '2px solid #006496' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#006496'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#006496'; e.currentTarget.style.transform = 'translateY(0)'; }}>All Projects</Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Content */}
                  <div>
                    <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.8rem' }}>{project.year}</p>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.15' }}>{project.name}</h2>
                    <p style={{ fontSize: '1rem', color: '#888', marginBottom: '1.5rem', fontWeight: '500' }}>{project.location}</p>
                    <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', lineHeight: '1.85', color: '#555', marginBottom: '2rem' }}>{project.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(0,100,150,0.05)', backdropFilter: 'blur(10px)', borderRadius: '16px', border: '1px solid rgba(0,100,150,0.15)' }}>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.4rem' }}>Style</p>
                        <p style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.style}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.75rem', color: '#bbb', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.4rem' }}>Scope</p>
                        <p style={{ fontSize: '1rem', color: '#1a1a1a', fontWeight: '700' }}>{project.scope}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link to={`/project/${project.slug}`} style={{ padding: '0.9rem 2rem', backgroundColor: '#006496', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.3s ease', boxShadow: '0 8px 25px rgba(0,100,150,0.4)' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#19647d'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#006496'; e.currentTarget.style.transform = 'translateY(0)'; }}>View Project</Link>
                      <Link to="/portfolio" style={{ padding: '0.9rem 2rem', backgroundColor: 'transparent', color: '#006496', textDecoration: 'none', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.3s ease', border: '2px solid #006496' }} onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#006496'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#006496'; e.currentTarget.style.transform = 'translateY(0)'; }}>All Projects</Link>
                    </div>
                  </div>
                  {/* Image */}
                  <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,100,150,0.15)', border: '1px solid rgba(0,100,150,0.1)' }} className="project-img-wrap">
                    <img src={project.img} alt={project.name} style={{ width: '100%', height: 'clamp(300px, 45vw, 600px)', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }} className="project-img-hover" />
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', padding: '0.5rem 1.2rem', background: 'rgba(0,100,150,0.85)', backdropFilter: 'blur(10px)', color: '#fff', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.2)' }}>{project.category}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      <style>{`
        .project-img-wrap:hover .project-img-hover { transform: scale(1.04); }
        .hero-works { background-attachment: fixed; }

        @media (max-width: 968px) {
          .project-showcase { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .project-showcase > div:first-child { order: 1; }
          .project-showcase > div:last-child { order: 2; }
        }

        @media (max-width: 768px) {
          .hero-works { background-attachment: scroll !important; }
        }
      `}</style>
    </div>
  );
};

export default OurWorks;
