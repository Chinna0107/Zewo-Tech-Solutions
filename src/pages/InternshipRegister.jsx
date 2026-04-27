import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const trackNames = {
  'web-development': 'Web Development',
  'full-stack-development': 'Full Stack Development',
  'mobile-app-development': 'Mobile App Development',
  'frontend-development': 'Frontend Development',
  'backend-development': 'Backend Development',
};

const trackPlans = {
  'web-development': [
    { months: 2, label: 'Starter', price: 1999 },
    { months: 3, label: 'Professional', price: 2999 },
    { months: 6, label: 'Expert', price: 4999 },
  ],
  'full-stack-development': [
    { months: 2, label: 'Starter', price: 2499 },
    { months: 3, label: 'Professional', price: 3999 },
    { months: 6, label: 'Expert', price: 6999 },
  ],
  'mobile-app-development': [
    { months: 2, label: 'Starter', price: 2499 },
    { months: 3, label: 'Professional', price: 3999 },
    { months: 6, label: 'Expert', price: 6999 },
  ],
  'frontend-development': [
    { months: 2, label: 'Starter', price: 1999 },
    { months: 3, label: 'Professional', price: 2999 },
    { months: 6, label: 'Expert', price: 4999 },
  ],
  'backend-development': [
    { months: 2, label: 'Starter', price: 1999 },
    { months: 3, label: 'Professional', price: 2999 },
    { months: 6, label: 'Expert', price: 4999 },
  ],
};

