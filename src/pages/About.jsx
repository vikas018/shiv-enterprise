import { Link } from 'react-router-dom';
import './About.css';

const timeline = [
  { year: '2005', event: 'Founded in Delhi with a mission to make clean water accessible to every Indian household.' },
  { year: '2009', event: 'Expanded to 10 states, launching our first commercial-grade purifier line.' },
  { year: '2014', event: 'Received ISO 9001:2015 certification and launched the BIS-approved PureGuard series.' },
  { year: '2018', event: 'Hit 25,000+ installations milestone and opened our dedicated R&D center.' },
  { year: '2022', event: 'Launched SmartPure IoT Edition — India\'s first affordable AI-assisted water purifier.' },
  { year: '2026', event: 'Serving 150+ cities, 50,000+ families, and growing every day.' },
];

const team = [
  { name: 'Shiv Prasad Gupta', role: 'Founder & CEO', initial: 'S', color: '#0077B6' },
  { name: 'Anita Gupta', role: 'Director – Operations', initial: 'A', color: '#00B4D8' },
  { name: 'Rohit Mehta', role: 'Head of R&D', initial: 'R', color: '#005F8E' },
  { name: 'Kavya Nair', role: 'Customer Success Lead', initial: 'K', color: '#0096C7' },
];

const values = [
  { icon: '🎯', title: 'Quality First', desc: 'Every product undergoes 200+ quality checks before leaving our facility.' },
  { icon: '🤝', title: 'Customer Trust', desc: 'We build long-term relationships, not one-time transactions.' },
  { icon: '🌍', title: 'Sustainability', desc: 'Our zero-waste manufacturing reduces environmental footprint by 60%.' },
  { icon: '💡', title: 'Innovation', desc: 'Continuous R&D ensures you always get the best water technology available.' },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="section-tag">Our Story</div>
          <h1>Two Decades of Pure Water</h1>
          <p>Started in a small workshop in Delhi, Shiv Enterprise is now India's trusted name in water purification — driven by one simple belief: clean water is a right, not a privilege.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission">
        <div className="container mission__grid">
          <div className="mission__card mission__card--mission">
            <span>🎯</span>
            <h3>Our Mission</h3>
            <p>To deliver world-class water purification solutions that are affordable, reliable, and accessible to every Indian household and business — ensuring no one compromises on the quality of water they drink.</p>
          </div>
          <div className="mission__card mission__card--vision">
            <span>🔭</span>
            <h3>Our Vision</h3>
            <p>To be the most trusted water purification brand in South Asia by 2030, setting new benchmarks for innovation, sustainability, and customer satisfaction in the clean water industry.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">What We Stand For</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values__grid">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Journey</div>
            <h2 className="section-title">Milestones That Define Us</h2>
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={t.year} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__year">{t.year}</span>
                  <p>{t.event}</p>
                </div>
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">The People</div>
            <h2 className="section-title">Meet the Leadership Team</h2>
            <p className="section-subtitle">Passionate individuals committed to bringing clean water to every home.</p>
          </div>
          <div className="team__grid">
            {team.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-card__avatar" style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}88)` }}>
                  {m.initial}
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <h2>Ready to Join the Pure Water Revolution?</h2>
          <p>Explore our range of purifiers or get in touch for a personalised recommendation.</p>
          <div className="about-cta__actions">
            <Link to="/products" className="btn-primary">View Products</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
