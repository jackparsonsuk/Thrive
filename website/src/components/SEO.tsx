import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    keywords?: string;
}

const SEO = ({
    title,
    description,
    canonicalUrl,
    keywords = "Thrive Collective, Personal Training, Wellness, Community, Exeter"
}: SEOProps) => {
    const siteName = 'Thrive Collective';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Personal Training & Wellness Exeter`;
    const defaultDescription = 'Thrive Collective is a personal training facility in Exeter abandoning the intimidating gym floor for a supportive, elite wellness experience.';
    const siteUrl = 'https://www.thrivecollective.com'; // Replace with actual production URL
    const currentUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
};

export default SEO;
