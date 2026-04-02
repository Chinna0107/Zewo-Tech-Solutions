import { useState, useRef } from 'react';
import Logo from '../assets/Logo.jpeg';

const CREDENTIALS = { email: 'zewotechsol@gmail.com', password: 'adminhemanth@2005' };

const Bill = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [websiteName, setWebsiteName] = useState('');
  const [billDate, setBillDate] = useState(new Date().toISOString().split('T')[0]);
  const [billNo, setBillNo] = useState('ZTS-001');
  const [items, setItems] = useState([{ description: '', price: '' }]);
  const printRef = useRef();

  const addItem = () => setItems([...items, { description: '', price: '' }]);
  const removeItem = (i) => setItems(items.filter((_, idx) => idx !== i));
  const updateItem = (i, field, value) => {
    const updated = [...items];
    updated[i][field] = value;
    setItems(updated);
  };

  const total = items.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);

  const handlePrint = () => window.print();

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === CREDENTIALS.email && loginPassword === CREDENTIALS.password) {
      setLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid email or password.');
    }
  };

  if (!loggedIn) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Poppins", sans-serif' }}>
      <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '3rem', width: '100%', maxWidth: '420px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src={Logo} alt="Logo" style={{ height: '65px', width: '65px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #c1a96c', marginBottom: '1rem' }} />
          <h1 style={{ fontFamily: '"Playfair Display", serif', color: '#1a1a1a', fontSize: '1.5rem', margin: '0 0 0.3rem' }}>Zewo Tech Solutions</h1>
          <p style={{ color: '#999', fontSize: '0.8rem', margin: 0, fontStyle: 'italic' }}>Bill Portal — Admin Access</p>
        </div>
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #c1a96c, #e8d5a3, #c1a96c)', borderRadius: '2px', marginBottom: '2rem' }} />
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.4rem' }}>Email</label>
            <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="Enter email" required
              style={{ width: '100%', padding: '0.75rem 1rem', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: '"Poppins", sans-serif', transition: 'border 0.2s' }}
              onFocus={e => e.target.style.borderColor = '#c1a96c'} onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.4rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input type={showPass ? 'text' : 'password'} value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="Enter password" required
                style={{ width: '100%', padding: '0.75rem 2.8rem 0.75rem 1rem', border: '1.5px solid #e0e0e0', borderRadius: '10px', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box', fontFamily: '"Poppins", sans-serif', transition: 'border 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#c1a96c'} onBlur={e => e.target.style.borderColor = '#e0e0e0'} />
              <span onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: '1rem', color: '#999' }}>{showPass ? '🙈' : '👁️'}</span>
            </div>
          </div>
          {loginError && <p style={{ color: '#e00', fontSize: '0.85rem', margin: '-0.8rem 0 1rem', textAlign: 'center' }}>{loginError}</p>}
          <button type="submit" style={{ width: '100%', padding: '0.9rem', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', fontFamily: '"Poppins", sans-serif', letterSpacing: '1px' }}>Login</button>
        </form>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Poppins:wght@400;600;700&display=swap');`}</style>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem', fontFamily: '"Poppins", sans-serif' }}>

      {/* Input Form - hidden on print */}
      <div className="no-print" style={{ maxWidth: '800px', margin: '0 auto 2rem', backgroundColor: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <h2 style={{ fontFamily: '"Playfair Display", serif', color: '#1a1a1a', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Bill Details</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { label: 'Bill No', value: billNo, setter: setBillNo },
            { label: 'Date', value: billDate, setter: setBillDate, type: 'date' },
            { label: 'Client Name', value: clientName, setter: setClientName },
            { label: 'Client Email', value: clientEmail, setter: setClientEmail },
            { label: 'Client Phone', value: clientPhone, setter: setClientPhone },
            { label: 'Website Name', value: websiteName, setter: setWebsiteName },
          ].map(({ label, value, setter, type }) => (
            <div key={label}>
              <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</label>
              <input type={type || 'text'} value={value} onChange={e => setter(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', marginTop: '0.3rem', outline: 'none', boxSizing: 'border-box', fontFamily: '"Poppins", sans-serif' }} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: '600', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>Line Items</label>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.8rem', marginTop: '0.6rem', alignItems: 'center' }}>
              <input placeholder="Service description" value={item.description} onChange={e => updateItem(i, 'description', e.target.value)}
                style={{ flex: 3, padding: '0.6rem 0.8rem', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', outline: 'none', fontFamily: '"Poppins", sans-serif' }} />
              <input placeholder="₹ Price" type="number" value={item.price} onChange={e => updateItem(i, 'price', e.target.value)}
                style={{ flex: 1, padding: '0.6rem 0.8rem', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '0.95rem', outline: 'none', fontFamily: '"Poppins", sans-serif' }} />
              {items.length > 1 && (
                <button onClick={() => removeItem(i)} style={{ background: '#fee', border: 'none', borderRadius: '8px', padding: '0.6rem 0.8rem', cursor: 'pointer', color: '#c00', fontWeight: '700' }}>✕</button>
              )}
            </div>
          ))}
          <button onClick={addItem} style={{ marginTop: '0.8rem', padding: '0.5rem 1.2rem', backgroundColor: '#c1a96c', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontFamily: '"Poppins", sans-serif' }}>+ Add Item</button>
        </div>

        <button onClick={handlePrint} style={{ marginTop: '1.5rem', width: '100%', padding: '0.9rem', backgroundColor: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', letterSpacing: '1px', fontFamily: '"Poppins", sans-serif' }}>
          🖨️ Print / Download Bill
        </button>
      </div>

      {/* Bill Preview */}
      <div ref={printRef} style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(0,0,0,0.1)' }} className="bill-paper">

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', padding: '2.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src={Logo} alt="Logo" style={{ height: '65px', width: '65px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #c1a96c' }} />
            <div>
              <h1 style={{ fontFamily: '"Playfair Display", serif', color: '#c1a96c', fontSize: '1.6rem', fontWeight: '800', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>Zewo Tech Solutions</h1>
              <p style={{ color: '#aaa', fontSize: '0.75rem', margin: '0.3rem 0 0', fontStyle: 'italic', letterSpacing: '0.5px' }}>Look Forward — To Shine to be a LEADER</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#c1a96c', fontSize: '2rem', fontWeight: '800', margin: 0, fontFamily: '"Playfair Display", serif' }}>INVOICE</p>
            <p style={{ color: '#aaa', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>#{billNo}</p>
          </div>
        </div>

        {/* Gold divider */}
        <div style={{ height: '4px', background: 'linear-gradient(90deg, #c1a96c, #e8d5a3, #c1a96c)' }} />

        {/* Bill Info */}
        <div style={{ padding: '2rem 3rem', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fafafa', borderBottom: '1px solid #eee' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.5rem' }}>Billed To</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a', margin: '0 0 0.2rem' }}>{clientName || '—'}</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 0.2rem' }}>{clientEmail || ''}</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>{clientPhone || ''}</p>
            {websiteName && <p style={{ fontSize: '0.9rem', color: '#c1a96c', fontWeight: '600', margin: '0.3rem 0 0' }}>🌐 {websiteName}</p>}
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.5rem' }}>Invoice Details</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: '0 0 0.2rem' }}><b style={{ color: '#1a1a1a' }}>Date:</b> {billDate}</p>
            <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}><b style={{ color: '#1a1a1a' }}>Bill No:</b> #{billNo}</p>
          </div>
        </div>

        {/* Items Table */}
        <div style={{ padding: '2rem 3rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#1a1a1a' }}>
                <th style={{ padding: '0.9rem 1rem', textAlign: 'left', color: '#c1a96c', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '0' }}>#</th>
                <th style={{ padding: '0.9rem 1rem', textAlign: 'left', color: '#c1a96c', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Service Description</th>
                <th style={{ padding: '0.9rem 1rem', textAlign: 'right', color: '#c1a96c', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <td style={{ padding: '0.9rem 1rem', color: '#999', fontSize: '0.9rem' }}>{i + 1}</td>
                  <td style={{ padding: '0.9rem 1rem', color: '#333', fontSize: '0.95rem' }}>{item.description || '—'}</td>
                  <td style={{ padding: '0.9rem 1rem', textAlign: 'right', color: '#1a1a1a', fontWeight: '600', fontSize: '0.95rem' }}>
                    {item.price ? `₹${parseFloat(item.price).toLocaleString('en-IN')}` : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <div style={{ minWidth: '260px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 1rem', backgroundColor: '#f5f5f5', borderRadius: '8px 8px 0 0' }}>
                <span style={{ color: '#666', fontSize: '0.9rem' }}>Subtotal</span>
                <span style={{ color: '#333', fontWeight: '600' }}>₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.9rem 1rem', background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)', borderRadius: '0 0 8px 8px' }}>
                <span style={{ color: '#c1a96c', fontWeight: '700', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Total</span>
                <span style={{ color: '#fff', fontWeight: '800', fontSize: '1.1rem' }}>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Signature & Footer */}
        <div style={{ padding: '1.5rem 3rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #eee' }}>
          <div>
            <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.3rem' }}>Contact</p>
            <p style={{ fontSize: '0.85rem', color: '#555', margin: '0 0 0.2rem' }}>📧 zewotechsolutions@gmail.com</p>
            <p style={{ fontSize: '0.85rem', color: '#555', margin: '0 0 0.2rem' }}>📞 +91 8179860935</p>
            <p style={{ fontSize: '0.85rem', color: '#c1a96c', margin: 0 }}>🌐 zewo.in</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.75rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.5rem' }}>Authorized Signature</p>
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#1a1a1a', margin: '0 0 0.2rem', fontStyle: 'italic', borderBottom: '2px solid #c1a96c', paddingBottom: '0.3rem' }}>K Hemanth</p>
            <p style={{ fontSize: '0.8rem', color: '#999', margin: 0 }}>Zewo Tech Solutions</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ background: 'linear-gradient(90deg, #c1a96c, #e8d5a3, #c1a96c)', padding: '0.7rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#1a1a1a', fontWeight: '600' }}>Thank you for choosing Zewo Tech Solutions!</p>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#1a1a1a', fontStyle: 'italic' }}>Look Forward — To Shine to be a LEADER</p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Poppins:wght@400;600;700&display=swap');
        @media print {
          .no-print { display: none !important; }
          header { display: none !important; }
          footer { display: none !important; }
          body { background: #fff !important; margin: 0 !important; }
          html, body { height: 100%; }
          .bill-paper { box-shadow: none !important; border-radius: 0 !important; max-width: 100% !important; margin: 0 !important; page-break-inside: avoid; }
          @page { margin: 0; size: A4; }
        }
      `}</style>
    </div>
  );
};

export default Bill;
