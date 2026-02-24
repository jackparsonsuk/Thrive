import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="About Us | Our Story" description="Learn about Thrive Collective's mission to help people make better life choices." canonicalUrl="/about" />
            <h1>Our Story</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>

            <div style={{ marginTop: '2rem', maxWidth: '800px' }}>
                <p style={{ marginBottom: '1rem' }}>
                    Thrive Collective is an umbrella brand designed to house multiple services focused on helping people make better life choices and supporting their personal wellness journey.
                </p>
                <p>
                    Our first venture is a personal training facility, grounding the brand in physical fitness and establishing our commitment to creating welcoming, supportive environments.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
