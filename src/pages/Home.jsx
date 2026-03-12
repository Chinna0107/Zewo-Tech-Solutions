import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SEO from '../components/SEO';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true
  };

  const slides = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80'
  ];

  return (
    <div style={{ width: '100vw', overflow: 'hidden' }} className="page-enter">
      <SEO 
        title="Zewo Tech Solutions - Web Development & Full Stack Solutions | zewo.in"
        description="Leading web development company in India specializing in full-stack solutions, e-commerce platforms, React, Node.js, Express, SQL development. Transform your business with our expert tech solutions."
        keywords="web development, full stack development, tech solutions, React development, Node.js development, Express.js, SQL database, e-commerce development, custom web applications, website design, digital solutions, software development company, web design India, tech company"
        url="https://zewo.in"
      />
      <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', margin: 0, padding: 0 }}>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="hero-slide" data-slide={index} style={{ width: '100vw', height: '100vh', backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ maxWidth: '900px', padding: '0 3rem', textAlign: 'center', color: '#fff' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '2rem', lineHeight: '1.2', color: '#fff', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', fontFamily: '"Playfair Display", serif' }}>
                      Building the<br />Digital Future.
                    </h1>
                    <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '3rem', color: '#f0f0f0', textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)', fontFamily: '"Poppins", sans-serif' }}>
                      At Zewo Tech Solutions, we craft scalable web applications and full-stack solutions that transform ideas into powerful digital experiences.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <Link to="/portfolio" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#1a1a1a', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.5)', border: '2px solid #c1a96c', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.5)'; }}>
                        Explore Portfolio
                      </Link>
                      <Link to="/works" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: 'transparent', color: '#fff', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', border: '2px solid #fff', boxShadow: '0 8px 25px rgba(255, 255, 255, 0.2)', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.4)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#fff'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.2)'; }}>
                        Visit Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <style>{`
          .slick-slider { height: 100vh; }
          .slick-list { height: 100vh; }
          .slick-track { height: 100vh; }
          .slick-slide > div { height: 100vh; }
          .slick-dots { bottom: 40px !important; z-index: 10; }
          .slick-dots li button:before { font-size: 12px; color: #fff; opacity: 0.5; }
          .slick-dots li.slick-active button:before { color: #c1a96c; opacity: 1; }
          .slick-prev, .slick-next { z-index: 10; width: 50px; height: 50px; }
          .slick-prev { left: 30px; }
          .slick-next { right: 30px; }
          .slick-prev:before, .slick-next:before { font-size: 40px; color: #c1a96c; opacity: 0.7; }
          .slick-prev:hover:before, .slick-next:hover:before { opacity: 1; }
          @media (max-width: 768px) {
            h1 { font-size: 2.5rem !important; }
            p { font-size: 1rem !important; }
          }
        `}</style>
      </div>

      {/* Philosophy Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 5%', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="philosophy-grid">
          <div className="scale-in">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Web Development" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} />
          </div>
          <div className="fade-in-right">
            <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontFamily: '"Poppins", sans-serif' }}>Our Philosophy</p>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.2', fontFamily: '"Playfair Display", serif' }}>Code Excellence.<br />Digital Innovation.</h2>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#c1a96c', marginBottom: '1.5rem', fontFamily: '"Playfair Display", serif' }}>Development Philosophy</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem', fontFamily: '"Poppins", sans-serif' }}>Every line of code must serve a purpose—both functional and user-centric. We don't just build websites; we engineer digital solutions that drive business growth.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }}>Scalable</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: '"Poppins", sans-serif' }}>Architecture built to grow with your business.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }}>Modern Stack</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: '"Poppins", sans-serif' }}>Cutting-edge technologies for optimal performance.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }}>Custom Solutions</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: '"Poppins", sans-serif' }}>Tailored applications that fit your unique needs.</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.5rem', fontFamily: '"Poppins", sans-serif' }}>Agile Delivery</h4>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', fontFamily: '"Poppins", sans-serif' }}>Fast iterations with continuous deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 5%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }} className="fade-in-up">
          <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontFamily: '"Poppins", sans-serif' }}>What we do</p>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1rem', lineHeight: '1.2', fontFamily: '"Playfair Display", serif' }}>Building Digital Excellence.</h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto', fontFamily: '"Poppins", sans-serif' }}>Comprehensive web development and full-stack solutions, delivered with technical precision and creative innovation.</p>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }} className="services-grid">
          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="scale-in stagger-1" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80" alt="Web Development" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}>Web Development</h3>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#c1a96c', opacity: '0.3' }}>01</span>
              </div>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Modern, responsive websites built with cutting-edge technologies and best practices.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• React & Next.js</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Responsive Design</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Performance Optimization</li>
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="scale-in stagger-2" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80" alt="Full Stack Development" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}>Full Stack Development</h3>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#c1a96c', opacity: '0.3' }}>02</span>
              </div>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>End-to-end application development from database to user interface.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• MERN/MEAN Stack</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• RESTful APIs</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Database Design</li>
              </ul>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }} className="scale-in stagger-3" onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80" alt="Logo Design" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem', backgroundColor: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', fontFamily: '"Playfair Display", serif' }}>Logo Design</h3>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: '#c1a96c', opacity: '0.3' }}>03</span>
              </div>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Creative brand identity and logo design that makes your business stand out.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Brand Identity</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Custom Logos</li>
                <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Visual Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '6rem 5%', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }} className="fade-in-up">
          <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontFamily: '"Poppins", sans-serif' }}>The Methodology</p>
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', color: '#1a1a1a', lineHeight: '1.2', fontFamily: '"Playfair Display", serif' }}>Our Four-Phase<br />Development Process.</h2>
        </div>

        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="methodology-grid">
          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-1" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>01</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif' }}>Discovery & Planning</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>We analyze your requirements, target audience, and business goals to define the project scope.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Requirements Analysis</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Tech Stack Selection</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Architecture Design</li>
            </ul>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-2" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>02</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif' }}>Design & Prototyping</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Creating intuitive UI/UX designs and interactive prototypes for user validation.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Wireframing</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• UI/UX Design</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Interactive Prototypes</li>
            </ul>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-3" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>03</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif' }}>Development & Testing</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Building robust, scalable applications with clean code and comprehensive testing.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Agile Development</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Code Reviews</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• QA Testing</li>
            </ul>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', borderLeft: '4px solid transparent', transition: 'all 0.3s' }} className="fade-in-up stagger-4" onMouseOver={(e) => e.currentTarget.style.borderLeftColor = '#c1a96c'} onMouseOut={(e) => e.currentTarget.style.borderLeftColor = 'transparent'}>
            <span style={{ fontSize: '4rem', fontWeight: '800', color: '#c1a96c', opacity: '0.2' }}>04</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '1rem', fontFamily: '"Playfair Display", serif' }}>Deployment & Support</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontFamily: '"Poppins", sans-serif' }}>Seamless deployment to production with ongoing maintenance and support.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Cloud Deployment</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem', marginBottom: '0.5rem' }}>• Performance Monitoring</li>
              <li style={{ color: '#c1a96c', fontSize: '0.9rem' }}>• Ongoing Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', height: '500px', backgroundImage: 'url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', color: '#fff', maxWidth: '800px', padding: '0 2rem' }} className="fade-in-up">
            <p style={{ color: '#c1a96c', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', fontFamily: '"Poppins", sans-serif' }}>Let's talk about your project</p>
            <h2 style={{ fontSize: '4rem', fontWeight: '800', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.2', fontFamily: '"Playfair Display", serif' }}>Transform Your<br />Digital Presence.</h2>
            <Link to="/contact" style={{ display: 'inline-block', padding: '1.2rem 3rem', backgroundColor: '#c1a96c', color: '#1a1a1a', textDecoration: 'none', borderRadius: '50px', fontSize: '1.1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', transition: 'all 0.4s ease', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.5)', border: '2px solid #c1a96c', marginTop: '1rem', fontFamily: '"Poppins", sans-serif' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = '#c1a96c'; e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.7)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.color = '#1a1a1a'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.5)'; }}>Start Your Journey</Link>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        @media (max-width: 968px) {
          .philosophy-grid { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .methodology-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .hero-slide[data-slide="0"] { background-image: url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80) !important; }
          .hero-slide[data-slide="1"] { background-image: url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80) !important; }
          .hero-slide[data-slide="2"] { background-image: url(https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80) !important; }
          .hero-slide[data-slide="3"] { background-image: url(https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80) !important; }
          .hero-slide[data-slide="4"] { background-image: url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80) !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
