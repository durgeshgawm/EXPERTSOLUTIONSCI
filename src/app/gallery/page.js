'use client';

import { useState } from 'react';
import styles from '@/styles/gallery.module.css';

import Image from 'next/image';

const galleryImages = [
  { id: 1, title: 'Gallery Image 1', category: 'products', src: '/Photo_gallery/1 (1).jpeg' },
  { id: 2, title: 'Gallery Image 2', category: 'team', src: '/Photo_gallery/1 (1).jpg' },
  { id: 3, title: 'Gallery Image 3', category: 'products', src: '/Photo_gallery/1 (2).jpeg' },
  { id: 4, title: 'Gallery Image 4', category: 'services', src: '/Photo_gallery/1 (2).jpg' },
  { id: 5, title: 'Gallery Image 5', category: 'products', src: '/Photo_gallery/1 (3).jpeg' },
  { id: 6, title: 'Gallery Image 6', category: 'team', src: '/Photo_gallery/1 (3).jpg' },
  { id: 7, title: 'Gallery Image 7', category: 'products', src: '/Photo_gallery/1 (4).jpeg' },
  { id: 8, title: 'Gallery Image 8', category: 'services', src: '/Photo_gallery/1 (4).jpg' },
  { id: 9, title: 'Gallery Image 9', category: 'products', src: '/Photo_gallery/1 (5).jpeg' },
  { id: 10, title: 'Gallery Image 10', category: 'team', src: '/Photo_gallery/1 (5).jpg' },
  { id: 11, title: 'Gallery Image 11', category: 'products', src: '/Photo_gallery/1 (6).jpeg' },
  { id: 12, title: 'Gallery Image 12', category: 'services', src: '/Photo_gallery/1 (6).jpg' },
  { id: 13, title: 'Gallery Image 13', category: 'products', src: '/Photo_gallery/1 (7).jpeg' },
  { id: 14, title: 'Gallery Image 14', category: 'team', src: '/Photo_gallery/1 (7).jpg' },
  { id: 15, title: 'Gallery Image 15', category: 'services', src: '/Photo_gallery/1 (8).jpeg' },
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
                <div className={styles.galleryImagePlaceholder}>
                  <Image 
                    src={image.src} 
                    alt={image.title} 
                    fill 
                    className={styles.galleryImage} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

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
            <div className={styles.lightboxImage}>
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                fill 
                className={styles.lightboxImg} 
                sizes="100vw"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
