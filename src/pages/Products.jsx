import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const products = [
  {
    id: 1, category: 'RO',
    name: 'AquaShield RO 7L', tag: 'Best Seller',
    price: '₹8,999', oldPrice: '₹12,999',
    capacity: '7 Litres', stages: '7-Stage', warranty: '1 Year',
    desc: 'Compact RO purifier ideal for small families. Removes dissolved salts, heavy metals, and bacteria.',
    color: '#0077B6',
  },
  {
    id: 2, category: 'UV',
    name: 'CrystalFlow UV Plus', tag: 'Eco Pick',
    price: '₹5,499', oldPrice: '₹7,499',
    capacity: '10 Litres', stages: '5-Stage', warranty: '2 Years',
    desc: 'High-speed UV sterilisation eliminates 99.99% of germs without wasting a single drop of water.',
    color: '#00B4D8',
  },
  {
    id: 3, category: 'RO+UV',
    name: 'PureGuard Pro RO+UV', tag: 'Recommended',
    price: '₹14,499', oldPrice: '₹19,999',
    capacity: '12 Litres', stages: '9-Stage', warranty: '2 Years',
    desc: 'The ultimate dual-protection purifier combining RO and UV for maximum safety and mineral retention.',
    color: '#005F8E',
  },
  {
    id: 4, category: 'RO+UV',
    name: 'SmartPure IoT Edition', tag: 'New Launch',
    price: '₹18,999', oldPrice: '₹24,999',
    capacity: '15 Litres', stages: '9-Stage', warranty: '3 Years',
    desc: 'Wi-Fi enabled smart purifier with real-time water quality monitoring via mobile app.',
    color: '#0096C7',
  },
  {
    id: 5, category: 'Commercial',
    name: 'AquaMax Commercial 50L', tag: 'For Business',
    price: '₹42,000', oldPrice: '₹55,000',
    capacity: '50 Litres/hr', stages: '10-Stage', warranty: '5 Years',
    desc: 'High-capacity commercial purifier for offices, restaurants, and factories with auto-flush technology.',
    color: '#023E8A',
  },
  {
    id: 6, category: 'RO',
    name: 'SlimLine RO Compact', tag: 'Space Saver',
    price: '₹7,299', oldPrice: '₹9,999',
    capacity: '6 Litres', stages: '6-Stage', warranty: '1 Year',
    desc: 'Ultra-slim under-counter design that saves space while delivering high-quality purified water.',
    color: '#48CAE4',
  },
];

const categories = ['All', 'RO', 'UV', 'RO+UV', 'Commercial'];

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <main className="products-page">
      <section className="products-hero">
        <div className="container">
          <div className="section-tag">Our Range</div>
          <h1>Water Purifiers for Every Need</h1>
          <p>From compact home units to large commercial systems — find the perfect purification solution.</p>
        </div>
      </section>

      <section className="section products-section">
        <div className="container">
          <div className="products-filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'filter-btn--active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="products-grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-card__visual" style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}>
                  <div className="product-card__purifier" style={{ borderColor: p.color }}>
                    <span style={{ color: p.color }}>💧</span>
                    <span className="product-card__model-name">{p.name.split(' ')[0]}</span>
                  </div>
                  {p.tag && <span className="product-card__tag" style={{ background: p.color }}>{p.tag}</span>}
                </div>
                <div className="product-card__body">
                  <h3 className="product-card__name">{p.name}</h3>
                  <p className="product-card__desc">{p.desc}</p>
                  <div className="product-card__specs">
                    <span>🪣 {p.capacity}</span>
                    <span>🔄 {p.stages}</span>
                    <span>🛡 {p.warranty}</span>
                  </div>
                  <div className="product-card__pricing">
                    <span className="product-card__price">{p.price}</span>
                    <span className="product-card__old-price">{p.oldPrice}</span>
                  </div>
                  <div className="product-card__actions">
                    <Link to="/contact" className="btn-primary product-card__btn">Buy Now</Link>
                    <Link to="/contact" className="product-card__demo">Get Demo</Link>
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
