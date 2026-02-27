import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '../hooks/useMobile';
import SEO from '../components/SEO';

const featuresData = [
    { title: 'All Abilities Welcome', text: 'From seated and adaptive exercise to high-performance athletic training — we meet you exactly where you are.', iconName: 'value_inclusivity.svg' },
    { title: 'Small & Private', text: 'No crowds, no intimidation. Just you, your trainer, and a space that feels like yours. We have even limited our memberships and the number of simultaneous sessions to ensure that the space is never too crowded.', iconName: 'value_community.svg' },
    { title: 'Expert Trainers', text: 'Our team are not only qualified personal trainers, but they carry additional qualifications and experience covering pre- and post-natal exercise, mental health-informed training, junior athlete development, adaptive exercise and more.', iconName: 'value_collaboration.svg' },
    { title: 'Real Results', text: "Our founders include a transformed client who's lost over 35kg, a semi-pro rugby player and a qualifying counsellor who's gone on his own weight loss journey — because we know what it's like from both sides.", iconName: 'value_accessibility.svg' },
    { title: 'Community at the Core', text: "Whether you're training one-to-one, joining a group session, or working out solo, you'll be part of something bigger. We're building a space where everyone supports each other — and where real change happens.", iconName: 'value_community.svg' },
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
                title="Home | Thrive Collective"
                description="Thrive Collective is Exeter's inclusive personal training facility. We're a community of personal trainers where everyone belongs."
                canonicalUrl="/"
            />

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                paddingTop: 'var(--nav-height)'
            }}>
                <motion.div
                    style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1,
                        y: isMobile ? 0 : y,
                        backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
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
                            maxWidth: '1000px',
                            textTransform: 'uppercase'
                        }}>
                            A new kind of <br /> <span className="text-orange-gradient">fitness space</span>
                        </h1>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            marginBottom: '3rem',
                            fontWeight: 400,
                            lineHeight: 1.6
                        }}>
                            Thrive Collective is Exeter's inclusive personal training facility. We're not about intimidation, competition, or one-size-fits-all programmes. We're a community of personal trainers who believe that everyone deserves to feel welcome, supported, and confident on their fitness journey – wherever that journey begins.
                        </p>

                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" style={{ display: 'inline-block' }}>
                                <button className="btn-primary">Get in touch</button>
                            </Link>
                            <Link to="/about" style={{ display: 'inline-block' }}>
                                <button className="btn-outline">Find Out More</button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="section-spacing container" style={{ position: 'relative', zIndex: 10, background: 'var(--color-charcoal-darkest)' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-white)', marginBottom: '2rem' }}>
                        We're not a big box gym. <span className="text-orange-gradient">We're a community.</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        Thrive Collective was built for people who've ever felt out of place in a traditional fitness setting. Whether you're just starting out, returning after a break, managing a health condition, or simply looking for something more personal — you belong here.
                    </p>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                        Our small, private training space in Exeter gives you access to expert, qualified personal trainers in an environment that feels welcoming, supportive, and safe.
                    </p>
                </motion.div>
            </section>

            {/* Why Choose Thrive? — Feature Highlights */}
            <section className="section-spacing container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--color-white)' }}>Why Choose Thrive?</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {featuresData.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-panel"
                            style={{
                                padding: '3rem 2.5rem',
                                borderRadius: 'var(--radius-lg)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '60px', height: '60px',
                                background: 'rgba(255, 90, 0, 0.1)',
                                border: '1px solid rgba(255, 90, 0, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '2rem',
                                padding: '12px'
                            }}>
                                <img src={`/icons/${feature.iconName}`} alt={feature.title} style={{ width: '100%', height: '100%' }} />
                            </div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--color-white)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>{feature.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Social Proof / Testimonial Strip */}
            <section className="section-spacing" style={{ background: 'var(--color-wood-dark)', position: 'relative' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="glass-panel"
                        style={{ padding: '4rem 3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
                    >
                        <p style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'var(--color-white)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: 1.6 }}>
                            "Tom didn't just change how I train — he changed how I see myself. I lost 35kg, ran my first half-marathon, and ended up as business partners. I couldn't have written that story without him."
                        </p>
                        <p style={{ color: 'var(--color-orange)', fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            — Nick Davies, Co-Founder
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ textAlign: 'center', marginTop: '4rem' }}
                    >
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                            Proud partners of <strong>Purple Heart Runners</strong> — working together to make fitness accessible for all.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Assuming placeholder icon structure since actual purple heart logo might need placement manually */}
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <span style={{ fontSize: '2rem' }}>💜</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA Banner */}
            <section className="section-spacing container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-white)', marginBottom: '1.5rem' }}>
                        Ready to take the first step?
                    </h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
                        Whatever your goal, our team is here to help you reach it. Come and meet us — no pressure, no sales pitch. Just a conversation about what you want to achieve, and what we can offer. And if we are not right for you, we will help you find somewhere that is, because that is the power of community.
                    </p>
                    <Link to="/contact">
                        <button className="btn-primary" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem' }}>
                            Get In Touch
                        </button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default LandingPage;
