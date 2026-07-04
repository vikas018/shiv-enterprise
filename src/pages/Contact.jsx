import { useState } from 'react';
import './Contact.css';

const contactInfo = [
  { icon: '📍', label: 'Address', value: '12, Industrial Area, Sector 5, New Delhi – 110001' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'info@shiventerprises.in' },
  { icon: '🕐', label: 'Working Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="section-tag">Get In Touch</div>
          <h1>We're Here to Help</h1>
          <p>Have a question or need a recommendation? Our team responds within 4 business hours.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          {/* Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Reach out through any channel — we'd love to hear from you.</p>

            <div className="contact-info__items">
              {contactInfo.map(c => (
                <div key={c.label} className="contact-info__item">
                  <div className="contact-info__icon">{c.icon}</div>
                  <div>
                    <strong>{c.label}</strong>
                    <p>{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-map">
              <div className="contact-map__placeholder">
                <span>📍</span>
                <p>Sector 5, Industrial Area, New Delhi</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 4 business hours.</p>
                <button className="btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2>Send Us a Message</h2>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                      <option value="">Select a subject</option>
                      <option>Product Enquiry</option>
                      <option>Service Request</option>
                      <option>Get a Quote</option>
                      <option>Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn-primary contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
