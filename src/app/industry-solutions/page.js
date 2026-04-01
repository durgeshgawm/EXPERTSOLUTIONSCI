import styles from '@/styles/industry.module.css';

export const metadata = {
  title: 'Industry Wise Solutions - Expert Solutions CI',
  description: 'Industry-specific solutions for cement, mining, power generation, food processing, and more.',
};

const industries = [
  { icon: '🏭', name: 'Cement Industry', services: ['Laser alignment and thermography', 'Mechanical maintenance', 'Wear solutions', 'Dust emission curbing', 'Production optimization'] },
  { icon: '⛏️', name: 'Mining Industry', services: ['Mechanical maintenance', 'Welding services', 'Repair and modernization', 'Process optimization', 'Quality control'] },
  { icon: '⚡', name: 'Power Generation', services: ['Electrical maintenance', 'Energy audits', 'Energy optimization', 'Process enhancement', 'Laser alignment'] },
  { icon: '🍽️', name: 'Food & Beverage', services: ['Quality control', 'Process optimization', 'Environment protection', 'Mechanical maintenance', 'In-situ services'] },
  { icon: '🛢️', name: 'Oil & Gas', services: ['Welding services', 'Mechanical maintenance', 'Repair and modernization', 'Prompt services', 'In-situ services'] },
  { icon: '🏗️', name: 'Manufacturing', services: ['Process enhancement', 'Production optimization', 'Quality control', 'Electrical maintenance', 'Wear solutions'] },
];

const allServices = [
  'Laser alignment and thermography', 'Global supply-chain network', 'Energy audits',
  'Mechanical maintenance', 'Electrical maintenance', 'Process optimization',
  'Quality control', 'Wear solutions', 'Process enhancement',
  'Energy optimization', 'Dust emission curbing', 'Environment protection',
  'Production optimization', 'In-situ services', 'Prompt services',
  'Welding services', 'Repair and modernization services', 'Bilingual staff availability',
];

export default function IndustrySolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Industry Wise Solutions</h1>
          <p className="page-hero-subtitle">
            Tailored solutions for every industry sector
          </p>
        </div>
      </section>

      <section className={`section ${styles.industrySection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Solutions by <span className="accent-text">Industry</span>
            </h2>
            <p className="section-subtitle">
              We serve diverse industries with specialized expertise and solutions.
            </p>
          </div>
          <div className={styles.industryGrid}>
            {industries.map((industry, index) => (
              <div key={index} className={styles.industryCard}>
                <div className={styles.industryHeader}>
                  <span className={styles.industryIcon}>{industry.icon}</span>
                  <h3 className={styles.industryName}>{industry.name}</h3>
                </div>
                <ul className={styles.industryServices}>
                  {industry.services.map((service, i) => (
                    <li key={i} className={styles.industryServiceItem}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.checkIcon}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.allServicesSection}`}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '32px' }}>
            Complete <span className="accent-text">Service List</span>
          </h2>
          <div className={styles.serviceTags}>
            {allServices.map((service, index) => (
              <span key={index} className={styles.serviceTag}>{service}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
