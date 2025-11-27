import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SectionTeaser = ({ id, title, subtitle, items, ctaText, ctaLink, reverse }) => {
  const { t } = useLanguage();

  return (
    <section className={`section-teaser ${reverse ? 'reverse' : ''}`} id={id}>
      <div className="container">
        <div className="teaser-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        <div className="teaser-grid">
          {items.map((item, index) => {
            const CardWrapper = item.slug ? Link : 'div';
            const cardProps = item.slug ? { to: `/blog/${item.slug}` } : {};

            return (
              <CardWrapper key={index} {...cardProps} className="teaser-card glass-panel">
                <div className="card-image-container">
                  <img src={item.image} alt={item.title} className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                  {item.slug && <span className="card-link">{t('blog.read_more')} &rarr;</span>}
                </div>
              </CardWrapper>
            );
          })}
        </div>
        <div className="teaser-cta">
          <a href={ctaLink} className="btn btn-primary">{ctaText}</a>
        </div>
      </div>
      <style jsx>{`
        .section-teaser {
          padding: var(--spacing-xl) 0;
          background: var(--color-bg-secondary);
        }
        .section-teaser.reverse {
          background: var(--color-bg);
        }
        .teaser-header {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: var(--spacing-sm);
        }
        .section-subtitle {
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }
        .teaser-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        .teaser-card {
          overflow: hidden;
          transition: transform 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .teaser-card:hover {
          transform: translateY(-5px);
        }
        .card-image-container {
          height: 200px;
          width: 100%;
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .teaser-card:hover .card-image {
          transform: scale(1.1);
        }
        .card-content {
          padding: var(--spacing-md);
        }
        .card-title {
          font-size: 1.25rem;
          margin-bottom: var(--spacing-xs);
        }
        .card-desc {
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-sm);
          font-size: 0.9rem;
        }
        .card-link {
          color: var(--color-accent);
          font-weight: 600;
        }
        .teaser-cta {
          text-align: center;
        }
      `}</style>
    </section >
  );
};

export default SectionTeaser;
