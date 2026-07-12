'use client';

import React, { useState } from 'react';
import { vehicles, Vehicle } from '@/data/fleet';
import Image from 'next/image';

export default function FleetSection() {
  const [activeTab, setActiveTab] = useState(vehicles[3].id); // Default to Innova Crysta

  const activeVehicle = vehicles.find((v) => v.id === activeTab) || vehicles[3];

  return (
    <div className="glass-panel" style={{ padding: '40px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
      {/* Selector Tabs */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '12px', 
          marginBottom: '40px', 
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '20px'
        }}
      >
        {vehicles.map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveTab(v.id)}
            style={{
              padding: '12px 20px',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: activeTab === v.id ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.08)',
              background: activeTab === v.id ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
              color: activeTab === v.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
              transition: 'var(--transition-smooth)',
            }}
          >
            {v.name}
          </button>
        ))}
      </div>

      {/* Vehicle Display Pane */}
      <div className="fleet-display-grid">
        {/* Car Image Box */}
        <div 
          style={{ 
            position: 'relative', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            background: 'radial-gradient(circle, #1F2937 0%, #111827 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '280px',
            padding: '20px'
          }}
        >
          <div 
            style={{ 
              position: 'absolute', 
              top: '16px', 
              left: '16px', 
              zIndex: 10 
            }}
          >
            <span className="glow-badge">₹{activeVehicle.pricePerKm}/km Est</span>
          </div>

          <Image 
            src={activeVehicle.image} 
            alt={activeVehicle.name} 
            width={480}
            height={270}
            priority
            style={{ 
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.6))',
              transition: 'transform 0.5s ease'
            }}
          />
        </div>

        {/* Specifications Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ fontSize: '32px', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '4px' }}>
              {activeVehicle.name}
            </h4>
            <span style={{ fontSize: '13px', color: 'var(--accent-gold)', fontWeight: '600', letterSpacing: '0.05em' }}>
              {activeVehicle.subName}
            </span>
          </div>

          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {activeVehicle.description}
          </p>

          {/* Quick specs grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '16px', 
              padding: '16px 0', 
              borderTop: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--accent-gold)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>PASSENGERS</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFF' }}>{activeVehicle.passengers} Adults</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: 'var(--accent-gold)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>LUGGAGE CAPACITY</div>
                <div style={{ fontSize: '15px', fontWeight: '600', color: '#FFF' }}>{activeVehicle.bags} Large Bags</div>
              </div>
            </div>
          </div>

          {/* Features checkmarks list */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px' }}>
            {activeVehicle.features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-teal)', fontSize: '14px' }}>✓</span>
                {feat}
              </div>
            ))}
          </div>

          <a href="#book-now" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '10px' }}>
            Book {activeVehicle.name} Now
          </a>
        </div>
      </div>

    </div>
  );
}
