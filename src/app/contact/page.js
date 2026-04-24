'use client';

import { useState } from 'react';
import styles from '@/styles/contact.module.css';

const hours = [
  { day: 'Monday', time: '9AM – 6PM' },
  { day: 'Tuesday', time: '9AM – 6PM' },
  { day: 'Wednesday', time: '9AM – 6PM' },
  { day: 'Thursday', time: '9AM – 6PM' },
  { day: 'Friday', time: '9AM – 6PM' },
  { day: 'Saturday', time: '9AM – 6PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">
            Get in touch with our team today
          </p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <h2 className={styles.formTitle}>
                Send us a <span className="accent-text">Message</span>
              </h2>
              <p className={styles.formSubtitle}>
                Fill in the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Message subject"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={submitted}
                >
                  {submitted ? (
                    <>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoWrapper}>
              {/* Hours */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  Hours & Appointments
                </h3>
                <div className={styles.hoursGrid}>
                  {hours.map((item) => (
                    <div key={item.day} className={`${styles.hourRow} ${item.time === 'Closed' ? styles.closed : ''}`}>
                      <span className={styles.hourDay}>{item.day}</span>
                      <span className={styles.hourTime}>{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Get In Touch
                </h3>
                <div className={styles.contactDetails}>
                  <a href="mailto:sales@expertsolutionsci.com" className={styles.contactItem}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>sales@expertsolutionsci.com</span>
                  </a>
                </div>
                <p className={styles.bookingNote}>
                  Email us to book an appointment
                </p>
              </div>

              {/* Location Details */}
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Visit Us
                </h3>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem} style={{ textDecoration: 'none' }}>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>Abidjan, Côte d'Ivoire (UTC+0)</span>
                  </div>
                </div>
                <p className={styles.bookingNote}>
                  We're looking forward to your visit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
