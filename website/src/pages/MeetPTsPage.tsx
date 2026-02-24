import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import SEO from '../components/SEO';

const trainers = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Head Trainer',
        bio: 'Alex specializes in creating welcoming environments for beginners, focusing on sustainable lifestyle improvements. With over 10 years of experience, Alex ensures every session is not just physically impactful, but genuinely supportive.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 2,
        name: 'Sam Smith',
        role: 'Mobility Specialist',
        bio: 'Sam helps you build lasting confidence alongside physical strength, ensuring every movement feels right for your unique body. Specialized in rehabilitation and overcoming physical barriers safely.',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 3,
        name: 'Jordan Lee',
        role: 'Strength & Conditioning',
        bio: '[Placeholder] Jordan brings an elite level of athletic conditioning to the everyday person. Focused on measurable progress and empowering you to lift heavier, move faster, and feel unstoppable.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 4,
        name: 'Taylor Quinn',
        role: 'Wellness Coach',
        bio: '[Placeholder] Focusing on the mind-body connection, Taylor integrates mindfulness, recovery techniques, and holistic nutrition advice into every customized training program.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800'
    }
];

const MeetPTsPage = () => {
    const isMobile = useMobile();

    return (
        <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px', background: 'var(--color-charcoal-darkest)' }}>
            <SEO
                title="Meet The Team"
                description="Meet the expert personal trainers and wellness coaches at Thrive Collective in Exeter. Dedicated professionals guiding your journey."
                canonicalUrl="/meet-the-team"
            />

            {/* Page Header */}
            <div className="container" style={{ marginBottom: '6rem', textAlign: 'center' }}>
                <motion.div
                    initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                        <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '0.9rem' }}>The Collective</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-white)', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                        Our Expert Team.
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto', fontWeight: 400 }}>
                        Dedicated professionals here to guide your journey. We prioritize supportive, personal attention to help you thrive.
                    </p>
                </motion.div>
            </div>

            {/* Clean Grid Layout */}
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'stretch'
                }}>
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-panel"
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                position: 'relative'
                            }}
                        >
                            {/* Image Section */}
                            <div style={{
                                height: '350px',
                                overflow: 'hidden',
                                position: 'relative',
                                backgroundColor: 'var(--color-charcoal-dark)'
                            }}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    style={{
                                        position: 'absolute', inset: 0,
                                        backgroundImage: `url('${trainer.image}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center top',
                                    }}
                                />
                            </div>

                            {/* Content Section */}
                            <div style={{
                                padding: '2.5rem 2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1
                            }}>
                                <h2 style={{ fontSize: '2.2rem', marginBottom: '0.2rem', color: 'var(--color-white)' }}>
                                    {trainer.name}
                                </h2>
                                <p style={{
                                    color: 'var(--color-orange)',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '1.5rem'
                                }}>
                                    {trainer.role}
                                </p>

                                <p style={{
                                    fontSize: '1.05rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                    marginBottom: '2.5rem',
                                    flexGrow: 1
                                }}>
                                    {trainer.bio}
                                </p>

                                <button className="btn-outline" style={{
                                    width: '100%',
                                    borderColor: 'rgba(255, 255, 255, 0.1)',
                                    color: 'var(--text-secondary)'
                                }}>
                                    Book Session
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetPTsPage;
