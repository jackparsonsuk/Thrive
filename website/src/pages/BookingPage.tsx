import SEO from '../components/SEO';

const BookingPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="Book a Session" description="Book your personal training or wellness session at Thrive Collective." canonicalUrl="/booking" />
            <h1>Booking</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>
            <div style={{ marginTop: '2rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3>Book Your Session</h3>
                <p style={{ margin: '1rem 0' }}>Integration with booking system will go here.</p>
                <button style={{ background: 'var(--color-orange)', color: 'white', padding: '1rem 2rem', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer' }}>Placeholder Button</button>
            </div>
        </div>
    );
};

export default BookingPage;
