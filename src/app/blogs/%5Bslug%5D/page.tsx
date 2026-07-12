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
    <div style={{ background: '#0B0F19', minHeight: '80vh', paddingBottom: '100px' }}>
      {/* Blog Hero Header */}
      <section 
        style={{ 
          background: post.gradient,
          padding: '100px 0 60px 0',
          textAlign: 'center',
          color: '#FFF',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="glow-badge" style={{ marginBottom: '16px', background: 'rgba(0,0,0,0.2)' }}>
            {post.readTime}
          </span>
          <h1 style={{ fontSize: '44px', fontFamily: 'var(--font-serif)', marginBottom: '16px', lineHeight: '1.2' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
            <span>By {post.author}</span>
            <span>&bull;</span>
            <span>Published on {post.date}</span>
          </div>
        </div>
      </section>

      {/* Blog Body and Sidebar */}
      <section style={{ marginTop: '60px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <Link 
            href="/blogs" 
            style={{ 
              color: 'var(--accent-gold)', 
              fontSize: '14px', 
              fontWeight: '600', 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '32px'
            }}
          >
            &larr; Back to Blogs List
          </Link>

          {/* Article Text Content */}
          <article style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
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
              border: '1px solid rgba(245,158,11,0.15)',
              background: 'radial-gradient(circle, rgba(17,24,39,0.9) 0%, rgba(11,15,25,0.9) 100%)'
            }}
          >
            <h3 style={{ fontSize: '24px', color: '#FFF', fontFamily: 'var(--font-serif)', marginBottom: '8px' }}>
              Plan a Trip to this Destination?
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px auto' }}>
              Esplanade Cabs offers premium, sanitized sedan and SUV rental packages directly from Bhubaneswar. Zero advance payment required.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/#book-now" className="btn btn-primary">
                Book A Taxi
              </Link>
              <a href="tel:+919090809910" className="btn btn-secondary">
                Call +91 90908 09910
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
