import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo">
          Cannabits<span className="dot">.</span>
        </Link>
        <nav className="nav">
          <Link to="/" onClick={(e) => scrollToSection(e, 'home')} className="nav-link">{t('header.home')}</Link>
          <Link to="/#features" onClick={(e) => scrollToSection(e, 'features')} className="nav-link">{t('header.features')}</Link>
          <Link to="/blog" className="nav-link">{t('header.blog')}</Link>
          <Link to="/#store" onClick={(e) => scrollToSection(e, 'store')} className="nav-link">{t('header.store')}</Link>
        </nav>
        <div className="header-actions">
          <LanguageToggle />
          {/* <button className="btn btn-primary">{t('header.download')}</button> */}
        </div>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }
        .header.scrolled {
          background: rgba(11, 9, 10, 0.8);
          backdrop-filter: blur(12px);
          padding: 15px 0;
          border-bottom: 1px solid var(--color-glass-border);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
          letter-spacing: -0.5px;
        }
        .dot {
          color: var(--color-accent);
        }
        .nav {
          display: flex;
          gap: 30px;
        }
        .nav-link {
          font-weight: 500;
          color: var(--color-text-muted);
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--color-text);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        @media (max-width: 768px) {
          .nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export default Header;
