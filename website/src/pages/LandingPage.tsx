import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';
import SEO from '../components/SEO';

const valuesData = [
    { id: 1, title: 'Community', text: 'Built on connection, not competition.', iconName: 'value_community.svg' },
    { id: 2, title: 'Collaboration', text: 'Working together to achieve more.', iconName: 'value_collaboration.svg' },
    { id: 3, title: 'Inclusivity', text: 'A comfortable space for every body.', iconName: 'value_inclusivity.svg' },
    { id: 4, title: 'Accessibility', text: 'Removing barriers to your wellbeing.', iconName: 'value_accessibility.svg' },
];

const LandingPage = () => {
    const containerRef = useRef(null);
    const isMobile = useMobile();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="landing-page" ref={containerRef}>
            <SEO
                title="Home"
                description="Thrive Collective offers an elite, supportive wellness and personal training experience in Exeter. Where Everyone Thrives."
                canonicalUrl="/"
            />
            {/* Premium Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: 'var(--nav-height)'
            }}>
                {/* Parallax Background */}
                <motion.div
                    style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1,
                        y: isMobile ? 0 : y,
                        backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Overlay to blend into woody theme */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(20, 15, 12, 0.85)'
                    }} />
                </motion.div>

                <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <motion.div
                        style={{ opacity: isMobile ? 1 : opacity }}
                        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="hero-content"
                    >
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: '80px' }}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{ height: '4px', background: 'var(--color-orange)', marginBottom: '2rem' }}
                        />
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                            lineHeight: 1.05,
                            marginBottom: '1.5rem',
                            maxWidth: '900px',
                            textTransform: 'uppercase'
                        }}>
                            Where <span className="text-orange-gradient">Everyone</span><br /> Thrives.
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            marginBottom: '3rem',
                            fontWeight: 400
                        }}>
                            A welcoming, personal training facility abandoning the intimidating gym floor for a supportive, elite wellness experience.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/booking" style={{ display: 'inline-block' }}>
                                <button className="btn-primary">Start Your Journey</button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Elevated Values Section */}
            <section className="section-spacing container" style={{ position: 'relative', marginTop: '-100px', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {valuesData.map((val, idx) => (
                        <motion.div
                            key={val.id}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -10 }}
                            className="glass-panel"
                            style={{
                                padding: '3rem 2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: '-20px', right: '-20px',
                                width: '100px', height: '100px',
                                background: 'var(--color-orange)',
                                filter: 'blur(60px)', opacity: 0.15
                            }} />

                            <div style={{
                                width: '60px', height: '60px',
                                background: 'rgba(255, 90, 0, 0.1)',
                                border: '1px solid rgba(255, 90, 0, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '2rem',
                                padding: '12px'
                            }}>
                                <img src={`/icons/${val.iconName}`} alt={val.title} style={{ width: '100%', height: '100%' }} />
                            </div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-white)' }}>{val.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{val.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sophisticated Experience Section */}
            <section className="section-spacing" style={{
                background: 'var(--color-wood-dark)',
                position: 'relative'
            }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '6rem', alignItems: 'center' }}>
                    <motion.div
                        initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <h4 style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontSize: '1rem' }}>Our Philosophy</h4>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem' }}>A Space <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Redefined.</span></h2>
                        <div style={{ width: '60px', height: '2px', background: 'var(--color-orange)', marginBottom: '2rem' }} />

                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Physical fitness is where Thrive Collective began. Our personal training facility establishes the template for how all services should feel: welcoming, intimate, and genuinely supportive.
                        </p>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                            We champion smaller spaces, individual attention, and progress over perfection principles that will extend to everything we do.
                        </p>

                        <Link to="/meet-the-team" style={{ display: 'inline-block' }}>
                            <button className="btn-outline" style={{ display: 'inline-flex', gap: '10px' }}>
                                Meet The Trainers
                                <img src="/icons/ui_arrow.svg" alt="" style={{ width: '20px', filter: 'brightness(0) invert(1)' }} />
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ flex: '1 1 400px', position: 'relative' }}
                    >
                        <div style={{ position: 'absolute', inset: '-30px', background: 'var(--color-orange)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }} />
                        <div className="glass-panel" style={{ padding: '4rem 3rem', borderRadius: 'var(--radius-lg)', position: 'relative', zIndex: 1 }}>
                            <div style={{
                                width: '70px', height: '70px',
                                background: 'rgba(255, 90, 0, 0.1)',
                                border: '1px solid rgba(255,90,0,0.3)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '2rem',
                            }}>
                                <img src="/icons/feature_goals.svg" alt="Heart Icon" style={{ width: '32px', height: '32px' }} />
                            </div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Progress Over Perfection</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                We celebrate small wins rather than chasing trends. Take your time, focus on your individual journey, and build confidence alongside strength in a place where you truly belong.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
