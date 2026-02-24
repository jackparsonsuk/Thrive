const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-charcoal-dark)', color: 'white', padding: '3rem 2rem', marginTop: 'auto' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                <div>
                    <h3 style={{ color: 'var(--color-orange)', marginBottom: '1rem' }}>Thrive Collective</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Building a community where everyone can thrive. A supportive environment for your wellness journey.</p>
                </div>
                <div>
                    <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
                    <p style={{ color: 'var(--text-muted)' }}>Email: thrivecollectiveexeter@gmail.com</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                &copy; {new Date().getFullYear()} Thrive Collective. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
