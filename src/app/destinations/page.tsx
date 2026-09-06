'use client';

import React, { useState } from 'react';
import { destinations, Destination } from '@/data/destinations';
import DestinationCard from '@/components/destination-card';

type FilterTab = 'All' | 'Local Sightseeing' | 'Odisha' | 'Uttar Pradesh' | 'West Bengal' | 'Hyderabad' | 'Visakhapatnam' | 'Jharkhand' | 'Other';

const filterTabs: { label: string; value: FilterTab }[] = [
  { label: 'All Destinations', value: 'All' },
  { label: '🏛️ Bhubaneswar Local', value: 'Local Sightseeing' },
  { label: 'Odisha Outstation', value: 'Odisha' },
  { label: '🕉️ UP Holy Cities', value: 'Uttar Pradesh' },
  { label: 'Kolkata & WB', value: 'West Bengal' },
  { label: 'Hyderabad', value: 'Hyderabad' },
  { label: 'Visakhapatnam', value: 'Visakhapatnam' },
  { label: 'Jharkhand', value: 'Jharkhand' },
  { label: 'Other', value: 'Other' },
];

export default function DestinationsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [activeTripType, setActiveTripType] = useState<'ALL' | 'LOCAL' | 'OUTSTATION'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredDestinations = destinations.filter((dest) => {
    let matchesTab = true;
    if (activeTab === 'Local Sightseeing') {
      matchesTab = dest.tripType === 'Local Sightseeing';
    } else if (activeTab === 'Odisha') {
      matchesTab = dest.region === 'Odisha' && dest.tripType !== 'Local Sightseeing';
    } else if (activeTab === 'Other') {
      matchesTab = !['West Bengal', 'Hyderabad', 'Visakhapatnam', 'Jharkhand', 'Odisha', 'Uttar Pradesh'].includes(dest.region);
    } else if (activeTab !== 'All') {
      matchesTab = dest.region === activeTab;
    }

    let matchesTripType = true;
    if (activeTripType === 'LOCAL') {
      matchesTripType = dest.tripType === 'Local Sightseeing';
    } else if (activeTripType === 'OUTSTATION') {
      matchesTripType = dest.tripType === 'Outstation';
    }
    
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dest.highlights && dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesTab && matchesTripType && matchesSearch;
  });

  const getTabCount = (tabValue: FilterTab) => {
    if (tabValue === 'All') return destinations.length;
    if (tabValue === 'Local Sightseeing') return destinations.filter(d => d.tripType === 'Local Sightseeing').length;
    if (tabValue === 'Odisha') return destinations.filter(d => d.region === 'Odisha' && d.tripType !== 'Local Sightseeing').length;
    if (tabValue === 'Other') return destinations.filter(d => !['West Bengal', 'Hyderabad', 'Visakhapatnam', 'Jharkhand', 'Odisha', 'Uttar Pradesh'].includes(d.region)).length;
    return destinations.filter(d => d.region === tabValue).length;
  };

  return (
    <div style={{ background: 'transparent', minHeight: '80vh' }}>
      {/* Header section */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.85)), url("/hero-bg.png")',
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
          <span className="glow-badge" style={{ marginBottom: '12px', color: 'var(--accent-teal)', background: 'rgba(0,172,193,0.1)', borderColor: 'rgba(0,172,193,0.3)' }}>
            Explore Local Sightseeing & Outstation Tours
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '12px', color: '#FFFFFF' }}>
            Best Places to Visit
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '720px', margin: '0 auto' }}>
            Discover top-rated sightseeing attractions in Bhubaneswar, holy pilgrimage circuits (Ayodhya, Varanasi, Prayagraj, Mayapur), and outstation tours across Odisha, West Bengal, Telangana & Andhra Pradesh.
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
              flexDirection: 'column', 
              gap: '20px',
              marginBottom: '40px'
            }}
          >
            {/* Top row with quick category toggle and search */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '8px', background: 'rgba(15, 23, 42, 0.04)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                <button
                  onClick={() => setActiveTripType('ALL')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    border: 'none',
                    background: activeTripType === 'ALL' ? 'var(--accent-gold)' : 'transparent',
                    color: activeTripType === 'ALL' ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  All Travel ({destinations.length})
                </button>
                <button
                  onClick={() => { setActiveTripType('LOCAL'); setActiveTab('All'); }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    border: 'none',
                    background: activeTripType === 'LOCAL' ? '#10B981' : 'transparent',
                    color: activeTripType === 'LOCAL' ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  📍 Local Sightseeing ({destinations.filter(d => d.tripType === 'Local Sightseeing').length})
                </button>
                <button
                  onClick={() => { setActiveTripType('OUTSTATION'); }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    border: 'none',
                    background: activeTripType === 'OUTSTATION' ? 'var(--accent-teal)' : 'transparent',
                    color: activeTripType === 'OUTSTATION' ? '#FFFFFF' : 'var(--text-secondary)',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  🚗 Outstation Tours ({destinations.filter(d => d.tripType === 'Outstation').length})
                </button>
              </div>

              {/* Live Search Bar */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
                <input
                  type="text"
                  placeholder="Search temples, caves, ghats, cities..."
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

            {/* Region / Category Tabs */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {filterTabs.map((tab) => {
                const count = getTabCount(tab.value);

                return (
                  <button
                    key={tab.value}
                    onClick={() => { setActiveTab(tab.value); }}
                    style={{
                      padding: '9px 16px',
                      borderRadius: '8px',
                      fontSize: '13.5px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: activeTab === tab.value ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.08)',
                      background: activeTab === tab.value ? 'rgba(37, 99, 235, 0.08)' : 'var(--bg-card)',
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
                border: '1px dashed rgba(15, 23, 42, 0.15)',
                borderRadius: '12px'
              }}
            >
              <h3 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '700' }}>
                No Destinations Found
              </h3>
              <p>We couldn't find any places matching "{searchQuery}" under the selected filter. Try selecting another tab or clear the search.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
