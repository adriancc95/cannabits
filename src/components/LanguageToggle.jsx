import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="language-toggle">
            <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => toggleLanguage('en')}
            >
                EN
            </button>
            <span className="divider">/</span>
            <button
                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                onClick={() => toggleLanguage('es')}
            >
                ES
            </button>
            <style jsx>{`
        .language-toggle {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
          border-radius: 20px;
          border: 1px solid var(--color-glass-border);
        }
        .lang-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .lang-btn:hover {
          color: var(--color-text);
        }
        .lang-btn.active {
          color: var(--color-accent);
        }
        .divider {
          color: var(--color-glass-border);
          font-size: 0.8rem;
        }
      `}</style>
        </div>
    );
};

export default LanguageToggle;
