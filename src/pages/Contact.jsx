import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: 'Web Development', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*New Project Inquiry*%0A%0A*Client Name:* ${formData.name}%0A*Contact Number:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918179860935?text=${msg}`, '_blank');
  };

  return (
    <div className="contact-page page-enter">

      {/* Background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="contact-wrapper">

        {/* Left */}
        <div className="contact-left fade-in-left">
          <span className="badge">Get In Touch</span>
          <h1 className="contact-title">Let's Build the<br /><span>Impossible.</span></h1>
          <p className="contact-sub">Whether it's a web application or a full-stack solution, Zewo Tech Solutions is ready to bring your vision to life with technical excellence.</p>

          <div className="info-cards">
            <div className="glass-card info-card">
              <div className="info-icon">📍</div>
              <div>
                <p className="info-label">Office Location</p>
                <p className="info-value">BTM Layout Stage One, Bengaluru, Karnataka - 560068, India</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="info-link">Get Directions →</a>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon">📞</div>
              <div>
                <p className="info-label">Direct Connect</p>
                <p className="info-value">+91 8179860935</p>
                <p className="info-value">+91 9177067341</p>
                <p className="info-value" style={{ marginBottom: '1rem' }}>+91 6281487199</p>
                <a href="tel:+918179860935" className="glass-btn-sm">Call Now</a>
              </div>
            </div>

            <div className="glass-card info-card whatsapp-card">
              <div className="info-icon">💬</div>
              <div>
                <p className="info-label" style={{ color: '#25D366' }}>WhatsApp</p>
                <p className="info-value">+91 8179860935</p>
                <a href="https://wa.me/918179860935" target="_blank" rel="noopener noreferrer" className="glass-btn-sm wa-btn">Start Chat</a>
              </div>
            </div>

            <div className="glass-card info-card">
              <div className="info-icon">🕐</div>
              <div>
                <p className="info-label">Working Hours</p>
                <p className="info-value">Mon – Sat: 09:00 AM – 06:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="glass-form-wrap fade-in-right">
          <h2 className="form-title">Project Inquiry</h2>
          <p className="form-sub">Tell us about your project requirements.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            {[
              { label: 'Client Name', key: 'name', type: 'text', placeholder: 'e.g. Varun Tej' },
              { label: 'Contact Number', key: 'phone', type: 'tel', placeholder: '+91 81216 66611' },
              { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} className="form-group">
                <label className="form-label">{label}</label>
                <input type={type} placeholder={placeholder} value={formData[key]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="glass-input" required />
              </div>
            ))}

            <div className="form-group">
              <label className="form-label">Scope of Service</label>
              <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="glass-input">
                <option>Web Development</option>
                <option>Full Stack Development</option>
                <option>Logo Design</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea placeholder="Describe the scale and vision of your project..." value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="4" className="glass-input" required />
            </div>

            <button type="submit" className="submit-btn">Send via WhatsApp ↗</button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-page {
          min-height: 100vh;
          padding-top: 100px;
          background: linear-gradient(135deg, #e1fafa 0%, #f0f8ff 40%, #e8f4fd 100%);
          position: relative; overflow: hidden;
        }
        .blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.35; pointer-events: none;
        }
        .blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, #006496, transparent); top: -100px; right: -100px; }
        .blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, #96c8e1, transparent); bottom: 100px; left: -100px; }
        .blob-3 { width: 300px; height: 300px; background: radial-gradient(circle, #19647d, transparent); top: 50%; left: 40%; }

        .contact-wrapper {
          max-width: 1300px; margin: 0 auto;
          padding: 3rem 5% 5rem;
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;
          position: relative; z-index: 1;
        }

        .badge {
          display: inline-block;
          background: rgba(0,100,150,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0,100,150,0.25);
          color: #006496; padding: 0.5rem 1.5rem;
          border-radius: 50px; font-size: 0.8rem;
          font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 1.5rem;
        }
        .contact-title {
          font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 900;
          color: #1a1a1a; line-height: 1.1; margin-bottom: 1.2rem;
        }
        .contact-title span { color: #006496; }
        .contact-sub { font-size: 1rem; color: #555; line-height: 1.8; margin-bottom: 2.5rem; }

        .info-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }

        .glass-card {
          background: rgba(255,255,255,0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow: 0 8px 32px rgba(0,100,150,0.1), inset 0 1px 0 rgba(255,255,255,0.8);
          border-radius: 20px;
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,100,150,0.18), inset 0 1px 0 rgba(255,255,255,0.9);
          border-color: rgba(0,100,150,0.2);
        }
        .info-card { padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start; }
        .info-icon { font-size: 1.5rem; flex-shrink: 0; }
        .info-label { font-size: 0.75rem; font-weight: 700; color: #006496; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 0.5rem; }
        .info-value { font-size: 0.9rem; color: #333; font-weight: 500; margin-bottom: 0.3rem; line-height: 1.6; }
        .info-link { color: #006496; font-size: 0.85rem; font-weight: 700; text-decoration: none; transition: gap 0.3s; }
        .info-link:hover { text-decoration: underline; }

        .glass-btn-sm {
          display: inline-block; padding: 0.5rem 1.4rem;
          background: linear-gradient(135deg, #006496, #19647d);
          color: #fff; border-radius: 50px; font-size: 0.8rem;
          font-weight: 700; text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,100,150,0.3);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        .glass-btn-sm:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,100,150,0.5); }
        .wa-btn { background: linear-gradient(135deg, #25D366, #20BA5A); box-shadow: 0 4px 15px rgba(37,211,102,0.3); }
        .wa-btn:hover { box-shadow: 0 8px 20px rgba(37,211,102,0.5); }

        /* Form */
        .glass-form-wrap {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 20px 60px rgba(0,100,150,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
          border-radius: 28px; padding: 3rem;
          position: sticky; top: 120px;
        }
        .form-title { font-size: 1.8rem; font-weight: 900; color: #1a1a1a; margin-bottom: 0.4rem; }
        .form-sub { color: #666; font-size: 0.9rem; margin-bottom: 2rem; }
        .form-group { margin-bottom: 1.4rem; }
        .form-label { display: block; color: #1a1a1a; font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; }
        .glass-input {
          width: 100%; padding: 0.85rem 1.1rem;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(0,100,150,0.15);
          border-radius: 12px; font-size: 0.95rem;
          font-family: 'Poppins', sans-serif;
          color: #1a1a1a; outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          box-shadow: inset 0 2px 8px rgba(0,100,150,0.05);
        }
        .glass-input:focus {
          border-color: #006496;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 0 0 3px rgba(0,100,150,0.1), inset 0 2px 8px rgba(0,100,150,0.05);
        }
        textarea.glass-input { resize: vertical; min-height: 110px; }

        .submit-btn {
          width: 100%; padding: 1rem;
          background: linear-gradient(135deg, #006496 0%, #19647d 100%);
          color: #fff; border: none; border-radius: 50px;
          font-size: 1rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 2px;
          cursor: pointer;
          box-shadow: 0 8px 30px rgba(0,100,150,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(0,100,150,0.55), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        @media (max-width: 968px) {
          .contact-wrapper { grid-template-columns: 1fr !important; gap: 2.5rem; }
          .glass-form-wrap { position: relative !important; top: 0 !important; order: -1; }
          .info-cards { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .glass-form-wrap { padding: 2rem 1.5rem !important; }
          .contact-wrapper { padding: 2rem 5% 4rem; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
