'use client';

import React, { useState } from 'react';
import { destinations, Destination } from '@/data/destinations';
import DestinationCard from '@/components/destination-card';

type RegionFilter = 'All' | 'West Bengal' | 'Hyderabad' | 'Visakhapatnam' | 'Jharkhand' | 'Odisha' | 'Other';

const filterTabs: { label: string; value: RegionFilter }[] = [
  { label: 'All Destinations', value: 'All' },
  { label: 'Kolkata & WB', value: 'West Bengal' },
  { label: 'Hyderabad', value: 'Hyderabad' },
  { label: 'Visakhapatnam', value: 'Visakhapatnam' },
  { label: 'Jharkhand', value: 'Jharkhand' },
  { label: 'Odisha', value: 'Odisha' },
  { label: 'Other', value: 'Other' },
];

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<RegionFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredDestinations = destinations.filter((dest) => {
    const matchesRegion = activeTab === 'All' || 
      (activeTab === 'Other' && !['West Bengal', 'Hyderabad', 'Visakhapatnam', 'Jharkhand', 'Odisha'].includes(dest.region)) ||
      dest.region === activeTab;
    
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dest.highlights && dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesRegion && matchesSearch;
  });

  return (
    <div style={{ background: 'transparent', minHeight: '80vh' }}>
      {/* Header section */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.8)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '-80px', // Pulls page header behind the transparent header
          paddingTop: '160px', // Offsets header height
          paddingBottom: '80px',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <span className="glow-badge" style={{ marginBottom: '12px', color: 'var(--accent-teal)', background: 'rgba(0,172,193,0.1)', borderColor: 'rgba(0,172,193,0.3)' }}>Explore Major Attractions</span>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px', color: '#FFFFFF' }}>
            Best Places to Visit
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto' }}>
            Discover top-rated tourist attractions in Kolkata, Hyderabad, Visakhapatnam, Jharkhand, and Odisha. Book comfortable outstation cabs with zero advance payment.
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
              {filterTabs.map((tab) => {
                const count = tab.value === 'All'
                  ? destinations.length
                  : destinations.filter(d => tab.value === 'Other' ? !['West Bengal', 'Hyderabad', 'Visakhapatnam', 'Jharkhand', 'Odisha'].includes(d.region) : d.region === tab.value).length;

                return (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    style={{
                      padding: '10px 18px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: activeTab === tab.value ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.08)',
                      background: activeTab === tab.value ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                      color: activeTab === tab.value ? 'var(--accent-gold)' : 'var(--text-secondary)',
                      transition: 'var(--transition-smooth)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>{tab.label}</span>
                    <span 
                      style={{ 
                        fontSize: '11px', 
                        padding: '2px 6px', 
                        borderRadius: '9999px',
                        background: activeTab === tab.value ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.06)',
                        color: activeTab === tab.value ? '#FFFFFF' : 'var(--text-muted)'
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Bar */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <input
                type="text"
                placeholder="Search spots, temples, waterfalls..."
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
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
              <h3 style={{ fontSize: '20px', marginBottom: '8px', fontFamily: 'var(--font-serif)' }}>
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
