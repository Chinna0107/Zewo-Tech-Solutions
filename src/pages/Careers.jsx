import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const internships = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
    desc: 'Build modern, responsive websites using the latest frontend technologies and frameworks.',
    skills: ['HTML, CSS, JavaScript', 'React.js', 'Responsive Design', 'Git & GitHub'],
    durations: [
      { months: 2, price: 399, label: 'Starter', training: 1, project: 1, perks: ['HTML/CSS/JS Basics', 'React Fundamentals', 'Live Project', 'Certificate'] },
      { months: 3, price: 499, label: 'Professional', training: 2, project: 1, perks: ['Full React Development', 'Responsive Design', '2 Live Projects', 'LinkedIn Recommendation', 'Certificate'] },
      { months: 6, price: 699, label: 'Expert', training: 3, project: 3, perks: ['Advanced React + Vite', 'Performance Optimization', '3 Live Projects', 'Portfolio Review', 'Job Referral', 'Certificate'] },
    ],
  },
  {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    icon: '⚡',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    desc: 'Master both frontend and backend development to build complete web applications end-to-end.',
    skills: ['React + Node.js', 'Express.js + SQL', 'REST APIs', 'Deployment'],
    durations: [
      { months: 2, price: 399, label: 'Starter', training: 1, project: 1, perks: ['React + Node.js Basics', 'REST API Development', 'Live Project', 'Certificate'] },
      { months: 3, price: 499, label: 'Professional', training: 2, project: 1, perks: ['Full Stack App Development', 'SQL Database Design', '2 Live Projects', 'LinkedIn Recommendation', 'Certificate'] },
      { months: 6, price: 699, label: 'Expert', training: 3, project: 3, perks: ['Advanced Full Stack', 'Cloud Deployment', '3 Live Projects', 'Portfolio Review', 'Job Referral', 'Certificate'] },
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: '📱',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    desc: 'Create cross-platform mobile applications for iOS and Android using React Native.',
    skills: ['React Native', 'Expo', 'Mobile UI/UX', 'App Store Deployment'],
    durations: [
      { months: 2, price: 399, label: 'Starter', training: 1, project: 1, perks: ['React Native Basics', 'Expo Setup & Navigation', 'Live App Project', 'Certificate'] },
      { months: 3, price: 499, label: 'Professional', training: 2, project: 1, perks: ['Advanced React Native', 'API Integration', '2 Live App Projects', 'LinkedIn Recommendation', 'Certificate'] },
      { months: 6, price: 699, label: 'Expert', training: 3, project: 3, perks: ['Full App Development', 'App Store Deployment', '3 Live Projects', 'Portfolio Review', 'Job Referral', 'Certificate'] },
    ],
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: '🎨',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    desc: 'Specialize in crafting beautiful, interactive user interfaces with modern CSS and JavaScript.',
    skills: ['React.js + Vite', 'Tailwind CSS', 'Animations', 'Performance Optimization'],
    durations: [
      { months: 2, price: 399, label: 'Starter', training: 1, project: 1, perks: ['React + Vite Basics', 'CSS Animations', 'Live UI Project', 'Certificate'] },
      { months: 3, price: 499, label: 'Professional', training: 2, project: 1, perks: ['Advanced UI Development', 'Tailwind CSS Mastery', '2 Live Projects', 'LinkedIn Recommendation', 'Certificate'] },
      { months: 6, price: 699, label: 'Expert', training: 3, project: 3, perks: ['Performance Optimization', 'Design Systems', '3 Live Projects', 'Portfolio Review', 'Job Referral', 'Certificate'] },
    ],
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    icon: '🛠️',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    desc: 'Build robust server-side applications, APIs, and databases that power modern web apps.',
    skills: ['Node.js + Express', 'SQL & NoSQL', 'Authentication & Security', 'Cloud Deployment'],
    durations: [
      { months: 2, price: 399, label: 'Starter', training: 1, project: 1, perks: ['Node.js + Express Basics', 'SQL Database', 'Live API Project', 'Certificate'] },
      { months: 3, price: 499, label: 'Professional', training: 2, project: 1, perks: ['Advanced API Development', 'Auth & Security', '2 Live Projects', 'LinkedIn Recommendation', 'Certificate'] },
      { months: 6, price: 699, label: 'Expert', training: 3, project: 3, perks: ['Microservices Architecture', 'Cloud Deployment', '3 Live Projects', 'Portfolio Review', 'Job Referral', 'Certificate'] },
    ],
  },
];

const perks = [
  { icon: '🏆', title: 'Certificate', desc: 'Industry-recognized internship completion certificate' },
  { icon: '👨‍💻', title: 'Real Projects', desc: 'Work on live client projects from day one' },
  { icon: '🧑‍🏫', title: 'Mentorship', desc: 'One-on-one guidance from experienced developers' },
  { icon: '💼', title: 'Portfolio', desc: 'Build a strong portfolio to showcase to employers' },
  { icon: '🔗', title: 'LinkedIn', desc: 'LinkedIn recommendation from our founders' },
  { icon: '🚀', title: 'Job Referrals', desc: 'Top performers get direct job referrals' },
];

