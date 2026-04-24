'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/header.module.css';

export default function LanguageToggle() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Check current language from google translate cookie
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match && match[2]) {
      const currentLang = match[2].split('/')[2];
      if (currentLang) {
        setLang(currentLang);
      }
    }
  }, []);

  const switchLanguage = (newLang) => {
    if (newLang === lang) return;
    
    // Set the google translate cookie (translating from en to newLang)
    document.cookie = `googtrans=/en/${newLang}; path=/`;
    document.cookie = `googtrans=/en/${newLang}; path=/; domain=${window.location.hostname}`;
    
    setLang(newLang);
    window.location.reload();
  };

  return (
    <div className={styles.langToggleContainer} style={{ display: 'flex', gap: '4px', alignItems: 'center', marginLeft: '10px', marginRight: '10px', background: 'var(--bg-secondary)', padding: '4px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
      <button
        onClick={() => switchLanguage('en')}
        style={{
          background: lang === 'en' ? 'var(--accent-primary)' : 'transparent',
          color: lang === 'en' ? 'var(--bg-primary)' : 'var(--text-secondary)',
          border: 'none',
          padding: '4px 8px',
          borderRadius: '16px',
          fontSize: '0.75rem',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage('fr')}
        style={{
          background: lang === 'fr' ? 'var(--accent-primary)' : 'transparent',
          color: lang === 'fr' ? 'var(--bg-primary)' : 'var(--text-secondary)',
          border: 'none',
          padding: '4px 8px',
          borderRadius: '16px',
          fontSize: '0.75rem',
          fontWeight: '700',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
}
