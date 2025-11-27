import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
    const { slug } = useParams();
    const { t } = useLanguage();

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const content = t(post.contentKey);

    return (
        <div className="app-container">
            <Header />
            <article className="blog-post">
                <div className="post-hero" style={{ backgroundImage: `url(${post.image})` }}>
                    <div className="post-hero-overlay">
                        <div className="container">
                            <Link to="/blog" className="back-link">&larr; {t('blog.cta')}</Link>
                            <h1 className="post-title">{t(post.titleKey)}</h1>
                            <div className="post-meta">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="post-content glass-panel">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>
            </article>
            <Footer />
            <style jsx>{`
        .blog-post {
          min-height: 100vh;
          background: var(--color-bg);
        }
        .post-hero {
          height: 60vh;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
        }
        .post-hero-overlay {
          background: linear-gradient(to top, rgba(11,9,10,0.95), transparent);
          width: 100%;
          padding: var(--spacing-xl) 0;
        }
        .back-link {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          margin-bottom: var(--spacing-md);
          transition: transform 0.2s;
        }
        .back-link:hover {
          transform: translateX(-5px);
        }
        .post-title {
          font-size: 3.5rem;
          margin-bottom: var(--spacing-sm);
          line-height: 1.2;
        }
        .post-meta {
          display: flex;
          gap: var(--spacing-sm);
          color: var(--color-text-muted);
          font-size: 0.9rem;
        }
        .post-content {
          max-width: 800px;
          margin: calc(-1 * var(--spacing-xl)) auto var(--spacing-xl);
          padding: var(--spacing-xl);
          position: relative;
        }
        .post-content :global(h1) {
          font-size: 2.5rem;
          margin: var(--spacing-lg) 0 var(--spacing-md);
          color: var(--color-primary-light);
        }
        .post-content :global(h2) {
          font-size: 2rem;
          margin: var(--spacing-md) 0 var(--spacing-sm);
          color: var(--color-primary-light);
        }
        .post-content :global(h3) {
          font-size: 1.5rem;
          margin: var(--spacing-sm) 0;
          color: var(--color-accent);
        }
        .post-content :global(p) {
          margin-bottom: var(--spacing-sm);
          line-height: 1.8;
          color: var(--color-text-muted);
        }
        .post-content :global(ul),
        .post-content :global(ol) {
          margin: var(--spacing-sm) 0;
          padding-left: var(--spacing-md);
        }
        .post-content :global(li) {
          margin-bottom: var(--spacing-xs);
          line-height: 1.6;
          color: var(--color-text-muted);
        }
        .post-content :global(strong) {
          color: var(--color-text);
          font-weight: 600;
        }
        .post-content :global(code) {
          background: rgba(255,255,255,0.05);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
        }
        @media (max-width: 768px) {
          .post-title { font-size: 2rem; }
          .post-hero { height: 40vh; }
          .post-content { margin-top: 0; }
        }
      `}</style>
        </div>
    );
};

export default BlogPost;
