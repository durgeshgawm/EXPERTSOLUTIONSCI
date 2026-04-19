import Link from 'next/link';
import styles from '@/styles/footer.module.css';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Product/Services' },
  { href: '/industry-solutions', label: 'Industry Solutions' },
  { href: '/gallery', label: 'Photo Gallery' },
];

const companyLinks = [
  { href: '/partners', label: 'Partners' },
  // { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

const services = [
  'Industrial Instillation',
  'Technical Audits',
  'Process Optimisation',
  'Maintenance Support',
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Here We Are Section */}
      <div className={styles.mapSection} style={{ paddingBottom: '48px' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>OUR OFFICES AROUND THE WORLD</h2>
          
          <div className={styles.worldMap} style={{ marginTop: '32px', marginBottom: '48px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508473.26604433521!2d-3.979665!3d5.348461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Expert Solutions CI - Abidjan, Côte d'Ivoire"
            />
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>Group Companies</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {[
                { name: 'Expert Solutions CI', location: 'IVC' },
                { name: 'Expert Transit & Transport', location: 'IVC' },
                { name: 'Titan Afrique', location: 'IVC' },
                { name: 'Expert Service & Solution', location: 'UAE' },
                { name: 'ACE Solutions', location: 'India' },
                { name: 'Elite & Smart Solutions Nigeria Limited', location: 'Nigeria' }
              ].map((company) => (
                <div key={company.name} style={{ background: 'var(--bg-card)', padding: '16px 24px', borderRadius: '8px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '12px', minWidth: '240px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 8px var(--accent-primary)' }}/>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{company.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{company.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Find Us On Section
      <div className={styles.socialSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Find Us On</h2>
          <p className={styles.sectionText}>
            Connect with us on your favorite social media channel!
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://wa.me/0749951730" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
            </a>
          </div>
        </div>
      </div>
      */}

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <img src="/assets/logo.jpeg" alt="ESCI Logo" width={44} height={44} style={{ objectFit: 'cover', borderRadius: '50%' }} />
                <span>EXPERT SOLUTIONS CI</span>
              </div>
              <p className={styles.footerDesc}>
                Quality Services & Products. Your trusted partner for industrial maintenance, engineering solutions, and supply chain management.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Quick Links</h3>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Company</h3>
              {companyLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={styles.footerColumn}>
              <h3 className={styles.footerColumnTitle}>Services</h3>
              {services.map((service) => (
                <span key={service} className={styles.footerServiceItem}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Expert Solutions CI. All rights reserved.</p>
            <div className={styles.footerBottomLinks}>
              <Link href="/contact">Contact Us</Link>
              <span>•</span>
              <a href="mailto:sales@expertsolutionsci.com">sales@expertsolutionsci.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
