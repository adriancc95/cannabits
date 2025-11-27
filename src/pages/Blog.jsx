import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
    const { t } = useLanguage();

    return (
        <div className="app-container">
            <Header />
            <section className="blog-page">
                <div className="container">
                    <div className="blog-header">
                        <h1 className="page-title">{t('blog.title')}</h1>
                        <p className="page-subtitle">{t('blog.subtitle')}</p>
                    </div>
                    <div className="blog-grid">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="blog-card glass-panel"
                            >
                                <div className="blog-card-image">
                                    <img src={post.image} alt={t(post.titleKey)} />
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-meta">
                                        <span className="blog-date">{post.date}</span>
                                        <span className="blog-author">{post.author}</span>
                                    </div>
                                    <h2 className="blog-card-title">{t(post.titleKey)}</h2>
                                    <p className="blog-card-desc">{t(post.descKey)}</p>
                                    <span className="read-more-link">{t('blog.read_more')} &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
            <style jsx>{`
        .blog-page {
          padding: 120px 0 var(--spacing-xl);
          min-height: 100vh;
          background: var(--color-bg);
        }
        .blog-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }
        .page-title {
          font-size: 4rem;
          margin-bottom: var(--spacing-sm);
          background: linear-gradient(120deg, var(--color-accent), var(--color-primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .page-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-muted);
          max-width: 600px;
          margin: 0 auto;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--spacing-lg);
        }
        .blog-card {
          overflow: hidden;
          transition: transform 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .blog-card:hover {
          transform: translateY(-10px);
        }
        .blog-card-image {
          height: 250px;
          overflow: hidden;
        }
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-card-image img {
          transform: scale(1.1);
        }
        .blog-card-content {
          padding: var(--spacing-md);
        }
        .blog-meta {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }
        .blog-date::after {
          content: "•";
          margin-left: var(--spacing-sm);
        }
        .blog-card-title {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-xs);
          color: var(--color-text);
        }
        .blog-card-desc {
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-sm);
        }
        .read-more-link {
          color: var(--color-accent);
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .page-title { font-size: 2.5rem; }
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Blog;
