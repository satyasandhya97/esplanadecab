'use client';

import React, { useState } from 'react';
import { destinations } from '@/data/destinations';
import DestinationCard from '@/components/destination-card';

type RegionFilter = 'All' | 'Odisha' | 'West Bengal' | 'Jharkhand' | 'Other';

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<RegionFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredDestinations = destinations.filter((dest) => {
    const matchesRegion = activeTab === 'All' || 
      (activeTab === 'Other' && dest.region !== 'Odisha' && dest.region !== 'West Bengal' && dest.region !== 'Jharkhand') ||
      dest.region === activeTab;
    
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesRegion && matchesSearch;
  });

  return (
    <div style={{ background: '#0B0F19', minHeight: '80vh' }}>
      {/* Header section */}
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
          <span className="glow-badge" style={{ marginBottom: '12px' }}>Explore Places</span>
          <h1 style={{ fontSize: '48px', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
            Best Places to Visit
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Plan your next journey with our reliable cab rentals. Filter by state or search our directory of 15 major tourist hotspots.
          </p>
        </div>
      </section>

      {/* Filter and Grid section */}
      <section className="section-padding">
        <div className="container">
          
          {/* Controls Bar */}
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {/* Region Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['All', 'Odisha', 'West Bengal', 'Jharkhand', 'Other'] as RegionFilter[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: activeTab === tab ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.08)',
                    background: activeTab === tab ? 'rgba(245, 158, 11, 0.08)' : 'transparent',
                    color: activeTab === tab ? 'var(--accent-gold)' : 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Live Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <input
                type="text"
                placeholder="Search spots, cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ paddingRight: '40px' }}
              />
              <div style={{ position: 'absolute', right: '14px', top: '14px', color: 'var(--text-muted)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Grid display */}
          {filteredDestinations.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
              {filteredDestinations.map((dest) => (
                <div key={dest.id}>
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </div>
          ) : (
            <div 
              className="glass-panel" 
              style={{ 
                padding: '60px', 
                textAlign: 'center', 
                color: 'var(--text-secondary)',
                border: '1px dashed rgba(255,255,255,0.1)'
              }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '8px', color: '#FFF', fontFamily: 'var(--font-serif)' }}>
                No Destinations Found
              </h3>
              <p>We couldn't find any places matching "{searchQuery}" in region "{activeTab}". Try another search term.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
