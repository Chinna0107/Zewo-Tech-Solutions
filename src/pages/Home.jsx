import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SEO from '../components/SEO';

const Home = () => {
  const settings = { dots: true, infinite: true, speed: 1000, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 5000, fade: true, arrows: true };

  const slides = [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80',
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80',
  ];

  const services = [
    {
      num: '01',
      title: 'Web Development',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
      desc: 'We build modern, fast, and responsive websites tailored to your brand — from landing pages to full-scale web platforms.',
      items: ['React & Next.js', 'Responsive Design', 'Performance Optimization']
    },
    {
      num: '02',
      title: 'Full Stack Development',
      img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
      desc: 'End-to-end application development covering both frontend and backend — databases, APIs, authentication, and deployment.',
      items: ['React + Express + SQL', 'RESTful APIs', 'Database Design']
    },
    {
      num: '03',
      title: 'Logo Design',
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80',
      desc: 'Crafting unique, memorable logos that represent your brand identity and leave a lasting impression on your audience.',
      items: ['Brand Identity', 'Custom Logos', 'Visual Design']
    },
    {
      num: '04',
      title: 'Banners & Poster Design',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
      desc: 'Eye-catching banners and posters designed for digital campaigns, social media, events, and print marketing materials.',
      items: ['Social Media Banners', 'Event Posters', 'Print & Digital Ready']
    },
    {
      num: '05',
      title: 'Editing & Creative Designs',
      img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
      desc: 'Professional photo editing, graphic design, and creative visual content tailored for any platform or purpose.',
      items: ['Photo Editing', 'Graphic Design', 'Content Visuals']
    },
    {
      num: '06',
      title: 'Custom Software Development',
      img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80',
      desc: 'Bespoke software solutions built from scratch to solve your unique business challenges with scalability and precision.',
      items: ['Business Automation', 'Custom Dashboards', 'Scalable Architecture']
    },
  ];

  const steps = [
    { num: '01', title: 'Discovery & Planning', desc: 'We analyze your requirements, target audience, and business goals to define the project scope.', items: ['Requirements Analysis', 'Tech Stack Selection', 'Architecture Design'] },
    { num: '02', title: 'Design & Prototyping', desc: 'Creating intuitive UI/UX designs and interactive prototypes for user validation.', items: ['Wireframing', 'UI/UX Design', 'Interactive Prototypes'] },
    { num: '03', title: 'Development & Testing', desc: 'Building robust, scalable applications with clean code and comprehensive testing.', items: ['Agile Development', 'Code Reviews', 'QA Testing'] },
    { num: '04', title: 'Deployment & Support', desc: 'Seamless deployment to production with ongoing maintenance and support.', items: ['Cloud Deployment', 'Performance Monitoring', 'Ongoing Support'] },
  ];

  return (
    <div className="home-page page-enter">
      <SEO
        title="Zewo Tech Solutions - Web Development & Full Stack Solutions | zewo.in"
        description="Leading web development company in India specializing in full-stack solutions, e-commerce platforms, React, Node.js, Express, SQL development."
        keywords="web development, full stack development, tech solutions, React, Node.js, Express, SQL, e-commerce, custom web applications"
        url="https://zewo.in"
      />

      {/* Hero Slider */}
      <div className="hero-wrap">
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <div key={i}>
              <div className="hero-slide" style={{ backgroundImage: `url(${slide})` }}>
                <div className="hero-overlay">
                  <div className="hero-glass-card">
                    <p className="hero-label">Zewo Tech Solutions</p>
                    <h1 className="hero-title">Building the<br />Digital Future.</h1>
                    <p className="hero-sub">We craft scalable web applications and full-stack solutions that transform ideas into powerful digital experiences.</p>
                    <div className="hero-btns">
                      <Link to="/portfolio" className="btn-glass-primary">Explore Portfolio</Link>
                      <Link to="/works" className="btn-glass-outline">Our Works</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Philosophy */}
      <section className="section-light">
        <div className="container grid-2">
          <div className="img-glass-wrap scale-in">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Web Development" className="section-img" />
            <div className="img-glass-overlay" />
          </div>
          <div className="fade-in-right">
            <p className="section-label">Our Philosophy</p>
            <h2 className="section-title">Code Excellence.<br />Digital Innovation.</h2>
            <p className="section-sub" style={{ color: '#006496', fontWeight: 700, marginBottom: '1rem' }}>Development Philosophy</p>
            <p className="section-text">Every line of code must serve a purpose—both functional and user-centric. We don't just build websites; we engineer digital solutions that drive business growth.</p>
            <div className="philosophy-grid">
              {[['Scalable', 'Architecture built to grow with your business.'], ['Modern Stack', 'Cutting-edge technologies for optimal performance.'], ['Custom Solutions', 'Tailored applications that fit your unique needs.'], ['Agile Delivery', 'Fast iterations with continuous deployment.']].map(([t, d]) => (
                <div key={t} className="glass-mini-card">
                  <h4 className="mini-title">{t}</h4>
                  <p className="mini-desc">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-glass-bg">
        <div className="container">
          <div className="section-header fade-in-up">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Building Digital Excellence.</h2>
            <p className="section-text" style={{ maxWidth: '700px', margin: '0 auto' }}>Comprehensive web development and full-stack solutions, delivered with technical precision.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-glass-card">
                <div className="service-img-wrap">
                  <img src={s.img} alt={s.title} className="service-img" />
                  <div className="service-img-overlay" />
                </div>
                <div className="service-body">
                  <div className="service-header-row">
                    <h3 className="service-title">{s.title}</h3>
                    <span className="service-num">{s.num}</span>
                  </div>
                  <p className="service-desc">{s.desc}</p>
                  <ul className="service-list">
                    {s.items.map(item => <li key={item} className="service-item">• {item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-glass-bg">
        <div className="container">
          <div className="section-header fade-in-up">
            <p className="section-label">The Methodology</p>
            <h2 className="section-title">Our Four-Phase Development Process.</h2>
            <p className="section-text" style={{ maxWidth: '600px', margin: '0 auto' }}>From idea to launch — a structured approach that ensures quality at every step.</p>
          </div>
          <div className="steps-timeline">
            {steps.map((s, i) => (
              <div key={i} className="step-row">
                <div className="step-connector">
                  <div className="step-circle">{s.num}</div>
                  {i < steps.length - 1 && <div className="step-line" />}
                </div>
                <div className="step-glass-card">
                  <div className="step-card-inner">
                    <div className="step-card-left">
                      <h3 className="step-title">{s.title}</h3>
                      <p className="step-desc">{s.desc}</p>
                    </div>
                    <ul className="step-list">
                      {s.items.map(item => (
                        <li key={item} className="step-item">
                          <span className="step-dot" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-blob cta-blob-1" />
        <div className="cta-blob cta-blob-2" />
        <div className="cta-glass-card fade-in-up">
          <p className="section-label">Let's talk about your project</p>
          <h2 className="cta-title">Transform Your<br />Digital Presence.</h2>
          <Link to="/contact" className="btn-glass-primary">Start Your Journey</Link>
        </div>
      </section>

      <style>{`
        .home-page { width: 100vw; overflow: hidden; background: #f0f8ff; }

        /* Hero */
        .hero-wrap { width: 100vw; height: 100vh; position: relative; overflow: hidden; }
        .hero-slide { width: 100vw; height: 100vh; background-size: cover; background-position: center; position: relative; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,20,40,0.75) 0%, rgba(0,50,80,0.5) 100%); display: flex; align-items: center; justify-content: center; padding: 0 5%; }
        .hero-glass-card {
          max-width: 800px; text-align: center;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 32px; padding: 3.5rem 4rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .hero-label { color: #96c8e1; font-size: 0.85rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 1.2rem; }
        .hero-title { font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; }
        .hero-sub { font-size: clamp(1rem, 2vw, 1.2rem); color: rgba(255,255,255,0.8); line-height: 1.8; margin-bottom: 2.5rem; }
        .hero-btns { display: flex; gap: 1.2rem; justify-content: center; flex-wrap: wrap; }

        /* Buttons */
        .btn-glass-primary {
          display: inline-block; padding: 0.9rem 2.5rem;
          background: linear-gradient(135deg, #006496, #19647d);
          color: #fff; border-radius: 50px; font-weight: 700;
          font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1.5px;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(0,100,150,0.5), inset 0 1px 0 rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.15);
          transition: all 0.3s ease;
        }
        .btn-glass-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(0,100,150,0.65), inset 0 1px 0 rgba(255,255,255,0.3); }
        .btn-glass-outline {
          display: inline-block; padding: 0.9rem 2.5rem;
          background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
          color: #fff; border-radius: 50px; font-weight: 700;
          font-size: 0.95rem; text-transform: uppercase; letter-spacing: 1.5px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .btn-glass-outline:hover { background: rgba(255,255,255,0.2); transform: translateY(-3px); }

        /* Sections */
        .container { max-width: 1400px; margin: 0 auto; }
        .section-light { padding: 6rem 5%; background: #fff; }
        .section-glass-bg { padding: 6rem 5%; background: linear-gradient(135deg, #e1fafa 0%, #f0f8ff 100%); }
        .section-dark { padding: 6rem 5%; background: linear-gradient(135deg, #001e32 0%, #002d4a 100%); }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-label { color: #006496; font-size: 0.8rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 0.8rem; display: block; }
        .section-title { font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900; color: #1a1a1a; line-height: 1.15; margin-bottom: 1rem; font-family: 'Playfair Display', serif; }
        .section-sub { color: #006496; font-weight: 700; margin-bottom: 1rem; font-size: 1.1rem; }
        .section-text { font-size: 1.05rem; color: #555; line-height: 1.85; margin-bottom: 2rem; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }

        /* Philosophy */
        .img-glass-wrap { position: relative; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 80px rgba(0,100,150,0.15); }
        .section-img { width: 100%; height: 480px; object-fit: cover; display: block; transition: transform 0.6s ease; }
        .img-glass-wrap:hover .section-img { transform: scale(1.04); }
        .img-glass-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(0,100,150,0.1), transparent); pointer-events: none; }
        .philosophy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 2rem; }
        .glass-mini-card {
          padding: 1.2rem 1.5rem;
          background: rgba(0,100,150,0.06);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,100,150,0.15);
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .glass-mini-card:hover { background: rgba(0,100,150,0.12); transform: translateY(-3px); box-shadow: 0 8px 25px rgba(0,100,150,0.15); }
        .mini-title { font-size: 1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.4rem; }
        .mini-desc { font-size: 0.88rem; color: #666; line-height: 1.6; }

        /* Services */
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .service-glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 24px; overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,100,150,0.1), inset 0 1px 0 rgba(255,255,255,0.9);
          transition: all 0.4s ease;
        }
        .service-glass-card:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(0,100,150,0.2), inset 0 1px 0 rgba(255,255,255,0.9); }
        .service-img-wrap { position: relative; overflow: hidden; height: 220px; }
        .service-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .service-glass-card:hover .service-img { transform: scale(1.08); }
        .service-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,30,50,0.4), transparent); }
        .service-body { padding: 1.8rem; }
        .service-header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .service-title { font-size: 1.3rem; font-weight: 700; color: #1a1a1a; font-family: 'Playfair Display', serif; }
        .service-num { font-size: 2.5rem; font-weight: 900; color: #006496; opacity: 0.2; line-height: 1; }
        .service-desc { font-size: 0.9rem; color: #555; line-height: 1.7; margin-bottom: 1rem; }
        .service-list { list-style: none; padding: 0; margin: 0; }
        .service-item { color: #006496; font-size: 0.9rem; margin-bottom: 0.4rem; font-weight: 500; }

        /* Steps Timeline */
        .steps-timeline { display: flex; flex-direction: column; gap: 0; }
        .step-row { display: flex; gap: 2rem; align-items: flex-start; }
        .step-connector { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; padding-top: 1.5rem; }
        .step-circle {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, #006496, #19647d);
          color: #fff; font-size: 1rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 25px rgba(0,100,150,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          border: 2px solid rgba(255,255,255,0.3);
          flex-shrink: 0; z-index: 1;
        }
        .step-line { width: 2px; flex: 1; min-height: 40px; background: linear-gradient(to bottom, rgba(0,100,150,0.3), rgba(0,100,150,0.05)); margin: 0.5rem 0; }
        .step-glass-card {
          flex: 1; margin-bottom: 2rem;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.85);
          border-radius: 20px; padding: 2rem 2.5rem;
          box-shadow: 0 8px 32px rgba(0,100,150,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
          transition: all 0.3s ease;
        }
        .step-glass-card:hover { background: rgba(255,255,255,0.92); transform: translateX(6px); box-shadow: 0 16px 48px rgba(0,100,150,0.15); border-color: rgba(0,100,150,0.2); }
        .step-card-inner { display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; align-items: center; }
        .step-title { font-size: 1.3rem; font-weight: 800; color: #1a1a1a; margin-bottom: 0.6rem; font-family: 'Playfair Display', serif; }
        .step-desc { font-size: 0.95rem; color: #555; line-height: 1.7; margin: 0; }
        .step-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
        .step-item { display: flex; align-items: center; gap: 0.7rem; color: #1a1a1a; font-size: 0.9rem; font-weight: 600; }
        .step-dot { width: 8px; height: 8px; border-radius: 50%; background: #006496; flex-shrink: 0; box-shadow: 0 0 6px rgba(0,100,150,0.5); }

        /* CTA */
        .cta-section {
          padding: 7rem 5%; text-align: center;
          background: linear-gradient(135deg, #001e32 0%, #003050 100%);
          position: relative; overflow: hidden;
        }
        .cta-blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.25; pointer-events: none; }
        .cta-blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, #006496, transparent); top: -150px; right: -100px; }
        .cta-blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, #96c8e1, transparent); bottom: -100px; left: -100px; }
        .cta-glass-card {
          position: relative; z-index: 1;
          max-width: 700px; margin: 0 auto;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 32px; padding: 4rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .cta-title { font-size: clamp(2rem, 4vw, 3.5rem); font-weight: 900; color: #fff; line-height: 1.15; margin-bottom: 2rem; font-family: 'Playfair Display', serif; }

        /* Slick overrides */
        .slick-slider, .slick-list, .slick-track, .slick-slide > div { height: 100vh; }
        .slick-dots { bottom: 30px !important; z-index: 10; }
        .slick-dots li button:before { font-size: 10px; color: rgba(255,255,255,0.5); }
        .slick-dots li.slick-active button:before { color: #96c8e1; opacity: 1; }
        .slick-prev, .slick-next { z-index: 10; width: 44px; height: 44px; }
        .slick-prev { left: 20px; }
        .slick-next { right: 20px; }
        .slick-prev:before, .slick-next:before { font-size: 36px; color: rgba(255,255,255,0.6); }

        @media (max-width: 1024px) {
          .step-card-inner { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
        @media (max-width: 768px) {
          .grid-2, .services-grid { grid-template-columns: 1fr !important; }
          .philosophy-grid { grid-template-columns: 1fr !important; }
          .hero-glass-card { padding: 2rem 1.5rem !important; border-radius: 20px; }
          .cta-glass-card { padding: 2.5rem 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;