const InternshipRegister = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const track = searchParams.get('track') || 'web-development';
  const plans = trackPlans[track] || trackPlans['web-development'];
  const initialMonths = parseInt(searchParams.get('months') || `${plans[1]?.months || plans[0].months}`);
  const [selectedPlan, setSelectedPlan] = useState(
    plans.find(p => p.months === initialMonths) || plans[1] || plans[0]
  );
  const months = selectedPlan.months;
  const price = selectedPlan.price;

  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', college: '', year: '', branch: '', city: '', linkedin: '', github: '', why: '',
  });
  const [errors, setErrors] = useState({});

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const validateStep1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid phone required';
    if (!form.college.trim()) e.college = 'Required';
    if (!form.year) e.year = 'Required';
    if (!form.branch.trim()) e.branch = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePayment = async () => {
    const { order_id, amount, currency, key } = await fetch(
      'http://localhost:3000/api/internship/create-order',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ track, months: selectedPlan.months }),
      }
    ).then(r => r.json());

    const options = {
      key,
      amount,
      currency,
      order_id,
      name: 'Zewo Tech Solutions',
      description: `${trackNames[track]} Internship - ${months} Months`,
      image: '/logo.jpeg',
      handler: async (response) => {
        const { verified } = await fetch(
          'http://localhost:3000/api/internship/verify-payment',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(response),
          }
        ).then(r => r.json());

        if (!verified) return alert('Payment verification failed');

        await fetch('http://localhost:3000/api/internship/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...form,
            track,
            months: selectedPlan.months,
            payment_id: response.razorpay_payment_id,
          }),
        });

        setSuccess(true);
        setTimeout(() => navigate('/careers'), 4000);
      },
      prefill: { name: form.name, email: form.email, contact: form.phone },
      theme: { color: '#006496' },
    };

    new window.Razorpay(options).open();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    const next = plans.find(p => p.months === initialMonths) || plans[1] || plans[0];
    setSelectedPlan(next);
  }, [track, initialMonths]);

  if (success) {
    return (
      <div className="reg-page">
        <div className="reg-blob-1" /><div className="reg-blob-2" />
        <div className="success-glass">
          <div className="success-icon">🎉</div>
          <h2 className="success-title">Registration Successful!</h2>
          <p className="success-sub">Welcome to Zewo Tech Solutions! Your internship registration for <strong>{trackNames[track]}</strong> ({months} months) is confirmed.</p>
          <p className="success-sub">We'll reach out to you within 24 hours with onboarding details.</p>
          <p style={{ color: '#006496', fontSize: '0.9rem', marginTop: '1.5rem' }}>Redirecting to Careers page...</p>
        </div>
        <style>{regStyles}</style>
      </div>
    );
  }

  return (
    <div className="reg-page">
      <div className="reg-blob-1" /><div className="reg-blob-2" />

      <div className="reg-wrapper">
        {/* Header */}
        <div className="reg-header fade-in-up">
          <p className="reg-label">Internship Registration</p>
          <h1 className="reg-title">{trackNames[track]}</h1>
          <div className="reg-meta">
            <span className="reg-meta-tag">⏱ {months} Months</span>
          </div>
          <div className="reg-duration-card">
            <p className="reg-duration-label">Choose Duration</p>
            <div className="reg-duration-row">
              <select
                className="reg-duration-select"
                value={selectedPlan.months}
                onChange={e => {
                  const next = plans.find(p => p.months === parseInt(e.target.value));
                  if (next) setSelectedPlan(next);
                }}
              >
                {plans.map(p => (
                  <option key={p.months} value={p.months}>
                    {p.label} — {p.months} Months
                  </option>
                ))}
              </select>
              <span className="reg-duration-pill">{selectedPlan.label}</span>
            </div>
          </div>
        </div>

        {/* Stepper */}
        <div className="stepper">
          {['Your Details', 'Review', 'Payment'].map((label, i) => (
            <div key={i} className="stepper-item">
              <div className={`stepper-circle ${step > i + 1 ? 'done' : step === i + 1 ? 'active' : ''}`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <p className={`stepper-label ${step === i + 1 ? 'active' : ''}`}>{label}</p>
              {i < 2 && <div className={`stepper-line ${step > i + 1 ? 'done' : ''}`} />}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="reg-glass-card fade-in-up">
            <h2 className="step-heading">Tell Us About Yourself</h2>
            <div className="form-grid">
              {[
                { key: 'name', label: 'Full Name', placeholder: 'e.g. Ravi Kumar', type: 'text' },
                { key: 'email', label: 'Email Address', placeholder: 'your@email.com', type: 'email' },
                { key: 'phone', label: 'Phone Number', placeholder: '+91 9876543210', type: 'tel' },
                { key: 'college', label: 'College / University', placeholder: 'e.g. JNTU Hyderabad', type: 'text' },
                { key: 'branch', label: 'Branch / Specialization', placeholder: 'e.g. Computer Science', type: 'text' },
                { key: 'city', label: 'City', placeholder: 'e.g. Hyderabad', type: 'text' },
                { key: 'linkedin', label: 'LinkedIn Profile (optional)', placeholder: 'linkedin.com/in/yourname', type: 'url' },
                { key: 'github', label: 'GitHub Profile (optional)', placeholder: 'github.com/yourname', type: 'url' },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key} className="form-group">
                  <label className="form-label">{label}</label>
                  <input type={type} placeholder={placeholder} value={form[key]}
                    onChange={e => update(key, e.target.value)}
                    className={`reg-input ${errors[key] ? 'input-error' : ''}`} />
                  {errors[key] && <p className="error-msg">{errors[key]}</p>}
                </div>
              ))}
              <div className="form-group form-full">
                <label className="form-label">Year of Study</label>
                <select value={form.year} onChange={e => update('year', e.target.value)} className={`reg-input ${errors.year ? 'input-error' : ''}`}>
                  <option value="">Select Year</option>
                  {['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduated'].map(y => <option key={y}>{y}</option>)}
                </select>
                {errors.year && <p className="error-msg">{errors.year}</p>}
              </div>
              <div className="form-group form-full">
                <label className="form-label">Why do you want this internship?</label>
                <textarea placeholder="Tell us your motivation and what you hope to learn..." value={form.why}
                  onChange={e => update('why', e.target.value)} rows={4} className="reg-input" />
              </div>
            </div>
            <div className="step-actions">
              <button className="btn-next" onClick={() => { if (validateStep1()) setStep(2); }}>Continue to Review →</button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="reg-glass-card fade-in-up">
            <h2 className="step-heading">Review Your Application</h2>
            <div className="review-grid">
              <div className="review-section">
                <p className="review-section-title">Personal Details</p>
                {[['Full Name', form.name], ['Email', form.email], ['Phone', form.phone], ['City', form.city]].map(([l, v]) => (
                  <div key={l} className="review-row"><span className="review-key">{l}</span><span className="review-val">{v || '—'}</span></div>
                ))}
              </div>
              <div className="review-section">
                <p className="review-section-title">Academic Details</p>
                {[['College', form.college], ['Branch', form.branch], ['Year', form.year]].map(([l, v]) => (
                  <div key={l} className="review-row"><span className="review-key">{l}</span><span className="review-val">{v || '—'}</span></div>
                ))}
              </div>
              <div className="review-section review-full">
                <p className="review-section-title">Internship Details</p>
                <div className="review-row"><span className="review-key">Track</span><span className="review-val">{trackNames[track]}</span></div>
                <div className="review-row"><span className="review-key">Duration</span><span className="review-val">{months} Months</span></div>
              </div>
            </div>
            <div className="step-actions">
              <button className="btn-back" onClick={() => setStep(1)}>← Edit Details</button>
              <button className="btn-next" onClick={() => setStep(3)}>Proceed to Payment →</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="reg-glass-card fade-in-up">
            <h2 className="step-heading">Complete Payment</h2>
            <div className="payment-summary">
              <div className="payment-icon">💳</div>
              <div className="payment-details">
                <p className="payment-track">{trackNames[track]} Internship</p>
                <p className="payment-duration">{months} Months Program</p>
              </div>
            </div>
            <div className="payment-info-cards">
              {[['🔒', 'Secure Payment', '256-bit SSL encrypted'], ['⚡', 'Instant Confirmation', 'Get email confirmation immediately'], ['↩️', 'Easy Refund', '7-day refund policy']].map(([icon, title, desc]) => (
                <div key={title} className="payment-info-card">
                  <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                  <div><p className="pi-title">{title}</p><p className="pi-desc">{desc}</p></div>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="btn-back" onClick={() => setStep(2)}>← Back</button>
              <button className="btn-pay" onClick={handlePayment}>Pay Now via Razorpay</button>
            </div>
          </div>
        )}
      </div>

      <style>{regStyles}</style>
    </div>
  );
};

const regStyles = `
  .reg-page {
    min-height: 100vh; padding-top: 100px;
    background: linear-gradient(135deg, #e1fafa 0%, #f0f8ff 50%, #e8f4fd 100%);
    position: relative; overflow: hidden;
  }
  .reg-blob-1 { position: absolute; width: 500px; height: 500px; border-radius: 50%; background: radial-gradient(circle, #006496, transparent); filter: blur(90px); opacity: 0.25; top: -100px; right: -100px; pointer-events: none; }
  .reg-blob-2 { position: absolute; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, #96c8e1, transparent); filter: blur(90px); opacity: 0.2; bottom: 0; left: -100px; pointer-events: none; }

  .reg-wrapper { max-width: 860px; margin: 0 auto; padding: 2rem 5% 5rem; position: relative; z-index: 1; }

  .reg-header { text-align: center; margin-bottom: 2.5rem; }
  .reg-label { color: #006496; font-size: 0.8rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 0.5rem; display: block; }
  .reg-title { font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 900; color: #1a1a1a; margin-bottom: 1rem; font-family: 'Playfair Display', serif; }
  .reg-meta { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .reg-meta-tag { padding: 0.5rem 1.2rem; background: rgba(0,100,150,0.1); border: 1px solid rgba(0,100,150,0.2); color: #006496; border-radius: 50px; font-size: 0.9rem; font-weight: 700; }
  .reg-duration-card {
    margin: 1.2rem auto 0;
    max-width: 520px;
    padding: 1.2rem 1.4rem;
    border-radius: 18px;
    background: rgba(255,255,255,0.7);
    border: 1px solid rgba(0,100,150,0.2);
    box-shadow: 0 12px 35px rgba(0,100,150,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
  }
  .reg-duration-label { font-size: 0.8rem; font-weight: 700; color: #006496; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 0.7rem; }
  .reg-duration-row { display: flex; align-items: center; gap: 0.8rem; justify-content: space-between; }
  .reg-duration-select {
    flex: 1;
    padding: 0.85rem 1rem;
    border-radius: 14px;
    border: 1.5px solid rgba(0,100,150,0.2);
    background: rgba(255,255,255,0.9);
    font-size: 0.95rem;
    color: #1a1a1a;
    outline: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23006496' stroke-width='2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
  }
  .reg-duration-pill {
    padding: 0.6rem 0.9rem;
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(0,100,150,0.15), rgba(150,200,225,0.25));
    color: #0e4d6a;
    font-weight: 800;
    font-size: 0.8rem;
    border: 1px solid rgba(0,100,150,0.2);
    white-space: nowrap;
  }

  /* Stepper */
  .stepper { display: flex; align-items: center; justify-content: center; margin-bottom: 2.5rem; gap: 0; }
  .stepper-item { display: flex; flex-direction: column; align-items: center; position: relative; }
  .stepper-circle {
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,0.6); backdrop-filter: blur(10px);
    border: 2px solid rgba(0,100,150,0.2);
    color: #888; font-size: 0.95rem; font-weight: 700;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.3s ease;
  }
  .stepper-circle.active { background: linear-gradient(135deg, #006496, #19647d); color: #fff; border-color: #006496; box-shadow: 0 6px 20px rgba(0,100,150,0.4); }
  .stepper-circle.done { background: linear-gradient(135deg, #19647d, #006496); color: #fff; border-color: #19647d; }
  .stepper-label { font-size: 0.75rem; font-weight: 600; color: #aaa; margin-top: 0.5rem; text-align: center; white-space: nowrap; }
  .stepper-label.active { color: #006496; }
  .stepper-line { width: 80px; height: 2px; background: rgba(0,100,150,0.15); margin: 0 0.5rem; margin-bottom: 1.5rem; transition: background 0.3s; }
  .stepper-line.done { background: #006496; }

  /* Card */
  .reg-glass-card {
    position: relative;
    overflow: hidden;
    background: linear-gradient(145deg, rgba(255,255,255,0.75), rgba(240,250,255,0.55));
    backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255,255,255,0.85);
    border-radius: 28px; padding: 3rem;
    box-shadow: 0 25px 70px rgba(0,100,150,0.12), inset 0 1px 0 rgba(255,255,255,0.9);
  }
  .reg-glass-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(0,100,150,0.2), transparent 45%),
                radial-gradient(circle at bottom left, rgba(150,200,225,0.25), transparent 55%);
    pointer-events: none;
  }
  .step-heading { font-size: 1.6rem; font-weight: 800; color: #1a1a1a; margin-bottom: 2rem; font-family: 'Playfair Display', serif; }

  /* Form */
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
  .form-group { display: flex; flex-direction: column; }
  .form-full { grid-column: span 2; }
  .form-label { font-size: 0.85rem; font-weight: 600; color: #1a1a1a; margin-bottom: 0.4rem; }
  .reg-input {
    padding: 0.85rem 1rem;
    background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);
    border: 1.5px solid rgba(0,100,150,0.15); border-radius: 12px;
    font-size: 0.95rem; font-family: 'Poppins', sans-serif;
    color: #1a1a1a; outline: none; transition: all 0.3s ease;
    box-sizing: border-box; width: 100%;
  }
  .reg-input:focus { border-color: #006496; background: rgba(255,255,255,0.9); box-shadow: 0 0 0 3px rgba(0,100,150,0.1); }
  .input-error { border-color: #e53e3e !important; }
  .error-msg { color: #e53e3e; font-size: 0.78rem; margin-top: 0.3rem; }

  /* Review */
  .review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; }
  .review-full { grid-column: span 2; }
  .review-section { background: rgba(255,255,255,0.75); border: 1px solid rgba(0,100,150,0.12); border-radius: 18px; padding: 1.5rem; box-shadow: inset 0 1px 0 rgba(255,255,255,0.9); }
  .review-section-title { font-size: 0.75rem; font-weight: 700; color: #006496; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 1rem; }
  .review-row { display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid rgba(0,100,150,0.06); }
  .review-row:last-child { border-bottom: none; }
  .review-key { font-size: 0.85rem; color: #888; font-weight: 500; }
  .review-val { font-size: 0.9rem; color: #1a1a1a; font-weight: 600; text-align: right; }

  /* Payment */
  .payment-summary {
    display: flex; align-items: center; gap: 2rem;
    background: linear-gradient(135deg, rgba(0,100,150,0.1), rgba(150,200,225,0.18));
    border: 1px solid rgba(0,100,150,0.15); border-radius: 22px;
    padding: 2.2rem; margin-bottom: 2rem;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.9);
  }
  .payment-icon { font-size: 3rem; }
  .payment-track { font-size: 1.3rem; font-weight: 800; color: #1a1a1a; margin: 0 0 0.3rem; font-family: 'Playfair Display', serif; }
  .payment-duration { font-size: 0.9rem; color: #666; margin: 0 0 0.5rem; }
  .payment-info-cards { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
  .payment-info-card { display: flex; align-items: center; gap: 1rem; padding: 1rem 1.5rem; background: rgba(255,255,255,0.75); border: 1px solid rgba(0,100,150,0.12); border-radius: 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.9); }
  .pi-title { font-size: 0.9rem; font-weight: 700; color: #1a1a1a; margin: 0 0 0.2rem; }
  .pi-desc { font-size: 0.8rem; color: #666; margin: 0; }

  /* Actions */
  .step-actions { display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem; flex-wrap: wrap; }
  .btn-next {
    padding: 0.9rem 2.5rem;
    background: linear-gradient(135deg, #006496, #19647d);
    color: #fff; border: none; border-radius: 50px;
    font-size: 0.95rem; font-weight: 700; cursor: pointer;
    box-shadow: 0 8px 25px rgba(0,100,150,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
    transition: all 0.3s ease;
  }
  .btn-next:hover { transform: translateY(-3px); box-shadow: 0 14px 35px rgba(0,100,150,0.55); }
  .btn-back {
    padding: 0.9rem 2rem;
    background: rgba(255,255,255,0.7); backdrop-filter: blur(10px);
    color: #006496; border: 1.5px solid rgba(0,100,150,0.25); border-radius: 50px;
    font-size: 0.95rem; font-weight: 700; cursor: pointer;
    transition: all 0.3s ease;
  }
  .btn-back:hover { background: rgba(255,255,255,0.9); border-color: #006496; }
  .btn-pay {
    padding: 0.9rem 2.5rem;
    background: linear-gradient(135deg, #006496, #19647d);
    color: #fff; border: none; border-radius: 50px;
    font-size: 1rem; font-weight: 700; cursor: pointer;
    box-shadow: 0 8px 25px rgba(0,100,150,0.4);
    transition: all 0.3s ease;
  }
  .btn-pay:hover { transform: translateY(-3px); box-shadow: 0 14px 35px rgba(0,100,150,0.55); }

  /* Success */
  .success-glass {
    max-width: 600px; margin: 0 auto; text-align: center;
    background: rgba(255,255,255,0.65);
    backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255,255,255,0.85);
    border-radius: 32px; padding: 4rem;
    box-shadow: 0 20px 60px rgba(0,100,150,0.12);
    position: relative; z-index: 1;
    margin-top: 5rem;
  }
  .success-icon { font-size: 4rem; margin-bottom: 1.5rem; }
  .success-title { font-size: 2rem; font-weight: 900; color: #1a1a1a; margin-bottom: 1rem; font-family: 'Playfair Display', serif; }
  .success-sub { font-size: 1rem; color: #555; line-height: 1.8; margin-bottom: 0.5rem; }

  @media (max-width: 640px) {
    .form-grid { grid-template-columns: 1fr !important; }
    .form-full { grid-column: span 1 !important; }
    .review-grid { grid-template-columns: 1fr !important; }
    .review-full { grid-column: span 1 !important; }
    .reg-glass-card { padding: 2rem 1.5rem !important; }
    .stepper-line { width: 40px !important; }
    .payment-summary { flex-direction: column; gap: 1rem; text-align: center; }
    .reg-duration-row { flex-direction: column; align-items: stretch; }
    .reg-duration-pill { align-self: flex-start; }
  }
`;

export default InternshipRegister;
