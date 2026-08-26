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
}

export const vehicles: Vehicle[] = [
  {
    id: 'toyota-rumion',
    name: 'Toyota Rumion',
    subName: 'TOYOTA RUMION MPV',
    type: 'MPV',
    passengers: 7,
    bags: 3,
    features: ['Dual AC vents', 'Spacious Seating', 'Ample Legroom', 'Comfort Ride'],
    description: 'A stylish 7-seater MPV offering spacious interiors, smooth ride comfort, and exceptional fuel efficiency. Perfect for family sightseeing trips.',
    image: '/cars/toyota_rumion.jpg'
  },
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga',
    subName: 'MARUTI SUZUKI ERTIGA',
    type: 'MPV',
    passengers: 7,
    bags: 3,
    features: ['Roof AC vents', 'Reclining seats', 'Charging sockets', 'Clean Cabin'],
    description: 'India\'s most popular family MPV. Features dual-tone interiors, robust dual AC vents for all rows, and smooth suspension for long highway rides.',
    image: '/cars/maruti_ertiga.jpg'
  },
  {
    id: 'toyota-etios',
    name: 'Toyota Etios',
    subName: 'TOYOTA ETIOS SEDAN',
    type: 'Sedan',
    passengers: 4,
    bags: 3,
    features: ['Strong Air Conditioning', 'Plush Seats', 'Massive Boot Space', 'Smooth Highway Ride'],
    description: 'Renowned for its unmatched reliability, large legroom, and class-leading trunk capacity. Ideal for outstation travels and airport transfers.',
    image: '/cars/toyota_etios.jpg'
  },
  {
    id: 'tata-punch',
    name: 'Tata Punch',
    subName: 'TATA PUNCH SUB-SUV',
    type: 'Compact SUV',
    passengers: 4,
    bags: 2,
    features: ['High Ground Clearance', 'Tough Build Safety', 'AC & Power Windows', 'Spacious Cabin'],
    description: 'A robust compact SUV with 5-star safety build, high seating posture, and excellent agility for navigating both city streets and rural terrains.',
    image: '/cars/tata_punch.jpg'
  },
  {
    id: 'toyota-fortuner',
    name: 'Toyota Fortuner',
    subName: 'TOYOTA FORTUNER luxury SUV',
    type: 'Premium SUV',
    passengers: 7,
    bags: 5,
    features: ['Premium 4x4 capability', 'Leather upholstery', 'Superior climate control', 'Highest road safety'],
    description: 'The ultimate premium SUV. Offering command road presence, luxurious interiors, powerful engine performance, and supreme off-road comfort.',
    image: '/cars/toyota_fortuner.jpg'
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    subName: 'FORCE TEMPO TRAVELLER',
    type: 'Luxury Group Cruiser',
    passengers: 12,
    bags: 10,
    features: ['Pushback seats', 'Individual AC vents', 'Ample headroom', 'Massive luggage compartment'],
    description: 'Excellent for group tours, family get-togethers, and corporate travels. Equipped with individual passenger vents and extra-large cargo carriage.',
    image: '/cars/tempo_traveller.jpg'
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova',
    subName: 'TOYOTA INNOVA CLASSIC',
    type: 'Premium MPV',
    passengers: 7,
    bags: 4,
    features: ['Multi-row cooling', 'Highly reliable build', 'Spacious captain seats', 'Reclining row options'],
    description: 'The legendary standard of comfort and durability in India. Offers reclining captain row seats, high reliability, and excellent ride quality.',
    image: '/cars/toyota_innova.jpg'
  },
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    subName: 'TOYOTA INNOVA CRYSTA PREMIUM',
    type: 'Luxury MPV',
    passengers: 7,
    bags: 5,
    features: ['Premium captain chairs', 'Triple-zone climate control', 'Ambient cabin lighting', 'Top-tier safety airbags'],
    description: 'Experience luxury travel at its best. Features executive leather captain seats, advanced safety equipment, and quiet premium cabin insulation.',
    image: '/cars/toyota_innova_crysta.jpg'
  }
];
