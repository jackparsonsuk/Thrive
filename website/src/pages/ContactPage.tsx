import SEO from '../components/SEO';

const ContactPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="Contact Us" description="Get in touch with Thrive Collective in Exeter." canonicalUrl="/contact" />
            <h1>Contact Us</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>

            <div style={{ marginTop: '2rem', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-md)', maxWidth: '600px' }}>
                <h3 style={{ marginBottom: '1rem' }}>Get in Touch</h3>
                <p style={{ marginBottom: '2rem' }}>We're here to help you take the first steps towards better wellbeing.</p>

                <p><strong>Email:</strong> <a href="mailto:thrivecollectiveexeter@gmail.com" style={{ color: 'var(--color-orange)' }}>thrivecollectiveexeter@gmail.com</a></p>
            </div>
        </div>
    );
};

export default ContactPage;
