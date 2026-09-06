'use client';

import React from 'react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const getDestinationImage = (destination: Destination) => {
  if (destination.image) return destination.image;
  const images: Record<string, string> = {
    'lingaraj-temple': '/assests/lingaraj-temple.jpg',
    'mukteshwar-temple': '/assests/mukteshwar-temple.jpg',
    'dhauli-peace-pagoda': '/assests/dhauli1-ECf85SZ-.jpg',
    'chausathi-yogini-temple': '/assests/chausathi-yogini-temple.jpg',
    'brahmeswara-temple': '/assests/brahmeswara-temple.jpg',
    'khandagiri-udayagiri-caves': '/assests/khandagiri-caves.jpg',
    'ayodhya-ram-mandir': '/assests/ayodhya-ram-mandir.jpg',
    'triveni-sangam-prayagraj': '/assests/triveni-sangam-prayagraj.jpg',
    'varanasi-kashi-vishwanath': '/assests/varanasi-kashi-vishwanath.jpg',
    'navadvipa-mayapur-krishnanagar': '/assests/mayapur-krishnanagar.jpg',
    'jagannath-temple': '/assests/jagannathpuri-L897Iz2Y.jpg',
    'konark-sun-temple': '/assests/suntempleKonark-gJAyjDUN.jpg',
    'chilika-lake': '/assests/chilika-QA3lyluq.jpg',
    'bhitarkanika-sanctuary': '/assests/bhitarkanika-GwLTNnZj.jpg',
    'baidyanath-dham': '/assests/BabaBaidyanath-ml0t5fE1.jpg',
    'gangasagar': '/assests/gangasagar-Q2hUDeLL.jpg',
    'darjeeling': '/assests/DARJEELING-J5i8BuTF.jpg',
    'similipal-national-park': '/assests/Similipal-PGJbJeMI.jpg',
    'koraput-valley': '/assests/Koraput-xmHS2r__.jpg',
    'hirakud-dam': '/assests/HirakudDam-QHE__Wqf.jpg',
    'satkosia-gorge': '/assests/Satkosia-0fnPzX2M.jpg',
    'chitrakoot-falls': '/assests/chitrakotwaterfalls-u9qgl7JW.jpg',
  };
  return images[destination.id] || '/assests/jagannathpuri-L897Iz2Y.jpg';
};

// Generate deterministic star rating based on destination name length
const getMockRating = (name: string) => {
  const score = 4.7 + (name.length % 4) * 0.1;
  const rating = Math.min(score, 5.0).toFixed(1);
  const reviewsCount = 55 + (name.length * 9) % 210;
  return { rating, reviewsCount };
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  const { rating, reviewsCount } = getMockRating(destination.name);
  const imageUrl = getDestinationImage(destination);
  const isLocal = destination.tripType === 'Local Sightseeing';

  const handleQuickBook = () => {
    // Scroll to the booking form
    const bookingForm = document.getElementById('book-now');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
      
      // Auto-prefill the drop location in booking form if it exists
      const dropInput = document.querySelector('input[placeholder*="Destination city"]') as HTMLInputElement;
      if (dropInput) {
        dropInput.value = destination.name;
        // Trigger React onChange by updating value property setter
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
        if (setter) {
          setter.call(dropInput, destination.name);
          dropInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    }
  };

  return (
    <div 
      className="glass-panel hover-lift-card" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        overflow: 'hidden',
        border: '1px solid var(--border-light)',
        background: 'var(--bg-card)',
        borderRadius: '12px',
        boxShadow: 'var(--card-shadow)'
      }}
    >
      {/* Scenic Photo Thumbnail with layered hover-zoom effect */}
      <div 
        className="hover-zoom-container"
        style={{ 
          height: '210px', 
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#FFF',
          padding: '16px'
        }}
      >
        {/* Layer 1: Background Image */}
        <div 
          className="hover-zoom-image"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1
          }}
        />

        {/* Layer 2: Gradient Overlay */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.15) 30%, rgba(15, 23, 42, 0.8) 100%)',
            zIndex: 2
          }}
        />

        {/* Layer 3: Interactive badging & text overlay */}
        <div style={{ position: 'relative', zIndex: 3, width: '100%' }}>
          {/* Category & Trip Type badges */}
          <div style={{ position: 'absolute', bottom: '155px', right: '-4px', display: 'flex', gap: '6px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '800', 
                background: 'rgba(15, 23, 42, 0.85)', 
                backdropFilter: 'blur(4px)',
                color: '#FFF', 
                padding: '4px 8px', 
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              {destination.category}
            </span>
          </div>

          {/* Region / Trip Type badge */}
          <div style={{ position: 'absolute', bottom: '155px', left: '-4px', display: 'flex', gap: '4px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '700', 
                background: isLocal ? 'rgba(16, 185, 129, 0.9)' : 'rgba(0, 172, 193, 0.9)', 
                backdropFilter: 'blur(4px)',
                color: '#FFF', 
                padding: '4px 8px', 
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {destination.tripType || destination.region}
            </span>
          </div>
          
          {/* Location Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', textShadow: '0 2px 4px rgba(0,0,0,0.6)', fontSize: '13px', fontWeight: '600' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent-teal)' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{destination.location}</span>
          </div>
        </div>
      </div>

      {/* Details Box */}
      <div 
        style={{ 
          padding: '22px', 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1, 
          justifyContent: 'space-between',
          gap: '16px',
          background: 'var(--bg-card)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Rating stars row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent-teal)', fontWeight: '700' }}>{rating}</span>
              <div style={{ color: 'var(--accent-gold)', display: 'flex', gap: '1px' }}>
                {'★'.repeat(Math.round(parseFloat(rating)))}
                {'☆'.repeat(5 - Math.round(parseFloat(rating)))}
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>({reviewsCount})</span>
            </div>
            {destination.bestTime && (
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', background: 'rgba(15, 23, 42, 0.05)', padding: '2px 6px', borderRadius: '4px' }}>
                {destination.bestTime.split('&')[0]}
              </span>
            )}
          </div>

          <h3 
            style={{ 
              fontSize: '18px', 
              fontWeight: '800', 
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              margin: '2px 0'
            }}
          >
            {destination.name}
          </h3>
          
          <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {destination.description}
          </p>

          {/* Highlights pills */}
          {destination.highlights && destination.highlights.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
              {destination.highlights.slice(0, 3).map((hl, i) => (
                <span 
                  key={i}
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    background: 'rgba(37, 99, 235, 0.05)',
                    border: '1px solid rgba(37, 99, 235, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: '500'
                  }}
                >
                  ✓ {hl}
                </span>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
          {destination.distance && (
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>{destination.distance}</span>
            </div>
          )}

          <button 
            onClick={handleQuickBook}
            style={{
              background: isLocal ? 'linear-gradient(135deg, #059669 0%, #10B981 100%)' : 'var(--accent-gold)',
              border: 'none',
              color: '#FFFFFF',
              padding: '12px 16px',
              borderRadius: '6px',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 4px 10px rgba(37, 99, 235, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1.1)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'brightness(1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {isLocal ? 'Book Local Sightseeing Cab' : 'Book Outstation Taxi'} 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
