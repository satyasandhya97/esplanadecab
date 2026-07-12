'use client';

import React from 'react';
import { Destination } from '@/data/destinations';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  
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
      className="glass-panel" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Accent Gradient Thumbnail */}
      <div 
        style={{ 
          height: '140px', 
          background: destination.gradient, 
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF',
          padding: '20px',
          textAlign: 'center'
        }}
      >
        <span 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '24px', 
            fontWeight: '700',
            textShadow: '0 4px 12px rgba(0,0,0,0.3)',
            lineHeight: 1.1
          }}
        >
          {destination.name}
        </span>
        
        {/* Category badge */}
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <span 
            style={{ 
              fontSize: '10px', 
              fontWeight: '700', 
              background: 'rgba(0, 0, 0, 0.4)', 
              color: '#FFF', 
              padding: '4px 8px', 
              borderRadius: '4px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {destination.category}
          </span>
        </div>

        {/* Region badge */}
        <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
          <span 
            style={{ 
              fontSize: '11px', 
              fontWeight: '600', 
              background: 'rgba(255, 255, 255, 0.15)', 
              backdropFilter: 'blur(4px)',
              color: '#FFF', 
              padding: '3px 8px', 
              borderRadius: '9999px',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            {destination.region}
          </span>
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
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{destination.location}</span>
          </div>
          
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
            {destination.description}
          </p>
        </div>

        <button 
          onClick={handleQuickBook}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'var(--accent-gold)',
            padding: '10px 16px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          Quick Booking 
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
