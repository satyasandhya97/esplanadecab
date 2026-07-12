export interface Destination {
  id: string;
  name: string;
  location: string;
  region: 'Odisha' | 'West Bengal' | 'Jharkhand' | 'Other';
  description: string;
  category: string;
  gradient: string;
}

export const destinations: Destination[] = [
  {
    id: 'jagannath-temple',
    name: 'Jagannath Temple',
    location: 'Puri, Odisha',
    region: 'Odisha',
    description: 'The historic 12th-century temple dedicated to Lord Jagannath, a sacred pilgrimage site famous for its annual Rath Yatra and rich spiritual history.',
    category: 'Pilgrimage & Culture',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)'
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    region: 'Odisha',
    description: 'A UNESCO World Heritage site representing a colossal chariot of the Sun God, adorned with exquisite stone carvings and ancient architectural genius.',
    category: 'Heritage & Archeology',
    gradient: 'linear-gradient(135deg, #B45309 0%, #78350F 100%)'
  },
  {
    id: 'dhauli-peace-pagoda',
    name: 'Dhauli Peace Pagoda',
    location: 'Dhauli, Odisha',
    region: 'Odisha',
    description: 'A serene white pagoda on Dhauli Hills marking the historic site where Emperor Ashoka renounced violence and embraced Buddhism after the Kalinga War.',
    category: 'Peace & Spirituality',
    gradient: 'linear-gradient(135deg, #94A3B8 0%, #475569 100%)'
  },
  {
    id: 'chilika-lake',
    name: 'Chilika Lake',
    location: 'Chilika, Odisha',
    region: 'Odisha',
    description: 'Asia’s largest brackish water lagoon, hosting millions of migratory birds in winter, rare Irrawaddy dolphins, and scenic islands.',
    category: 'Nature & Wildlife',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)'
  },
  {
    id: 'bhitarkanika-sanctuary',
    name: 'Bhitarkanika Sanctuary',
    location: 'Bhitarkanika, Odisha',
    region: 'Odisha',
    description: 'A rich mangrove wetland ecosystem famous for saltwater crocodiles, nesting olive ridley turtles, and hundreds of bird species.',
    category: 'Nature & Wildlife',
    gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)'
  },
  {
    id: 'navadvipa',
    name: 'Navadvipa (Nabadwip)',
    location: 'Nabadwip, West Bengal',
    region: 'West Bengal',
    description: 'An ancient spiritual centre known as the "Land of Krishna Devotion" and birth site of Chaitanya Mahaprabhu, located at the holy confluence of Ganga.',
    category: 'Pilgrimage & Devotion',
    gradient: 'linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)'
  },
  {
    id: 'baidyanath-dham',
    name: 'Baba Baidyanath Temple',
    location: 'Deoghar, Jharkhand',
    region: 'Jharkhand',
    description: 'One of the twelve sacred Jyotirlingas in India. A major pilgrimage destination where millions gather during the holy Shravan month.',
    category: 'Pilgrimage & Devotion',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)'
  },
  {
    id: 'gangasagar',
    name: 'Gangasagar',
    location: 'Sagar Island, West Bengal',
    region: 'West Bengal',
    description: 'A sacred island pilgrimage site where the Ganges River meets the Bay of Bengal, famous for the massive Gangasagar Mela gathering.',
    category: 'Pilgrimage & Nature',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)'
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    location: 'Darjeeling, West Bengal',
    region: 'West Bengal',
    description: 'The former summer capital of India nestled in the Himalayas, celebrated for its premium tea plantations, Toy Train, and majestic Kanchenjunga views.',
    category: 'Hills & Leisure',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #4338CA 100%)'
  },
  {
    id: 'similipal-national-park',
    name: 'Simlipal National Park',
    location: 'Mayurbhanj, Odisha',
    region: 'Odisha',
    description: 'A vast forest reserve and tiger sanctuary containing stunning waterfalls like Barehipani, diverse wildlife, and scenic green valleys.',
    category: 'Nature & Wildlife',
    gradient: 'linear-gradient(135deg, #84CC16 0%, #4D7C0F 100%)'
  },
  {
    id: 'koraput-valley',
    name: 'Koraput Valley',
    location: 'Koraput, Odisha',
    region: 'Odisha',
    description: 'A scenic mist-covered hill station in southern Odisha, home to unique tribal cultures, coffee plantations, and beautiful valleys.',
    category: 'Hills & Heritage',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)'
  },
  {
    id: 'malkangiri',
    name: 'Malkangiri tribal village',
    location: 'Malkangiri, Odisha',
    region: 'Odisha',
    description: 'A culturally rich tribal area containing lush green mountains, tranquil lakes, ancient heritage structures, and vibrant local traditions.',
    category: 'Offbeat & Culture',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)'
  },
  {
    id: 'hirakud-dam',
    name: 'Hirakud Dam',
    location: 'Sambalpur, Odisha',
    region: 'Odisha',
    description: 'One of the longest earthen dams in the world, spanning the Mahanadi River, featuring scenic driveways, watchtowers, and migratory birds.',
    category: 'Scenic & Engineering',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)'
  },
  {
    id: 'satkosia-gorge',
    name: 'Satkosia Tiger Reserve',
    location: 'Angul, Odisha',
    region: 'Odisha',
    description: 'A spectacular gorge along the Mahanadi River, offering nature camps, boating, crocodile sanctuary sightings, and lush forest habitats.',
    category: 'Nature & Wildlife',
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)'
  },
  {
    id: 'chitrakoot-falls',
    name: 'Chitrakoot Waterfalls',
    location: 'Bastar, Odisha Border',
    region: 'Other',
    description: 'Known as the "Niagara of India", this wide horse-shoe waterfall cascades dramatically on the Indravati river and is a majestic sight.',
    category: 'Scenic & Adventure',
    gradient: 'linear-gradient(135deg, #0284C7 0%, #075985 100%)'
  }
];
