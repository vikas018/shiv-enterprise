import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  { icon: '🔬', title: '7-Stage Purification', desc: 'Advanced multi-stage filtration removes 99.9% of impurities, bacteria, and viruses.' },
  { icon: '⚡', title: 'Smart Auto-Purge', desc: 'Intelligent self-cleaning system maintains peak performance without manual effort.' },
  { icon: '📱', title: 'IoT Monitoring', desc: 'Track filter life, water quality, and usage in real-time from your smartphone.' },
  { icon: '🌿', title: 'Eco-Friendly', desc: 'Zero-waste technology recovers up to 70% of water, reducing daily wastage.' },
  { icon: '🔒', title: '5-Year Warranty', desc: 'Comprehensive coverage with doorstep service — your peace of mind guaranteed.' },
  { icon: '💧', title: 'Mineral Retention', desc: 'Selectively retains essential minerals like calcium and magnesium for healthy water.' },
];

const stats = [
  { number: '50,000+', label: 'Happy Families' },
  { number: '20+', label: 'Years of Trust' },
  { number: '99.9%', label: 'Purification Rate' },
  { number: '150+', label: 'Cities Served' },
];

const testimonials = [
  {
    name: 'Priya Sharma', city: 'Delhi',
    text: 'Shiv Enterprise transformed our home\'s water quality. The installation was seamless and the taste difference is remarkable!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar', city: 'Mumbai',
    text: 'Best investment for our family\'s health. The after-sales service is exceptional — they respond within hours.',
    rating: 5,
  },
  {
    name: 'Meena Patel', city: 'Ahmedabad',
    text: 'We installed three units across our restaurant. Water quality improved drastically and customers notice the difference in our beverages.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container hero__content">
          <div className="section-tag">Trusted Since 2005</div>
          <h1 className="hero__title">
            Pure Water.<br />
            <span>Healthy Living.</span>
          </h1>
          <p className="hero__desc">
            Shiv Enterprise delivers advanced water purification solutions for homes and businesses.
            Experience the difference of truly clean water with our certified purifiers.
          </p>
          <div className="hero__actions">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn-outline">Get Free Demo</Link>
          </div>
          <div className="hero__badges">
            <span>✅ BIS Certified</span>
            <span>✅ NSF Approved</span>
            <span>✅ ISO 9001:2015</span>
          </div>
        </div>
        <div className="hero__scroll-hint">↓ Scroll to explore</div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="container stats-bar__grid">
          {stats.map(s => (
            <div key={s.label} className="stats-bar__item">
              <span className="stats-bar__number">{s.number}</span>
              <span className="stats-bar__label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section features">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">Built for Pure, Safe Water</h2>
            <p className="section-subtitle">
              Every purifier we build is engineered with precision to deliver water that is not just clean — but truly healthy.
            </p>
          </div>
          <div className="features__grid">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-card__icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>Ready for Cleaner, Healthier Water?</h2>
            <p>Get a free in-home water quality test and personalized recommendation.</p>
          </div>
          <Link to="/contact" className="btn-primary">Book Free Test</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Testimonials</div>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real stories from families who made the switch to pure water.</p>
          </div>
          <div className="testimonials__grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
