'use client';

import React, { useState } from 'react';
import { vehicles } from '@/data/fleet';
import styles from './booking-form.module.css';

export default function BookingForm() {
  const [tripType, setTripType] = useState('outstation');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicle, setVehicle] = useState(vehicles[1].id); // Default to Sedan
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedVehicle = vehicles.find((v) => v.id === vehicle);
    const vehicleName = selectedVehicle ? `${selectedVehicle.name} (${selectedVehicle.subName})` : 'Sedan';
    
    // Construct the WhatsApp message text
    const message = `Hello Esplanade Cabs, I would like to book a ride:
- *Trip Type:* ${tripType.toUpperCase()}
- *Pickup Location:* ${pickup}
- *Drop Location:* ${drop}
- *Date:* ${date}
- *Time:* ${time}
- *Selected Fleet:* ${vehicleName}`;
    
    const encodedText = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=919090809910&text=${encodedText}`;
    
    setWhatsappUrl(url);
    setIsSubmitted(true);
  };

  return (
    <div className="glass-panel" style={{ padding: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <h3 style={{ fontSize: '22px', marginBottom: '24px', fontFamily: 'var(--font-serif)' }} className="text-gradient">
        Book Your Journey
      </h3>
      
      {/* Trip Type Tabs */}
      <div className={styles.tabs}>
        <button 
          type="button"
          className={`${styles.tabBtn} ${tripType === 'outstation' ? styles.tabActive : ''}`}
          onClick={() => { setTripType('outstation'); setDrop(''); }}
        >
          Outstation
        </button>
        <button 
          type="button"
          className={`${styles.tabBtn} ${tripType === 'local' ? styles.tabActive : ''}`}
          onClick={() => { setTripType('local'); setDrop('Bhubaneswar City Tour'); }}
        >
          Local Sightseeing
        </button>
        <button 
          type="button"
          className={`${styles.tabBtn} ${tripType === 'airport' ? styles.tabActive : ''}`}
          onClick={() => { setTripType('airport'); setDrop('BBI Airport (Bhubaneswar)'); }}
        >
          Airport Drop/Pick
        </button>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="form-group">
          <label className="form-label">Pickup Location</label>
          <input 
            type="text" 
            className="form-input" 
            placeholder="Enter pickup address, hotel, or station" 
            value={pickup} 
            onChange={(e) => setPickup(e.target.value)} 
            required 
          />
        </div>

        {tripType === 'outstation' && (
          <div className="form-group">
            <label className="form-label">Drop Location</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Destination city (Puri, Cuttack, Konark, etc.)" 
              value={drop} 
              onChange={(e) => setDrop(e.target.value)} 
              required 
            />
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div className="form-group">
            <label className="form-label">Travel Date</label>
            <input 
              type="date" 
              className="form-input" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label className="form-label">Pickup Time</label>
            <input 
              type="time" 
              className="form-input" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Select Vehicle Class</label>
          <select 
            className="form-select" 
            value={vehicle} 
            onChange={(e) => setVehicle(e.target.value)}
          >
            {vehicles.map((v) => (
              <option key={v.id} value={v.id} style={{ backgroundColor: '#111827', color: '#FFF' }}>
                {v.name} - {v.subName} (Est: ₹{v.pricePerKm}/km)
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
          Proceed to WhatsApp Book
        </button>

        <p style={{ fontSize: '12px', textAlign: 'center', color: 'var(--text-muted)' }}>
          * No advance payment required. Pay your driver after the ride.
        </p>
      </form>

      {/* Success Modal Overlay */}
      {isSubmitted && (
        <div className={styles.modalOverlay}>
          <div className={`${styles.modalContent} glass-panel`}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className={styles.closeBtn} onClick={() => setIsSubmitted(false)}>×</button>
            </div>
            <div style={{ textAlign: 'center', padding: '10px 0 20px 0' }}>
              <div className={styles.successIcon}>✓</div>
              <h4 style={{ fontSize: '22px', margin: '16px 0 8px 0', fontFamily: 'var(--font-serif)' }}>Booking Form Ready!</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Your booking details have been formatted. Click the button below to confirm with our coordinator instantly on WhatsApp.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.781 1.22c5.508 0 9.99-4.479 9.991-9.985A9.998 9.998 0 0 0 12.012 2zm4.7 13.784c-.258.73-1.298 1.41-1.808 1.47a3.488 3.488 0 0 1-1.616-.277 8.358 8.358 0 0 1-3.69-2.433 9.4 9.4 0 0 1-1.748-2.678 3.882 3.882 0 0 1-.62-2.029c.007-.98.514-1.455.703-1.657.189-.202.437-.287.58-.287.142 0 .285.006.408.012.13.007.297-.05.464.354.17.412.584 1.42.635 1.523.05.104.084.225.013.364-.07.139-.107.227-.215.353-.108.127-.225.284-.321.382-.108.11-.22.23-.095.446a6.115 6.115 0 0 0 1.11 1.383 5.485 5.485 0 0 0 1.632 1.008c.216.104.343.089.472-.058.128-.147.55-.641.697-.859.146-.217.294-.183.493-.109.198.073 1.258.593 1.475.702.217.109.363.165.419.263.056.098.056.568-.202 1.298z"/>
                  </svg>
                  Confirm Booking (WhatsApp)
                </a>
                
                <a 
                  href="tel:+919090809910" 
                  className="btn btn-secondary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Call Coordinator Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
