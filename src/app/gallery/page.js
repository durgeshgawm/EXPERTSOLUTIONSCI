'use client';

import { useState } from 'react';
import styles from '@/styles/gallery.module.css';

import Image from 'next/image';

const galleryImages = [
  { id: 2, title: 'Gallery Image 2', category: 'team', src: '/Photo_gallery/1 (1).jpg' },
  { id: 4, title: 'Gallery Image 4', category: 'services', src: '/Photo_gallery/1 (2).jpg' },
  { id: 6, title: 'Gallery Image 6', category: 'team', src: '/Photo_gallery/1 (3).jpg' },
  { id: 8, title: 'Gallery Image 8', category: 'services', src: '/Photo_gallery/1 (4).jpg' },
  { id: 10, title: 'Gallery Image 10', category: 'team', src: '/Photo_gallery/1 (5).jpg' },
  { id: 12, title: 'Gallery Image 12', category: 'services', src: '/Photo_gallery/1 (6).jpg' },
  { id: 14, title: 'Gallery Image 14', category: 'team', src: '/Photo_gallery/1 (7).jpg' },
  { id: 15, title: 'Gallery Image 15', category: 'services', src: '/Photo_gallery/1 (8).jpeg' },
  { id: 16, title: 'Gallery Image 16', category: 'services', src: '/Photo_gallery/new_service.jpeg' },
  { id: 101, title: 'Product 1', category: 'products', src: '/Product_photo/1 (1).jpeg' },
  { id: 102, title: 'Product 18', category: 'products', src: '/Product_photo/1 (18).jpeg' },
  { id: 103, title: 'Product 19', category: 'products', src: '/Product_photo/1 (19).jpeg' },
  { id: 104, title: 'Product 20', category: 'products', src: '/Product_photo/1 (20).jpeg' },
  { id: 105, title: 'Product 21', category: 'products', src: '/Product_photo/1 (21).jpeg' },
  { id: 106, title: 'Product 22', category: 'products', src: '/Product_photo/1 (22).jpeg' },
  { id: 107, title: 'Product 23', category: 'products', src: '/Product_photo/1 (23).jpeg' },
  { id: 108, title: 'Product 24', category: 'products', src: '/Product_photo/1 (24).jpeg' },
  { id: 109, title: 'Product 25', category: 'products', src: '/Product_photo/1 (25).jpeg' },
  { id: 110, title: 'Product 26', category: 'products', src: '/Product_photo/1 (26).jpeg' },
  { id: 111, title: 'Product 27', category: 'products', src: '/Product_photo/1 (27).jpeg' },
  { id: 112, title: 'Product 28', category: 'products', src: '/Product_photo/1 (28).jpeg' },
  { id: 113, title: 'Product 29', category: 'products', src: '/Product_photo/1 (29).jpeg' },
  { id: 114, title: 'Product 30', category: 'products', src: '/Product_photo/1 (30).jpeg' },
  { id: 115, title: 'Product 31', category: 'products', src: '/Product_photo/1 (31).jpeg' },
  { id: 116, title: 'Product 32', category: 'products', src: '/Product_photo/1 (32).jpeg' },
  { id: 117, title: 'Product 33', category: 'products', src: '/Product_photo/1 (33).jpeg' },
  { id: 118, title: 'Product 34', category: 'products', src: '/Product_photo/1 (34).jpeg' },
  { id: 119, title: 'Product 35', category: 'products', src: '/Product_photo/1 (35).jpeg' },
  { id: 120, title: 'Product 36', category: 'products', src: '/Product_photo/1 (36).jpeg' },
  { id: 121, title: 'Product 37', category: 'products', src: '/Product_photo/1 (37).jpeg' },
  { id: 122, title: 'Product 38', category: 'products', src: '/Product_photo/1 (38).jpeg' },
  { id: 123, title: 'Product 39', category: 'products', src: '/Product_photo/1 (39).jpeg' },
  { id: 124, title: 'Product 40', category: 'products', src: '/Product_photo/1 (40).jpeg' },
  { id: 125, title: 'Product 41', category: 'products', src: '/Product_photo/1 (41).jpeg' },
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
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
