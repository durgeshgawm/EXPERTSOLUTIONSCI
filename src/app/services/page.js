import styles from '@/styles/services.module.css';

export const metadata = {
  title: 'Product/Services - Expert Solutions CI',
  description: 'Explore our comprehensive range of industrial services including laser alignment, thermography, energy audits, maintenance, and more.',
};

const services = [
  { icon: '🎯', title: 'Laser Alignment & Thermography', desc: 'We use the latest technology to ensure that your equipment is aligned and operating at peak efficiency.' },
  { icon: '🌐', title: 'Global Supply-Chain Network', desc: 'We have a network of suppliers around the world, sourcing the highest quality products at competitive prices.' },
  { icon: '⚡', title: 'Energy Audits', desc: 'We can help you identify and implement energy efficiency measures to reduce your operating costs.' },
  { icon: '🔧', title: 'Mechanical Maintenance', desc: 'Comprehensive range of mechanical maintenance services, including preventive maintenance, corrective maintenance, and overhauls.' },
  { icon: '🔌', title: 'Electrical Maintenance', desc: 'Comprehensive range of electrical maintenance services, including preventive maintenance, corrective maintenance, and installations.' },
  { icon: '📊', title: 'Process Optimization', desc: 'We can help you optimize your processes to improve efficiency and productivity.' },
  { icon: '✅', title: 'Quality Control', desc: 'Implement and maintain quality control systems to ensure products and services meet expectations.' },
  { icon: '🛡️', title: 'Wear Solutions', desc: 'Advanced wear solutions to extend the lifespan of your industrial equipment and components.' },
  { icon: '🔄', title: 'Process Enhancement', desc: 'Enhance your existing processes with cutting-edge methodologies and technologies.' },
  { icon: '💡', title: 'Energy Optimization', desc: 'Optimize your energy consumption for maximum efficiency and cost savings.' },
  { icon: '🏭', title: 'Dust Emission Curbing', desc: 'Effective solutions for controlling and reducing dust emissions in industrial environments.' },
  { icon: '🌿', title: 'Environment Protection', desc: 'Environmental protection services to ensure compliance and sustainability.' },
  { icon: '📈', title: 'Production Optimization', desc: 'Maximize your production output while maintaining quality and reducing waste.' },
  { icon: '🏗️', title: 'In-Situ Services', desc: 'On-site services delivered directly at your facility for minimal disruption.' },
  { icon: '⏱️', title: 'Prompt Services', desc: 'Fast and responsive service delivery to minimize downtime and disruption.' },
  { icon: '🔥', title: 'Welding Services', desc: 'Professional welding services for industrial applications and repairs.' },
  { icon: '🔨', title: 'Repair & Modernization', desc: 'Comprehensive repair and modernization services to upgrade your equipment.' },
  { icon: '🗣️', title: 'Bilingual Staff Availability', desc: 'Our team is available in multiple languages to serve diverse clients effectively.' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Product / Services</h1>
          <p className="page-hero-subtitle">
            Comprehensive industrial solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              List of <span className="accent-text">Services</span>
            </h2>
            <p className="section-subtitle">
              Our services include a comprehensive range of industrial and engineering solutions.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <div className={styles.serviceCardGlow}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
