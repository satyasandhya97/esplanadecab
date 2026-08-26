import React from 'react';
import BookingForm from '@/components/booking-form';
import FleetSection from '@/components/fleet-section';
import DestinationCard from '@/components/destination-card';
import VehicleCarousel from '@/components/vehicle-carousel';
import { destinations } from '@/data/destinations';
import { blogs } from '@/data/blogs';
import Link from 'next/link';

export default function HomePage() {
  // Take top 3 destinations for home page preview
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <div>
      {/* Hero Section - Full bleed behind header with entrance animations */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          marginTop: '-80px', // Pulls hero behind the transparent header
          paddingTop: '140px', // Offsets header height
          backgroundImage: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.75) 100%), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          paddingBottom: '80px'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-grid">
            {/* Hero Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <span
                  className="glow-badge animate-fade-in"
                  style={{
                    marginBottom: '16px',
                    color: 'var(--accent-teal)',
                    background: 'rgba(0, 172, 193, 0.1)',
                    borderColor: 'rgba(0, 172, 193, 0.35)',
                    animationDelay: '100ms'
                  }}
                >
                  YOUR TRAVEL JUST GOT UPGRADED
                </span>
                <h1
                  className="animate-slide-up"
                  style={{
                    fontSize: '56px',
                    lineHeight: '1.15',
                    marginBottom: '16px',
                    color: '#FFFFFF',
                    fontWeight: '800',
                    animationDelay: '200ms'
                  }}
                >
                  Trusted Bhubaneswar Cabs & Tour Travel
                </h1>
                <p
                  className="animate-slide-up"
                  style={{
                    fontSize: '20px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500',
                    animationDelay: '300ms'
                  }}
                >
                  Premium City Rides, Outstation, or Custom Odisha Tour Packages.
                </p>
              </div>

              <div
                className="animate-slide-up"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderLeft: '4px solid var(--accent-teal)',
                  padding: '18px 24px',
                  borderRadius: '0 12px 12px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  flexWrap: 'wrap',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  borderRight: '1px solid rgba(255,255,255,0.06)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  animationDelay: '400ms'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', color: '#FFFFFF', marginBottom: '4px', fontFamily: 'var(--font-sans)', fontWeight: '700' }}>
                    Book Now, Pay After the Ride!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
                    No advance payment or credit card details required. Zero hassle booking.
                  </p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="animate-fade-in" style={{ display: 'flex', gap: '32px', marginTop: '16px', animationDelay: '500ms' }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--accent-teal)' }}>100%</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Safe & Sanitized</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--accent-teal)' }}>24/7</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Roadside Support</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '800', color: 'var(--accent-teal)' }}>15+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.05em' }}>Odisha Hotspots</div>
                </div>
              </div>
            </div>

            {/* Hero Right Booking Form */}
            <div id="book-now" className="animate-fade-in" style={{ position: 'relative', zIndex: 12, animationDelay: '300ms' }}>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>What We Offer</span>
            <h2 className="heading-uppercase" style={{ fontSize: '36px', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Specialized Taxi Services in Bhubaneswar
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Dedicated local, airport, and long-distance travel services custom tailored for safety, reliability, and leisure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {/* Card 1 */}
            <div className="glass-panel hover-lift-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-card)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Local Taxi Service</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Hourly and full-day local packages for sightseeing and hassle-free travel across Bhubaneswar city.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '700', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>View Details &rarr;</Link>
            </div>

            {/* Card 2 */}
            <div className="glass-panel hover-lift-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-card)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(0, 172, 193, 0.08)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Airport Taxi Service</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>24x7 punctual pickup & drop-offs to Biju Patnaik International Airport (BBI) with trackable arrivals.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '700', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>View Details &rarr;</Link>
            </div>

            {/* Card 3 */}
            <div className="glass-panel hover-lift-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-card)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Outstation Taxi Service</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>Intercity and long-distance travel to Puri, Konark, Cuttack, Chilika Lake, and neighboring states.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '700', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>View Details &rarr;</Link>
            </div>

            {/* Card 4 */}
            <div className="glass-panel hover-lift-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-card)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(0, 172, 193, 0.08)', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifySelf: 'start', justifyContent: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Corporate Rentals</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>High-quality sedans and executive minivans for executive guests, business meetings, and staff commutes.</p>
              <Link href="/#book-now" style={{ color: 'var(--accent-gold)', fontSize: '14px', fontWeight: '700', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>View Details &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Vehicle Image Carousel Showcase (Replaced YouTube Section) */}
      <section id="fleet-showcase" className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>Travel Experiences</span>
            <h2 className="heading-uppercase" style={{ fontSize: '36px', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Explore Odisha and Nearby States with Comfort
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Browse our luxury travel segments and choose the perfect vehicle class for your journey.
            </p>
          </div>
          <VehicleCarousel />
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="section-padding" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>Choose Your Ride</span>
            <h2 className="heading-uppercase" style={{ fontSize: '36px', marginBottom: '16px' }}>
              Our Premium Vehicle Fleet
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Choose from our comfortable and well-maintained vehicles for your next journey. No advance needed.
            </p>
          </div>

          <FleetSection />
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="glow-badge" style={{ marginBottom: '12px' }}>Destinations Guide</span>
              <h2 className="heading-uppercase" style={{ fontSize: '36px' }}>
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

      {/* Asymmetric Day Trip Offer Section (Inspired by Cruise Deals layout in 99designs - pricing removed) */}
      <section id="special-offers" className="section-padding" style={{ background: 'var(--bg-section-alt)', overflow: 'hidden', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <span className="glow-badge">Special Outstation Offer</span>
              <h2 className="heading-uppercase" style={{ fontSize: '36px', fontWeight: '800', lineHeight: '1.2' }}>
                Day Trips to Puri & Konark Sun Temple
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Experience the magic of Odisha's Golden Triangle with our flat-rate day packages. No upfront fees, professional driver-guides, and sanitized luxury cabs waiting at your doorstep.
              </p>
              <a href="#book-now" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Book Package Now</a>
            </div>

            {/* Right Asymmetric Cutout Image */}
            <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Decorative background shape */}
              <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(0,172,193,0.06) 100%)', borderRadius: '24px', transform: 'rotate(-3deg)' }}></div>
              {/* Beautiful scenic overlay card */}
              <div
                className="glass-panel hover-lift-card hover-zoom-container"
                style={{
                  position: 'relative',
                  width: '95%',
                  height: '340px',
                  borderRadius: '16px',
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                  transform: 'rotate(2deg)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '32px',
                  color: '#FFFFFF'
                }}
              >
                {/* Background Zoom Image */}
                <div
                  className="hover-zoom-image"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("/assests/suntempleKonark-gJAyjDUN.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '16px',
                    zIndex: 1
                  }}
                />

                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,23,42,0.1) 40%, rgba(15,23,42,0.85) 100%)', borderRadius: '16px', zIndex: 2 }}></div>

                <div style={{ position: 'relative', zIndex: 3 }}>
                  <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-teal)' }}>UNESCO World Heritage</span>
                  <h4 style={{ fontSize: '24px', fontWeight: '800', marginTop: '4px' }}>Konark Sun Temple</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Contrast Whatsapp/Call Promo Banner (Inspired by App Download Banner in 99designs) */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div className="promo-banner-container">
            {/* Background design elements */}
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '300px', height: '300px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%', filter: 'blur(30px)' }}></div>

            {/* Left Content */}
            <div className="promo-banner-text">
              <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#FFF', background: 'rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: '9999px', alignSelf: 'flex-start' }}>
                Instant Booking Desk
              </span>
              <h2 style={{ fontSize: '38px', fontWeight: '800', lineHeight: '1.25', color: '#FFFFFF' }}>
                Book Your Cab on WhatsApp Instantly
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.7' }}>
                Want to book a ride without filling forms? Chat directly with our 24/7 travel desk. Get instant quotes, driver details, and clean vehicles within minutes.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="promo-banner-actions">
              <a
                href="https://wa.me/919090809910"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#FFFFFF',
                  color: '#4F46E5',
                  padding: '16px 36px',
                  borderRadius: '8px',
                  fontWeight: '800',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '16px'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.09-3.977l.329.195c1.7.1 3.51.529 5.539.53 5.422-.003 9.837-4.42 9.84-9.845.002-2.628-1.02-5.1-2.878-6.958-1.859-1.859-4.329-2.883-6.963-2.884-5.429 0-9.844 4.417-9.847 9.84-.001 2.012.524 3.98 1.52 5.722l.21.365-1.002 3.661 3.752-.984zM17.472 14.3c-.3-.149-1.777-.878-2.05-.978-.272-.098-.47-.149-.669.149-.198.297-.767.978-.94 1.178-.173.197-.347.223-.647.074-.3-.149-1.265-.466-2.41-1.487-.89-.794-1.49-1.77-1.664-2.07-.173-.299-.018-.46.131-.609.135-.133.3-.347.449-.52.149-.173.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.778-.727 2.025-1.429.248-.699.248-1.299.173-1.429-.075-.13-.272-.208-.572-.357z" />
                </svg>
                Book via WhatsApp
              </a>
              <a
                href="tel:+919090809910"
                className="btn"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  color: '#FFFFFF',
                  padding: '14px 36px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '15px'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Coordinator directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ background: 'var(--bg-section-alt)' }}>
        <div className="container">
          <div className="two-col-grid">
            {/* Left Col: Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <span className="glow-badge" style={{ marginBottom: '12px' }}>Why Choose Us</span>
                <h2 className="heading-uppercase" style={{ fontSize: '36px', marginBottom: '16px' }}>
                  Safety & Comfort on Every Road
                </h2>
                <p>We pride ourselves on offering the most customer-friendly taxi service in Odisha. Over 10,000+ completed rides speak for our devotion.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px', color: 'var(--accent-teal)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', fontWeight: '800' }}>Zero Advance Payment</h4>
                    <p style={{ fontSize: '14px' }}>Pay directly to your driver in cash or digital transfer after completing the journey safely.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px', color: 'var(--accent-teal)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', fontWeight: '800' }}>Professional Local Drivers</h4>
                    <p style={{ fontSize: '14px' }}>Our chauffeurs are highly trained, background-verified, and exceptionally knowledgeable about routes.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ fontSize: '20px', color: 'var(--accent-teal)', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', fontWeight: '800' }}>24/7 Helpline & Dispatch</h4>
                    <p style={{ fontSize: '14px' }}>Have questions or need change in schedules? Reach our support desk at any time during your trip.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Quote Card */}
            <div className="glass-panel hover-lift-card" style={{ padding: '48px', position: 'relative', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '80px', color: 'rgba(37, 99, 235, 0.05)', fontFamily: 'var(--font-serif)', position: 'absolute', top: '10px', left: '20px', lineHeight: 1 }}>
                “
              </div>
              <p style={{ fontSize: '18px', fontStyle: 'italic', position: 'relative', zIndex: 10, marginBottom: '24px', lineHeight: '1.6' }}>
                We booked the AC Innova Crysta for our family tour to Puri and Konark Sun Temple. The cab was super clean, the air conditioning was excellent, and the driver was extremely polite and acted as a great guide! Best of all, we paid after the trip was over. Fully recommended!
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-teal) 100%)' }}></div>
                <div>
                  <div style={{ fontWeight: '700' }}>Pramod Puhan</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Corporate Manager, Travelled to Puri</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="glow-badge" style={{ marginBottom: '12px' }}>Travel Tips</span>
              <h2 className="heading-uppercase" style={{ fontSize: '36px' }}>
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
                className="glass-panel hover-lift-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ height: '6px', background: 'var(--accent-gold)' }} />
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800' }}>{post.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{post.excerpt}</p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    style={{
                      color: 'var(--accent-gold)',
                      fontSize: '14px',
                      fontWeight: '700',
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
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
