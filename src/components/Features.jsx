import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('features.lighting_title'),
      description: t('features.lighting_desc'),
      icon: "💡"
    },
    {
      title: t('features.climate_title'),
      description: t('features.climate_desc'),
      icon: "🌡️"
    },
    {
      title: t('features.watering_title'),
      description: t('features.watering_desc'),
      icon: "💧"
    },
    {
      title: t('features.nutrient_title'),
      description: t('features.nutrient_desc'),
      icon: "🧪"
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">{t('features.title')}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-panel">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-bg);
        }
        .section-title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: var(--spacing-lg);
          color: var(--color-text);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-md);
        }
        .feature-card {
          padding: var(--spacing-md);
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.08);
        }
        .feature-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-sm);
        }
        .feature-title {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-xs);
          color: var(--color-primary-light);
        }
        .feature-desc {
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  );
};

export default Features;
