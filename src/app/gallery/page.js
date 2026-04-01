'use client';

import { useState } from 'react';
import styles from '@/styles/gallery.module.css';

const galleryImages = [
  { id: 1, title: 'Sag Mill Interior', category: 'products', color: '#0891B2' },
  { id: 2, title: 'High-Vis Team Photos', category: 'team', color: '#0E7490' },
  { id: 3, title: 'Rebar & Pipe Inventory', category: 'products', color: '#155E75' },
  { id: 4, title: 'Loader Buckets', category: 'products', color: '#164E63' },
  { id: 5, title: 'Wear Plates', category: 'products', color: '#083344' },
  { id: 6, title: 'Shipping Containers (Piping)', category: 'products', color: '#0891B2' },
  { id: 7, title: 'Metal Components', category: 'products', color: '#0E7490' },
  { id: 8, title: 'Installation of Refractory Castable', category: 'services', color: '#155E75' },
  { id: 9, title: 'Furnace Interior Work', category: 'services', color: '#164E63' },
  { id: 10, title: 'Welding Electrodes (CUTARC)', category: 'products', color: '#083344' },
  { id: 11, title: 'Large Industrial Coils', category: 'products', color: '#0891B2' },
  { id: 12, title: 'Cyanide Tank Insulation', category: 'services', color: '#0E7490' },
];

const categories = ['all', 'team', 'services', 'products'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-hero-title">Photo Gallery</h1>
          <p className="page-hero-subtitle">Our Team on Ground and Products</p>
        </div>
      </section>

      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className={styles.galleryGrid}>
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className={styles.galleryItem}
                onClick={() => setSelectedImage(image)}
              >
                <div
                  className={styles.galleryImagePlaceholder}
                  style={{ background: `linear-gradient(135deg, ${image.color}, ${image.color}88)` }}
                >
                  <div className={styles.galleryImageIcon}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                  <div className={styles.galleryOverlay}>
                    <h3 className={styles.galleryTitle}>{image.title}</h3>
                    <span className={styles.galleryCategory}>{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setSelectedImage(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div
              className={styles.lightboxImage}
              style={{ background: `linear-gradient(135deg, ${selectedImage.color}, ${selectedImage.color}88)` }}
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <h3 className={styles.lightboxTitle}>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}
