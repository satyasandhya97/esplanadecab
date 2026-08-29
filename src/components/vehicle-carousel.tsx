'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
  tag: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: '/assests/Innova Crysta1.jpg',
    title: 'Premium Group Tours & Travels',
    description: 'Travel across Odisha in supreme style with our luxurious 7-seater Toyota Innova Crysta, featuring reclining captain chairs and ambient climate control.',
    tag: 'Premium Travel'
  },
  {
    id: 2,
    image: '/assests/Fortune1.jpg',
    title: 'Commanding Highway Comfort',
    description: 'Conquer any terrain with the powerful Toyota Fortuner SUV. Perfect for rugged outstation journeys and premium business transfers.',
    tag: 'Premium SUV'
  },
  {
    id: 3,
    image: '/assests/Force Travler1.jpg',
    title: 'Group Tourism & Pilgrimages',
    description: 'Comfortable Force Tempo Traveller with pushback seats and individual air conditioning. Ideal for group tours to Puri Jagannath Temple and Konark.',
    tag: 'Group Travel'
  },
  {
    id: 4,
    image: '/cars/toyota_rumion.jpeg',
    title: 'Modern Family Sightseeing',
    description: 'Experience city sightseeing and outstation trips with the smart, fuel-efficient 7-seater Toyota Rumion. Elegant and budget-friendly.',
    tag: 'Family MPV'
  },
  {
    id: 5,
    image: '/assests/Toyota Etios.jpg',
    title: 'Reliable Airport & City Rides',
    description: 'Enjoy a smooth, hassle-free ride in our classic Toyota Etios sedan, famous for its massive boot capacity and quiet passenger cabin.',
    tag: 'Comfort Sedan'
  }
];

export default function VehicleCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalItems = carouselItems.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  return (
    <div 
      className="carousel-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div 
        className="carousel-slides-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={item.id}
              className={`carousel-slide ${isActive ? 'active-slide' : ''}`}
            >
              {/* Left Column: Image wrapper with zoom */}
              <div className="carousel-image-col hover-zoom-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  className="hover-zoom-image"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
                
                {/* Floating Category Badge */}
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                  <span className="glow-badge" style={{ background: 'var(--accent-gold)', color: '#FFFFFF', border: 'none' }}>
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Right Column: Descriptions */}
              <div className="carousel-info-col">
                <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap', width: '100%' }}>
                  <a href="#book-now" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '14px', flex: '1', minWidth: '130px', textAlign: 'center' }}>
                    Rent This Vehicle
                  </a>
                  <a href="#services" className="btn btn-secondary" style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '14px', flex: '1', minWidth: '130px', textAlign: 'center' }}>
                    View Services
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Buttons */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        style={{
          position: 'absolute',
          top: '50%',
          left: '16px',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
          border: '1px solid var(--border-light)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--card-shadow)',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        aria-label="Next slide"
        style={{
          position: 'absolute',
          top: '50%',
          right: '16px',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(4px)',
          border: '1px solid var(--border-light)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--card-shadow)',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-gold)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div 
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 10
        }}
      >
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              background: index === activeIndex ? 'var(--accent-gold)' : 'rgba(15, 23, 42, 0.25)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
          />
        ))}
      </div>
    </div>
  );
}
