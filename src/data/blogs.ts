export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  readTime: string;
  gradient: string;
}

export const blogs: Blog[] = [
  {
    slug: 'hooghly-river-kolkata',
    title: 'Hooghly River, Kolkata',
    excerpt: 'Hooghly is known as little Europe due to the influence of Portuguese, Denmark, and France. Explore Bandel Church, Imambara, Tarakeshwar Temple, and more.',
    content: [
      'Hooghly is known as little Europe due to the influence of Portuguese, Denmark, and France. This is why this place has a variety of sights to see. From Bandel Church to Imambara, the beautiful Tarakeshwar Temple to the humble Hangseswari temple, or be it the Pandua Bari Mosque or Anthpur Math.',
      'A tour along the Hooghly River takes you back in time, showing the early footprints of European trade in India. Bandel Church, established in 1599, stands as one of the oldest Christian churches in West Bengal. Meanwhile, the grand Hooghly Imambara features a colossal two-story clock tower and stunning Persian calligraphy.',
      'Booking a cab from Bhubaneswar to Hooghly or Kolkata allows you to travel in style and ease, discovering these historical gems at your own pace.'
    ],
    date: 'July 10, 2026',
    author: 'Travel Desk',
    readTime: '3 min read',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'
  },
  {
    slug: 'jhargram-kolkata',
    title: 'Jhargram, Kolkata',
    excerpt: 'Jhargram is a beautiful historical city approximately 175 km from Kolkata, known for ancient temples, lush forests, and royal palaces.',
    content: [
      'Jhargram is another place to visit near Kolkata which is approximately 175 km from Kolkata. This traditional and cultural city has numerous ancient temples, forests, and royal places. This lesser-known place is also a nice place to visit by tourists from various places.',
      'Known for its beautiful forests of Sal and Mahua, Jhargram offers a refreshing escape into nature. The Jhargram Palace, a portion of which is now a heritage hotel, displays a grand blend of Italian and Mughal architecture. The surrounding wilderness and tribal cultural shows make it a rich experience.',
      'Our outstation cab service provides smooth pick-up from Bhubaneswar directly to the gates of Jhargram Palace, ensuring a safe, stress-free road trip.'
    ],
    date: 'June 28, 2026',
    author: 'Travel Desk',
    readTime: '4 min read',
    gradient: 'linear-gradient(135deg, #0F766E 0%, #14B8A6 100%)'
  },
  {
    slug: 'darjeeling-himalayan-kolkata',
    title: 'Darjeeling Himalayan, Kolkata',
    excerpt: 'Darjeeling is celebrated for its lush tea plantations, majestic Tiger Hill sunrises, and the thrilling Himalayan Mountaineering Institute.',
    content: [
      'Darjeeling is a place known for its tea plantations, but you will be amazed to see the things around it. Tiger Hill is a good option if you love trekking and exploring nature around. Himalayan Mountaineering Institute and Zoo is quite a thrill for kids.',
      'The majestic Himalayan range, dominated by Mount Kanchenjunga, frames this gorgeous hill station. The Darjeeling Himalayan Railway (the Toy Train), a UNESCO World Heritage site, offers a slow-paced, nostalgic ride through scenic loops and mountainsides.',
      'Planning a long-distance road journey to the Queen of Hills? Opt for our premium AC Innova Crysta for strong highway performance and plush seating on high-altitude climbs.'
    ],
    date: 'May 15, 2026',
    author: 'Travel Desk',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #4338CA 0%, #6366F1 100%)'
  }
];
