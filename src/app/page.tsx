import React from 'react';
import BookingForm from '@/components/booking-form';
import FleetSection from '@/components/fleet-section';
import DestinationCard from '@/components/destination-card';
import { destinations } from '@/data/destinations';
import { blogs } from '@/data/blogs';
import Link from 'next/link';

export default function HomePage() {
  // Take top 3 destinations for home page preview
  const featuredDestinations = destinations.slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        style={{ 
          position: 'relative', 
          minHeight: '90vh', 
          backgroundImage: 'linear-gradient(rgba(11, 15, 25, 0.75), rgba(11, 15, 25, 0.95)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-grid">
            {/* Hero Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span className="glow-badge" style={{ marginBottom: '16px' }}>
                  Premium Cab Rental
                </span>
                <h1 style={{ fontSize: '56px', color: '#FFF', lineHeight: '1.1', marginBottom: '16px' }}>
                  Trusted Bhubaneswar Cabs & Tour Travel
                </h1>
                <p style={{ fontSize: '20px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                  One-Way, Outstation, or Custom Tour Packages.
                </p>
              </div>

              <div 
                style={{ 
                  background: 'rgba(245, 158, 11, 0.08)', 
                  borderLeft: '4px solid var(--accent-gold)', 
                  padding: '16px 20px',
                  borderRadius: '0 12px 12px 0'
                }}
              >
                <h3 style={{ fontSize: '18px', color: 'var(--accent-gold)', marginBottom: '4px', fontFamily: 'var(--font-sans)' }}>
                  Book Now, Pay After the Ride!
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  No advance payment or credit card details required. Zero hassle booking.
                </p>
              </div>

              {/* Trust Indicators */}
              <div style={{ display: 'flex', gap: '32px', marginTop: '16px' }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--accent-teal)' }}>100%</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Safe & Sanitized</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--accent-teal)' }}>24/7</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Roadside Support</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--accent-teal)' }}>15+</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Odisha Hotspots</div>
                </div>
              </div>
            </div>

            {/* Hero Right Booking Form */}
            <div id="book-now">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding" style={{ background: '#0F1322' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>What We Offer</span>
            <h2 style={{ fontSize: '42px', color: '#FFF', marginBottom: '16px' }}>
              Specialized Taxi Services in Bhubaneswar
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Dedicated local, airport, and long-distance travel services custom tailored for safety, reliability, and leisure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {/* Card 1 */}
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', color: '#FFF' }}>Local Taxi Service</h3>
              <p style={{ fontSize: '14px' }}>Hourly and full-day local packages for sightseeing and hassle-free travel across Bhubaneswar city.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '600', marginTop: 'auto' }}>View Details &rarr;</Link>
            </div>

            {/* Card 2 */}
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(20, 184, 166, 0.1)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', color: '#FFF' }}>Airport Taxi Service</h3>
              <p style={{ fontSize: '14px' }}>24x7 punctual pickup & drop-offs to Biju Patnaik International Airport (BBI) with trackable arrivals.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '600', marginTop: 'auto' }}>View Details &rarr;</Link>
            </div>

            {/* Card 3 */}
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: '#6366F1', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', color: '#FFF' }}>Outstation Taxi Service</h3>
              <p style={{ fontSize: '14px' }}>Intercity and long-distance travel to Puri, Konark, Cuttack, Chilika Lake, and neighboring states.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '600', marginTop: 'auto' }}>View Details &rarr;</Link>
            </div>

            {/* Card 4 */}
            <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.1)', color: '#EC4899', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', color: '#FFF' }}>Corporate Rentals</h3>
              <p style={{ fontSize: '14px' }}>High-quality sedans and executive minivans for executive guests, business meetings, and staff commutes.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '600', marginTop: 'auto' }}>View Details &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>Choose Your Ride</span>
            <h2 style={{ fontSize: '42px', color: '#FFF', marginBottom: '16px' }}>
              Our Premium Vehicle Fleet
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              From standard hatchbacks for local commutes to premium cruisers for luxury group travels. No advance needed.
            </p>
          </div>

          <FleetSection />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="section-padding" style={{ background: '#0F1322' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <span className="glow-badge" style={{ marginBottom: '12px' }}>Destinations Guide</span>
              <h2 style={{ fontSize: '42px', color: '#FFF' }}>
                Best Places to Visit
              </h2>
            </div>
            <Link href="/destinations" className="btn btn-secondary">
              Explore All 15 Spots
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {featuredDestinations.map((dest) => (
              <div key={dest.id}>
                <DestinationCard destination={dest} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Value Proposition Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="two-col-grid">
            {/* Left Col: Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <span className="glow-badge" style={{ marginBottom: '12px' }}>Why Choose Us</span>
                <h2 style={{ fontSize: '38px', color: '#FFF', marginBottom: '16px' }}>
                  Safety & Comfort on Every Road
                </h2>
                <p>We pride ourselves on offering the most customer-friendly taxi service in Odisha. Over 10,000+ completed rides speak for our devotion.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '16px', marginBottom: '4px' }}>Zero Advance Payment</h4>
                    <p style={{ fontSize: '14px' }}>Pay directly to your driver in cash or digital transfer after completing the journey safely.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '16px', marginBottom: '4px' }}>Professional Local Drivers</h4>
                    <p style={{ fontSize: '14px' }}>Our chauffeurs are highly trained, background-verified, and exceptionally knowledgeable about routes.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '16px', marginBottom: '4px' }}>24/7 Helpline & Dispatch</h4>
                    <p style={{ fontSize: '14px' }}>Have questions or need change in schedules? Reach our support desk at any time during your trip.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Quote */}
            <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
              <div style={{ fontSize: '80px', color: 'rgba(245, 158, 11, 0.08)', fontFamily: 'var(--font-serif)', position: 'absolute', top: '10px', left: '20px', lineHeight: 1 }}>
                “
              </div>
              <p style={{ fontSize: '18px', color: '#FFF', fontStyle: 'italic', position: 'relative', zIndex: 10, marginBottom: '24px', lineHeight: '1.6' }}>
                We booked the AC Innova Crysta for our family tour to Puri and Konark Sun Temple. The cab was super clean, the air conditioning was excellent, and the driver was extremely polite and acted as a great guide! Best of all, we paid after the trip was over. Fully recommended!
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-teal) 100%)' }}></div>
                <div>
                  <div style={{ fontWeight: '600', color: '#FFF' }}>Ramesh Kumar Mohanty</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Corporate Manager, Travelled to Puri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="section-padding" style={{ background: '#0F1322', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <span className="glow-badge" style={{ marginBottom: '12px' }}>Travel Tips</span>
              <h2 style={{ fontSize: '42px', color: '#FFF' }}>
                Latest Travel Blogs
              </h2>
            </div>
            <Link href="/blogs" className="btn btn-secondary">
              View All Blogs
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {blogs.map((post) => (
              <div 
                key={post.slug} 
                className="glass-panel" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div style={{ height: '8px', background: post.gradient }} />
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#FFF', fontFamily: 'var(--font-serif)' }}>{post.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{post.excerpt}</p>
                  
                  <Link 
                    href={`/blogs/${post.slug}`} 
                    style={{ 
                      color: 'var(--accent-gold)', 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Read Article 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
