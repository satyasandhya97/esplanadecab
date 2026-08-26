'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // If we're not on client side, do nothing
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initialize state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHome = pathname === '/';
  // Transparent if on homepage and not scrolled
  const isTransparent = isHome && !isScrolled;

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: isTransparent ? 'none' : 'blur(20px)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(20px)',
        borderBottom: isTransparent ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(15, 23, 42, 0.08)',
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: isTransparent ? 'none' : '0 4px 20px -10px rgba(15, 23, 42, 0.05)'
      }}
    >
      <div className="container header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link 
          href="/" 
          className="logo-text" 
          style={{ 
            color: isTransparent ? '#FFFFFF' : 'var(--text-primary)',
            transition: 'color 0.3s ease'
          }}
        >
          Esplanade<span style={{ color: 'var(--accent-teal)' }}>Cabs</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li>
              <Link 
                href="/" 
                className="nav-link"
                style={{ 
                  color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)'
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="nav-link"
                style={{ 
                  color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)'
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/destinations" 
                className="nav-link"
                style={{ 
                  color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)'
                }}
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link 
                href="/blogs" 
                className="nav-link"
                style={{ 
                  color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)'
                }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="nav-link"
                style={{ 
                  color: isTransparent ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)'
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a 
            href="tel:+919090809910" 
            style={{ 
              fontWeight: '700', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              fontSize: '15px',
              color: isTransparent ? '#FFFFFF' : 'var(--text-primary)',
              transition: 'color 0.3s ease'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: isTransparent ? '#00ACC1' : 'var(--accent-teal)' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91 90908 09910
          </a>
          <Link 
            href="/#book-now" 
            className="btn" 
            style={{ 
              padding: '10px 20px', 
              borderRadius: '6px', 
              fontSize: '14px',
              background: isTransparent ? 'transparent' : 'var(--accent-gold)',
              color: isTransparent ? '#FFFFFF' : '#FFFFFF',
              border: isTransparent ? '1.5px solid #FFFFFF' : 'none',
              boxShadow: isTransparent ? 'none' : '0 4px 14px rgba(37, 99, 235, 0.25)',
              transition: 'all 0.3s ease'
            }}
          >
            Book Taxi
          </Link>
        </div>
      </div>
    </header>
  );
}
