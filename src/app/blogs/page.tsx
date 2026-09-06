import React from 'react';
import { blogs } from '@/data/blogs';
import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div style={{ background: 'transparent', minHeight: '80vh' }}>
      {/* Header section */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.8)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '-80px',
          paddingTop: '160px',
          paddingBottom: '80px',
          textAlign: 'center',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <span className="glow-badge" style={{ marginBottom: '12px', color: 'var(--accent-teal)', background: 'rgba(0,172,193,0.1)', borderColor: 'rgba(0,172,193,0.3)' }}>Travel Insights & Itineraries</span>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '8px', color: '#FFFFFF' }}>
            Latest Travel Blogs & Guides
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.9)', maxWidth: '680px', margin: '0 auto' }}>
            Handcrafted travel guides and road trip planners covering Kolkata, Hyderabad, Visakhapatnam, Jharkhand, and Odisha.
          </p>
        </div>
      </section>

      {/* Blogs Listing Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
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
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                {/* HD Image Thumbnail with Hover Zoom */}
                <div 
                  className="hover-zoom-container"
                  style={{ 
                    height: '220px', 
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '20px'
                  }}
                >
                  <div 
                    className="hover-zoom-image"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 1
                    }}
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.15) 30%, rgba(15, 23, 42, 0.8) 100%)',
                      zIndex: 2
                    }}
                  />
                  <div style={{ position: 'relative', zIndex: 3, display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                    <span 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: '700', 
                        background: 'rgba(0, 172, 193, 0.9)', 
                        backdropFilter: 'blur(4px)',
                        color: '#FFF', 
                        padding: '4px 10px', 
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em'
                      }}
                    >
                      {post.city}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '11px', 
                        fontWeight: '600', 
                        background: 'rgba(15, 23, 42, 0.75)', 
                        backdropFilter: 'blur(4px)',
                        color: '#FFF', 
                        padding: '4px 8px', 
                        borderRadius: '4px'
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: '800', lineHeight: '1.3', color: 'var(--text-primary)' }}>
                    {post.title}
                  </h3>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blogs/${post.slug}`} 
                    style={{ 
                      color: 'var(--accent-gold)', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      marginTop: 'auto',
                      paddingTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Read Full Guide 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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
