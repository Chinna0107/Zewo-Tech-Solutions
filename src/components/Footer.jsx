import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.jpeg';
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ width: '100vw', margin: 0, padding: 0, boxSizing: 'border-box', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
      
      {/* Section 1: Company Info & Inquiries */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <img src={Logo} alt="Logo" style={{ height: '60px', width: '60px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 15px rgba(193, 169, 108, 0.3)', transition: 'transform 0.3s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
            <span style={{ fontSize: '1.3rem', fontWeight: '800', color: '#c1a96c', textTransform: 'uppercase', letterSpacing: '1.5px', fontFamily: '"Playfair Display", serif' }}>Zewo Tech Solutions</span>
          </div>
          <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '1rem', maxWidth: '500px', fontFamily: '"Poppins", sans-serif' }}>Specializing in Web Development, Full Stack Development, and Logo Design to elevate your digital presence.</p>
        </div>
        
        <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1.5rem' }}>
          <p style={{ color: '#c1a96c', fontSize: '1.0rem', fontWeight: '800', margin: 0, letterSpacing: '2px', textTransform: 'uppercase', fontFamily: '"Poppins", sans-serif' }}>Inquiries</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#fff', fontSize: '0.9rem', fontWeight: '800', backgroundColor: '#c1a96c', padding: '1rem 2.5rem', borderRadius: '50px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.5)', textTransform: 'uppercase', letterSpacing: '2px', border: '2px solid transparent', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.currentTarget.style.color = '#c1a96c'; e.currentTarget.style.borderColor = '#c1a96c'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#c1a96c'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.5)'; }}>Let's Talk Now <FaArrowUp style={{ transform: 'rotate(45deg)' }} /></Link>
        </div>
      </div>

      {/* Section 2: Location, Get In Touch, Explore, Connect */}
      <div style={{ backgroundColor: '#252525', padding: '4rem 5%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
        
        {/* Location */}
        <div>
          <h3 style={{ color: '#c1a96c', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px', fontFamily: '"Playfair Display", serif' }}>Location</h3>
          <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontSize: '0.95rem', fontFamily: '"Poppins", sans-serif' }}>
            BTM LAYOUT STAGE ONE,Bengaluru<br />
            Karnataka - 560068,<br />
            Karnataka - India
          </p>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 style={{ color: '#c1a96c', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px', fontFamily: '"Playfair Display", serif' }}>Get In Touch</h3>
          <a href="tel:+918179860935" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.currentTarget.style.color = '#c1a96c'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#b0b0b0'; }}><FaPhone /> +91 8179860935</a>
          <a href="tel:+919177067341" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.currentTarget.style.color = '#c1a96c'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#b0b0b0'; }}><FaPhone /> +91 9177067341</a>
          <a href="tel:+916281487199" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.currentTarget.style.color = '#c1a96c'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#b0b0b0'; }}><FaPhone /> +91 6281487199</a>
          <a href="mailto:zewotechsolutions@gmail.com" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.currentTarget.style.color = '#c1a96c'; }} onMouseOut={(e) => { e.currentTarget.style.color = '#b0b0b0'; }}><FaEnvelope /> zewotechsolutions@gmail.com</a>
        </div>

        {/* Explore */}
        <div>
          <h3 style={{ color: '#c1a96c', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px', fontFamily: '"Playfair Display", serif' }}>Explore</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <Link to="/" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.textDecoration = 'none'; }}>Home</Link>
            <Link to="/works" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.textDecoration = 'none'; }}>Our Works</Link>
            <Link to="/portfolio" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.textDecoration = 'none'; }}>Portfolio</Link>
            <Link to="/contact" style={{ color: '#b0b0b0', textDecoration: 'none', fontSize: '0.95rem', transition: 'all 0.3s', position: 'relative', display: 'inline-block', width: 'fit-content', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.textDecoration = 'none'; }}>Contact</Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h3 style={{ color: '#c1a96c', marginBottom: '1.2rem', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px', fontFamily: '"Playfair Display", serif' }}>Connect</h3>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaLinkedin /></a>
            <a href="https://www.instagram.com/continential_design_studio" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaYoutube /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', fontSize: '1.8rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; }} onMouseOut={(e) => { e.target.style.color = '#b0b0b0'; e.target.style.transform = 'translateY(0)'; }}><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#1a1a1a', padding: '2rem 5%', textAlign: 'center', borderTop: '1px solid #333' }}>
        <p style={{ color: '#666', fontSize: '0.9rem', letterSpacing: '0.5px', margin: 0 }}>© {new Date().getFullYear()} Zewo Tech Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
