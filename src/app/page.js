'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/home.module.css';

const heroImages = [
  '/Home_slide/Main_page_img_1.jpeg',
  '/Home_slide/2.jpeg',
  '/Home_slide/3.jpeg',
  '/Home_slide/4.jpeg',
  '/Home_slide/5.jpeg',
  '/Home_slide/6.jpeg',
  '/Home_slide/7.jpeg',
  '/Home_slide/8.jpeg',
  '/Home_slide/9.jpeg'
];

const whyChooseUs = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Experienced Team',
    desc: 'We are a team of experienced and qualified engineers and technicians.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Wide Range of Services',
    desc: 'We offer a wide range of services to meet the needs of businesses of all sizes and industries.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Highest Quality',
    desc: 'We are committed to providing our clients with the highest quality products and services.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Competitive Pricing',
    desc: 'We offer competitive pricing and flexible payment options.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '24x7 Support',
    desc: 'We are available 24x7 to provide our clients with support.',
  },
];

const stats = [
  { number: '10+', label: 'African Nations' },
  { number: '100+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '24/7', label: 'Support Available' },
];

export default function HomePage() {
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBackground}>
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`${styles.heroBackgroundImage} ${index === currentImageIndex ? styles.active : ''}`}
              style={{ backgroundImage: `url('${src}')` }}
            />
          ))}
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Quality Services & Products
          </div>
          <h1 className={`${styles.heroTitle} ${styles.heroTitleBlue}`}>
            EXPERT SOLUTIONS CI
          </h1>
          <p className={styles.heroSubtitle}>
            Need to speak with a specific Requirements? At Expert Solutions CI, our goal is to make your Business grow like a plant with Strong roots. We are a leading provider of industrial maintenance and supply solutions in Abidjan, Côte d'Ivoire.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="btn btn-primary">
              Schedule a Call
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
            <Link href="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={`section-title ${styles.animateOnScroll}`}>
              Why choose <span className="accent-text">Expert Solutions CI?</span>
            </h2>
            <p className={`section-subtitle ${styles.animateOnScroll}`}>
              We deliver excellence through expertise, innovation, and unwavering dedication to quality.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`${styles.whyCard} ${styles.animateOnScroll}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.whyCardIcon}>{item.icon}</div>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaText}>
              Contact us today to learn more about how Expert Solutions CI can help you achieve your operational goals and objectives.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Contact Us Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
