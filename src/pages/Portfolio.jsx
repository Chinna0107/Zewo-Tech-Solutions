import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg';
import HemanthImg from '../assets/HEMANTH.png';
import JagadeeshImg from '../assets/Jagadeesh.jpeg';
import PavanImg from '../assets/Pavan.jpeg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, slug: 'chinnamart', category: 'E-Commerce', name: 'Chinnamart', tech: 'React + Express + SQL', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', span: 'wide' },
    { id: 2, slug: 'blood-donation-platform', category: 'Web Application', name: 'Blood Donation Platform', tech: 'React + Vite + Express + SQL', img: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80', span: 'tall' },
    { id: 3, slug: 'dad-pacs-fertilizers', category: 'Business Website', name: 'DAD PACS Fertilizers', tech: 'React + Vite + Express + SQL', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80', span: 'normal' },
    { id: 4, slug: 'tobacco-export-company', category: 'Corporate Website', name: 'Tobacco Export Company', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80', span: 'normal' },
    { id: 5, slug: 'infrastructure-projects', category: 'Infrastructure', name: 'Infrastructure Projects', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', span: 'wide' }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', paddingTop: '100px' }} className="page-enter">
      {/* About Us Section */}
      <div style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }} className="fade-in-up">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }} className="about-grid">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={Logo} alt="Zewo Tech Solutions" style={{ width: '100%', maxWidth: '300px', borderRadius: '20px', boxShadow: '0 20px 60px rgba(193, 169, 108, 0.3)' }} />
          </div>
          <div>
            <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>About Us</p>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '2rem', lineHeight: '1.2' }}>Building Digital Excellence</h1>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.8' }}>Zewo Tech Solutions is a leading web development company specializing in creating powerful, scalable, and user-friendly digital solutions. We transform ideas into reality through innovative technology and creative design.</p>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div style={{ padding: '4rem 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Meet Our Team</p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '4rem', textAlign: 'center' }}>The Visionaries Behind Zewo</h2>
          
          {/* Founder */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }} className="founder-grid">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={HemanthImg} alt="Hemanth Kancharla" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #c1a96c', boxShadow: '0 10px 40px rgba(193, 169, 108, 0.3)' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.5rem' }}>Hemanth Kancharla</h3>
              <p style={{ fontSize: '1.1rem', color: '#c1a96c', fontWeight: '600', marginBottom: '1.5rem' }}>Founder & CEO</p>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8' }}>Visionary leader and full-stack developer with expertise in building scalable web applications. Hemanth founded Zewo with a mission to deliver cutting-edge digital solutions that drive business growth.</p>
            </div>
          </div>

          {/* Co-Founder 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }} className="founder-grid-reverse">
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.5rem' }}>Jagadeesh</h3>
              <p style={{ fontSize: '1.1rem', color: '#c1a96c', fontWeight: '600', marginBottom: '1.5rem' }}>Co-Founder & Technical Lead</p>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8' }}>Expert in system architecture and <b>Frontend</b> development. Jagadeesh ensures robust, scalable solutions and leads the technical implementation of complex projects.</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={JagadeeshImg} alt="Jagadeesh" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #c1a96c', boxShadow: '0 10px 40px rgba(193, 169, 108, 0.3)' }} />
            </div>
          </div>

          {/* Co-Founder 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }} className="founder-grid">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={PavanImg} alt="Pavan" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #c1a96c', boxShadow: '0 10px 40px rgba(193, 169, 108, 0.3)' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.5rem' }}>Pavan Kumar Tanikonda</h3>
              <p style={{ fontSize: '1.1rem', color: '#c1a96c', fontWeight: '600', marginBottom: '1.5rem' }}>Co-Founder & Design Lead</p>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8' }}>Strategic thinker focused on business development and client relationships. Pavan drives growth initiatives and ensures exceptional client satisfaction throughout every project.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div style={{ padding: '4rem 5%', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="story-grid">
          <div className="fade-in-left">
            <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Story</p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1.5rem', lineHeight: '1.2' }}>Crafting Digital Solutions Since Day One</h2>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Founded with a vision to empower businesses through technology, Zewo Tech Solutions has grown into a trusted partner for companies seeking digital transformation. Our journey began with a simple belief: every business deserves a powerful online presence.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
              Today, we've successfully delivered numerous projects across e-commerce, healthcare, agriculture, and corporate sectors, helping our clients achieve their digital goals and drive business growth.
            </p>
          </div>
          <div className="fade-in-right">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Our Team" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
          </div>
        </div>
      </div>

      {/* Why Choose Zewo Section */}
      <div style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Why Choose Us</p>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '3rem', lineHeight: '1.2', textAlign: 'center' }}>Why Choose Zewo?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }} className="why-grid">
          <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' }} className="why-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💡</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Innovative Solutions</h3>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>We leverage cutting-edge technologies to build modern, scalable applications tailored to your business needs.</p>
          </div>
          <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' }} className="why-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Client-Focused</h3>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>Your success is our priority. We work closely with you to understand and deliver exactly what you need.</p>
          </div>
          <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' }} className="why-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Fast Delivery</h3>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>We deliver high-quality projects on time without compromising on quality or functionality.</p>
          </div>
          <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' }} className="why-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Secure & Reliable</h3>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>Security is built into every project with robust authentication and data protection measures.</p>
          </div>
          <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' }} className="why-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Responsive Design</h3>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>All our applications work seamlessly across desktop, tablet, and mobile devices.</p>
          </div>
          <div style={{ padding: '2.5rem', backgroundColor: '#f9f9f9', borderRadius: '15px', textAlign: 'center', transition: 'all 0.3s ease' }} className="why-card">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem' }}>Ongoing Support</h3>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>We provide continuous support and maintenance to keep your application running smoothly.</p>
          </div>
        </div>
      </div>

      {/* Our Projects Section */}
      <div style={{ padding: '4rem 5%', backgroundColor: '#f9f9f9' }}>
        <p style={{ color: '#c1a96c', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Our Work</p>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.2', textAlign: 'center' }}>Featured Projects</h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6', textAlign: 'center' }}>Explore our portfolio of successful projects across various industries.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {['All', 'E-Commerce', 'Web Application', 'Business Website', 'Corporate Website', 'Infrastructure'].map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} style={{ padding: '0.8rem 2rem', backgroundColor: activeFilter === filter ? '#c1a96c' : 'transparent', color: activeFilter === filter ? '#fff' : '#1a1a1a', border: `2px solid ${activeFilter === filter ? '#c1a96c' : '#ddd'}`, borderRadius: '50px', fontSize: '0.9rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: activeFilter === filter ? '0 8px 25px rgba(193, 169, 108, 0.4)' : 'none' }} onMouseOver={(e) => { if (activeFilter !== filter) { e.target.style.borderColor = '#c1a96c'; e.target.style.color = '#c1a96c'; }}} onMouseOut={(e) => { if (activeFilter !== filter) { e.target.style.borderColor = '#ddd'; e.target.style.color = '#1a1a1a'; }}}>{filter}</button>
          ))}
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gridAutoRows: '300px', gap: '2rem', gridAutoFlow: 'dense' }} className="projects-grid">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/project/${project.slug}`} style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'all 0.4s ease', cursor: 'pointer', backgroundColor: '#fff', gridRow: project.span === 'tall' ? 'span 2' : 'span 1', gridColumn: project.span === 'wide' ? 'span 2' : 'span 1', textDecoration: 'none' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(193, 169, 108, 0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)'; }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
                <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: '#c1a96c', color: '#fff', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '20px', marginBottom: '0.5rem', width: 'fit-content' }}>{project.category}</span>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.5rem 0' }}>{project.name}</h3>
                  <p style={{ color: '#ddd', fontSize: '0.9rem', margin: 0 }}>{project.tech}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ padding: '5rem 5%', textAlign: 'center', backgroundColor: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem' }}>Ready to Start Your Project?</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Let's discuss how we can help bring your vision to life with our expertise.</p>
        <Link to="/contact" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.4)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.4)'; }}>Get In Touch</Link>
      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(193, 169, 108, 0.2), 0 0 0 3px #c1a96c;
          border: 3px solid transparent;
        }
        @media (max-width: 968px) {
          .about-grid { grid-template-columns: 1fr 2fr !important; }
          .story-grid { grid-template-columns: 1fr !important; }
          .founder-grid { grid-template-columns: 1fr !important; }
          .founder-grid-reverse { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-grid { grid-template-columns: 1fr !important; grid-auto-rows: 350px !important; }
          h1 { font-size: 2.5rem !important; }
          h2 { font-size: 2rem !important; }
        }
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
