export interface Vehicle {
  id: string;
  name: string;
  subName: string;
  type: string;
  passengers: number;
  bags: number;
  features: string[];
  description: string;
  image: string;
  pricePerKm: number;
}

export const vehicles: Vehicle[] = [
  {
    id: 'ac-hatchback',
    name: 'AC Hatchback',
    subName: 'MARUTI WAGON R / SWIFT',
    type: 'Hatchback',
    passengers: 4,
    bags: 2,
    features: ['Air Conditioning', 'Power Windows', 'USB Charger', 'Ample Legroom'],
    description: 'Perfect for quick city trips and solo or couple travelers looking for a budget-friendly ride without compromising on comfort and cooling.',
    image: '/cars/sedan.png', // Fallback or generic hatchback placeholder (using sedan image for neat styling)
    pricePerKm: 10
  },
  {
    id: 'ac-sedan',
    name: 'AC Sedan',
    subName: 'TOYOTA ETIOS / SWIFT DZIRE',
    type: 'Sedan',
    passengers: 4,
    bags: 3,
    features: ['Air Conditioning', 'Plush Seats', 'Bluetooth Audio', 'Spacious Boot'],
    description: 'Our most popular choice for business commutes, airport pickups, and comfortable intercity travels with moderate luggage.',
    image: '/cars/sedan.png',
    pricePerKm: 12
  },
  {
    id: 'ac-suv',
    name: 'AC SUV',
    subName: 'MARUTI ERTIGA / SCORPIO',
    type: 'SUV',
    passengers: 6,
    bags: 4,
    features: ['Dual AC vents', 'Reclining Row Seats', 'Heavy Luggage Carrier', 'Charging Points'],
    description: 'An excellent choice for larger families, corporate staff transfers, or group sightseeing across Odisha’s varied terrains.',
    image: '/cars/suv.png',
    pricePerKm: 15
  },
  {
    id: 'ac-innova-crysta',
    name: 'AC Innova Crysta',
    subName: 'TOYOTA INNOVA CRYSTA',
    type: 'Premium SUV',
    passengers: 7,
    bags: 5,
    features: ['Premium Leather Seats', 'Superior Climate Control', 'Captain Seats', 'Roof AC Vents', 'Maximum Safety'],
    description: 'Premium AC Innova Crysta — the most popular choice for larger families, corporate travel and long Odisha tours. Plush seating, strong AC and powerful highway performance.',
    image: '/cars/innova-crysta.png',
    pricePerKm: 18
  },
  {
    id: 'ac-tempo-traveller',
    name: 'AC Tempo Traveller',
    subName: 'FORCE TEMPO TRAVELLER',
    type: 'Luxury Cruiser',
    passengers: 12,
    bags: 10,
    features: ['Ample Headroom', 'Pushback Seats', 'Individual AC vents', 'LED TV Screen', 'Massive Luggage Space'],
    description: 'The ultimate group travel choice for pilgrimage trips, family get-togethers, and long holiday explorations with maximum luggage.',
    image: '/cars/suv.png', // Using SUV representation as a group visual fallback
    pricePerKm: 24
  }
];
