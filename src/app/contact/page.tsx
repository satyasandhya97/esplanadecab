'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          name,
          phone,
          message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setName('');
        setPhone('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSendError(data.error || 'Failed to send inquiry. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSendError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ background: 'transparent', minHeight: '80vh' }}>
      {/* Header section */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(246, 245, 250, 0.75), rgba(246, 245, 250, 0.95)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="container">
          <span className="glow-badge" style={{ marginBottom: '12px' }}>Get In Touch</span>
          <h1 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
            We are available 24/7 to solve your travel inquiries.
          </p>
        </div>
      </section>

      {/* Main Grid split */}
      <section className="section-padding">
        <div className="container">
          <div className="two-col-grid">
            
            {/* Info Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <span className="glow-badge" style={{ marginBottom: '12px' }}>Office Channels</span>
                <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>
                  Reach Our Coordinators
                </h2>
                <p>Have questions about specialized tours, outstation fares, or long-term vehicle rentals? Give us a call or send a message directly.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Channel 1 */}
                <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ color: 'var(--accent-gold)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>CALL HELPLINE</div>
                    <a href="tel:+919090809910" style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>+91 90908 09910</a>
                  </div>
                </div>

                {/* Channel 2 */}
                <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ color: 'var(--accent-teal)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.781 1.22c5.508 0 9.99-4.479 9.991-9.985A9.998 9.998 0 0 0 12.012 2zm4.7 13.784c-.258.73-1.298 1.41-1.808 1.47a3.488 3.488 0 0 1-1.616-.277 8.358 8.358 0 0 1-3.69-2.433 9.4 9.4 0 0 1-1.748-2.678 3.882 3.882 0 0 1-.62-2.029c.007-.98.514-1.455.703-1.657.189-.202.437-.287.58-.287.142 0 .285.006.408.012.13.007.297-.05.464.354.17.412.584 1.42.635 1.523.05.104.084.225.013.364-.07.139-.107.227-.215.353-.108.127-.225.284-.321.382-.108.11-.22.23-.095.446a6.115 6.115 0 0 0 1.11 1.383 5.485 5.485 0 0 0 1.632 1.008c.216.104.343.089.472-.058.128-.147.55-.641.697-.859.146-.217.294-.183.493-.109.198.073 1.258.593 1.475.702.217.109.363.165.419.263.056.098.056.568-.202 1.298z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>WHATSAPP CHAT</div>
                    <a href="https://api.whatsapp.com/send?phone=919090809910" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', fontWeight: '600', color: 'var(--text-primary)' }}>Send Message Now</a>
                  </div>
                </div>

                {/* Channel 3 */}
                <div className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ color: 'var(--accent-gold)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>OUR BASE ADDRESS</div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>Bhubaneswar, Odisha, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '24px', fontFamily: 'var(--font-serif)', marginBottom: '24px' }}>
                Send An Inquiry
              </h3>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="Enter 10-digit mobile number" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details</label>
                  <textarea 
                    className="form-input" 
                    placeholder="Describe your tour details, vehicle needs, or any specific questions..." 
                    style={{ minHeight: '120px', resize: 'vertical' }}
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                  />
                </div>

                {sendError && (
                  <p style={{ color: '#EF4444', fontSize: '14px', textAlign: 'center' }}>
                    {sendError}
                  </p>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  disabled={isSending}
                >
                  {isSending ? 'Sending Inquiry...' : 'Send Inquiry'}
                </button>

                {isSubmitted && (
                  <p style={{ fontSize: '14px', color: 'var(--accent-teal)', textAlign: 'center', fontWeight: '600' }}>
                    Inquiry sent successfully! We will get back to you shortly.
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
