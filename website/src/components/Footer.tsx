import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-charcoal-dark)', color: 'white', padding: '4rem 2rem 2rem', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                <div style={{ paddingRight: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
                        <img src="/logos/TC_Monogram_Colour.png" alt="Thrive Collective Icon" style={{ height: '24px', width: 'auto' }} />
                        <span style={{ color: 'var(--color-orange)' }}>THRIVE</span>
                        <span style={{ color: 'var(--color-white)' }}>COLLECTIVE</span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Building a community where everyone can thrive. A supportive environment for your personal wellness journey.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://www.instagram.com/thrivecollectiveexeter" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                            <img src="/icons/ui_social_instagram.svg" alt="Instagram" style={{ width: '20px', filter: 'brightness(0) invert(1)' }} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', transition: 'all var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                            <img src="/icons/ui_social_facebook.svg" alt="Facebook" style={{ width: '20px', filter: 'brightness(0) invert(1)' }} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-white)' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Home</Link></li>
                        <li><Link to="/meet-the-team" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Meet The Team</Link></li>
                        <li><Link to="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Our Story</Link></li>
                        <li><Link to="/gallery" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Gallery</Link></li>
                        <li><Link to="/booking" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-orange)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>Book a Session</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-white)' }}>Contact & Location</h4>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <img src="/icons/ui_contact.svg" alt="" style={{ width: '16px', filter: 'brightness(0) invert(0.7)' }} />
                        <a href="mailto:thrivecollectiveexeter@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>thrivecollectiveexeter@gmail.com</a>
                    </p>
                    <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginTop: '1rem' }}>
                        <img src="/icons/ui_location.svg" alt="" style={{ width: '16px', filter: 'brightness(0) invert(0.7)', marginTop: '4px' }} />
                        <span>
                            Unit 39, 39 Marsh Grn Rd W<br />
                            Marsh Barton, Exeter EX2 8PN
                        </span>
                    </p>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                &copy; {new Date().getFullYear()} Thrive Collective. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
