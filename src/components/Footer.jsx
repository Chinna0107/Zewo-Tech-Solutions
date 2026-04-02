import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', background: 'linear-gradient(180deg, #001e32 0%, #001525 100%)' }}>
      
      {/* Section 1 */}
      <div style={{ padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderBottom: '1px solid rgba(0,100,150,0.2)' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '3px', borderRadius: '14px', background: 'linear-gradient(135deg, rgba(0,100,150,0.6), rgba(150,200,225,0.4))', boxShadow: '0 4px 20px rgba(0,100,150,0.3)' }}>
              <img src={Logo} alt="Logo" style={{ height: '54px', width: '54px', objectFit: 'cover', borderRadius: '12px', display: 'block' }} />
            </div>
            <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#96c8e1', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: '"Playfair Display", serif' }}>Zewo Tech Solutions</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', fontSize: '0.95rem', maxWidth: '500px' }}>Specializing in Web Development, Full Stack Development, and Logo Design to elevate your digital presence.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
          <p style={{ color: '#96c8e1', fontSize: '0.8rem', fontWeight: '700', margin: 0, letterSpacing: '3px', textTransform: 'uppercase' }}>Inquiries</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#fff', fontSize: '0.9rem', fontWeight: '700', background: 'linear-gradient(135deg, #006496, #19647d)', padding: '1rem 2.5rem', borderRadius: '50px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(0,100,150,0.4), inset 0 1px 0 rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '2px', border: '1px solid rgba(255,255,255,0.1)' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,100,150,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,100,150,0.4), inset 0 1px 0 rgba(255,255,255,0.15)'; }}>Let's Talk Now <FaArrowUp style={{ transform: 'rotate(45deg)' }} /></Link>
        </div>
      </div>

      {/* Section 2 */}
      <div style={{ padding: '4rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
        <div>
          <h3 style={{ color: '#96c8e1', marginBottom: '1.2rem', fontSize: '1rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Location</h3>
          <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', fontSize: '0.9rem' }}>BTM Layout Stage One, Bengaluru<br />Karnataka - 560068, India</p>
        </div>
        <div>
          <h3 style={{ color: '#96c8e1', marginBottom: '1.2rem', fontSize: '1rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Get In Touch</h3>
          {['+91 8179860935', '+91 9177067341', '+91 6281487199'].map(num => (
            <a key={num} href={`tel:${num.replace(/\s/g,'')}`} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#96c8e1'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}><FaPhone size={12} /> {num}</a>
          ))}
          <a href="mailto:zewotechsolutions@gmail.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#96c8e1'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}><FaEnvelope size={12} /> zewotechsolutions@gmail.com</a>
        </div>
        <div>
          <h3 style={{ color: '#96c8e1', marginBottom: '1.2rem', fontSize: '1rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Explore</h3>
          {[['/', 'Home'], ['/works', 'Our Works'], ['/portfolio', 'Portfolio'], ['/contact', 'Contact']].map(([path, label]) => (
            <Link key={path} to={path} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.9rem', display: 'block', marginBottom: '0.7rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#96c8e1'; e.target.style.paddingLeft = '0.5rem'; }} onMouseOut={(e) => { e.target.style.color = 'rgba(255,255,255,0.5)'; e.target.style.paddingLeft = '0'; }}>{label}</Link>
          ))}
        </div>
        <div>
          <h3 style={{ color: '#96c8e1', marginBottom: '1.2rem', fontSize: '1rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase' }}>Connect</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[{ icon: FaLinkedin, href: 'https://linkedin.com' }, { icon: FaInstagram, href: 'https://www.instagram.com/continential_design_studio' }, { icon: FaYoutube, href: 'https://youtube.com' }, { icon: FaFacebook, href: 'https://facebook.com' }].map(({ icon: Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,100,150,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0,100,150,0.25)', borderRadius: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,100,150,0.4)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(0,100,150,0.5)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(0,100,150,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(0,100,150,0.25)'; }}><Icon /></a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ padding: '1.5rem 5%', textAlign: 'center', borderTop: '1px solid rgba(0,100,150,0.15)' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', margin: 0 }}>© {new Date().getFullYear()} Zewo Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
