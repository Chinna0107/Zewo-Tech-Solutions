import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpeg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('header')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : 'none', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '1.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" onClick={() => window.location.reload()} style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', textDecoration: 'none' }} className="logo-link">
          <img src={Logo} alt="Logo" style={{ height: '60px', width: '60px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 4px 15px rgba(193, 169, 108, 0.3)', transition: 'all 0.4s ease' }} className="logo-img" />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#c1a96c', letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.3s ease', fontFamily: '"Playfair Display", serif' }} className="company-name">Zewo Tech Solutions</span>
        </Link>
        
        <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: '#c1a96c' }} className="mobile-menu-btn">☰</button>
        
        <nav style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className={isOpen ? 'nav-open' : ''} onClick={() => setIsOpen(false)}>
          <Link to="/" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '600', fontSize: '1.05rem', transition: 'all 0.3s', position: 'relative', fontFamily: '"Poppins", sans-serif' }}><b>Home</b></Link>
          <Link to="/works" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '600', fontSize: '1.05rem', transition: 'all 0.3s', position: 'relative', fontFamily: '"Poppins", sans-serif' }}><b>Our Works</b></Link>
          <Link to="/portfolio" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '600', fontSize: '1.05rem', transition: 'all 0.3s', position: 'relative', fontFamily: '"Poppins", sans-serif' }}><b>Portfolio</b></Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '600', fontSize: '1.05rem', transition: 'all 0.3s', position: 'relative', fontFamily: '"Poppins", sans-serif' }}><b>Contact</b></Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#111010', fontWeight: '700', backgroundColor: '#c1a96c', padding: '0.85rem 2.2rem', borderRadius: '50px', transition: 'all 0.4s ease', boxShadow: '0 6px 20px rgba(193, 169, 108, 0.4)', textTransform: 'uppercase', fontSize: '0.95rem', letterSpacing: '1.2px', fontFamily: '"Poppins", sans-serif' }}><b>Start Project</b></Link>
        </nav>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap');
        
        @media (max-width: 1024px) {
          header .company-name { font-size: 1.2rem !important; }
          header nav { gap: 2rem !important; }
          header nav a { font-size: 0.95rem !important; }
          header a[href="/start"] { padding: 0.7rem 1.8rem !important; font-size: 0.85rem !important; }
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          header > div { padding: 1rem 1.5rem !important; }
          header .logo-img { height: 45px !important; width: 45px !important; }
          header .company-name { font-size: 1rem !important; }
          nav { 
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.98) 100%);
            backdrop-filter: blur(15px);
            flex-direction: column;
            gap: 0 !important;
            padding: 2rem 0;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            display: none !important;
            align-items: stretch !important;
            animation: slideDown 0.3s ease-out;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
          }
          nav.nav-open { display: flex !important; }
          nav a { 
            padding: 1.5rem 2rem !important; 
            width: 100% !important;
            text-align: left !important;
            border-bottom: 1px solid rgba(193, 169, 108, 0.15);
            font-size: 1.1rem !important;
            font-weight: 600 !important;
            position: relative !important;
            transition: all 0.3s ease !important;
            background: transparent !important;
          }
          nav a:hover {
            background: rgba(193, 169, 108, 0.1) !important;
            padding-left: 2.5rem !important;
          }
          nav a:active {
            background: rgba(193, 169, 108, 0.2) !important;
          }
          nav a::before {
            content: '→';
            position: absolute;
            left: 1rem;
            opacity: 0;
            transition: all 0.3s ease;
            color: #c1a96c;
            font-weight: bold;
          }
          nav a:hover::before {
            opacity: 1;
            left: 1.5rem;
          }
          nav a[href="/start"] {
            margin: 1.5rem 2rem 0.5rem !important;
            width: calc(100% - 4rem) !important;
            text-align: center !important;
            border-radius: 50px !important;
            background-color: #c1a96c !important;
            color: #fff !important;
            border: none !important;
            padding: 1.2rem 2rem !important;
            font-size: 1rem !important;
            letter-spacing: 1.5px !important;
            box-shadow: 0 6px 20px rgba(193, 169, 108, 0.4) !important;
          }
          nav a[href="/start"]::before {
            content: '' !important;
          }
          nav a[href="/start"]:hover {
            background-color: #b39858 !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 25px rgba(193, 169, 108, 0.6) !important;
            padding-left: 2rem !important;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
        
        @media (max-width: 480px) {
          header > div { padding: 0.8rem 1rem !important; }
          header .logo-img { height: 40px !important; width: 40px !important; }
          header .company-name { font-size: 0.85rem !important; letter-spacing: 0.5px !important; }
          .mobile-menu-btn { font-size: 1.5rem !important; }
        }
        
        header nav a:not([href="/start"]):hover { 
          color: #c1a96c !important; 
          transform: translateY(-2px);
        }
        header nav a:not([href="/start"]):after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: #c1a96c;
          transition: width 0.3s ease;
        }
        header nav a:not([href="/start"]):hover:after {
          width: 100%;
        }
        header a[href="/start"]:hover { 
          background-color: #b39858 !important; 
          transform: translateY(-3px); 
          box-shadow: 0 8px 25px rgba(193, 169, 108, 0.6) !important; 
        }
        .logo-link:hover .logo-img { 
          transform: scale(1.08);
          box-shadow: 0 6px 25px rgba(193, 169, 108, 0.5);
        }
        .logo-link:hover .company-name { 
          transform: scale(1.03);
          letter-spacing: 1.5px;
        }
      `}</style>
    </header>
  );
};

export default Header;
