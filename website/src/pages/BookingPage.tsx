import SEO from '../components/SEO';

const BookingPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="Book a Session" description="Book your personal training or wellness session at Thrive Collective." canonicalUrl="/booking" />
            <h1>Booking</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>
            <div style={{ marginTop: '2rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Book Your Session</h3>
                <p style={{ margin: '1rem 0', color: 'var(--text-secondary)' }}>Integration with booking system will go here.</p>
                <button className="btn-primary" style={{ marginBottom: '2rem' }}>Placeholder Button</button>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-orange)' }}>Download Our Booking App</h4>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        For the best experience managing your sessions, download the Thrive Collective app.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <a href="#" className="btn-outline" style={{ padding: '0.8rem 1.5rem' }}>
                            <img src="/icons/ui_download.svg" alt="Apple" style={{ width: '20px', marginRight: '8px', filter: 'brightness(0) invert(1)' }} />
                            App Store
                        </a>
                        <a href="#" className="btn-outline" style={{ padding: '0.8rem 1.5rem' }}>
                            <img src="/icons/ui_download.svg" alt="Android" style={{ width: '20px', marginRight: '8px', filter: 'brightness(0) invert(1)' }} />
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
