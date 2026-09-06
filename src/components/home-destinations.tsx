'use client';

import React, { useState } from 'react';
import { destinations, Destination } from '@/data/destinations';
import DestinationCard from '@/components/destination-card';

type FilterTab = 'All' | 'Local Sightseeing' | 'Odisha' | 'Uttar Pradesh' | 'West Bengal' | 'Hyderabad' | 'Visakhapatnam' | 'Jharkhand' | 'Other';

const filterTabs: { label: string; value: FilterTab }[] = [
  { label: 'All Destinations', value: 'All' },
  { label: '📍 Bhubaneswar Local', value: 'Local Sightseeing' },
  { label: '🕉️ UP Holy Cities', value: 'Uttar Pradesh' },
  { label: '🚗 Odisha Outstation', value: 'Odisha' },
  { label: '🏛️ Kolkata & WB', value: 'West Bengal' },
  { label: '🏰 Hyderabad', value: 'Hyderabad' },
  { label: '🌊 Visakhapatnam', value: 'Visakhapatnam' },
  { label: '🌲 Jharkhand', value: 'Jharkhand' },
  { label: '⛰️ Other', value: 'Other' },
];

export default function HomeDestinations() {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');
  const [searchQuery, setSearchQuery] = useState('');

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

    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dest.highlights && dest.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesTab && matchesSearch;
  });

  const getTabCount = (tabValue: FilterTab) => {
    if (tabValue === 'All') return destinations.length;
    if (tabValue === 'Local Sightseeing') return destinations.filter(d => d.tripType === 'Local Sightseeing').length;
    if (tabValue === 'Odisha') return destinations.filter(d => d.region === 'Odisha' && d.tripType !== 'Local Sightseeing').length;
    if (tabValue === 'Other') return destinations.filter(d => !['West Bengal', 'Hyderabad', 'Visakhapatnam', 'Jharkhand', 'Odisha', 'Uttar Pradesh'].includes(d.region)).length;
    return destinations.filter(d => d.region === tabValue).length;
  };

  return (
    <section id="destinations" className="section-padding" style={{ background: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header with live search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="glow-badge" style={{ marginBottom: '12px' }}>Complete Travel & Sightseeing Guide</span>
            <h2 className="heading-uppercase" style={{ fontSize: '36px', fontWeight: '800' }}>
              Best Places to Visit ({destinations.length} Places)
            </h2>
            <p style={{ maxWidth: '640px', fontSize: '15px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.6' }}>
              Browse all {destinations.length} top-rated destinations — from Bhubaneswar local temples & caves to holy outstations (Ayodhya, Varanasi, Prayagraj, Mayapur) and scenic tour hotspots.
            </p>
          </div>

          {/* Search bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
            <input
              type="text"
              placeholder="Search spots, temples, caves..."
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

        {/* Quick Filter Tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
          {filterTabs.map((tab) => {
            const count = getTabCount(tab.value);
            const isActive = activeTab === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                style={{
                  padding: '9px 16px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.08)',
                  background: isActive ? 'rgba(37, 99, 235, 0.08)' : '#FFFFFF',
                  color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
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
                    background: isActive ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.06)',
                    color: isActive ? '#FFFFFF' : 'var(--text-muted)'
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* All Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
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
            <p>We couldn't find any places matching "{searchQuery}". Try selecting another category or clear your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
