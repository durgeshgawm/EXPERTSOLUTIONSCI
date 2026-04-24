import styles from '@/styles/services.module.css';

export const metadata = {
  title: 'Product/Services - Expert Solutions CI',
  description: 'Explore our comprehensive range of industrial services including industrial installation, energy audits, maintenance, and more.',
};

import Image from 'next/image';

const products = [
  { image: '/assets/For Grinding media and liners.jpeg', title: 'Grinding Media and Liners', desc: 'High quality grinding media and liners.' },
  { image: '/assets/Paint.jpeg', title: 'Paints - ABP', desc: 'Industrial paints and coatings.' },
  { image: '/assets/Electrical.jpeg', title: 'Electrical', desc: 'Electrical components and supplies.' },
  { image: '/assets/Insulation.jpeg', title: 'Insulation', desc: 'Thermal and acoustic insulation materials.' },
  { image: '/assets/Belts.jpeg', title: 'Belts', desc: 'Industrial transmission and conveyor belts.' },
  { image: '/assets/Antiwear Solutions.jpeg', title: 'Antiwear Solutions', desc: 'Advanced wear protection solutions.' },
  { image: '/assets/Industrial Spare parts.jpeg', title: 'Industrial Spare parts', desc: 'Wide range of industrial spare parts.' },
  { image: '/assets/Hydraulic Solutions.jpeg', title: 'Hydraulic Solutions', desc: 'Hydraulic systems and components.' },
  { image: '/assets/Gearbox Spare parts.jpeg', title: 'Gearbox Spare parts', desc: 'Replacement parts for industrial gearboxes.' },
  { image: '/assets/Pollution control Equipment.jpeg', title: 'Pollution control Equipment', desc: 'Equipment for environmental compliance.' },
  { image: '/assets/Process Boilers.jpeg', title: 'Process Boilers', desc: 'Industrial process boilers and systems.' },
];

const services = [
  { icon: '🎯', title: 'Industrial Instillation', desc: 'Professional installation of industrial equipment.' },
  { icon: '📋', title: 'Technical Audits', desc: 'Comprehensive technical and energy audits.' },
  { icon: '📈', title: 'Process Optimisation', desc: 'Optimization of manufacturing and industrial processes.' },
  { icon: '🛠️', title: 'Maintenance Support', desc: 'Ongoing maintenance and technical support.' },
  { icon: '📏', title: 'Leaser Alignment', desc: 'Precision laser alignment services.' },
  { icon: '📳', title: 'Vibrations analysis', desc: 'Advanced vibration analysis and diagnostics.' },
  { icon: '⚖️', title: 'Dynamic Balancing', desc: 'Dynamic balancing for rotating equipment.' },
];

export default async function ServicesPage({ searchParams }) {
  const resolvedParams = await Promise.resolve(searchParams);
  const searchQuery = typeof resolvedParams?.q === 'string' ? resolvedParams.q.toLowerCase() : '';

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery) ||
    product.desc.toLowerCase().includes(searchQuery)
  );

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery) ||
    service.desc.toLowerCase().includes(searchQuery)
  );

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
        <div className="container" style={{ marginBottom: '64px' }}>
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Our <span className="accent-text">Products</span>
            </h2>
            <p className="section-subtitle">
              {searchQuery ? `Product search results for "${resolvedParams.q}"` : 'High-quality industrial products and supplies.'}
            </p>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-secondary)' }}>
              <p>No products found matching your search.</p>
            </div>
          ) : (
            <div className={styles.servicesGrid}>
              {filteredProducts.map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <div className={styles.cardImageContainer}>
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      width={400} 
                      height={300} 
                      className={styles.cardImage} 
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.serviceTitle}>{product.title}</h3>
                    <p className={styles.serviceDesc}>{product.desc}</p>
                  </div>
                  <div className={styles.serviceCardGlow}/>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Our <span className="accent-text">Services</span>
            </h2>
            <p className="section-subtitle">
              {searchQuery ? `Service search results for "${resolvedParams.q}"` : 'Comprehensive industrial and engineering solutions.'}
            </p>
          </div>
          
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px 0', color: 'var(--text-secondary)' }}>
              <p>No services found matching your search.</p>
            </div>
          ) : (
            <div className={styles.servicesGrid}>
              {filteredServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <div className={styles.serviceCardGlow}/>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
