import styles from '@/styles/about.module.css';

export const metadata = {
  title: 'About Us - Expert Solutions CI',
  description: 'Learn about Expert Solutions CI - your trusted partner for industrial maintenance, engineering solutions, and supply chain management.',
};

const services = [
  { icon: '🎯', title: 'Industrial Installation', desc: 'We use the latest technology to ensure that your equipment is correctly installed and operating at peak efficiency.' },
  { icon: '🌐', title: 'Grinding Media and Liners', desc: 'We supply high quality grinding media and liners from specialized suppliers around the world.' },
  { icon: '🔧', title: 'Maintenance & Repair', desc: 'Our team of experts provides a wide range of maintenance and repair services for industrial equipment.' },
  { icon: '👥', title: 'Training & Support', desc: 'We offer training and support to our clients to help them get the most out of their equipment.' },
];

const values = [
  { icon: '🏆', title: 'Excellence', desc: 'We strive for excellence in everything we do.' },
  { icon: '🤝', title: 'Partnership', desc: 'We build lasting partnerships with our clients.' },
  { icon: '💡', title: 'Innovation', desc: 'We embrace innovation and cutting-edge technology.' },
  { icon: '🌍', title: 'Global Reach', desc: 'We serve clients across the globe.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-subtitle">
            The Expert Solutions CI Experience
          </p>
        </div>
      </section>

      {/* About Intro */}
      <section className={`section ${styles.aboutIntro}`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introContent}>
              <h2 className={styles.introTitle}>
                Who We <span className="accent-text">Are</span>
              </h2>
              <p className={styles.introText}>
                Expert Solutions CI is a leading provider of industrial maintenance and supply solutions in Abidjan, Côte d’Ivoire since 2022. We are committed to helping our clients achieve their operational goals and objectives by providing them with the highest quality products and services.
              </p>
              <p className={styles.introText}>
                Our team of experienced engineers and technicians has a deep understanding of the challenges faced by businesses in a variety of industries, including <strong>mining, cement, quarries, port operation, food processing, and oil extraction</strong>. We use our expertise to develop customized solutions that meet the specific needs of each client.
              </p>
              <p className={styles.introText}>
                We are also proud to represent a number of esteemed business associates in the region. This allows us to offer our clients a wider range of products and services, and to provide them with the best possible support.
              </p>
            </div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <div key={index} className={styles.valueCard}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDesc}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Our <span className="accent-text">Services</span>
            </h2>
            <p className="section-subtitle">
              We offer a wide range of services, including:
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceRow}>
                <div className={styles.serviceRowIcon}>{service.icon}</div>
                <div className={styles.serviceRowContent}>
                  <h3 className={styles.serviceRowTitle}>{service.title}</h3>
                  <p className={styles.serviceRowDesc}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
