import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          {t('hero.title_start')} <span className="highlight">{t('hero.title_highlight')}</span>.
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-actions">
          <button className="btn btn-accent">{t('hero.get_started')}</button>
          <button className="btn btn-outline">{t('hero.watch_demo')}</button>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(11,9,10,0.4) 0%, rgba(11,9,10,1) 100%), url(${heroBg});
          background-size: cover;
          background-position: center;
          z-index: -1;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }
        .hero-title {
          font-size: 5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.1;
        }
        .highlight {
          color: var(--color-accent);
          background: linear-gradient(120deg, var(--color-accent), var(--color-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          margin-bottom: 40px;
          max-width: 600px;
        }
        .hero-actions {
          display: flex;
          gap: 20px;
        }
        .btn-outline {
          border: 1px solid var(--color-glass-border);
          color: var(--color-text);
          background: transparent;
        }
        .btn-outline:hover {
          border-color: var(--color-text);
          background: rgba(255,255,255,0.05);
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 3rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