const buildSchedule = duration => {
  const total = duration.months;
  const trainingMonths = duration.training || 0;
  const projectMonths = duration.project || 0;
  const schedule = [];

  for (let i = 0; i < total; i += 1) {
    if (i < trainingMonths) {
      schedule.push('Training & Skill Building');
    } else if (i < trainingMonths + projectMonths) {
      schedule.push('Live Project & Mentorship');
    } else {
      schedule.push('Portfolio & Placement Prep');
    }
  }

  return schedule;
};

const DetailModal = ({ intern, duration, onClose }) => {
  const schedule = buildSchedule(duration);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-glass" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-icon">{intern.icon}</span>
          <div>
            <p className="modal-track">{intern.title}</p>
            <h3 className="modal-plan">{duration.months} Months</h3>
          </div>
        </div>

        {/* Timeline */}
        <div className="modal-timeline">
          <p className="modal-section-label">Program Structure</p>
          <div className="timeline-row">
            <div className="timeline-block training">
              <p className="tblock-num">{duration.training}</p>
              <p className="tblock-unit">Month{duration.training > 1 ? 's' : ''}</p>
              <p className="tblock-label">Training</p>
            </div>
            <div className="timeline-arrow">→</div>
            <div className="timeline-block project">
              <p className="tblock-num">{duration.project}</p>
              <p className="tblock-unit">Month{duration.project > 1 ? 's' : ''}</p>
              <p className="tblock-label">Live Project{duration.project > 1 ? 's' : ''}</p>
            </div>
            <div className="timeline-arrow">→</div>
            <div className="timeline-block cert">
              <p className="tblock-num">🏆</p>
              <p className="tblock-unit">&nbsp;</p>
              <p className="tblock-label">Certificate</p>
            </div>
          </div>
          <div className="timeline-desc">
            <div className="tdesc-item">
              <span className="tdesc-dot training-dot" />
              <p><strong>{duration.training} Month{duration.training > 1 ? 's' : ''} Training:</strong> Structured learning with daily tasks, code reviews, and mentor sessions covering core concepts.</p>
            </div>
            <div className="tdesc-item">
              <span className="tdesc-dot project-dot" />
              <p><strong>{duration.project} Month{duration.project > 1 ? 's' : ''} Live Project{duration.project > 1 ? 's' : ''}:</strong> Work on real client projects, build your portfolio, and apply everything you've learned.</p>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="modal-schedule">
          <p className="modal-section-label">Schedule (Track + Duration)</p>
          <div className="schedule-grid">
            {schedule.map((item, idx) => (
              <div key={`${duration.label}-${idx}`} className="schedule-item">
                <span className="schedule-month">Month {idx + 1}</span>
                <span className="schedule-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Perks */}
        <div className="modal-perks">
          <p className="modal-section-label">What's Included</p>
          <div className="modal-perks-grid">
            {duration.perks.map(p => (
              <div key={p} className="modal-perk-item">
                <span className="modal-perk-dot" />  {p}
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="modal-apply-btn" onClick={onClose}>Got It!</button>
        </div>
      </div>
    </div>
  );
};


const TrackCard = ({ intern }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(intern.durations[1]);
  const [showDetails, setShowDetails] = useState(false);

  const handleApply = () => {
    navigate(`/internship/register?track=${intern.id}&months=${selected.months}&price=${selected.price}`);
  };

  return (
    <>
      <div className="track-glass-card">
        {/* Image */}
        <div className="track-img-wrap">
          <img src={intern.img} alt={intern.title} className="track-img" />
          <div className="track-img-overlay" />
          <div className="track-img-badge">{intern.icon} {intern.title}</div>
        </div>

        {/* Body */}
        <div className="track-body">
          <p className="track-desc">{intern.desc}</p>
          <div className="track-skills">
            {intern.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
          </div>

        {/* Desktop: 3 enhanced plan cards */}
        <div className="track-durations desktop-durations">
          {intern.durations.map((d, idx) => (
            <button
              key={d.months}
              onClick={() => navigate(`/internship/register?track=${intern.id}&months=${d.months}&price=${d.price}`)}
              className={`duration-card${idx === 1 ? ' duration-card-featured' : ''}`}
            >
              {idx === 1 && <span className="duration-popular-badge">Most Popular</span>}
              <p className="duration-label">{d.label}</p>
              <p className="duration-months">{d.months} <span>months</span></p>
              <p className="duration-price">₹{d.price.toLocaleString()}</p>
              <span className="duration-apply">Apply Now →</span>
            </button>
          ))}
        </div>

        {/* Desktop: dropdown + actions */}
        <div className="desktop-duration-wrap">
          <p className="desktop-duration-label">Choose Duration</p>
          <div className="desktop-duration-controls">
            <select
              className="desktop-duration-select"
              value={`${selected.months}-${selected.price}`}
              onChange={e => {
                const [months] = e.target.value.split('-');
                setSelected(intern.durations.find(d => d.months === parseInt(months)));
              }}
            >
              {intern.durations.map(d => (
                <option key={d.months} value={`${d.months}-${d.price}`}>
                  {d.label} — {d.months} Months — ₹{d.price.toLocaleString()}
                </option>
              ))}
            </select>
            <div className="desktop-selected-info">
              <span className="desktop-price">₹{selected.price.toLocaleString()}</span>
              <span className="desktop-months">{selected.months} Months</span>
            </div>
          </div>
          <div className="desktop-action-row">
            <button className="desktop-apply-btn" onClick={handleApply}>
              Apply Now →
            </button>
            <button className="desktop-details-btn" onClick={() => setShowDetails(true)}>
              View Details
            </button>
          </div>
        </div>

        {/* Mobile: dropdown + apply button */}
        <div className="mobile-duration-wrap">
          <p className="mobile-duration-label">Select Duration & Plan</p>
            <select
              className="mobile-duration-select"
              value={`${selected.months}-${selected.price}`}
              onChange={e => {
                const [months, price] = e.target.value.split('-');
                setSelected(intern.durations.find(d => d.months === parseInt(months)));
              }}
            >
              {intern.durations.map(d => (
                <option key={d.months} value={`${d.months}-${d.price}`}>
                  {d.label} — {d.months} Months — ₹{d.price.toLocaleString()}
                </option>
              ))}
            </select>
            <div className="mobile-selected-info">
              <span className="mobile-price">₹{selected.price.toLocaleString()}</span>
              <span className="mobile-months">{selected.months} Months</span>
            </div>
            <button className="mobile-apply-btn" onClick={handleApply}>
              Apply Now →
            </button>
            <button className="mobile-details-btn" onClick={() => setShowDetails(true)}>
              View Details
            </button>
          </div>
        </div>
      </div>
      {showDetails && (
        <DetailModal
          intern={intern}
          duration={selected}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

const VerifyCertificate = () => {
  const [certId, setCertId] = useState('');
  const [status, setStatus] = useState(null); // null | 'valid' | 'invalid' | 'loading'

  const handleVerify = () => {
    if (!certId.trim()) return;
    setStatus('loading');
    setTimeout(() => {
      // Demo: IDs starting with 'ZW' are "valid"
      setStatus(certId.trim().toUpperCase().startsWith('ZW') ? 'valid' : 'invalid');
    }, 1200);
  };

  return (
    <section className="c-section verify-section">
      <div className="verify-blob-1" />
      <div className="verify-blob-2" />
      <div className="c-container" style={{ position: 'relative', zIndex: 1 }}>
        <p className="c-label" style={{ color: '#96c8e1' }}>Authenticity Check</p>
        <h2 className="c-title" style={{ color: '#fff' }}>Verify Your Certificate</h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', textAlign: 'center', maxWidth: 560, margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.8 }}>
          Enter your certificate ID to instantly verify the authenticity of your Zewo internship certificate.
        </p>
        <div className="verify-card">
          <div className="verify-card-left">
            <div className="verify-cert-icon">🏆</div>
            <h3 className="verify-card-title">Certificate Verification</h3>
            <p className="verify-card-sub">All Zewo certificates are uniquely identified and tamper-proof. Share your certificate ID with employers to confirm authenticity.</p>
            <div className="verify-features">
              {['Instant verification', 'Tamper-proof IDs', 'Employer-trusted', 'Lifetime validity'].map(f => (
                <span key={f} className="verify-feature-tag">✓ {f}</span>
              ))}
            </div>
          </div>
          <div className="verify-card-right">
            <label className="verify-input-label">Certificate ID</label>
            <div className="verify-input-row">
              <input
                className="verify-input"
                placeholder="e.g. ZW-2024-WD-00123"
                value={certId}
                onChange={e => { setCertId(e.target.value); setStatus(null); }}
                onKeyDown={e => e.key === 'Enter' && handleVerify()}
              />
              <button className="verify-btn" onClick={handleVerify} disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Verify'}
              </button>
            </div>
            {status === 'valid' && (
              <div className="verify-result verify-valid">
                <span className="verify-result-icon">✅</span>
                <div>
                  <p className="verify-result-title">Certificate Verified!</p>
                  <p className="verify-result-sub">This is an authentic Zewo internship certificate.</p>
                </div>
              </div>
            )}
            {status === 'invalid' && (
              <div className="verify-result verify-invalid">
                <span className="verify-result-icon">❌</span>
                <div>
                  <p className="verify-result-title">Not Found</p>
                  <p className="verify-result-sub">No certificate found with this ID. Please check and try again.</p>
                </div>
              </div>
            )}
            <p className="verify-hint">Certificate IDs are printed on your certificate document (format: ZW-YYYY-XX-XXXXX)</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const Careers = () => {
  return (
    <div className="careers-page page-enter">
      <div className="c-blob c-blob-1" />
      <div className="c-blob c-blob-2" />
      <div className="c-blob c-blob-3" />

      {/* Hero */}
      <div className="careers-hero">
        <div className="careers-hero-inner fade-in-up">
          <span className="c-badge">Now Accepting Applications</span>
          <h1 className="careers-title">Launch Your Tech Career<br />with <span>Zewo</span></h1>
          <p className="careers-sub">Gain real-world experience, build industry-ready skills, and kickstart your career with hands-on internships at Zewo Tech Solutions.</p>
          <div className="hero-stats">
            <div className="hero-stat-item"><p className="stat-num">5+</p><p className="stat-label">Tracks</p></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item"><p className="stat-num">3</p><p className="stat-label">Durations</p></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item"><p className="stat-num">100%</p><p className="stat-label">Practical</p></div>
          </div>
        </div>
      </div>

      {/* Tracks */}
      <section className="c-section c-section-teal">
        <div className="c-container">
          <p className="c-label">Open Positions</p>
          <h2 className="c-title">Internship Tracks</h2>
          <p className="c-sub">Choose your specialization and duration. All tracks include mentorship, real projects, and a certificate.</p>
          <div className="tracks-grid">
            {internships.map(intern => <TrackCard key={intern.id} intern={intern} />)}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="c-section c-section-light">
        <div className="c-container">
          <p className="c-label">Why Intern With Us</p>
          <h2 className="c-title">What You'll Gain</h2>
          <div className="perks-grid">
            {perks.map((p, i) => (
              <div key={i} className="perk-glass-card">
                <div className="perk-icon">{p.icon}</div>
                <h3 className="perk-title">{p.title}</h3>
                <p className="perk-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verify Certificate */}
      <VerifyCertificate />

      {/* CTA */}
      <section className="c-section c-cta-section">
        <div className="c-cta-blob-1" /><div className="c-cta-blob-2" />
        <div className="c-cta-glass fade-in-up">
          <p className="c-label" style={{ color: '#96c8e1' }}>Still have questions?</p>
          <h2 className="c-title" style={{ color: '#fff' }}>Ready to Start Your Journey?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '1.05rem' }}>Reach out to us on WhatsApp for any queries about our internship programs.</p>
          <a href="https://wa.me/918179860935?text=Hi, I'm interested in the internship program at Zewo Tech Solutions." target="_blank" rel="noopener noreferrer" className="c-btn-primary">Chat on WhatsApp</a>
        </div>
      </section>

      <style>{`
        .careers-page { min-height: 100vh; background: linear-gradient(135deg, #e1fafa 0%, #f0f8ff 50%, #e8f4fd 100%); position: relative; overflow: hidden; }
        .c-blob { position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.3; pointer-events: none; }
        .c-blob-1 { width: 600px; height: 600px; background: radial-gradient(circle, #006496, transparent); top: -150px; right: -150px; }
        .c-blob-2 { width: 500px; height: 500px; background: radial-gradient(circle, #96c8e1, transparent); top: 40%; left: -150px; }
        .c-blob-3 { width: 400px; height: 400px; background: radial-gradient(circle, #19647d, transparent); bottom: 10%; right: 10%; }

        .careers-hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 160px 5% 5rem; position: relative; z-index: 1; text-align: center; }
        .careers-hero-inner { max-width: 800px; background: rgba(255,255,255,0.55); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px); border: 1px solid rgba(255,255,255,0.8); border-radius: 32px; padding: 4rem; box-shadow: 0 20px 60px rgba(0,100,150,0.12), inset 0 1px 0 rgba(255,255,255,0.9); }
        .c-badge { display: inline-block; background: linear-gradient(135deg, #006496, #19647d); color: #fff; padding: 0.5rem 1.5rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 1.5rem; box-shadow: 0 4px 15px rgba(0,100,150,0.3); }
        .careers-title { font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 900; color: #1a1a1a; line-height: 1.1; margin-bottom: 1.5rem; font-family: 'Playfair Display', serif; }
        .careers-title span { color: #006496; }
        .careers-sub { font-size: 1.1rem; color: #555; line-height: 1.8; margin-bottom: 2.5rem; }
        .hero-stats { display: flex; justify-content: center; align-items: center; gap: 2rem; }
        .hero-stat-item { text-align: center; }
        .stat-num { font-size: 2.2rem; font-weight: 900; color: #006496; margin: 0; line-height: 1; }
        .stat-label { font-size: 0.8rem; color: #888; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0.3rem 0 0; }
        .hero-stat-divider { width: 1px; height: 40px; background: rgba(0,100,150,0.2); }

        .c-section { padding: 5rem 5%; position: relative; z-index: 1; }
        .c-section-light { background: rgba(255,255,255,0.5); backdrop-filter: blur(10px); }
        .c-section-teal { background: linear-gradient(135deg, rgba(0,100,150,0.05), rgba(150,200,225,0.1)); }
        .c-container { max-width: 1300px; margin: 0 auto; }
        .c-label { color: #006496; font-size: 0.8rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 0.8rem; display: block; text-align: center; }
        .c-title { font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; color: #1a1a1a; margin-bottom: 1rem; text-align: center; font-family: 'Playfair Display', serif; }
        .c-sub { font-size: 1.05rem; color: #555; text-align: center; max-width: 650px; margin: 0 auto 3rem; line-height: 1.8; }

        /* Perks */
        .perks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 3rem; }
        .perk-glass-card { padding: 2rem; text-align: center; background: rgba(255,255,255,0.7); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.85); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,100,150,0.08), inset 0 1px 0 rgba(255,255,255,0.9); transition: all 0.3s ease; }
        .perk-glass-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,100,150,0.15); border-color: rgba(0,100,150,0.2); }
        .perk-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .perk-title { font-size: 1.1rem; font-weight: 700; color: #1a1a1a; margin-bottom: 0.5rem; }
        .perk-desc { font-size: 0.9rem; color: #666; line-height: 1.6; margin: 0; }

        /* Tracks */
        .tracks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-top: 3rem; }
        .track-glass-card { background: rgba(255,255,255,0.65); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(255,255,255,0.85); border-radius: 24px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,100,150,0.1), inset 0 1px 0 rgba(255,255,255,0.9); transition: all 0.3s ease; }
        .track-glass-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,100,150,0.18); border-color: rgba(0,100,150,0.25); }

        /* Track image */
        .track-img-wrap { position: relative; height: 200px; overflow: hidden; }
        .track-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .track-glass-card:hover .track-img { transform: scale(1.06); }
        .track-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,20,40,0.7) 0%, rgba(0,20,40,0.1) 60%, transparent 100%); }
        .track-img-badge { position: absolute; bottom: 1rem; left: 1.2rem; color: #fff; font-size: 1.1rem; font-weight: 800; font-family: 'Playfair Display', serif; text-shadow: 0 2px 8px rgba(0,0,0,0.5); }

        .track-body { padding: 1.8rem; }
        .track-desc { font-size: 0.95rem; color: #555; line-height: 1.7; margin-bottom: 1.2rem; }
        .track-skills { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .skill-tag { padding: 0.35rem 0.9rem; background: rgba(0,100,150,0.08); border: 1px solid rgba(0,100,150,0.2); color: #006496; border-radius: 50px; font-size: 0.8rem; font-weight: 600; }

        /* Desktop durations */
        .desktop-durations { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; margin-bottom: 1rem; }
        .duration-card { padding: 1.4rem 1rem; text-align: center; background: rgba(255,255,255,0.7); border: 1.5px solid rgba(0,100,150,0.15); border-radius: 18px; transition: all 0.3s ease; display: flex; flex-direction: column; gap: 0.4rem; cursor: pointer; position: relative; overflow: hidden; box-shadow: 0 4px 16px rgba(0,100,150,0.07); }
        .duration-card-featured { background: linear-gradient(145deg, rgba(0,100,150,0.08), rgba(150,200,225,0.15)); border-color: rgba(0,100,150,0.35); box-shadow: 0 8px 28px rgba(0,100,150,0.18); }
        .duration-popular-badge { position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #006496, #19647d); color: #fff; font-size: 0.62rem; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; padding: 0.25rem 0.9rem; border-radius: 0 0 10px 10px; white-space: nowrap; }
        .duration-card:hover { background: linear-gradient(135deg, #006496, #19647d); border-color: #006496; transform: translateY(-5px); box-shadow: 0 14px 36px rgba(0,100,150,0.4); }
        .duration-card:hover .duration-label, .duration-card:hover .duration-months, .duration-card:hover .duration-months span, .duration-card:hover .duration-price, .duration-card:hover .duration-apply, .duration-card:hover .duration-perk-dot { color: rgba(255,255,255,0.9) !important; }
        .duration-card:hover .duration-popular-badge { background: rgba(255,255,255,0.25); }
        .duration-label { font-size: 0.7rem; font-weight: 700; color: #006496; text-transform: uppercase; letter-spacing: 1px; margin: 0.8rem 0 0; }
        .duration-months { font-size: 1.8rem; font-weight: 900; color: #1a1a1a; margin: 0; line-height: 1; }
        .duration-months span { font-size: 0.7rem; font-weight: 600; color: #888; }
        .duration-price { font-size: 1rem; font-weight: 800; color: #006496; margin: 0; }
        .duration-perks-preview { display: flex; flex-direction: column; gap: 0.25rem; margin: 0.4rem 0; text-align: left; }
        .duration-perk-dot { font-size: 0.72rem; color: #3a7a96; font-weight: 600; line-height: 1.4; }
        .duration-apply { font-size: 0.8rem; font-weight: 700; color: #006496; margin: 0.3rem 0 0; padding: 0.4rem 0; border-top: 1px solid rgba(0,100,150,0.12); }

        .desktop-duration-wrap { margin-top: 1.5rem; padding: 1.2rem; border-radius: 18px; background: rgba(255,255,255,0.75); border: 1px solid rgba(0,100,150,0.15); box-shadow: inset 0 1px 0 rgba(255,255,255,0.9); }
        .desktop-duration-label { font-size: 0.85rem; font-weight: 700; color: #19647d; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 0.7rem; }
        .desktop-duration-controls { display: flex; align-items: center; gap: 1rem; }
        .desktop-duration-select { flex: 1; padding: 0.8rem 1rem; border-radius: 14px; border: 1px solid rgba(0,100,150,0.2); background: #fff; font-size: 0.95rem; color: #1a1a1a; outline: none; }
        .desktop-selected-info { display: flex; flex-direction: column; gap: 0.2rem; align-items: flex-end; min-width: 120px; }
        .desktop-price { font-size: 1.1rem; font-weight: 800; color: #006496; }
        .desktop-months { font-size: 0.85rem; color: #6b8597; font-weight: 600; }
        .desktop-action-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-top: 1rem; }
        .desktop-apply-btn { padding: 0.9rem; background: linear-gradient(135deg, #006496, #19647d); color: #fff; border: none; border-radius: 50px; font-size: 0.95rem; font-weight: 700; cursor: pointer; box-shadow: 0 8px 25px rgba(0,100,150,0.4); transition: all 0.3s ease; }
        .desktop-apply-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 35px rgba(0,100,150,0.55); }
        .desktop-details-btn { padding: 0.9rem; background: transparent; color: #006496; border: 2px solid rgba(0,100,150,0.3); border-radius: 50px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: all 0.3s ease; }
        .desktop-details-btn:hover { background: rgba(0,100,150,0.08); border-color: rgba(0,100,150,0.5); transform: translateY(-1px); }

        /* Mobile dropdown */
        .mobile-duration-wrap { display: none; flex-direction: column; gap: 0.8rem; }
        .mobile-duration-label { font-size: 0.8rem; font-weight: 700; color: #006496; text-transform: uppercase; letter-spacing: 1px; margin: 0; }
        .mobile-duration-select { width: 100%; padding: 0.9rem 1rem; background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1.5px solid rgba(0,100,150,0.2); border-radius: 12px; font-size: 0.95rem; font-family: 'Poppins', sans-serif; color: #1a1a1a; outline: none; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23006496' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; }
        .mobile-selected-info { display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 1rem; background: rgba(0,100,150,0.06); border: 1px solid rgba(0,100,150,0.15); border-radius: 12px; }
        .mobile-price { font-size: 1.4rem; font-weight: 900; color: #006496; }
        .mobile-months { font-size: 0.85rem; font-weight: 600; color: #888; }
        .mobile-apply-btn { width: 100%; padding: 1rem; background: linear-gradient(135deg, #006496, #19647d); color: #fff; border: none; border-radius: 50px; font-size: 1rem; font-weight: 700; cursor: pointer; box-shadow: 0 8px 25px rgba(0,100,150,0.4); transition: all 0.3s ease; }
        .mobile-apply-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 35px rgba(0,100,150,0.55); }
        .mobile-details-btn { width: 100%; padding: 0.9rem; background: transparent; color: #006496; border: 2px solid rgba(0,100,150,0.3); border-radius: 50px; font-size: 0.95rem; font-weight: 700; cursor: pointer; margin-top: 0.6rem; transition: all 0.3s ease; }
        .mobile-details-btn:hover { background: rgba(0,100,150,0.08); border-color: rgba(0,100,150,0.5); transform: translateY(-1px); }

        /* Detail modal premium glass */
        .modal-backdrop { position: fixed; inset: 0; background: rgba(5, 20, 32, 0.45); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; padding: 2rem; z-index: 9999; padding-top: 9rem; }
        .modal-glass { width: min(900px, 92vw); max-height: 90vh; overflow: auto; background: linear-gradient(145deg, rgba(255,255,255,0.7), rgba(240,250,255,0.55)); border: 1px solid rgba(255,255,255,0.7); border-radius: 28px; box-shadow: 0 30px 80px rgba(0, 30, 60, 0.35), inset 0 1px 0 rgba(255,255,255,0.9); padding: 4.2rem 3.4rem 3.4rem; position: relative; }
        .modal-glass::before { content: ''; position: absolute; inset: 0; border-radius: 28px; background: radial-gradient(circle at top right, rgba(0,100,150,0.18), transparent 50%), radial-gradient(circle at bottom left, rgba(150,200,225,0.22), transparent 55%); pointer-events: none; }
        .modal-close { position: absolute; top: 1.2rem; right: 1.2rem; width: 38px; height: 38px; border-radius: 50%; border: 1px solid rgba(0,100,150,0.2); background: rgba(255,255,255,0.85); color: #0c405d; font-weight: 700; cursor: pointer; box-shadow: 0 6px 18px rgba(0,100,150,0.18); }
        .modal-header { display: flex; align-items: center; gap: 1rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(0,100,150,0.12); position: relative; z-index: 1; margin-top: 1.4rem; }
        .modal-icon { width: 56px; height: 56px; display: grid; place-items: center; border-radius: 16px; background: linear-gradient(135deg, rgba(0,100,150,0.2), rgba(150,200,225,0.35)); font-size: 1.6rem; box-shadow: inset 0 1px 0 rgba(255,255,255,0.9); }
        .modal-track { margin: 0; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; color: #3a6b80; font-weight: 700; }
        .modal-plan { margin: 0.2rem 0 0; font-size: 1.6rem; font-weight: 900; color: #10384d; }
        .modal-section-label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: #3b6d85; font-weight: 700; margin-bottom: 0.8rem; }
        .modal-timeline { margin-top: 1.6rem; padding: 1.6rem; border-radius: 20px; background: rgba(255,255,255,0.65); border: 1px solid rgba(0,100,150,0.12); }
        .timeline-row { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 0.6rem; }
        .timeline-block { padding: 0.8rem; border-radius: 14px; background: rgba(255,255,255,0.9); border: 1px solid rgba(0,100,150,0.12); text-align: center; }
        .timeline-arrow { color: #3b6d85; font-weight: 800; }
        .tblock-num { font-size: 1.4rem; font-weight: 900; margin: 0; color: #0e4d6a; }
        .tblock-unit { margin: 0.1rem 0 0; font-size: 0.75rem; color: #6a8a9a; }
        .tblock-label { margin: 0.2rem 0 0; font-size: 0.85rem; font-weight: 700; color: #21566f; }
        .timeline-desc { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin-top: 1rem; }
        .tdesc-item { padding: 0.9rem; border-radius: 14px; background: rgba(0,100,150,0.04); border: 1px solid rgba(0,100,150,0.1); font-size: 0.9rem; color: #3a4f5a; }
        .modal-schedule { margin-top: 1.5rem; padding: 1.4rem; border-radius: 20px; background: rgba(255,255,255,0.65); border: 1px solid rgba(0,100,150,0.12); }
        .schedule-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; }
        .schedule-item { padding: 1rem; border-radius: 16px; background: rgba(255,255,255,0.85); border: 1px solid rgba(0,100,150,0.12); box-shadow: inset 0 1px 0 rgba(255,255,255,0.9); display: flex; flex-direction: column; gap: 0.4rem; }
        .schedule-month { font-size: 0.75rem; font-weight: 800; color: #2b667e; text-transform: uppercase; letter-spacing: 1.6px; }
        .schedule-text { font-size: 0.92rem; color: #2a3f4b; font-weight: 600; }
        .modal-perks { margin-top: 1.6rem; padding: 1.4rem; border-radius: 20px; background: rgba(255,255,255,0.65); border: 1px solid rgba(0,100,150,0.12); }
        .modal-perks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.8rem; }
        .modal-perk-item { padding: 0.75rem 0.9rem; border-radius: 14px; background: rgba(255,255,255,0.8); border: 1px solid rgba(0,100,150,0.1); font-size: 0.9rem; color: #2e4b5b; font-weight: 600; }
        .modal-footer { margin-top: 1.6rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1rem; border-top: 1px solid rgba(0,100,150,0.12); }
        .modal-price { font-size: 1.4rem; font-weight: 900; color: #0b4b68; margin: 0; }
        .modal-apply-btn { padding: 0.85rem 2rem; border-radius: 999px; border: none; background: linear-gradient(135deg, #006496, #19647d); color: #fff; font-weight: 700; cursor: pointer; box-shadow: 0 10px 28px rgba(0,100,150,0.4); }

        /* Verify Certificate */
        .verify-section { background: linear-gradient(135deg, #001e32 0%, #002a45 100%); position: relative; overflow: hidden; }
        .verify-blob-1 { position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, #006496, transparent); filter: blur(90px); opacity: 0.2; top: -150px; left: -100px; pointer-events: none; }
        .verify-blob-2 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, #96c8e1, transparent); filter: blur(80px); opacity: 0.15; bottom: -100px; right: -80px; pointer-events: none; }
        .verify-card { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 28px; padding: 3rem; box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08); }
        .verify-cert-icon { font-size: 3rem; margin-bottom: 1rem; }
        .verify-card-title { font-size: 1.5rem; font-weight: 800; color: #fff; margin: 0 0 0.8rem; font-family: 'Playfair Display', serif; }
        .verify-card-sub { font-size: 0.95rem; color: rgba(255,255,255,0.6); line-height: 1.8; margin: 0 0 1.5rem; }
        .verify-features { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .verify-feature-tag { padding: 0.35rem 0.9rem; background: rgba(0,100,150,0.25); border: 1px solid rgba(0,100,150,0.4); color: #96c8e1; border-radius: 50px; font-size: 0.8rem; font-weight: 600; }
        .verify-card-right { display: flex; flex-direction: column; justify-content: center; }
        .verify-input-label { font-size: 0.85rem; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 1px; }
        .verify-input-row { display: flex; gap: 0.8rem; }
        .verify-input { flex: 1; padding: 0.9rem 1.2rem; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 14px; color: #fff; font-size: 0.95rem; font-family: 'Poppins', sans-serif; outline: none; transition: all 0.3s ease; }
        .verify-input::placeholder { color: rgba(255,255,255,0.35); }
        .verify-input:focus { border-color: #006496; background: rgba(0,100,150,0.15); box-shadow: 0 0 0 3px rgba(0,100,150,0.2); }
        .verify-btn { padding: 0.9rem 1.8rem; background: linear-gradient(135deg, #006496, #19647d); color: #fff; border: none; border-radius: 14px; font-size: 0.95rem; font-weight: 700; cursor: pointer; white-space: nowrap; box-shadow: 0 6px 20px rgba(0,100,150,0.4); transition: all 0.3s ease; }
        .verify-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,100,150,0.55); }
        .verify-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .verify-result { display: flex; align-items: flex-start; gap: 1rem; margin-top: 1.2rem; padding: 1rem 1.2rem; border-radius: 14px; }
        .verify-valid { background: rgba(0,200,100,0.1); border: 1px solid rgba(0,200,100,0.3); }
        .verify-invalid { background: rgba(220,50,50,0.1); border: 1px solid rgba(220,50,50,0.3); }
        .verify-result-icon { font-size: 1.4rem; flex-shrink: 0; }
        .verify-result-title { font-size: 0.95rem; font-weight: 700; color: #fff; margin: 0 0 0.2rem; }
        .verify-result-sub { font-size: 0.85rem; color: rgba(255,255,255,0.6); margin: 0; }
        .verify-hint { font-size: 0.78rem; color: rgba(255,255,255,0.35); margin-top: 1rem; line-height: 1.6; }

        /* CTA */
        .c-cta-section { padding: 6rem 5%; text-align: center; background: linear-gradient(135deg, #001e32 0%, #003050 100%); position: relative; overflow: hidden; }
        .c-cta-blob-1 { position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, #006496, transparent); filter: blur(80px); opacity: 0.25; top: -150px; right: -100px; pointer-events: none; }
        .c-cta-blob-2 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, #96c8e1, transparent); filter: blur(80px); opacity: 0.2; bottom: -100px; left: -100px; pointer-events: none; }
        .c-cta-glass { position: relative; z-index: 1; max-width: 650px; margin: 0 auto; background: rgba(255,255,255,0.07); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.12); border-radius: 32px; padding: 4rem; box-shadow: 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1); }
        .c-btn-primary { display: inline-block; padding: 1rem 3rem; background: linear-gradient(135deg, #006496, #19647d); color: #fff; border-radius: 50px; font-weight: 700; font-size: 1rem; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; box-shadow: 0 8px 25px rgba(0,100,150,0.5), inset 0 1px 0 rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.15); transition: all 0.3s ease; }
        .c-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(0,100,150,0.65); }

        @media (min-width: 1200px) {
          .tracks-grid { grid-template-columns: repeat(3, 1fr); gap: 2.2rem; }
          .track-img-wrap { height: 220px; }
          .track-body { padding: 1.6rem; }
        }

        @media (max-width: 968px) {
          .tracks-grid { grid-template-columns: 1fr !important; }
          .perks-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .careers-hero-inner { padding: 2.5rem 2rem !important; }
          .desktop-duration-wrap { display: none; }
          .verify-card { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 640px) {
          .perks-grid { grid-template-columns: 1fr !important; }
          .desktop-durations { display: none !important; }
          .mobile-duration-wrap { display: flex !important; }
          .schedule-grid { grid-template-columns: 1fr !important; }
          .modal-glass { padding: 2.8rem 2.3rem 2.3rem; }
          .timeline-row { grid-template-columns: 1fr; gap: 0.6rem; }
          .timeline-arrow { display: none; }
          .timeline-desc { grid-template-columns: 1fr; }
          .modal-perks-grid { grid-template-columns: 1fr; }
          .modal-footer { flex-direction: column; align-items: stretch; }
          .hero-stats { gap: 1rem !important; }
          .c-cta-glass { padding: 2.5rem 1.5rem !important; }
          .track-img-wrap { height: 160px !important; }
          .verify-card { padding: 2rem 1.5rem !important; }
          .verify-input-row { flex-direction: column; }
        }
      `}</style>
    </div>
  );
};

export default Careers;
