export interface Destination {
  id: string;
  name: string;
  location: string;
  region: 'Odisha' | 'West Bengal' | 'Jharkhand' | 'Hyderabad' | 'Visakhapatnam' | 'Uttar Pradesh' | 'Other';
  tripType?: 'Local Sightseeing' | 'Outstation';
  description: string;
  category: string;
  image: string;
  gradient?: string;
  highlights?: string[];
  bestTime?: string;
  distance?: string;
}

export const destinations: Destination[] = [
  // ==========================================
  // --- BHUBANESWAR LOCAL SIGHTSEEING ---
  // ==========================================
  {
    id: 'lingaraj-temple',
    name: 'Shree Lingaraj Temple',
    location: 'Old Town, Bhubaneswar, Odisha',
    region: 'Odisha',
    tripType: 'Local Sightseeing',
    description: 'The grandest and tallest 11th-century temple in Bhubaneswar, dedicated to Lord Shiva as Harihara. A pinnacle of Kalinga architectural brilliance standing within an ancient walled sanctum.',
    category: 'Pilgrimage & Ancient Heritage',
    image: '/assests/lingaraj-temple.jpg',
    highlights: ['180ft Majestic Vimana Spire', 'Bindu Sagar Sacred Tank', '11th-Century Kalinga Architecture', 'Lord Harihara Maha Darshan'],
    bestTime: 'October to March & Maha Shivaratri',
    distance: '4 km from Bhubaneswar City Center'
  },
  {
    id: 'mukteshwar-temple',
    name: 'Mukteswara Temple',
    location: 'Old Town, Bhubaneswar, Odisha',
    region: 'Odisha',
    tripType: 'Local Sightseeing',
    description: 'Acclaimed as the "Gem of Odishan Architecture", this 10th-century temple features the world-renowned sculpted arched Torana gateway, exquisite celestial dancers, and the sacred Marichi Kunda reservoir.',
    category: 'Heritage & Architecture',
    image: '/assests/mukteshwar-temple.jpg',
    highlights: ['Iconic Sculpted Torana Archway', 'Marichi Kunda Sacred Tank', '10th Century Kalinga Architecture', 'Intricate Sandstone Carvings'],
    bestTime: 'October to March',
    distance: '5 km from Bhubaneswar Railway Station'
  },
  {
    id: 'dhauli-peace-pagoda',
    name: 'Dhauli Shanti Stupa',
    location: 'Dhauli Hills, Bhubaneswar, Odisha',
    region: 'Odisha',
    tripType: 'Local Sightseeing',
    description: 'A serene white peace pagoda perched atop Dhauli Hills marking the historic site where Emperor Ashoka renounced war and embraced Buddhist Dhamma after the Kalinga War along the Daya River.',
    category: 'Peace Monument & History',
    image: '/assests/dhauli1-ECf85SZ-.jpg',
    highlights: ['Ashokan Rock Edicts (261 BCE)', 'White Peace Pagoda', 'Daya River Panoramic Views', 'Evening Light & Sound Show'],
    bestTime: 'October to March',
    distance: '8 km from Central Bhubaneswar'
  },
  {
    id: 'chausathi-yogini-temple',
    name: 'Chausathi Yogini Temple',
    location: 'Hirapur, Bhubaneswar, Odisha',
    region: 'Odisha',
    tripType: 'Local Sightseeing',
    description: 'An extraordinary 9th-century hypaethral (roofless) circular shrine in Hirapur. One of only four surviving Yogini shrines in India, housing 64 finely sculpted black chlorite idols depicting feminine divine power.',
    category: 'Mystic Heritage & Tantric Shrine',
    image: '/assests/chausathi-yogini-temple.jpg',
    highlights: ['Hypaethral Roofless Circular Temple', '64 Black Chlorite Yogini Idols', '9th Century Tantric Architecture', 'Mahamaya Central Shrine'],
    bestTime: 'October to March',
    distance: '14 km from Bhubaneswar City'
  },
  {
    id: 'brahmeswara-temple',
    name: 'Brahmeswara Temple',
    location: 'Old Town, Bhubaneswar, Odisha',
    region: 'Odisha',
    tripType: 'Local Sightseeing',
    description: 'An ornate 10th-century Panchatanaya temple complex built during the Somavamsi dynasty, renowned for richly detailed sandstone carvings of musicians, Nataraja, dancers, and celestial figures.',
    category: 'Heritage Temple & Sculpture',
    image: '/assests/brahmeswara-temple.jpg',
    highlights: ['Panchatanaya 5-Shrine Layout', 'Carved Sandstone Celestial Musicians', 'Pyramidal Jagamohana Tower', 'Somavamsi Royal Inscriptions'],
    bestTime: 'October to March',
    distance: '6 km from Bhubaneswar Railway Station'
  },
  {
    id: 'khandagiri-udayagiri-caves',
    name: 'Khandagiri & Udayagiri Caves',
    location: 'Khandagiri, Bhubaneswar, Odisha',
    region: 'Odisha',
    tripType: 'Local Sightseeing',
    description: 'Ancient rock-cut caves carved into twin hills in the 2nd century BCE under Emperor Kharavela. Marvel at the multi-tiered royal monastery caves, Hathigumpha inscriptions, and panoramic vistas.',
    category: 'Rock-Cut Caves & Archeology',
    image: '/assests/khandagiri-caves.jpg',
    highlights: ['Hathigumpha Inscription of King Kharavela', 'Double-Storey Rani Gumpha Cave', 'Tiger Cave (Vyaghra Gumpha)', 'Hilltop Jain Temple Sunset View'],
    bestTime: 'October to March',
    distance: '6 km from Bhubaneswar Airport'
  },

  // ==========================================
  // --- HOLY OUTSTATION & SPIRITUAL CIRCUITS ---
  // ==========================================
  {
    id: 'ayodhya-ram-mandir',
    name: 'Shri Ram Janmabhoomi Mandir',
    location: 'Ayodhya, Uttar Pradesh',
    region: 'Uttar Pradesh',
    tripType: 'Outstation',
    description: 'The monumental Shri Ram Janmabhoomi Mandir stands as a masterwork of traditional Indian Nagara architecture on the sacred banks of the Saryu River, offering divine darshan and peaceful devotion.',
    category: 'Pilgrimage & Sacred Heritage',
    image: '/assests/ayodhya-ram-mandir.jpg',
    highlights: ['Grand 3-Storey Nagara Architecture', 'Holy Saryu River & Evening Aarti', 'Hanuman Garhi Temple', 'Ram Ki Paidi Ghats'],
    bestTime: 'October to March & Ram Navami',
    distance: 'Direct Interstate Cab / Outstation Tour'
  },
  {
    id: 'triveni-sangam-prayagraj',
    name: 'Triveni Sangam',
    location: 'Prayagraj (Allahabad), Uttar Pradesh',
    region: 'Uttar Pradesh',
    tripType: 'Outstation',
    description: 'The holy meeting point of sacred rivers Ganga, Yamuna, and mystical subterranean Saraswati. Devotees take wooden country boats to the Sangam point for holy snan and blessings at this ancient Maha Kumbh sanctuary.',
    category: 'Sacred Confluence & Pilgrimage',
    image: '/assests/triveni-sangam-prayagraj.jpg',
    highlights: ['Confluence of Ganga, Yamuna & Saraswati', 'Holy Boat Ride to Sangam Point', 'Akshayavat Sacred Tree & Fort', 'Kumbh & Magh Mela Epicenter'],
    bestTime: 'October to March & Magh Mela',
    distance: 'Interstate Spiritual Circuit'
  },
  {
    id: 'varanasi-kashi-vishwanath',
    name: 'Kashi Vishwanath & Ganga Ghats',
    location: 'Varanasi (Kashi), Uttar Pradesh',
    region: 'Uttar Pradesh',
    tripType: 'Outstation',
    description: 'The spiritual capital of India and one of the oldest living cities. Experience the divine Kashi Vishwanath Jyotirlinga corridor, mesmerizing evening Ganga Aarti at Dashashwamedh Ghat, and sunrise boat rides.',
    category: 'Jyotirlinga & Spiritual Heritage',
    image: '/assests/varanasi-kashi-vishwanath.jpg',
    highlights: ['Golden Jyotirlinga Spire Darshan', 'Dashashwamedh Evening Maha Aarti', 'Subah-e-Banaras Morning Boat Ride', 'Assi & Manikarnika Ghats'],
    bestTime: 'October to March & Dev Deepawali',
    distance: 'Interstate Pilgrimage Corridor'
  },
  {
    id: 'navadvipa-mayapur-krishnanagar',
    name: 'Nabadwip, Mayapur & Krishnanagar',
    location: 'Nadia District, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'A celebrated spiritual and cultural circuit along the holy Bhagirathi-Hooghly river. Features the colossal ISKCON Mayapur Chandrodaya Temple (TOVP), sacred Chaitanya Mahaprabhu birthland at Nabadwip, and royal Rajbari palaces.',
    category: 'Pilgrimage, Culture & Royal Heritage',
    image: '/assests/mayapur-krishnanagar.jpg',
    highlights: ['ISKCON Temple of Vedic Planetarium (TOVP)', 'Sri Chaitanya Mahaprabhu Janmasthan', 'Krishnanagar Rajbari Palace', 'Clay Doll Artisans & Sarpuria Sweets'],
    bestTime: 'October to March & Gaura Purnima',
    distance: '130 km from Kolkata / Outstation Cab'
  },

  // ==========================================
  // --- ODISHA OUTSTATION & NATURE DESTINATIONS ---
  // ==========================================
  {
    id: 'jagannath-temple',
    name: 'Shree Jagannath Temple',
    location: 'Puri, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'The historic 12th-century holy Dham dedicated to Lord Jagannath, Balabhadra, and Devi Subhadra. World-famous for the grand Rath Yatra festival, majestic 214ft tower, and world\'s largest open kitchen serving Mahaprasad.',
    category: 'Pilgrimage & Sacred Dham',
    image: '/assests/jagannathpuri-L897Iz2Y.jpg',
    highlights: ['Char Dham Pilgrimage', 'Ananda Bazar Mahaprasad', 'Golden Beach & Marine Drive', 'Swargadwar Beach'],
    bestTime: 'October to March & Rath Yatra',
    distance: '60 km from Bhubaneswar (1.5 hrs)'
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    location: 'Konark, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'A UNESCO World Heritage site representing a colossal stone chariot of the Sun God with 24 carved wheels and 7 horses, showcasing extraordinary 13th-century Kalinga architectural genius.',
    category: 'UNESCO World Heritage',
    image: '/assests/suntempleKonark-gJAyjDUN.jpg',
    highlights: ['Colossal Stone Carved Sun Chariot', 'Marine Drive Scenic Coastal Route', 'Chandrabhaga Beach Sunset', 'Evening Light & Sound Show'],
    bestTime: 'September to March',
    distance: '65 km from Bhubaneswar (1.5 hrs)'
  },
  {
    id: 'chilika-lake',
    name: 'Chilika Lake & Dolphin Sanctuary',
    location: 'Chilika, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'Asia’s largest brackish water lagoon, hosting millions of migratory birds in winter, rare playful Irrawaddy dolphins at Satapada, and scenic island shrines like Maa Kalijai.',
    category: 'Nature & Wildlife Lagoon',
    image: '/assests/chilika-QA3lyluq.jpg',
    highlights: ['Irrawaddy Dolphin Spotting', 'Kalijai Island Temple Boating', 'Migratory Bird Watching (Mangalajodi)', 'Fresh Chilika Crabs & Prawns'],
    bestTime: 'November to February',
    distance: '100 km from Bhubaneswar'
  },
  {
    id: 'bhitarkanika-sanctuary',
    name: 'Bhitarkanika Mangrove Sanctuary',
    location: 'Kendrapara, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'A rich mangrove wetland ecosystem famous for giant saltwater crocodiles, nesting Olive Ridley sea turtles at Gahirmatha, King cobras, and hundreds of kingfisher species.',
    category: 'Wildlife & Mangrove Safari',
    image: '/assests/bhitarkanika-GwLTNnZj.jpg',
    highlights: ['Boat Safari in Creeks', 'Giant Saltwater Crocodiles (20ft+)', 'Dangamal Nature Camp', 'Olive Ridley Sea Turtles'],
    bestTime: 'October to March',
    distance: '140 km from Bhubaneswar'
  },
  {
    id: 'similipal-national-park',
    name: 'Similipal Tiger Reserve',
    location: 'Mayurbhanj, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'A vast UNESCO biosphere reserve containing dense Sal forests, Royal Bengal tigers, wild elephants, leopards, and breathtaking waterfalls like Barehipani and Joranda.',
    category: 'Wildlife & Safari Expedition',
    image: '/assests/Similipal-PGJbJeMI.jpg',
    highlights: ['Barehipani Waterfall (399m)', 'Joranda Waterfall (181m)', 'Jungle Jeep Safari', 'Tiger & Elephant Reserve'],
    bestTime: 'November to June',
    distance: '250 km from Bhubaneswar'
  },
  {
    id: 'koraput-valley',
    name: 'Koraput Valley & Deomali Peak',
    location: 'Koraput, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'A scenic mist-covered hill paradise in southern Odisha, home to Deomali (the highest peak in Odisha), tribal weekly markets, coffee plantations, and Duduma Falls.',
    category: 'Hills & Tribal Heritage',
    image: '/assests/Koraput-xmHS2r__.jpg',
    highlights: ['Deomali Peak Sunset', 'Duduma Waterfall (175m)', 'Coffee & Pepper Gardens', 'Tribal Culture Museum'],
    bestTime: 'September to March',
    distance: 'Southern Odisha Highlands'
  },
  {
    id: 'hirakud-dam',
    name: 'Hirakud Dam & Reservoir',
    location: 'Sambalpur, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'One of the longest earthen dams in the world spanning the Mahanadi River, featuring Gandhi Minar watchtower, island cruises, and scenic reservoir drives.',
    category: 'Scenic & Engineering Marvel',
    image: '/assests/HirakudDam-QHE__Wqf.jpg',
    highlights: ['Gandhi Minar Viewpoint', 'Reservoir Boating', 'Mahanadi River Vista', 'Maa Samaleswari Temple'],
    bestTime: 'October to March',
    distance: '280 km from Bhubaneswar'
  },
  {
    id: 'satkosia-gorge',
    name: 'Satkosia Tiger Reserve & Gorge',
    location: 'Angul, Odisha',
    region: 'Odisha',
    tripType: 'Outstation',
    description: 'A spectacular 22 km long gorge along the Mahanadi River, offering eco-tents, river boating, gharial crocodile sightings, and starry camping nights.',
    category: 'Nature & Eco-Resort',
    image: '/assests/Satkosia-0fnPzX2M.jpg',
    highlights: ['Mahanadi Gorge Boating', 'Gharial & Mugger Sanctuary', 'Eco Camp Overnights', 'Forest Hiking Treks'],
    bestTime: 'November to April',
    distance: '120 km from Bhubaneswar'
  },

  // ==========================================
  // --- KOLKATA & WEST BENGAL ---
  // ==========================================
  {
    id: 'kolkata-victoria-memorial',
    name: 'Victoria Memorial',
    location: 'Kolkata, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'An iconic white Makrana marble monument surrounded by 64 acres of landscaped gardens, reflecting pools, and galleries dedicated to Indian history and art.',
    category: 'Heritage & Monument',
    image: '/assests/kolkata-victoria-memorial.jpg',
    highlights: ['Royal Gallery', 'Queens Hall', 'Musical Fountain', 'Lush Gardens'],
    bestTime: 'October to March',
    distance: 'Direct Cab from Bhubaneswar / Kolkata Airport'
  },
  {
    id: 'kolkata-howrah-bridge',
    name: 'Howrah Bridge & Hooghly River',
    location: 'Kolkata, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'The world-famous cantilever bridge over the sacred Hooghly River. Enjoy scenic evening boat rides, riverside ghats, and vintage Kolkata charm.',
    category: 'Scenic & Iconic Landmark',
    image: '/assests/kolkata-howrah-bridge.jpg',
    highlights: ['Princep Ghat Sunset', 'Hooghly River Ferry', 'Cantilever Engineering', 'Flower Market'],
    bestTime: 'Throughout the Year',
    distance: 'Central Kolkata Connection'
  },
  {
    id: 'kolkata-dakshineswar-temple',
    name: 'Dakshineswar Kali Temple & Belur Math',
    location: 'Kolkata, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'A celebrated 19th-century Navaratna style temple on the Hooghly banks founded by Rani Rashmoni, sacredly associated with Sri Ramakrishna Paramahamsa.',
    category: 'Pilgrimage & Spirituality',
    image: '/assests/kolkata-dakshineswar-temple.jpg',
    highlights: ['12 Shiva Shrines', 'Ganga Ghats', 'Belur Math Ferry', 'Spiritual Serenity'],
    bestTime: 'October to April',
    distance: '15 km from Howrah Station'
  },
  {
    id: 'kolkata-eco-park',
    name: 'Eco Tourism Park & New Town',
    location: 'New Town, Kolkata, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'The largest urban park in India spanning 480 acres with a 104-acre waterbody, Seven Wonders of the World replicas, butterfly garden, and boating.',
    category: 'Theme Park & Recreation',
    image: '/assests/kolkata-eco-park.jpg',
    highlights: ['Seven Wonders Replicas', 'Lake Boating & Kayaking', 'Butterfly Garden', 'Musical Fountain'],
    bestTime: 'October to February',
    distance: '10 km from Kolkata Airport'
  },
  {
    id: 'jhargram-palace',
    name: 'Jhargram Royal Palace & Forests',
    location: 'Jhargram, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'A historic royal retreat featuring ancient Italian-Mughal palaces, dense sal and mahua forests, tribal folklore, and serene Kanak Durga Temple.',
    category: 'Royal Heritage & Nature',
    image: '/assests/Jhargram-OZgpzJVc.jpg',
    highlights: ['Jhargram Raj Palace', 'Kanak Durga Temple', 'Sal Forests', 'Tribal Culture'],
    bestTime: 'November to March',
    distance: '175 km from Kolkata'
  },
  {
    id: 'darjeeling-hills',
    name: 'Darjeeling Himalayan Hillstation',
    location: 'Darjeeling, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'The Queen of the Hills in the Himalayas, celebrated for lush tea plantations, UNESCO Heritage Toy Train, and breathtaking sunrises over Mount Kanchenjunga.',
    category: 'Hills & Mountain Retreat',
    image: '/assests/DARJEELING-J5i8BuTF.jpg',
    highlights: ['Tiger Hill Sunrise', 'Himalayan Toy Train', 'Happy Valley Tea Estate', 'Batasia Loop'],
    bestTime: 'March to May & October to December',
    distance: 'North Bengal Mountain Route'
  },
  {
    id: 'gangasagar-island',
    name: 'Gangasagar (Sagar Island)',
    location: 'Sagar Island, West Bengal',
    region: 'West Bengal',
    tripType: 'Outstation',
    description: 'A deeply sacred island where the holy River Ganges empties into the Bay of Bengal, famous for Kapil Muni Temple and the grand Makar Sankranti mela.',
    category: 'Pilgrimage & Coastal Sangam',
    image: '/assests/gangasagar-Q2hUDeLL.jpg',
    highlights: ['Holy Ganga Sangam', 'Kapil Muni Ashram', 'Lighthouse View', 'Serene Beach'],
    bestTime: 'November to February',
    distance: '130 km south of Kolkata'
  },

  // ==========================================
  // --- HYDERABAD ---
  // ==========================================
  {
    id: 'hyderabad-charminar',
    name: 'Charminar & Laad Bazaar',
    location: 'Hyderabad, Telangana',
    region: 'Hyderabad',
    tripType: 'Outstation',
    description: 'The world-famous 16th-century monument and mosque featuring four grand minarets, surrounded by the bustling, glittering Laad Bazaar jewelry quarter.',
    category: 'Heritage & Culture',
    image: '/assests/hyderabad-charminar.jpg',
    highlights: ['Four Grand Arches', 'Laad Bazaar Lac Bangles', 'Authentic Hyderabadi Biryani', 'Mecca Masjid'],
    bestTime: 'October to March',
    distance: 'Old City Center'
  },
  {
    id: 'hyderabad-golconda-fort',
    name: 'Golconda Fort',
    location: 'Hyderabad, Telangana',
    region: 'Hyderabad',
    tripType: 'Outstation',
    description: 'A colossal granite fortress complex renowned for its acoustic engineering, royal palaces, diamond vault history (Koh-i-Noor), and light & sound show.',
    category: 'Forts & Archeology',
    image: '/assests/hyderabad-golconda-fort.jpg',
    highlights: ['Acoustic Clapping Portico', 'Bala Hissar Pavilion', 'Sound & Light Show', 'Panoramic City Views'],
    bestTime: 'September to March',
    distance: '11 km west of Hyderabad'
  },
  {
    id: 'hyderabad-ramoji-film-city',
    name: 'Ramoji Film City',
    location: 'Hyderabad, Telangana',
    region: 'Hyderabad',
    tripType: 'Outstation',
    description: 'Certified by Guinness World Records as the largest integrated film studio complex on Earth, offering cinematic theme rides, live stunt shows, and palace sets.',
    category: 'Theme Park & Entertainment',
    image: '/assests/hyderabad-ramoji-film-city.jpg',
    highlights: ['Bahubali Grand Sets', 'Action Stunt Shows', 'Eco Zone & Bird Park', 'Movie Magic Studio Tours'],
    bestTime: 'October to February',
    distance: '30 km from central Hyderabad'
  },
  {
    id: 'hyderabad-hussain-sagar',
    name: 'Hussain Sagar Lake & Buddha Statue',
    location: 'Hyderabad, Telangana',
    region: 'Hyderabad',
    tripType: 'Outstation',
    description: 'A heart-shaped historic lake featuring a majestic 18-meter monolithic white granite Buddha statue standing on Gibraltar Rock, surrounded by Necklace Road promenades.',
    category: 'Scenic & Recreation',
    image: '/assests/hyderabad-hussain-sagar.jpg',
    highlights: ['Monolithic Buddha Statue', 'Ferry Boat Cruises', 'Lumbini Park Laser Show', 'Necklace Road Dining'],
    bestTime: 'Year-round evenings',
    distance: 'Heart of Hyderabad City'
  },

  // ==========================================
  // --- VISAKHAPATNAM (VIZAG) ---
  // ==========================================
  {
    id: 'vizag-rk-beach-submarine',
    name: 'RK Beach & INS Kursura Submarine',
    location: 'Visakhapatnam, Andhra Pradesh',
    region: 'Visakhapatnam',
    tripType: 'Outstation',
    description: 'The vibrant coastline along Ramakrishna Beach featuring the historic INS Kursura (S20) Submarine Museum, TU 142 Aircraft Museum, and sea promenade.',
    category: 'Maritime Heritage & Beach',
    image: '/assests/vizag-rk-beach-submarine.jpg',
    highlights: ['INS Kursura Real Submarine Tour', 'TU-142 Aircraft Museum', 'Beach Promenade Walk', 'Coastal Street Food'],
    bestTime: 'October to March',
    distance: 'Central Vizag Coastal Belt'
  },
  {
    id: 'vizag-araku-valley',
    name: 'Araku Valley & Borra Caves',
    location: 'Visakhapatnam District, Andhra Pradesh',
    region: 'Visakhapatnam',
    tripType: 'Outstation',
    description: 'A lush hill valley in the Eastern Ghats famous for organic coffee plantations, indigenous tribal culture, misty mountain views, and million-year-old Borra Caves.',
    category: 'Hills & Nature',
    image: '/assests/vizag-araku-valley.jpg',
    highlights: ['Borra Caves Stalactites', 'Organic Coffee Plantations', 'Katiki Waterfalls', 'Tribal Habitat Museum'],
    bestTime: 'September to February',
    distance: '115 km from Vizag City'
  },
  {
    id: 'vizag-kailasagiri-coast',
    name: 'Kailasagiri Hilltop Park',
    location: 'Visakhapatnam, Andhra Pradesh',
    region: 'Visakhapatnam',
    tripType: 'Outstation',
    description: 'A picturesque hilltop park perched 360 feet above sea level, offering 360-degree views of the Bay of Bengal, ropeway cable car rides, and giant Shiva-Parvati statues.',
    category: 'Scenic Views & Coastal Hills',
    image: '/assests/vizag-rk-beach-submarine.jpg',
    highlights: ['Panoramic Sea Views', 'Ropeway Cable Car', 'Giant Shiva & Parvati Statues', 'Titanic Viewpoint'],
    bestTime: 'October to March',
    distance: '10 km from Vizag Station'
  },

  // ==========================================
  // --- JHARKHAND ---
  // ==========================================
  {
    id: 'jharkhand-baidyanath-dham',
    name: 'Baba Baidyanath Jyotirlinga Temple',
    location: 'Deoghar, Jharkhand',
    region: 'Jharkhand',
    tripType: 'Outstation',
    description: 'One of the twelve sacred Jyotirlingas in India, where millions of Shiva devotees undertake the Kanwar Yatra. A revered ancient spiritual epicenter.',
    category: 'Pilgrimage & Jyotirlinga',
    image: '/assests/BabaBaidyanath-ml0t5fE1.jpg',
    highlights: ['Sacred Jyotirlinga Darshan', 'Trikuta Parvat Ropeway', 'Tapovan Caves', 'Naulakha Temple'],
    bestTime: 'October to March & Shravan Month',
    distance: 'Deoghar Pilgrimage Corridor'
  },
  {
    id: 'jharkhand-ranchi-waterfalls',
    name: 'Hundru & Dassam Waterfalls Circuit',
    location: 'Ranchi, Jharkhand',
    region: 'Jharkhand',
    tripType: 'Outstation',
    description: 'Spectacular cascading waterfalls on the Subarnarekha and Kanchi rivers tumbling down rocky gorges amidst the lush green forests of the Chota Nagpur plateau.',
    category: 'Waterfalls & Nature',
    image: '/assests/jharkhand-ranchi-waterfalls.jpg',
    highlights: ['Hundru Falls 320ft Drop', 'Dassam Falls Natural Pool', 'Jonha & Sita Falls', 'Rock Climbing & Picnics'],
    bestTime: 'August to February',
    distance: '45 km from Ranchi City'
  },
  {
    id: 'jharkhand-patratu-valley',
    name: 'Patratu Valley & Dam Scenic Drive',
    location: 'Ramgarh / Ranchi, Jharkhand',
    region: 'Jharkhand',
    tripType: 'Outstation',
    description: 'Known as the most picturesque winding ghat road in eastern India, cutting through lush hills with hairpin curves and overlooking the expansive Patratu Lake reservoir.',
    category: 'Scenic Drives & Ghats',
    image: '/assests/jharkhand-patratu-valley.jpg',
    highlights: ['Serpentine Hairpin Highway', 'Patratu Lake Boating', 'Valley Sunset Viewpoints', 'Island Nature Resort'],
    bestTime: 'October to March',
    distance: '35 km north of Ranchi'
  },
  {
    id: 'jharkhand-betla-national-park',
    name: 'Betla National Park & Palamu',
    location: 'Latehar, Jharkhand',
    region: 'Jharkhand',
    tripType: 'Outstation',
    description: 'One of India’s earliest tiger reserves featuring dense sal and bamboo forests, herds of spotted deer, elephants, gaur, and the ancient 16th-century Chero Kings stone fort.',
    category: 'Wildlife & Safari',
    image: '/assests/jharkhand-betla-national-park.jpg',
    highlights: ['Jeep Jungle Safaris', 'Elephant Spotting', 'Ancient Palamu Fort Ruins', 'Rich Birdlife Sanctuary'],
    bestTime: 'November to April',
    distance: '165 km from Ranchi'
  },

  // ==========================================
  // --- OTHER INTERSTATE TOURS ---
  // ==========================================
  {
    id: 'chitrakoot-falls',
    name: 'Chitrakoot Waterfalls',
    location: 'Bastar, Border',
    region: 'Other',
    tripType: 'Outstation',
    description: 'Known as the "Niagara of India", this wide horse-shoe shaped waterfall cascades dramatically on the Indravati river and is a breathtaking spectacle.',
    category: 'Scenic Waterfalls & Adventure',
    image: '/assests/chitrakotwaterfalls-u9qgl7JW.jpg',
    highlights: ['Horse-shoe Waterfall', 'Boating near Spray Mist', 'Sunset Photography', 'Tribal Crafts'],
    bestTime: 'July to February',
    distance: 'Interstate Scenic Tour'
  }
];
