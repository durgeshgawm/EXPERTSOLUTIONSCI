import styles from '@/styles/partners.module.css';

export const metadata = {
  title: 'Partners - Expert Solutions CI',
  description: 'Our trusted partners and the comprehensive services we offer together.',
};

const partners = [
  { icon: '🏢', title: 'HAPBCO', desc: 'Valued strategic partner' },
  { icon: '🏭', title: 'Vega Industries', desc: 'Valued strategic partner' },
  { icon: '🔧', title: 'Thermax', desc: 'Valued strategic partner' },
  { icon: '⚙️', title: 'Spannkraft', desc: 'Valued strategic partner' },
  { icon: '🤝', title: 'Mailam', desc: 'Valued strategic partner' },
  { icon: '🏗️', title: 'Welter/NPM', desc: 'Valued strategic partner' },
  { icon: '📦', title: 'APB', desc: 'Valued strategic partner' },
];

const whyChooseUs = [
  {
    icon: '⭐',
    title: 'Experience',
    desc: 'Our team has years of experience in the industrial sector, and we have a deep understanding of the challenges and opportunities that our clients face.',
  },
  {
    icon: '🧠',
    title: 'Expertise',
    desc: 'We have a wide range of technical expertise, and we are constantly staying up-to-date with the latest technologies and trends in the industry.',
  },
  {
    icon: '🤝',
    title: 'Reliability',
    desc: 'We are committed to providing our clients with reliable and high-quality service, and we always put their needs first.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    desc: 'We are always looking for new and better ways to solve our clients\' problems and help them achieve their goals.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Our Partners</h1>
          <p className="page-hero-subtitle">
            The Expert Solutions CI Experience
          </p>
        </div>
      </section>

      <section className={`section ${styles.partnersSection}`} style={{ paddingBottom: '32px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', marginBottom: '64px' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Expert Solutions CI is a leading provider of industrial maintenance and supply solutions in Abidjan, Côte d'Ivoire. Established in 2022, we have quickly built a reputation for excellence, reliability, and innovation in the industrial sector. Our team consists of highly experienced engineers and technicians who are dedicated to providing our clients with the best possible service and support.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
            At Expert Solutions CI, we are committed to excellence in everything we do. We believe that our success is directly linked to the success of our clients, and we are dedicated to helping them achieve their operational goals and objectives. Whether you are looking for a simple repair or a complex system installation, you can count on Expert Solutions CI to provide you with the best possible service and support.
          </p>
        </div>

        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Our <span className="accent-text">Partners</span>
            </h2>
            <p className="section-subtitle">
              We collaborate with industry leading partners:
            </p>
          </div>
          <div className={styles.partnersGrid} style={{ marginBottom: '64px' }}>
            {partners.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  <span className={styles.partnerIcon}>{partner.icon}</span>
                  <span className={styles.partnerNumber}>0{index + 1}</span>
                </div>
                <h3 className={styles.partnerTitle}>{partner.title}</h3>
                <p className={styles.partnerDesc}>{partner.desc}</p>
                <div className={styles.partnerCardLine}/>
              </div>
            ))}
          </div>

          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Why <span className="accent-text">Choose Us?</span>
            </h2>
          </div>
          <div className={styles.partnersGrid}>
            {whyChooseUs.map((item, index) => (
              <div key={index} className={styles.partnerCard}>
                <div className={styles.partnerCardHeader}>
                  <span className={styles.partnerIcon}>{item.icon}</span>
                </div>
                <h3 className={styles.partnerTitle}>{item.title}</h3>
                <p className={styles.partnerDesc}>{item.desc}</p>
                <div className={styles.partnerCardLine}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
