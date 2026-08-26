import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Header from '@/components/header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Esplanade Cabs | Premium Travel & Cab Services Bhubaneswar',
  description: 'Experience unparalleled comfort and reliability with Esplanade Cabs in Bhubaneswar. Affordable outstation packages, local city rides, and airport transfers with no advance payment required.',
  keywords: 'cab service bhubaneswar, taxi in bhubaneswar, odisha travel agency, puri konark tour cabs, innova crysta rental bhubaneswar, airport taxi bhubaneswar',
  openGraph: {
    title: 'Esplanade Cabs | Premium Travel & Cab Services',
    description: 'Affordable outstation packages, local city rides, and airport transfers in Bhubaneswar with no advance payment required.',
    url: 'https://esplanadecab.co.in',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {/* Animated Background Glow Blobs */}
        <div className="glow-bg-container">
          <div className="glow-bg-blob blob-purple" />
          <div className="glow-bg-blob blob-cyan" />
          <div className="glow-bg-blob blob-pink" />
        </div>

        {/* Dynamic Navigation Header */}
        <Header />

        {/* Page Content */}
        <main style={{ minHeight: '80vh', paddingTop: '80px' }}>
          {children}
        </main>

        {/* Global Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <Link href="/" className="logo-text" style={{ marginBottom: '10px' }}>
                  Esplanade<span className="logo-accent">Cabs</span>
                </Link>
                <p className="footer-desc">
                  Experience unparalleled comfort and reliability with The Esplanade Cab. Our dedicated team ensures that your journey is smooth and stress-free, whether you're navigating the city streets or embarking on a long-distance adventure. Trust us to get you where you need to go, safely and on time.
                </p>
              </div>

              <div className="footer-col">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/" className="footer-link">Home</Link></li>
                  <li><Link href="/about" className="footer-link">About Us</Link></li>
                  <li><Link href="/destinations" className="footer-link">Explore Places</Link></li>
                  <li><Link href="/blogs" className="footer-link">Latest Blogs</Link></li>
                  <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-title">Our Services</h4>
                <ul className="footer-links">
                  <li><Link href="/#services" className="footer-link">City Sightseeing</Link></li>
                  <li><Link href="/#services" className="footer-link">Airport Transfers</Link></li>
                  <li><Link href="/#services" className="footer-link">Outstation Trips</Link></li>
                  <li><Link href="/#services" className="footer-link">Corporate Rentals</Link></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4 className="footer-title">Contact Channels</h4>
                <p className="footer-desc" style={{ marginBottom: '10px' }}>
                  <strong>Address:</strong> Bhubaneswar, Odisha, India
                </p>
                <p className="footer-desc" style={{ marginBottom: '10px' }}>
                  <strong>Phone:</strong> <a href="tel:+919090809910" style={{ color: 'var(--accent-gold)' }}>+91 90908 09910</a>
                </p>
                <p className="footer-desc">
                  <strong>Support:</strong> 24/7 Helpline available for active rides.
                </p>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Esplanade Cabs. All rights reserved.</p>
              <p>Proudly crafted with ❤️ by Promod Puhan for The Esplanade Cab</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
