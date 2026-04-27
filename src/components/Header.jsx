import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from '../assets/Logo.jpeg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('header')) setIsOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <header className={`glass-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" onClick={() => window.location.reload()} className="logo-link">
          <div className="logo-wrap">
            <img src={Logo} alt="Logo" className="logo-img" />
          </div>
          <span className="company-name">Zewo Tech Solutions</span>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
          <span className={`burger ${isOpen ? 'open' : ''}`} />
        </button>

        <nav className={`glass-nav ${isOpen ? 'nav-open' : ''}`} onClick={() => setIsOpen(false)}>
          {['/', '/works', '/portfolio', '/careers', '/contact'].map((path, i) => (
            <Link key={path} to={path} className="nav-link">
              {['Home', 'Our Works', 'Portfolio', 'Careers', 'Contact'][i]}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">Start Project</Link>
        </nav>
      </div>

      <style>{`
        .glass-header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0.8rem 0;
          background: transparent;
          transition: all 0.4s ease;
        }
        .glass-header.scrolled {
          background: rgba(240, 248, 255, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(0, 100, 150, 0.15);
          box-shadow: 0 4px 30px rgba(0, 100, 150, 0.1);
        }
        .header-inner {
          max-width: 1500px; margin: 0 auto;
          padding: 0.8rem 3rem;
          display: flex; justify-content: space-between; align-items: center;
        }
        .logo-link {
          display: flex; align-items: center; gap: 1rem; text-decoration: none;
        }
        .logo-wrap {
          position: relative;
          border-radius: 14px;
          padding: 3px;
          background: linear-gradient(135deg, rgba(0,100,150,0.6), rgba(150,200,225,0.4));
          box-shadow: 0 4px 20px rgba(0,100,150,0.3);
          transition: all 0.4s ease;
        }
        .logo-wrap:hover { transform: scale(1.08); box-shadow: 0 8px 30px rgba(0,100,150,0.5); }
        .logo-img {
          height: 54px; width: 54px; object-fit: cover;
          border-radius: 12px; display: block;
        }
        .company-name {
          font-size: 1.4rem; font-weight: '800'; color: #006496;
          letter-spacing: 1px; text-transform: uppercase;
          font-family: 'Playfair Display', serif;
          transition: all 0.3s ease;
        }
        .logo-link:hover .company-name { letter-spacing: 1.5px; }

        .glass-nav {
          display: flex; gap: 2.5rem; align-items: center;
        }
        .nav-link {
          text-decoration: none; color: #1a1a1a; font-weight: 600;
          font-size: 1rem; font-family: 'Poppins', sans-serif;
          position: relative; padding: 0.3rem 0;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #006496, #96c8e1);
          border-radius: 2px; transition: width 0.3s ease;
        }
        .nav-link:hover { color: #006496; }
        .nav-link:hover::after { width: 100%; }

        .nav-cta {
          text-decoration: none; color: #fff; font-weight: 700;
          font-size: 0.9rem; font-family: 'Poppins', sans-serif;
          padding: 0.8rem 2rem; border-radius: 50px;
          background: linear-gradient(135deg, #006496, #19647d);
          box-shadow: 0 4px 20px rgba(0,100,150,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.15);
          text-transform: uppercase; letter-spacing: 1.2px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .nav-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,100,150,0.6), inset 0 1px 0 rgba(255,255,255,0.3);
          background: linear-gradient(135deg, #0077b3, #006496);
        }

        .mobile-menu-btn {
          display: none; background: rgba(0,100,150,0.1);
          border: 1px solid rgba(0,100,150,0.2);
          border-radius: 10px; padding: 0.6rem 0.8rem;
          cursor: pointer; backdrop-filter: blur(10px);
        }
        .burger, .burger::before, .burger::after {
          display: block; width: 22px; height: 2px;
          background: #006496; border-radius: 2px;
          transition: all 0.3s ease; position: relative;
        }
        .burger::before, .burger::after {
          content: ''; position: absolute; left: 0;
        }
        .burger::before { top: -7px; }
        .burger::after { top: 7px; }
        .burger.open { background: transparent; }
        .burger.open::before { transform: rotate(45deg); top: 0; }
        .burger.open::after { transform: rotate(-45deg); top: 0; }

        @media (max-width: 1024px) {
          .company-name { font-size: 1.1rem !important; }
          .glass-nav { gap: 1.8rem !important; }
        }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .header-inner { padding: 0.8rem 1.5rem !important; }
          .logo-img { height: 44px !important; width: 44px !important; }
          .company-name { font-size: 0.95rem !important; }
          .glass-nav {
            position: absolute; top: 100%; left: 0; right: 0;
            flex-direction: column; gap: 0 !important;
            background: rgba(240, 248, 255, 0.92);
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
            border-bottom: 1px solid rgba(0,100,150,0.2);
            box-shadow: 0 20px 60px rgba(0,100,150,0.15);
            padding: 1.5rem 0;
            display: none !important;
            align-items: stretch !important;
            animation: slideDown 0.3s ease-out;
          }
          .glass-nav.nav-open { display: flex !important; }
          .nav-link {
            padding: 1.2rem 2rem !important;
            border-bottom: 1px solid rgba(0,100,150,0.08);
            font-size: 1.05rem !important;
          }
          .nav-link::after { display: none; }
          .nav-link:hover { background: rgba(0,100,150,0.06); padding-left: 2.5rem !important; }
          .nav-cta {
            margin: 1.2rem 2rem 0.5rem !important;
            text-align: center !important;
            border-radius: 50px !important;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
        @media (max-width: 480px) {
          .header-inner { padding: 0.6rem 1rem !important; }
          .company-name { font-size: 0.8rem !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
