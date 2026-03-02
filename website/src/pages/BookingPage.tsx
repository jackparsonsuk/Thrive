import { useEffect } from 'react';
import SEO from '../components/SEO';

const BookingPage = () => {
    useEffect(() => {
        window.location.href = "https://booking.thrivecollectiveexeter.co.uk";
    }, []);

    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="Book a Session" description="Book your personal training or wellness session at Thrive Collective." canonicalUrl="/booking" />
            <h1>Booking</h1>
            <div style={{ marginTop: '2rem', padding: '3rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Redirecting to our booking portal...</h3>
                <p style={{ margin: '1rem 0', color: 'var(--text-secondary)' }}>If you are not redirected automatically, please click below.</p>
                <a href="https://booking.thrivecollectiveexeter.co.uk" className="btn-primary" style={{ display: 'inline-block', marginBottom: '2rem' }}>Proceed to Booking</a>
            </div>
        </div>
    );
};

export default BookingPage;
