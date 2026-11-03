import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    keywords?: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: number;
    imageHeight?: number;
    jsonLd?: object;
}

// Update the tag in place if index.html (or a pre-rendered page) already has it, so there's never a duplicate.
const setMeta = (attr: 'name' | 'property', key: string, content?: string | number) => {
    let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
    if (content === undefined || content === '') {
        el?.remove();
        return;
    }
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', String(content));
};

const setCanonical = (href: string) => {
    let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.rel = 'canonical';
        document.head.appendChild(el);
    }
    el.href = href;
};

const setJsonLd = (json: string) => {
    let el = document.getElementById('page-jsonld');
    if (!json) {
        el?.remove();
        return;
    }
    if (!el) {
        el = document.createElement('script');
        el.id = 'page-jsonld';
        el.setAttribute('type', 'application/ld+json');
        document.head.appendChild(el);
    }
    el.textContent = json;
};

const SEO = ({
    title,
    description,
    canonicalUrl,
    keywords = "Thrive Collective, Personal Training, Wellness, Community, Exeter",
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    jsonLd
}: SEOProps) => {
    const siteName = 'Thrive Collective';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Personal Training & Wellness Exeter`;
    const defaultDescription = 'Thrive Collective is a personal training facility in Exeter abandoning the intimidating gym floor for a supportive, elite wellness space for every ability.';
    const siteUrl = 'https://www.thrivecollectiveexeter.co.uk';
    const currentUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
    const imageUrl = image ? `${siteUrl}${image}` : undefined;
    const metaDescription = description || defaultDescription;
    const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : '';

    useEffect(() => {
        document.title = fullTitle;
        setMeta('name', 'description', metaDescription);
        setMeta('name', 'keywords', keywords);
        setCanonical(currentUrl);

        // Open Graph / Facebook
        setMeta('property', 'og:type', 'website');
        setMeta('property', 'og:url', currentUrl);
        setMeta('property', 'og:title', fullTitle);
        setMeta('property', 'og:description', metaDescription);
        setMeta('property', 'og:site_name', siteName);
        setMeta('property', 'og:locale', 'en_GB');
        setMeta('property', 'og:image', imageUrl);
        setMeta('property', 'og:image:width', imageUrl ? imageWidth : undefined);
        setMeta('property', 'og:image:height', imageUrl ? imageHeight : undefined);
        setMeta('property', 'og:image:alt', imageUrl ? imageAlt : undefined);

        // Twitter
        setMeta('property', 'twitter:card', 'summary_large_image');
        setMeta('property', 'twitter:url', currentUrl);
        setMeta('property', 'twitter:title', fullTitle);
        setMeta('property', 'twitter:description', metaDescription);
        setMeta('property', 'twitter:image', imageUrl);

        setJsonLd(jsonLdString);
    }, [fullTitle, metaDescription, keywords, currentUrl, imageUrl, imageAlt, imageWidth, imageHeight, jsonLdString]);

    return null;
};

export default SEO;
