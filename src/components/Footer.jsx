import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="logo">Cannabits<span className="dot">.</span></h2>
          <p className="footer-desc">{t('footer.desc')}</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>{t('footer.product')}</h4>
            <a href="#">{t('footer.features')}</a>
            <a href="#">{t('footer.download')}</a>
            <a href="#">{t('footer.pricing')}</a>
          </div>
          <div className="link-group">
            <h4>{t('footer.resources')}</h4>
            <a href="#">{t('footer.blog')}</a>
            <a href="#">{t('footer.tutorials')}</a>
            <a href="#">{t('footer.support')}</a>
          </div>
          <div className="link-group">
            <h4>{t('footer.company')}</h4>
            <a href="#">{t('footer.about')}</a>
            <a href="#">{t('footer.contact')}</a>
            <a href="#">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
      <style jsx>{`
        .footer {
          background: var(--color-bg);
          padding: var(--spacing-xl) 0 var(--spacing-md);
          border-top: 1px solid var(--color-glass-border);
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }
        .logo {
          font-size: 2rem;
          margin-bottom: var(--spacing-sm);
        }
        .dot { color: var(--color-accent); }
        .footer-desc {
          color: var(--color-text-muted);
          max-width: 300px;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-md);
        }
        .link-group h4 {
          margin-bottom: var(--spacing-sm);
          color: var(--color-text);
        }
        .link-group a {
          display: block;
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-xs);
          transition: color 0.2s;
        }
        .link-group a:hover {
          color: var(--color-accent);
        }
        .footer-bottom {
          text-align: center;
          color: var(--color-text-muted);
          font-size: 0.9rem;
          padding-top: var(--spacing-md);
          border-top: 1px solid var(--color-glass-border);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
