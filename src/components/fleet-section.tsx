'use client';

import React from 'react';
import { vehicles } from '@/data/fleet';
import Image from 'next/image';

export default function FleetSection() {
  const handleBookClick = () => {
    const bookingForm = document.getElementById('book-now');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '30px',
        marginTop: '20px'
      }}
    >
      {vehicles.map((v) => (
        <div
          key={v.id}
          className="glass-panel hover-lift-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            borderRadius: '12px',
            boxShadow: 'var(--card-shadow)'
          }}
        >
          {/* Vehicle Image with zoom hover effect */}
          <div
            className="hover-zoom-container"
            style={{
              position: 'relative',
              width: '100%',
              height: '200px',
              background: 'radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, rgba(248, 250, 252, 0.95) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid var(--border-light)'
            }}
          >
            <Image
              src={v.image}
              alt={v.name}
              fill
              className="hover-zoom-image"
              style={{
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
            />
            {/* Floating Type Badge */}
            <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10 }}>
              <span className="glow-badge" style={{ background: 'rgba(0, 172, 193, 0.85)', color: '#FFFFFF', border: 'none', fontSize: '10px' }}>
                {v.type}
              </span>
            </div>
          </div>

          {/* Details Section */}
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
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '2px' }}>
                  {v.name}
                </h4>
                <span style={{ fontSize: '12px', color: 'var(--accent-teal)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {v.subName}
                </span>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '4px 0' }}>
                {v.description}
              </p>

              {/* Seating and Luggage Capacity */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  padding: '12px 0', 
                  borderTop: '1px solid var(--border-light)',
                  borderBottom: '1px solid var(--border-light)',
                  marginTop: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--accent-gold)' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  </svg>
                  <span><strong>{v.passengers}</strong> Seats</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--accent-gold)' }}>
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span><strong>{v.bags}</strong> Bags</span>
                </div>
              </div>

              {/* Features List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 12px', marginTop: '8px' }}>
                {v.features.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold' }}>✓</span>
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleBookClick}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '700',
                boxShadow: '0 4px 10px rgba(37, 99, 235, 0.15)'
              }}
            >
              Book {v.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
