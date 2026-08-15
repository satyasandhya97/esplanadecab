'use client';

import React, { useState } from 'react';
import { vehicles } from '@/data/fleet';
import styles from './booking-form.module.css';

export default function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [tripType, setTripType] = useState('outstation');
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [vehicle, setVehicle] = useState(vehicles[1].id); // Default to Sedan
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendError('');

    const selectedVehicle = vehicles.find((v) => v.id === vehicle);
    const vehicleName = selectedVehicle ? `${selectedVehicle.name} (${selectedVehicle.subName})` : 'Sedan';

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'booking',
          name,
          phone,
          tripType,
          pickup,
          drop,
          date,
          time,
          vehicle: vehicleName,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSendError(data.error || 'Failed to submit booking request. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setSendError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
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
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-input"
            placeholder="Enter 10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
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

        {sendError && (
          <p style={{ color: '#EF4444', fontSize: '14px', textAlign: 'center', margin: '4px 0' }}>
            {sendError}
          </p>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '8px' }}
          disabled={isSending}
        >
          {isSending ? 'Sending Request...' : 'Submit Booking Request'}
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
              <button className={styles.closeBtn} onClick={() => {
                setIsSubmitted(false);
                setName('');
                setPhone('');
                setPickup('');
                setDrop('');
                setDate('');
                setTime('');
              }}>×</button>
            </div>
            <div style={{ textAlign: 'center', padding: '10px 0 20px 0' }}>
              <div className={styles.successIcon}>✓</div>
              <h4 style={{ fontSize: '22px', margin: '16px 0 8px 0', fontFamily: 'var(--font-serif)' }}>Booking Request Sent!</h4>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Your booking request has been successfully sent to our coordinators via email. We will contact you shortly to confirm the ride and assign a driver.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="tel:+919090809910"
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Call Coordinator Directly
                </a>

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setPhone('');
                    setPickup('');
                    setDrop('');
                    setDate('');
                    setTime('');
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
