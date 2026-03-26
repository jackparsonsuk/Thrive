import SEO from '../components/SEO';

const LocationPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="How to Find Us" description="Directions and location information for Thrive Collective in Exeter." canonicalUrl="/location" />
            <h1>How to Find Us</h1>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div style={{ height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <iframe
                        src="https://maps.google.com/maps?q=Thrive%20Collective%20Exeter&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Thrive Collective Location Map"
                    ></iframe>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Our Facility</h2>
                    <p style={{ color: 'var(--color-orange)', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        Thrive Collective Exeter<br />
                        <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--text-secondary)' }}>
                            Unit 39, 39 Marsh Grn Rd W,<br />
                            Marsh Barton, Exeter EX2 8PN
                        </span>
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Located in the heart of Marsh Barton, our private facility offers a welcoming, unintimidating environment for your wellness journey.
                        We are easily accessible with dedicated parking available for our members.
                    </p>
                    <a
                        href="https://maps.app.goo.gl/uQ5U21TeqaAWSCLE7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ alignSelf: 'flex-start' }}
                    >
                        Get Directions
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
