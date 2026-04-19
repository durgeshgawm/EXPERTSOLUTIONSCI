import styles from '@/styles/testimonials.module.css';

export const metadata = {
  title: 'Testimonials - Expert Solutions CI',
  description: 'What our clients say about Expert Solutions CI - testimonials from industry professionals.',
};

const testimonials = [
  {
    name: 'Doorvaa Mishra',
    role: 'Industry Partner',
    text: 'Expert Solutions CI has been a trusted partner of ours for several years. They provide us with a wide range of services, including industrial installation, grinding media and liners, and energy audits. Their team is always responsive and professional, and they go above and beyond to meet our needs. I highly recommend Expert Solutions CI to any business looking for a reliable and experienced industrial maintenance and supply partner.',
    initials: 'DM',
    color: '#0891B2',
  },
  {
    name: 'Sanjay Mishra',
    role: 'Process Improvement Expert',
    text: 'As a process improvement expert, I am constantly looking for ways to improve the efficiency and productivity of our operations. Expert Solutions CI has been instrumental in helping us achieve our goals. They have helped us to identify and implement a number of cost-saving measures, and they have also helped us to improve our quality control processes. I am very grateful for Expert Solutions CI\'s expertise and support.',
    initials: 'SM',
    color: '#0E7490',
  },
  {
    name: 'Ravindra Nath Bhati',
    role: 'Operations Head',
    text: 'I am responsible for overseeing all of our operational processes. Expert Solutions CI plays a vital role in ensuring that our processes are running smoothly and efficiently. They provide us with regular maintenance and support, and they are always quick to respond to any problems that we may have. I am confident that our operations would not be as successful as they are without Expert Solutions CI\'s support.',
    initials: 'RB',
    color: '#155E75',
  },
  {
    name: 'Ramprabu Subramaniam',
    role: 'Maintenance Manager',
    text: 'I am responsible for managing all of our maintenance activities. Expert Solutions CI is a key partner in helping us to keep our equipment running smoothly and efficiently. They provide us with a wide range of maintenance services, including preventive maintenance, corrective maintenance, and overhauls. Their team is highly skilled and experienced, and they always go the extra mile to get the job done.',
    initials: 'RS',
    color: '#164E63',
  },
  {
    name: 'Christopher Adou',
    role: 'Senior Methods Executive',
    text: 'As a senior methods executive, I am responsible for developing and implementing new methods to improve our operational processes. Expert Solutions CI has been very helpful in helping me to achieve my goals. They have provided me with valuable insights and suggestions, and they have also helped me to implement a number of new methods that have resulted in significant efficiency gains.',
    initials: 'CA',
    color: '#0891B2',
  },
  {
    name: 'Leroy David Beni',
    role: 'Mechanical Supervisor',
    text: 'I am a mechanical supervisor, and I am responsible for overseeing the maintenance and repair of our equipment. Expert Solutions CI is a valuable asset to our team. They provide us with a wide range of services, including industrial installation, welding services, and repair and modernization services. Their team is highly skilled and experienced, and they always do a high-quality job.',
    initials: 'LB',
    color: '#0E7490',
  },
  {
    name: 'Vazoumana Bamba',
    role: 'Technicien Bureau d\'Études',
    text: 'En tant que technicien de bureau d\'études et méthodes chez EXPERT SOLUTIONS SARLU, je suis chargé de développer et de mettre en œuvre de nouvelles méthodes pour améliorer nos processus opérationnels. Expert Solutions CI m\'a été très utile pour atteindre mes objectifs. Ils m\'ont apporté de précieuses idées et suggestions, et ils m\'ont également aidé à mettre en œuvre un certain nombre de nouvelles méthodes qui ont permis d\'obtenir des gains d\'efficacité significatifs.',
    initials: 'VB',
    color: '#155E75',
  },
  {
    name: 'Account Manager',
    role: 'Business Partner',
    text: 'Expert Solutions CI is a valuable partner for our business. Their team is knowledgeable, experienced, and always willing to go the extra mile. We are confident that Expert Solutions CI will help us to achieve our business goals.',
    initials: 'AM',
    color: '#164E63',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Testimonials</h1>
          <p className="page-hero-subtitle">
            What our clients and partners say about us
          </p>
        </div>
      </section>

      <section className={`section ${styles.testimonialsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">
              Client <span className="accent-text">Testimonials</span>
            </h2>
            <p className="section-subtitle">
              Hear from the industry professionals who trust Expert Solutions CI.
            </p>
          </div>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.quoteIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <p className={styles.testimonialText}>{testimonial.text}</p>
                <div className={styles.testimonialAuthor}>
                  <div
                    className={styles.avatar}
                    style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}cc)` }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className={styles.authorName}>{testimonial.name}</div>
                    <div className={styles.authorRole}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
