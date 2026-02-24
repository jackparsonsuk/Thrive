import { motion } from 'framer-motion';

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
    return (
        <div className="section-spacing" style={{ minHeight: '100vh', paddingTop: '150px', background: 'var(--color-charcoal-darkest)' }}>

            {/* Page Header */}
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '800px', marginBottom: '8rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '50px', height: '2px', background: 'var(--color-orange)' }} />
                        <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '1rem' }}>The Collective</span>
                    </div>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', color: 'var(--color-white)', lineHeight: 1, marginBottom: '2rem', letterSpacing: '-0.03em' }}>
                        Meet The <br /><span className="text-orange-gradient">Experts.</span>
                    </h1>
                    <p style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', fontWeight: 300 }}>
                        Dedicated professionals here to guide your journey. Progress over perfection, every single day.
                    </p>
                </motion.div>
            </div>

            {/* Editorial Layout for Trainers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {trainers.map((trainer, index) => {
                    const isEven = index % 2 === 1;

                    return (
                        <div
                            key={trainer.id}
                            style={{
                                background: isEven ? 'var(--color-charcoal-dark)' : 'transparent',
                                padding: '6rem 0',
                                position: 'relative'
                            }}
                        >
                            <div className="container">
                                <div style={{
                                    display: 'flex',
                                    flexDirection: isEven ? 'row-reverse' : 'row',
                                    alignItems: 'center',
                                    gap: '6rem',
                                    flexWrap: 'wrap'
                                }}>

                                    {/* Image Column */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                                        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ flex: '1 1 400px', position: 'relative' }}
                                    >
                                        <div style={{ position: 'absolute', inset: '-20px', background: 'var(--color-orange)', filter: 'blur(80px)', opacity: 0.1, zIndex: 0 }} />
                                        <div style={{
                                            aspectRatio: '3/4',
                                            borderRadius: 'var(--radius-md)',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            zIndex: 1,
                                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                                        }}>
                                            <div style={{
                                                position: 'absolute', inset: 0,
                                                backgroundImage: `url('${trainer.image}')`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                transition: 'transform 0.7s ease'
                                            }}
                                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Content Column */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ flex: '1 1 400px' }}
                                    >
                                        <div style={{ fontSize: '8rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', lineHeight: 0.8, marginLeft: '-5px', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
                                            {trainer.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <h2 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>{trainer.name}</h2>
                                        <p style={{ color: 'var(--color-orange)', fontWeight: 700, fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '2.5rem' }}>
                                            {trainer.role}
                                        </p>

                                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '3rem' }}>
                                            {trainer.bio}
                                        </p>

                                        <button className="btn-outline" style={{ border: '1px solid rgba(255,90,0,0.3)', color: 'var(--color-orange)' }}>
                                            Book Session with {trainer.name.split(' ')[0]}
                                        </button>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

export default MeetPTsPage;
