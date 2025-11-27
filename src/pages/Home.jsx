import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SectionTeaser from '../components/SectionTeaser';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { blogPosts } from '../data/blogPosts';

// Images
import blogIot from '../assets/blog-iot.png';
import blogLight from '../assets/blog-light.png';
import blogHydro from '../assets/blog-hydro.png';
import storeHub from '../assets/store-hub.png';
import storeSensor from '../assets/store-sensor.png';
import storeGrowlight from '../assets/store-growlight.png';

const Home = () => {
    const { t } = useLanguage();

    const blogPostsData = blogPosts.map(post => ({
        title: t(post.titleKey),
        description: t(post.descKey),
        image: post.image,
        slug: post.slug
    }));

    const storeItems = [
        {
            title: t('store.items.hub.title'),
            description: t('store.items.hub.desc'),
            image: storeHub
        },
        {
            title: t('store.items.sensor.title'),
            description: t('store.items.sensor.desc'),
            image: storeSensor
        },
        {
            title: t('store.items.light.title'),
            description: t('store.items.light.desc'),
            image: storeGrowlight
        }
    ];

    return (
        <div className="app-container">
            <Header />
            <Hero />
            <Features />
            <SectionTeaser
                id="blog"
                title={t('blog.title')}
                subtitle={t('blog.subtitle')}
                items={blogPostsData}
                ctaText={t('blog.cta')}
                ctaLink="/blog"
            />
            <SectionTeaser
                id="store"
                title={t('store.title')}
                subtitle={t('store.subtitle')}
                items={storeItems}
                ctaText={t('store.cta')}
                ctaLink="#"
                reverse
            />
            <Footer />
        </div>
    );
};

export default Home;
