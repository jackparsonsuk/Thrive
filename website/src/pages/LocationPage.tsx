import SEO from '../components/SEO';

const LocationPage = () => {
    return (
        <div className="container section-padding" style={{ minHeight: '60vh' }}>
            <SEO title="How to Find Us" description="Directions and location information for Thrive Collective in Exeter." canonicalUrl="/location" />
            <h1>How to Find Us</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>
            <div style={{ marginTop: '2rem', height: '400px', background: 'var(--color-charcoal-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: 'var(--radius-md)' }}>
                [Map Placeholder - Exeter, UK]
            </div>
        </div>
    );
};

export default LocationPage;
