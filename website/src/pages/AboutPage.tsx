import SEO from '../components/SEO';

const AboutPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="About Us | Our Story" description="Learn about Thrive Collective's mission to help people make better life choices." canonicalUrl="/about" />
            <h1>Our Story</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>

            <div style={{ marginTop: '2rem', maxWidth: '800px' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-white)', fontStyle: 'italic', marginBottom: '2rem', borderLeft: '4px solid var(--color-orange)', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
                    "Thrive Collective Exeter, where fitness meets community. A small, welcoming fitness space for every ability."
                </p>
                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Thrive Collective is an umbrella brand designed to house multiple services focused on helping people make better life choices and supporting their personal wellness journey.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Our first venture is a personal training facility, grounding the brand in physical fitness and establishing our commitment to creating welcoming, supportive environments.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
