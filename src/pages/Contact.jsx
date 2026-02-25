import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Architectural Planning',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Project Inquiry*%0A%0A*Client Name:* ${formData.name}%0A*Contact Number:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918179860935?text=${message}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%)', paddingTop: '100px', width: '100vw', margin: 0, padding: '100px 0 0 0', boxSizing: 'border-box', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }} className="page-enter">
      {/* Main Container */}
      <div style={{ padding: '4rem 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', maxWidth: '100%', margin: '0 auto' }} className="contact-container">
        
        {/* Left Side - Content */}
        <div style={{ paddingRight: '2rem' }} className="contact-content fade-in-left">
          <div style={{ display: 'inline-block', backgroundColor: '#c1a96c', color: '#fff', padding: '0.5rem 1.5rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Concierge</div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', margin: '0 0 1.5rem', lineHeight: '1.1', color: '#1a1a1a', background: 'linear-gradient(135deg, #1a1a1a 0%, #c1a96c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Let's Build the<br />Impossible.</h1>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '3rem', lineHeight: '1.8', fontWeight: '400' }}>Whether it's a web application or a full-stack solution, Zewo Tech Solutions is ready to bring your vision to life with technical excellence.</p>
          
          {/* Contact Info Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }} className="contact-info-grid">
            {/* Design Studio */}
            <div style={{ padding: '1.5rem', backgroundColor: 'transparent', borderRadius: '12px', border: '2px solid transparent', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #c1a96c'; e.currentTarget.style.backgroundColor = 'rgba(193, 169, 108, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid transparent'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <h3 style={{ color: '#c1a96c', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📍</span> Office Location</h3>
              <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '1rem', fontSize: '0.9rem' }}>BTM Layout Stage One, Bengaluru, Karnataka - 560068, India</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#c1a96c', fontWeight: '700', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onMouseOver={(e) => e.target.style.gap = '1rem'} onMouseOut={(e) => e.target.style.gap = '0.5rem'}>Get Directions <span>→</span></a>
            </div>

            {/* Direct Connect */}
            <div style={{ padding: '1.5rem', backgroundColor: 'transparent', borderRadius: '12px', border: '2px solid transparent', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #c1a96c'; e.currentTarget.style.backgroundColor = 'rgba(193, 169, 108, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid transparent'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <h3 style={{ color: '#c1a96c', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>📞</span> Direct Connect</h3>
              <p style={{ color: '#1a1a1a', fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>+91 8179860935</p>
              <p style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>+91 9177067341</p>
              <p style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1.2rem' }}>+91 6281487199</p>
              <a href="tel:+918179860935" style={{ display: 'inline-block', color: '#fff', backgroundColor: '#c1a96c', padding: '0.8rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', transition: 'all 0.3s', boxShadow: '0 5px 15px rgba(193, 169, 108, 0.3)', fontSize: '0.9rem' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 20px rgba(193, 169, 108, 0.5)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 5px 15px rgba(193, 169, 108, 0.3)'; }}>Call Now</a>
            </div>
          </div>

          {/* WhatsApp */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="contact-info-grid">
            <div style={{ padding: '1.5rem', backgroundColor: 'transparent', borderRadius: '12px', border: '2px solid transparent', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #25D366'; e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid transparent'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              <h3 style={{ color: '#25D366', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>💬</span> WhatsApp</h3>
              <p style={{ color: '#1a1a1a', fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.2rem' }}>+91 8179860935</p>
              <a href="https://wa.me/918179860935" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', color: '#fff', backgroundColor: '#25D366', padding: '0.8rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', transition: 'all 0.3s', boxShadow: '0 5px 15px rgba(37, 211, 102, 0.3)', fontSize: '0.9rem' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#20BA5A'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 8px 20px rgba(37, 211, 102, 0.5)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#25D366'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 5px 15px rgba(37, 211, 102, 0.3)'; }}>Start Chat</a>
            </div>

            {/* Working Hours */}
            <div style={{ padding: '1.5rem', backgroundColor: 'transparent', borderRadius: '12px', border: '2px solid transparent', transition: 'all 0.3s', display: 'flex', alignItems: 'center' }} onMouseOver={(e) => { e.currentTarget.style.border = '2px solid #c1a96c'; e.currentTarget.style.backgroundColor = 'rgba(193, 169, 108, 0.05)'; }} onMouseOut={(e) => { e.currentTarget.style.border = '2px solid transparent'; e.currentTarget.style.backgroundColor = 'transparent'; }}>
              
              <p style={{ color: '#1a1a1a', fontSize: '0.95rem', fontWeight: '600', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span>🕐</span> Mon - Sat: 09:00 AM — 06:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div style={{ backgroundColor: '#fff', padding: '3.5rem', borderRadius: '25px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', height: 'fit-content', position: 'sticky', top: '120px', border: '1px solid rgba(193, 169, 108, 0.1)' }} className="contact-form fade-in-right">
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#1a1a1a', marginBottom: '0.5rem' }}>Project Inquiry</h2>
          <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '0.95rem' }}>Tell us about your project requirements.</p>
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#1a1a1a', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Client Name</label>
              <input type="text" placeholder="e.g. Varun Tej" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.9rem', border: '2px solid #e0e0e0', borderRadius: '10px', fontSize: '1rem', transition: 'all 0.3s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#c1a96c'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} required />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#1a1a1a', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Contact Number</label>
              <input type="tel" placeholder="+91 81216 66611" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ width: '100%', padding: '0.9rem', border: '2px solid #e0e0e0', borderRadius: '10px', fontSize: '1rem', transition: 'all 0.3s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#c1a96c'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} required />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#1a1a1a', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Email Address</label>
              <input type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.9rem', border: '2px solid #e0e0e0', borderRadius: '10px', fontSize: '1rem', transition: 'all 0.3s', outline: 'none' }} onFocus={(e) => e.target.style.borderColor = '#c1a96c'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} required />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', color: '#1a1a1a', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Scope of service</label>
              <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} style={{ width: '100%', padding: '0.9rem', border: '2px solid #e0e0e0', borderRadius: '10px', fontSize: '1rem', transition: 'all 0.3s', outline: 'none', backgroundColor: '#fff' }} onFocus={(e) => e.target.style.borderColor = '#c1a96c'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}>
                <option>Web Development</option>
                <option>Full Stack Development</option>
                <option>Logo Design</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', color: '#1a1a1a', fontWeight: '600', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Message Context</label>
              <textarea placeholder="Describe the scale and vision of your project..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows="4" style={{ width: '100%', padding: '0.9rem', border: '2px solid #e0e0e0', borderRadius: '10px', fontSize: '1rem', transition: 'all 0.3s', outline: 'none', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = '#c1a96c'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} required></textarea>
            </div>

            <button type="submit" style={{ width: '100%', padding: '1rem', backgroundColor: '#c1a96c', color: '#fff', border: 'none', borderRadius: '50px', fontSize: '1rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer', transition: 'all 0.4s', boxShadow: '0 8px 25px rgba(193, 169, 108, 0.4)' }} onMouseOver={(e) => { e.target.style.backgroundColor = '#b39858'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 35px rgba(193, 169, 108, 0.6)'; }} onMouseOut={(e) => { e.target.style.backgroundColor = '#c1a96c'; e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 8px 25px rgba(193, 169, 108, 0.4)'; }}>Transmit Request</button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .contact-container {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column-reverse !important;
          }
          .contact-form {
            position: relative !important;
            top: 0 !important;
            order: -1 !important;
          }
          .contact-content {
            padding-right: 0 !important;
            order: 1 !important;
          }
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="padding: '4rem 5%'"] {
            padding: 2rem 5% !important;
          }
          div[style*="paddingTop: '100px'"] {
            padding-top: 80px !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          .contact-form {
            padding: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
