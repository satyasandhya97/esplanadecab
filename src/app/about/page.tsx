import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ background: '#0B0F19', minHeight: '80vh' }}>
      {/* Page Header */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.95)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="container">
          <span className="glow-badge" style={{ marginBottom: '12px' }}>Who We Are</span>
          <h1 style={{ fontSize: '48px', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
            About Esplanade Cabs
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
            Making travel memorable, accessible, and sustainable across Odisha.
          </p>
        </div>
      </section>

      {/* Main Copy Content */}
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            {/* Visual element */}
            <div 
              className="glass-panel" 
              style={{ 
                padding: '48px',
                borderLeft: '4px solid var(--accent-gold)',
                background: 'radial-gradient(circle, #1F2937 0%, #111827 100%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h3 style={{ fontSize: '28px', color: '#FFF', fontFamily: 'var(--font-serif)' }}>
                Our Mission Statement
              </h3>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                We believe that travel is for everyone. That’s why we strive to make it accessible and affordable, offering a range of options to suit every budget.
              </p>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>Active Area</div>
                <div style={{ fontSize: '18px', color: 'var(--accent-gold)', fontWeight: '600' }}>Bhubaneswar &bull; Puri &bull; Konark &bull; Kolkata &bull; Jharkhand</div>
              </div>
            </div>

            {/* Text description */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span className="glow-badge" style={{ alignSelf: 'flex-start' }}>Our Journey</span>
              <h2 style={{ fontSize: '38px', color: '#FFF', fontFamily: 'var(--font-serif)' }}>
                Welcome to The Travel with Esplanade Cab
              </h2>
              
              <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Welcome to Esplanade Cab, your ultimate guide to exploring each and every place! We are passionate about travel and dedicated to making your journey **Memorable**.
              </p>
              
              <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                We’re also deeply committed to sustainable and responsible travel, ensuring our drivers observe safety practices, maintain sanitized cabins, and respect local heritage sites.
              </p>
              
              <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Thank you for choosing Esplanade Cab as your traveling partner. We look forward to helping you make your travel dreams a reality!
              </p>

              <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
                <Link href="/#book-now" className="btn btn-primary">
                  Book A Ride
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding" style={{ background: '#0F1322', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>Our Core Pillars</span>
            <h2 style={{ fontSize: '38px', color: '#FFF' }}>How We Stand Apart</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-gold)', marginBottom: '12px' }}>Affordability</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>We optimize routes and keep our pricing structures completely transparent. You only pay for what you travel, with no hidden rates.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-gold)', marginBottom: '12px' }}>Sustainability</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>We focus on responsible travel. Supporting fuel-efficient operations and respecting local wildlife and cultural sites.</p>
            </div>

            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', color: 'var(--accent-gold)', marginBottom: '12px' }}>Client Satisfaction</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>We offer zero-advance bookings, 24/7 service coordinators, and trained local driver guides to keep you smiling.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
