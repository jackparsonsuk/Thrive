import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Meet the Team', path: '/meet-the-team' },
        { name: 'About', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Location', path: '/location' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={scrolled ? 'glass-nav' : ''}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: scrolled ? '1rem 0' : '1.5rem 0',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.5px', textDecoration: 'none' }}>
                    <img src="/logos/TC_Monogram_White.png" alt="Thrive Collective Icon" style={{ height: '32px', width: 'auto' }} />
                    <span style={{ color: 'var(--color-orange)' }}>THRIVE</span>
                    <span style={{ color: 'var(--color-white)' }}>COLLECTIVE</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-menu-wrapper">
                    <div style={{ display: 'flex', gap: '2.5rem' }}>
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    style={{
                                        color: isActive ? 'var(--color-orange)' : 'var(--text-primary)',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        position: 'relative',
                                        textDecoration: 'none',
                                        transition: 'color var(--transition-fast)'
                                    }}
                                    onMouseOver={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                                    }}
                                    onMouseOut={(e) => {
                                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                                    }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    <Link to="/booking" className="btn-primary" style={{ padding: '0.8rem 1.8rem', fontSize: '0.9rem' }}>
                        Book Session
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'transparent', border: 'none', color: 'white', display: 'none', cursor: 'pointer', padding: 0 }}
                    className="mobile-menu-btn"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Basic Mobile Menu styling for now */}
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu-wrapper { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="glass-panel"
                        style={{ position: 'absolute', top: '100%', left: 0, right: 0, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', background: scrolled ? 'var(--color-charcoal-darkest)' : 'rgba(30, 20, 15, 0.95)' }}
                    >
                        {links.map((link) => (
                            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={{ color: 'white', fontSize: '1.2rem', fontWeight: 600 }}>
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/booking" onClick={() => setIsOpen(false)} style={{ color: 'var(--color-orange)', fontSize: '1.2rem', fontWeight: 600 }}>
                            Book Session
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
