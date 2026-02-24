import SEO from '../components/SEO';

const LocationPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="How to Find Us" description="Directions and location information for Thrive Collective in Exeter." canonicalUrl="/location" />
            <h1>How to Find Us</h1>
            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div style={{ height: '400px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.026724391444!2d-3.541603584285856!3d50.70773637951052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486da6ca1ea7cfc5%3A0x6e268a7ec26edc8!2sUnit%2039%2C%2039%20Marsh%20Green%20Rd%20W%2C%20Marsh%20Barton%2C%20Exeter%20EX2%208PN%2C%20UK!5e0!3m2!1sen!2sus!4v1714574928643!5m2!1sen!2sus"
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
                        Unit 39, 39 Marsh Grn Rd W,<br />
                        Marsh Barton, Exeter EX2 8PN
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Located in the heart of Marsh Barton, our private facility offers a welcoming, unintimidating environment for your wellness journey.
                        We are easily accessible with dedicated parking available for our members.
                    </p>
                    <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Unit+39,+39+Marsh+Grn+Rd+W,+Marsh+Barton,+Exeter+EX2+8PN"
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
