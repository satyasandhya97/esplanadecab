export interface Blog {
  slug: string;
  title: string;
  city: string;
  excerpt: string;
  image: string;
  content: string[];
  date: string;
  author: string;
  readTime: string;
  gradient: string;
  highlights?: string[];
}

export const blogs: Blog[] = [
  {
    slug: 'kolkata-heritage-guide',
    title: 'Kolkata City Guide: Victoria Memorial, Howrah Bridge & Dakshineswar',
    city: 'Kolkata, West Bengal',
    excerpt: 'Explore the City of Joy! From the grand white marble of Victoria Memorial and scenic Hooghly sunset cruises at Howrah Bridge, to the spiritual calmness of Dakshineswar Kali Temple.',
    image: '/assests/kolkata-victoria-memorial.jpg',
    content: [
      'Kolkata, affectionately known as the "City of Joy," is a vibrant tapestry of colonial grandeur, spiritual depth, and unparalleled artistic heritage. When visiting Kolkata, three landmarks stand as absolute must-visits: the magnificent Victoria Memorial, the iconic Howrah Bridge overlooking the bustling Hooghly River, and the sacred Dakshineswar Kali Temple.',
      'The Victoria Memorial, built from pure white Makrana marble, is surrounded by 64 acres of manicured gardens, lush lawns, and reflecting pools. Stepping inside reveals royal galleries housing thousands of rare paintings, British-era artifacts, and illuminated historical exhibits that narrate India’s rich history.',
      'A short drive brings you to the Hooghly River, dominated by the majestic cantilever Howrah Bridge. Enjoy an evening cruise or walk along Princep Ghat to witness the golden sunset reflected across the rippling waters while savoring authentic Kolkata street delicacies like puchkas and kathi rolls.',
      'Just upriver lies the sacred Dakshineswar Kali Temple, established in 1855 by Rani Rashmoni and forever consecrated by the devotion of Sri Ramakrishna Paramahamsa. The compound features 12 classical Shiva shrines lining the ghats, offering immense spiritual peace.',
      'Planning your travel across Kolkata or from Bhubaneswar to Kolkata is effortless with Esplanade Cabs. Our outstation sedans and SUVs guarantee punctual doorstep pick-up, courteous chauffeurs, and zero advance payment.'
    ],
    highlights: ['Victoria Memorial White Marble Halls', 'Howrah Bridge & Princep Ghat River Cruise', 'Dakshineswar Kali Temple & Belur Math Ferry', 'Eco Park New Town & Park Street Cafes'],
    date: 'August 24, 2026',
    author: 'Travel Desk',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'
  },
  {
    slug: 'hyderabad-royal-tour',
    title: 'Hyderabad Royal Tour: Charminar, Golconda Fort & Ramoji Film City',
    city: 'Hyderabad, Telangana',
    excerpt: 'Step into the City of Pearls! Discover the 400-year-old Charminar, the acoustic marvel of Golconda Fort, and the cinematic wonderland of Ramoji Film City.',
    image: '/assests/hyderabad-charminar.jpg',
    content: [
      'Hyderabad seamlessly marries royal Nizami heritage with state-of-the-art cinematic innovation. Whether you are an architecture lover, history enthusiast, or film fanatic, Hyderabad offers an unforgettable travel experience.',
      'At the heart of the Old City stands the majestic Charminar, commissioned in 1591. Flanked by four 48.7-meter-high grand minarets, it is encircled by the sparkling Laad Bazaar—world-renowned for lacquer bangles, pearls, zardozi embroidery, and aroma of royal Hyderabadi Dum Biryani.',
      'A short drive west takes you to Golconda Fort, a massive medieval citadel carved out of granite hills. Known for its ingenious acoustic engineering—a single handclap at the Fateh Darwaza can be clearly heard at the Bala Hissar pavilion a kilometer away—the fort also served as the vault for legendary diamonds including the Koh-i-Noor.',
      'For family excitement, Ramoji Film City stands as the world’s largest integrated film studio complex. Spanning over 2,000 acres, it features full-scale sets of ancient palaces, London streets, Japanese gardens, live stunt shows, and the iconic sets of blockbuster Indian movies like Baahubali.',
      'Take an evening stroll around Hussain Sagar Lake to marvel at the 18-meter monolithic Buddha statue glowing at sunset, with speedboats and luxury dinner cruises drifting by.',
      'Esplanade Cabs provides dependable outstation car rentals with experienced highway drivers for comfortable interstate trips between Odisha, Andhra Pradesh, and Hyderabad.'
    ],
    highlights: ['Charminar & Laad Bazaar Pearl Shopping', 'Golconda Fort Acoustic Marvel & Light Show', 'Ramoji Film City Studio Tour', 'Hussain Sagar Monolithic Buddha Statue'],
    date: 'August 18, 2026',
    author: 'Travel Desk',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #7C2D12 0%, #EA580C 100%)'
  },
  {
    slug: 'vizag-araku-valley-guide',
    title: 'Visakhapatnam & Araku Valley: Coastlines, Submarine Museum & Borra Caves',
    city: 'Visakhapatnam, Andhra Pradesh',
    excerpt: 'Experience the Jewel of the East Coast! Relax along RK Beach, step inside the real INS Kursura Submarine Museum, and ascend to the misty coffee plantations of Araku Valley.',
    image: '/assests/vizag-araku-valley.jpg',
    content: [
      'Visakhapatnam (Vizag) offers a unique combination where the turquoise waters of the Bay of Bengal meet the green peaks of the Eastern Ghats. It is one of India’s cleanest and most picturesque coastal cities.',
      'Along the bustling Ramakrishna (RK) Beach promenade sits the decommissioned INS Kursura (S20), a real Soviet-built submarine converted into a world-class maritime museum. Walking through its control rooms, torpedo sections, and sonar quarters gives a rare glimpse into the bravery of naval submariners.',
      'Perched 360 feet above the coast is Kailasagiri, accessible via an exhilarating ropeway cable car. The hilltop offers 360-degree panoramic ocean vistas, manicured floral gardens, and the towering white statues of Lord Shiva and Goddess Parvati.',
      'Heading inland into the Eastern Ghats, a scenic winding road through coffee plantations brings you to Araku Valley. Marvel at the one-million-year-old Borra Caves, illuminated by colorful halogen lights displaying natural limestone stalactite and stalagmite formations resembling Shiva Lingams and mythical creatures.',
      'Unwind at Rishikonda Beach with water sports, golden sands, and clean waves, followed by authentic Andhra seafood thalis.',
      'Book a direct sanitized cab package from Bhubaneswar to Visakhapatnam and Araku Valley with Esplanade Cabs. Enjoy scenic highway drives with flexible stops at Chilika Lake and Berhampur.'
    ],
    highlights: ['INS Kursura Real Submarine Museum on RK Beach', 'Araku Valley Coffee Plantations & Borra Caves', 'Kailasagiri Hilltop Ropeway & Ocean Views', 'Rishikonda Blue Flag Beach & Water Sports'],
    date: 'August 02, 2026',
    author: 'Travel Desk',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #065F46 0%, #059669 100%)'
  },
  {
    slug: 'jharkhand-nature-patratu-trail',
    title: 'Jharkhand Nature Trail: Ranchi Waterfalls, Patratu Valley & Deoghar',
    city: 'Ranchi & Deoghar, Jharkhand',
    excerpt: 'Uncover the hidden gem of Eastern India! From the thunderous Hundru and Dassam waterfalls to the breathtaking hairpin curves of Patratu Valley and sacred Deoghar Jyotirlinga.',
    image: '/assests/jharkhand-ranchi-waterfalls.jpg',
    content: [
      'Jharkhand, the "Land of Forests," is renowned for its untamed natural beauty, cascading waterfalls, winding ghat corridors, and centuries-old spiritual sanctuaries.',
      'Ranchi, known as the City of Waterfalls, is home to Hundru Falls, where the Subarnarekha River plunges 320 feet over black volcanic rocks into a natural bathing pool. Nearby Dassam Falls and Jonha Falls cascade down terraced rocky steps framed by dense sal woodlands.',
      'One of the most thrilling road trips in eastern India is the drive through Patratu Valley. This serpentine highway with sweeping hairpin turns offers awe-inspiring vistas of rolling green hills, culminating at the expansive Patratu Dam and Lake where motorboat rides and lakefront resorts await.',
      'For spiritual travelers, Deoghar houses the holy Baba Baidyanath Dham—one of the twelve venerated Jyotirlingas in Hinduism. Pilgrims from across the world gather here to offer sacred Ganga jal to Lord Shiva in an atmosphere of devotional energy.',
      'For wildlife enthusiasts, Betla National Park in Palamu provides thrilling safari drives to spot spotted deer, wild elephants, gaur, and explore the ancient moss-covered Chero stone forts nestled deep within the jungle.',
      'Travel safely between Odisha and Jharkhand with Esplanade Cabs. Our well-maintained SUVs handle hilly ghat routes with ease, and you pay only after your ride concludes.'
    ],
    highlights: ['Hundru & Dassam Cascading Waterfalls', 'Patratu Valley Winding Scenic Highway', 'Baba Baidyanath Jyotirlinga Dham Deoghar', 'Betla National Park Safari & Fort Ruins'],
    date: 'July 25, 2026',
    author: 'Travel Desk',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)'
  },
  {
    slug: 'hooghly-river-kolkata',
    title: 'Hooghly River & Little Europe: Bandel Church, Imambara & Ghats',
    city: 'Hooghly, West Bengal',
    excerpt: 'Hooghly is known as little Europe due to the heritage of Portuguese, Danish, and French settlements. Explore Bandel Church, Imambara, Tarakeshwar Temple, and historic ghats.',
    image: '/assests/kolkata-howrah-bridge.jpg',
    content: [
      'Hooghly is known as "Little Europe" along the riverbanks due to early settlements of Portuguese, Danes, French, and Dutch traders. This unique heritage has left behind remarkable monuments along the sacred river.',
      'From Bandel Church (built in 1599, one of the oldest in India) to the grand Hooghly Imambara featuring its colossal two-story clock tower and Persian calligraphy, every turn tells a story of cultural confluence.',
      'The sacred Tarakeshwar Temple and humble Hangseswari Temple with 13 terracotta pinnacles showcase classic Bengal architecture, while Chandannagar retains charming French colonial promenades along the Strand.',
      'Booking an outstation cab with Esplanade Cabs ensures comfortable travel between Bhubaneswar and Hooghly/Kolkata with complete peace of mind.'
    ],
    highlights: ['Historic Bandel Church (1599)', 'Hooghly Imambara Clock Tower', 'French Colonial Strand Chandannagar', 'Hangseswari Terracotta Temple'],
    date: 'July 10, 2026',
    author: 'Travel Desk',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'
  },
  {
    slug: 'jhargram-kolkata',
    title: 'Jhargram Royal Palace & Sal Forest Retreat',
    city: 'Jhargram, West Bengal',
    excerpt: 'Jhargram is a beautiful historical getaway located near the Bengal-Odisha border, celebrated for ancient royal palaces, dense Sal forests, and tribal traditions.',
    image: '/assests/Jhargram-OZgpzJVc.jpg',
    content: [
      'Jhargram is an enchanting forest and heritage destination approximately 175 km from Kolkata and easily accessible from Bhubaneswar. Dotted with ancient temples, royal palaces, and tranquil sal tree canopies, it is a serene getaway from city hustle.',
      'The Jhargram Raj Palace, displaying a harmonious blend of Italian and Mughal architecture, transports visitors into the era of the Malla Deb royal dynasty. The surrounding wilderness of Belpahari, Ghagra Waterfalls, and Kanak Durga Temple offer scenic peaceful walks.',
      'Local Santhali folk dance and traditional handicrafts make Jhargram culturally vibrant.',
      'Our door-to-door taxi service provides private, air-conditioned cabs directly from your home to Jhargram with experienced drivers.'
    ],
    highlights: ['Jhargram Raj Palace Heritage Stay', 'Kanak Durga Temple in Sacred Groves', 'Ghagra River Waterfalls', 'Belpahari Hills & Tribal Culture'],
    date: 'June 28, 2026',
    author: 'Travel Desk',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)'
  },
  {
    slug: 'darjeeling-himalayan-kolkata',
    title: 'Darjeeling Himalayan Odyssey: Toy Train, Tea Gardens & Kanchenjunga',
    city: 'Darjeeling, West Bengal',
    excerpt: 'Darjeeling is celebrated for world-famous tea gardens, majestic Tiger Hill sunrises, Batasia Loop, and the UNESCO World Heritage Himalayan Toy Train.',
    image: '/assests/darjeelinghimalayan-an86VvOR.jpg',
    content: [
      'Perched at an elevation of 6,700 feet, Darjeeling is framed by the majestic snow-capped peaks of Mount Kanchenjunga—the third highest mountain in the world.',
      'An early morning drive to Tiger Hill rewards travelers with the mesmerizing sight of the sunrise illuminating Kanchenjunga in shades of gold and pink. The Darjeeling Himalayan Railway (Toy Train) offers a nostalgic narrow-gauge steam ride through scenic mountain loops and tea estates.',
      'Visit the Himalayan Mountaineering Institute, Padmaja Naidu Himalayan Zoological Park (home to rare red pandas and snow leopards), and sip fresh muscatel tea at historic Happy Valley Tea Estate.',
      'For a seamless road trip, book our spacious AC Innova Crysta or Toyota Fortuner for high-altitude comfort and safety on mountain roads.'
    ],
    highlights: ['Tiger Hill Golden Sunrise on Kanchenjunga', 'UNESCO Heritage Himalayan Toy Train Ride', 'Padmaja Naidu Zoo Red Panda Sanctuary', 'Happy Valley Organic Tea Estate Tour'],
    date: 'May 15, 2026',
    author: 'Travel Desk',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)'
  }
];
