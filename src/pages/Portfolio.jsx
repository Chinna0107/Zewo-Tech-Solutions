import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg';
import HemanthImg from '../assets/HEMANTH.png';
import JagadeeshImg from '../assets/Jagadeesh.jpeg';
import PavanImg from '../assets/Pavan.jpeg';
import Guru from '../assets/guru.png';

const ProjectCard = ({ to, img, name, category, tech, style = {} }) => (
  <Link to={to} style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', textDecoration: 'none', ...style }} className="project-card">
    <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="project-img" />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem' }}>
      <span style={{ display: 'inline-block', padding: '0.4rem 1rem', backgroundColor: '#006496', color: '#fff', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '20px', marginBottom: '0.7rem', width: 'fit-content' }}>{category}</span>
      <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '800', margin: '0 0 0.4rem 0' }}>{name}</h3>
      <p style={{ color: '#006496', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>{tech}</p>
    </div>
  </Link>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    { id: 1, slug: 'chinnamart', category: 'E-Commerce', name: 'Chinnamart', tech: 'React + Express + SQL', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80' },
    { id: 2, slug: 'blood-donation-platform', category: 'Web Application', name: 'Blood Donation Platform', tech: 'React + Vite + Express + SQL', img: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80' },
    { id: 3, slug: 'dad-pacs-fertilizers', category: 'Business Website', name: 'DAD PACS Fertilizers', tech: 'React + Vite + Express + SQL', img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80' },
    { id: 4, slug: 'tobacco-export-company', category: 'Corporate Website', name: 'Tobacco Export Company', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80' },
    { id: 5, slug: 'infrastructure-projects', category: 'Infrastructure', name: 'Infrastructure Projects', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80' },
    { id: 6, slug: 'promoads', category: 'Advertising', name: 'PromoAds', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80' },
    { id: 7, slug: 'aluris-global-trade', category: 'Corporate Website', name: 'Aluris Global Trade', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
    { id: 8, slug: 'alphazone-fashions', category: 'E-Commerce', name: 'The Alphazone Fashions', tech: 'React + Vite', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' },
  ];

  const stats = [
    { number: '8+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '1+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ];

  const team = [
    { name: 'Hemanth Kancharla', role: 'Founder & CEO', img: HemanthImg, desc: 'Visionary leader and full-stack developer with expertise in building scalable web applications. Founded Zewo with a mission to deliver cutting-edge digital solutions that drive business growth.', reverse: false },
    { name: 'Jagadeesh', role: 'Core Team', img: JagadeeshImg, desc: 'Expert in frontend architecture and UI/UX development. Jagadeesh crafts pixel-perfect, responsive interfaces that deliver exceptional user experiences across all devices.', reverse: true },
    { name: 'Pavan Kumar Tanikonda', role: 'Core Team', img: PavanImg, desc: 'Strategic thinker focused on business development and client relationships. Pavan drives growth initiatives and ensures exceptional client satisfaction throughout every project.', reverse: false },
    { name: 'Bogala Guru Gangadhar Reddy', role: 'Core Team', img: Guru, desc: 'Dedicated core team member contributing to the development and delivery of high-quality digital solutions. Brings strong technical skills and commitment to every project at Zewo.', reverse: true },
  ];

  const whyCards = [
    { icon: '💡', title: 'Innovative Solutions', desc: 'We leverage cutting-edge technologies to build modern, scalable applications tailored to your business needs.' },
    { icon: '🎯', title: 'Client-Focused', desc: 'Your success is our priority. We work closely with you to understand and deliver exactly what you need.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'We deliver high-quality projects on time without compromising on quality or functionality.' },
    { icon: '🛡️', title: 'Secure & Reliable', desc: 'Security is built into every project with robust authentication and data protection measures.' },
    { icon: '📱', title: 'Responsive Design', desc: 'All our applications work seamlessly across desktop, tablet, and mobile devices.' },
    { icon: '🤝', title: 'Ongoing Support', desc: 'We provide continuous support and maintenance to keep your application running smoothly.' },
  ];

  const filters = ['All', 'E-Commerce', 'Web Application', 'Business Website', 'Corporate Website', 'Infrastructure', 'Advertising'];
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }} className="page-enter glass-page">
      <div className="glass-orb orb-one" />
      <div className="glass-orb orb-two" />
      <div className="glass-orb orb-three" />

      {/* About Us */}
      <div style={{ padding: '5rem 5%' }} className="glass-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-12px', borderRadius: '28px', background: 'linear-gradient(135deg, #006496, #96c8e1)', opacity: 0.3, filter: 'blur(20px)' }} />
              <img src={Logo} alt="Zewo Tech Solutions" style={{ position: 'relative', width: '280px', height: '280px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,100,150,0.35)', border: '4px solid rgba(0,100,150,0.3)' }} />
            </div>
          </div>
          <div>
            <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>About Us</p>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0b1f2a', marginBottom: '1.5rem', lineHeight: '1.15' }}>Building <span style={{ color: '#006496' }}>Digital</span> Excellence</h1>
            <p style={{ fontSize: '1.15rem', color: '#3d4b55', lineHeight: '1.9', marginBottom: '2rem' }}>Zewo Tech Solutions is a leading web development company specializing in creating powerful, scalable, and user-friendly digital solutions. We transform ideas into reality through innovative technology and creative design.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['React', 'Node.js', 'Express', 'SQL', 'Vite'].map(tech => (
                <span key={tech} className="glass-chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '4rem 5%' }} className="glass-section glass-section-dark">
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }} className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} style={{ padding: '2rem 1rem' }}>
              <p style={{ fontSize: '3rem', fontWeight: '900', color: '#006496', marginBottom: '0.5rem', lineHeight: 1 }}>{s.number}</p>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div style={{ padding: '5rem 5%' }} className="glass-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="story-grid">
          <div>
            <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>Our Story</p>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0b1f2a', marginBottom: '1.5rem', lineHeight: '1.2' }}>Crafting Digital Solutions Since Day One</h2>
            <p style={{ fontSize: '1.1rem', color: '#3d4b55', lineHeight: '1.9', marginBottom: '1.5rem' }}>Founded with a vision to empower businesses through technology, Zewo Tech Solutions has grown into a trusted partner for companies seeking digital transformation. Our journey began with a simple belief: every business deserves a powerful online presence.</p>
            <p style={{ fontSize: '1.1rem', color: '#3d4b55', lineHeight: '1.9', marginBottom: '2rem' }}>Today, we've successfully delivered projects across e-commerce, healthcare, agriculture, and corporate sectors, helping clients achieve their digital goals.</p>
            <Link to="/contact" className="glass-cta">Work With Us</Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Our Team" style={{ width: '100%', height: '480px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }} />
            <div className="glass-badge">
              <p style={{ fontSize: '2rem', fontWeight: '900', color: '#fff', margin: 0 }}>8+</p>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', margin: 0, fontWeight: '600' }}>Projects Done</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div style={{ padding: '5rem 5%' }} className="glass-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Meet Our Team</p>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0b1f2a', marginBottom: '4rem', textAlign: 'center' }}>The Visionaries Behind Zewo</h2>
          {team.map((member, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: member.reverse ? '2fr 1fr' : '1fr 2fr', gap: '4rem', alignItems: 'center', marginBottom: i < team.length - 1 ? '4rem' : 0, padding: '3rem' }} className="founder-grid glass-card">
              {member.reverse ? (
                <>
                  <div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0b1f2a', marginBottom: '0.5rem' }}>{member.name}</h3>
                    <p style={{ fontSize: '1rem', color: '#006496', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                    <p style={{ fontSize: '1.05rem', color: '#3d4b55', lineHeight: '1.9' }}>{member.desc}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', background: 'linear-gradient(135deg, #006496, #96c8e1)', opacity: 0.4, filter: 'blur(12px)' }} />
                      <img src={member.img} alt={member.name} style={{ position: 'relative', width: '240px', height: '240px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #006496', boxShadow: '0 15px 40px rgba(0,100,150,0.3)' }} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', inset: '-8px', borderRadius: '50%', background: 'linear-gradient(135deg, #006496, #96c8e1)', opacity: 0.4, filter: 'blur(12px)' }} />
                      <img src={member.img} alt={member.name} style={{ position: 'relative', width: '240px', height: '240px', borderRadius: '50%', objectFit: 'cover', border: '5px solid #006496', boxShadow: '0 15px 40px rgba(0,100,150,0.3)' }} />
                    </div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#0b1f2a', marginBottom: '0.5rem' }}>{member.name}</h3>
                    <p style={{ fontSize: '1rem', color: '#006496', fontWeight: '700', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                    <p style={{ fontSize: '1.05rem', color: '#3d4b55', lineHeight: '1.9' }}>{member.desc}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Zewo */}
      <div style={{ padding: '5rem 5%' }} className="glass-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Why Choose Us</p>
          <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0b1f2a', marginBottom: '3rem', textAlign: 'center' }}>Why Choose Zewo?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="why-grid">
            {whyCards.map((card, i) => (
              <div key={i} style={{ padding: '2.5rem', textAlign: 'center' }} className="why-card glass-card">
                <div style={{ fontSize: '2.8rem', marginBottom: '1.2rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0b1f2a', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#3d4b55', lineHeight: '1.7' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div style={{ padding: '5rem 5%' }} className="glass-section glass-section-dark">
        <p style={{ color: '#7fd6ff', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem', textAlign: 'center' }}>Our Work</p>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '1rem', textAlign: 'center' }}>Featured Projects</h2>
        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: '600px', margin: '0 auto 3rem', textAlign: 'center', lineHeight: '1.7' }}>Explore our portfolio of successful projects across various industries.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }} className="filter-bar">
          {filters.map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`glass-filter ${activeFilter === filter ? 'active' : ''}`}>{filter}</button>
          ))}
        </div>

        {activeFilter === 'All' ? (
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '280px', gap: '1.5rem' }} className="projects-grid">
            <ProjectCard to="/project/chinnamart" {...projects[0]} style={{ gridColumn: 'span 2' }} />
            <ProjectCard to="/project/blood-donation-platform" {...projects[1]} style={{ gridRow: 'span 2' }} />
            <ProjectCard to="/project/dad-pacs-fertilizers" {...projects[2]} />
            <ProjectCard to="/project/tobacco-export-company" {...projects[3]} />
            <ProjectCard to="/project/infrastructure-projects" {...projects[4]} style={{ gridColumn: 'span 3' }} />
            <ProjectCard to="/project/promoads" {...projects[5]} />
            <ProjectCard to="/project/aluris-global-trade" {...projects[6]} style={{ gridColumn: 'span 2' }} />
            <ProjectCard to="/project/alphazone-fashions" {...projects[7]} style={{ gridColumn: 'span 3' }} />
          </div>
        ) : (
          <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '280px', gap: '1.5rem' }} className="projects-grid">
            {filtered.map(p => (
              <ProjectCard key={p.id} to={`/project/${p.slug}`} {...p} />
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{ padding: '6rem 5%', textAlign: 'center' }} className="glass-section">
        <p style={{ color: '#006496', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem' }}>Let's Build Together</p>
        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0b1f2a', marginBottom: '1.5rem' }}>Ready to Start Your Project?</h2>
        <p style={{ fontSize: '1.2rem', color: '#3d4b55', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>Let's discuss how we can help bring your vision to life with our expertise.</p>
        <Link to="/contact" className="glass-cta large">Get In Touch</Link>
      </div>

      <style>{`
        .glass-page {
          position: relative;
          background: radial-gradient(circle at top, rgba(0,100,150,0.25), transparent 45%),
            radial-gradient(circle at 20% 20%, rgba(150,200,225,0.35), transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(125,214,255,0.2), transparent 35%),
            linear-gradient(160deg, #f5fbff 0%, #f2f8fb 40%, #eef4f7 100%);
          overflow: hidden;
        }
        .glass-orb {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
          pointer-events: none;
          z-index: 0;
        }
        .orb-one { width: 260px; height: 260px; top: 120px; left: -80px; background: radial-gradient(circle, rgba(0,100,150,0.35), rgba(0,100,150,0)); }
        .orb-two { width: 220px; height: 220px; top: 520px; right: -60px; background: radial-gradient(circle, rgba(127,214,255,0.4), rgba(127,214,255,0)); }
        .orb-three { width: 180px; height: 180px; bottom: 180px; left: 10%; background: radial-gradient(circle, rgba(150,200,225,0.4), rgba(150,200,225,0)); }
        .glass-section {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-top: 1px solid rgba(255,255,255,0.6);
          border-bottom: 1px solid rgba(255,255,255,0.45);
        }
        .glass-section-dark {
          background: rgba(10, 24, 32, 0.75);
          border-top: 1px solid rgba(255,255,255,0.15);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          border-radius: 24px;
          border: 1px solid rgba(0,100,150,0.15);
          box-shadow: 0 18px 45px rgba(0, 25, 40, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 55px rgba(0, 40, 80, 0.18);
          border-color: rgba(0,100,150,0.35);
        }
        .glass-chip {
          padding: 0.5rem 1.2rem;
          background: rgba(255,255,255,0.45);
          color: #0b5a7a;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          border: 1px solid rgba(0,100,150,0.2);
          box-shadow: 0 6px 14px rgba(0, 60, 90, 0.08);
        }
        .glass-cta {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: rgba(0, 100, 150, 0.9);
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: 0 12px 30px rgba(0, 80, 120, 0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        .glass-cta.large {
          padding: 1.2rem 3.5rem;
          font-size: 1.1rem;
        }
        .glass-cta:hover {
          background: rgba(0, 100, 150, 1);
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(0, 80, 120, 0.5);
        }
        .glass-badge {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: rgba(0, 100, 150, 0.85);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          box-shadow: 0 10px 30px rgba(0,100,150,0.4);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .glass-filter {
          padding: 0.7rem 1.8rem;
          background: rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.75);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .glass-filter:hover {
          color: #7fd6ff;
          border-color: rgba(127,214,255,0.6);
          box-shadow: 0 8px 20px rgba(0, 50, 80, 0.25);
        }
        .glass-filter.active {
          background: rgba(127,214,255,0.25);
          color: #fff;
          border-color: rgba(127,214,255,0.8);
          box-shadow: 0 10px 30px rgba(0, 80, 120, 0.35);
        }
        .why-card:hover { transform: translateY(-8px); border-color: #006496 !important; box-shadow: 0 0 0 1px #006496, 0 20px 40px rgba(0,100,150,0.2) !important; }
        .project-card { border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 18px 50px rgba(0,0,0,0.25); transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .project-card:hover { transform: scale(1.02); box-shadow: 0 25px 70px rgba(0,100,150,0.35); }
        .project-card:hover .project-img { transform: scale(1.08); }
        @media (max-width: 968px) {
          .about-grid, .story-grid, .founder-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-grid { grid-template-columns: 1fr !important; grid-auto-rows: 260px !important; }
          .projects-grid a { grid-column: span 1 !important; grid-row: span 1 !important; }
          .glass-badge { right: 10px; bottom: 10px; }
        }
        @media (max-width: 640px) {
          .why-grid, .stats-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-auto-rows: 220px !important; gap: 1rem !important; }
          .filter-bar {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            justify-content: flex-start !important;
            padding-bottom: 0.5rem !important;
            scrollbar-width: none !important;
          }
          .filter-bar::-webkit-scrollbar { display: none; }
          .filter-bar button { flex-shrink: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
