import React from 'react';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div style={{ background: 'transparent', minHeight: '80vh', paddingBottom: '100px' }}>
      {/* Blog Hero Header with HD Image */}
      <section 
        style={{ 
          position: 'relative',
          marginTop: '-80px',
          paddingTop: '160px',
          paddingBottom: '100px',
          textAlign: 'center',
          color: '#FFF',
          overflow: 'hidden'
        }}
      >
        {/* Background HD Image */}
        <div 
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
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.92) 100%)',
            zIndex: 2
          }}
        />

        <div className="container" style={{ maxWidth: '860px', position: 'relative', zIndex: 3 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <span 
              className="glow-badge" 
              style={{ 
                background: 'rgba(0, 172, 193, 0.25)', 
                borderColor: 'rgba(0, 172, 193, 0.6)',
                color: 'var(--accent-teal)'
              }}
            >
              {post.city}
            </span>
            <span 
              className="glow-badge" 
              style={{ 
                background: 'rgba(255, 255, 255, 0.15)', 
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#FFF'
              }}
            >
              {post.readTime}
            </span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px', lineHeight: '1.25', color: '#FFFFFF' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
            <span>By {post.author}</span>
            <span>&bull;</span>
            <span>Published on {post.date}</span>
          </div>
        </div>
      </section>

      {/* Blog Body and Sidebar */}
      <section style={{ marginTop: '50px' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          <Link 
            href="/blogs" 
            style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '14px', 
              fontWeight: '700', 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '32px'
            }}
          >
            &larr; Back to All Guides
          </Link>

          {/* Highlights Box if available */}
          {post.highlights && post.highlights.length > 0 && (
            <div 
              className="glass-panel"
              style={{
                padding: '24px 32px',
                borderRadius: '12px',
                marginBottom: '40px',
                border: '1px solid var(--border-light)',
                background: 'rgba(37, 99, 235, 0.04)'
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '16px', color: 'var(--accent-gold)' }}>
                Key Highlights & Attractions
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                {post.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent-teal)' }}>✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Text Content */}
          <article style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.85' }}>
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </article>

          {/* Contact booking callout card */}
          <div 
            className="glass-panel" 
            style={{ 
              marginTop: '60px', 
              padding: '40px', 
              textAlign: 'center', 
              borderRadius: '16px',
              border: '1px solid var(--border-light)',
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(0, 172, 193, 0.08) 100%)'
            }}
          >
            <span className="glow-badge" style={{ marginBottom: '12px' }}>Outstation Travel Desk</span>
            <h3 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Planning a Road Trip to {post.city.split(',')[0]}?
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '540px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
              Esplanade Cabs offers premium, sanitized Sedan (Dzire/Etios) and SUV (Innova Crysta/Fortuner) rental packages directly from Bhubaneswar. Zero advance payment required.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/#book-now" className="btn btn-primary">
                Book A Taxi Now
              </Link>
              <a href="tel:+919090809910" className="btn btn-secondary">
                Call Coordinator: +91 90908 09910
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
