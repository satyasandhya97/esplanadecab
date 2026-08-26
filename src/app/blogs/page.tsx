import React from 'react';
import { blogs } from '@/data/blogs';
import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div style={{ background: 'transparent', minHeight: '80vh' }}>
      {/* Header section */}
      <section 
        style={{ 
          background: 'linear-gradient(rgba(246, 245, 250, 0.75), rgba(246, 245, 250, 0.95)), url("/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="container">
          <span className="glow-badge" style={{ marginBottom: '12px' }}>Travel Insights</span>
          <h1 style={{ fontSize: '48px', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
            Latest Travel Blogs
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
            Read through our handpicked routes, local stories, and trip planners to get inspired.
          </p>
        </div>
      </section>

      {/* Blogs Listing Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {blogs.map((post) => (
              <div 
                key={post.slug} 
                className="glass-panel" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Visual Accent */}
                <div style={{ height: '180px', background: post.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
                  <h3 
                    style={{ 
                      fontSize: '24px', 
                      color: '#FFF', 
                      fontFamily: 'var(--font-serif)', 
                      textAlign: 'center',
                      textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      lineHeight: 1.2
                    }}
                  >
                    {post.title}
                  </h3>
                </div>

                {/* Content Box */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blogs/${post.slug}`} 
                    style={{ 
                      color: 'var(--accent-gold)', 
                      fontSize: '14px', 
                      fontWeight: '600', 
                      marginTop: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Read Article 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
