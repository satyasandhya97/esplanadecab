'use client';

import React from 'react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

const getDestinationImage = (destination: Destination) => {
  if (destination.image) return destination.image;
  const images: Record<string, string> = {
    'jagannath-temple': '/assests/jagannathpuri-L897Iz2Y.jpg',
    'konark-sun-temple': '/assests/suntempleKonark-gJAyjDUN.jpg',
    'dhauli-peace-pagoda': '/assests/dhauli1-ECf85SZ-.jpg',
    'chilika-lake': '/assests/chilika-QA3lyluq.jpg',
    'bhitarkanika-sanctuary': '/assests/bhitarkanika-GwLTNnZj.jpg',
    'navadvipa': '/assests/navadvipakolkata-qNYqwfUl.jpg',
    'baidyanath-dham': '/assests/BabaBaidyanath-ml0t5fE1.jpg',
    'gangasagar': '/assests/gangasagar-Q2hUDeLL.jpg',
    'darjeeling': '/assests/DARJEELING-J5i8BuTF.jpg',
    'similipal-national-park': '/assests/Similipal-PGJbJeMI.jpg',
    'koraput-valley': '/assests/Koraput-xmHS2r__.jpg',
    'malkangiri': '/assests/Malkangiri-GFA0KlvE.jpg',
    'hirakud-dam': '/assests/HirakudDam-QHE__Wqf.jpg',
    'satkosia-gorge': '/assests/Satkosia-0fnPzX2M.jpg',
    'chitrakoot-falls': '/assests/chitrakotwaterfalls-u9qgl7JW.jpg',
  };
  return images[destination.id] || '/assests/jagannathpuri-L897Iz2Y.jpg';
};

// Generate deterministic star rating based on destination name length
const getMockRating = (name: string) => {
  const score = 4.5 + (name.length % 6) * 0.1;
  const rating = Math.min(score, 5.0).toFixed(1);
  const reviewsCount = 45 + (name.length * 7) % 180;
  return { rating, reviewsCount };
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  const { rating, reviewsCount } = getMockRating(destination.name);
  const imageUrl = getDestinationImage(destination);

  const handleQuickBook = () => {
    // Scroll to the booking form
    const bookingForm = document.getElementById('book-now');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
      
      // Auto-prefill the drop location in booking form if it exists
      const dropInput = document.querySelector('input[placeholder*="Destination city"]') as HTMLInputElement;
      if (dropInput) {
        dropInput.value = destination.location.split(',')[0];
        // Trigger React onChange by updating value property setter
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
        if (setter) {
          setter.call(dropInput, destination.location.split(',')[0]);
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
          height: '200px', 
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#FFF',
          padding: '20px'
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
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 40%, rgba(15, 23, 42, 0.45) 100%)',
            zIndex: 2
          }}
        />

        {/* Layer 3: Interactive badging & text overlay */}
        <div style={{ position: 'relative', zIndex: 3, width: '100%' }}>
          {/* Category badge */}
          <div style={{ position: 'absolute', bottom: '150px', right: '-4px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '800', 
                background: 'rgba(15, 23, 42, 0.75)', 
                backdropFilter: 'blur(4px)',
                color: '#FFF', 
                padding: '4px 8px', 
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
            >
              {destination.category}
            </span>
          </div>

          {/* Region badge */}
          <div style={{ position: 'absolute', bottom: '150px', left: '-4px' }}>
            <span 
              style={{ 
                fontSize: '10px', 
                fontWeight: '700', 
                background: 'rgba(0, 172, 193, 0.85)', 
                backdropFilter: 'blur(4px)',
                color: '#FFF', 
                padding: '4px 8px', 
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {destination.region}
            </span>
          </div>
          
          {/* Location Text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', textShadow: '0 2px 4px rgba(0,0,0,0.5)', fontSize: '13px', fontWeight: '600' }}>
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
          padding: '24px', 
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
            <span style={{ color: 'var(--accent-teal)', fontWeight: '700' }}>{rating}</span>
            <div style={{ color: 'var(--accent-teal)', display: 'flex', gap: '1px' }}>
              {'★'.repeat(Math.round(parseFloat(rating)))}
              {'☆'.repeat(5 - Math.round(parseFloat(rating)))}
            </div>
            <span style={{ color: 'var(--text-muted)' }}>({reviewsCount} reviews)</span>
          </div>

          <h3 
            style={{ 
              fontSize: '20px', 
              fontWeight: '800', 
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              margin: '4px 0'
            }}
          >
            {destination.name}
          </h3>
          
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {destination.description}
          </p>
        </div>

        <button 
          onClick={handleQuickBook}
          style={{
            background: 'var(--accent-gold)',
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
            e.currentTarget.style.background = 'var(--accent-gold-hover)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-gold)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Book Outstation Taxi 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
