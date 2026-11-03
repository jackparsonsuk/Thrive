import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PhotoGallery from '../components/PhotoGallery';
import { photosFromGlob } from '../utils/photos';

// Drop more walk photos into src/assets/mental-strength-club; the filename becomes the alt text.
const photos = photosFromGlob(import.meta.glob<string>(
    '../assets/mental-strength-club/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF}',
    { eager: true, query: '?url', import: 'default' }
));

// Add new walk dates here (YYYY-MM-DD). Past dates drop off automatically.
const walkDates = ['2026-11-15'];

const details = [
    { title: 'When', text: 'Sundays, roughly every six weeks throughout the year.' },
    { title: 'Cost', text: "Completely free. Just bring a bit of money for a coffee or a beer at the end." },
    { title: 'Who', text: "Any man who fancies it. Whatever your age or fitness, you're welcome." },
    { title: 'The Route', text: 'Mark posts a short video of the route before each walk, so you know what to expect.' },
];

const formatDate = (date: string) =>
    new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const MentalStrengthClubPage = () => {
    const today = new Date().toISOString().slice(0, 10);
    const upcoming = walkDates.filter((date) => date >= today);

    return (
        <div style={{ background: 'var(--color-charcoal-darkest)' }}>
            <SEO
                title="Men's Mental Strength Club"
                description="Free Sunday walks in Exeter for men to walk, talk and connect. Raising awareness of men's mental health with Thrive Collective."
                canonicalUrl="/mens-mental-strength-club"
                keywords="Men's Mental Strength Club, men's mental health, walking group, Exeter, Thrive Collective"
            />

            {/* Header */}
            <section>
                <div style={{ position: 'relative' }}>
                    <img
                        src="/images/mental-strength-club/group-walk.webp"
                        alt="Members of the Men's Mental Strength Club gathered before a Sunday walk"
                        style={{ display: 'block', width: '100%', height: 'clamp(300px, 60vw, 760px)', maxHeight: '75vh', objectFit: 'cover', objectPosition: 'center 45%' }}
                    />
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0) 22%, rgba(10, 10, 10, 0) 70%, var(--color-charcoal-darkest) 100%)'
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '-2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                            <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '0.9rem' }}>Community Walks</span>
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)', lineHeight: 1.05, marginBottom: '1.25rem', textTransform: 'uppercase', maxWidth: '900px' }}>
                            Men's Mental <span className="text-orange-gradient">Strength Club</span>
                        </h1>
                        <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', color: 'var(--text-secondary)', maxWidth: '640px', fontWeight: 500 }}>
                            Walk. Talk. Feel better for it.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', paddingTop: '3rem', paddingBottom: '100px' }}>

                {/* Intro */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '800px', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '5rem' }}
                >
                    <p style={{ marginBottom: '1.5rem' }}>
                        The Men's Mental Strength Club is a group of guys who meet up for regular walks around Exeter. The idea is simple: raise awareness of men's mental health by walking, talking and connecting with each other.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        You'll get a bit of exercise, but that's not really the point. It's about men coming together, having a chat and heading home feeling good about themselves. There's no agenda and no pressure to share anything you don't want to. Just good company and some fresh air.
                    </p>
                    <p>
                        Everyone is welcome. Come along on your own or bring a mate.
                    </p>
                </motion.section>

                {/* Next walk */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: 'var(--radius-lg)', marginBottom: '5rem' }}
                >
                    <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '0.85rem' }}>
                        {upcoming.length > 0 ? 'Next Walk' : 'Coming Up'}
                    </span>
                    {upcoming.length > 0 ? (
                        <>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>{formatDate(upcoming[0])}</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                After this one, we'll take a short break and restart the walks in January 2027. Keep an eye out for Mark's route video before the day.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', marginTop: '0.75rem', marginBottom: '1rem' }}>Walks restart in January 2027</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                New dates will be announced soon. Follow us on Instagram to hear about the next walk first.
                            </p>
                        </>
                    )}
                </motion.section>

                {/* Details */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    style={{ marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>How It Works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1.5rem' }}>
                        {details.map((item) => (
                            <div key={item.title} className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ color: 'var(--color-orange)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Photos */}
                {photos.length > 0 && (
                    <section style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center' }}>From the Walks</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', textAlign: 'center', marginBottom: '2.5rem' }}>
                            Woodland paths, riverside views and a well-earned drink at the end.
                        </p>
                        <PhotoGallery photos={photos} />
                    </section>
                )}

                {/* Organiser */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{ padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: 'var(--radius-lg)', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}
                >
                    <img
                        src="/images/pts/mark.jpg"
                        alt="Mark, organiser of the Men's Mental Strength Club"
                        style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--color-orange)', flexShrink: 0 }}
                    />
                    <div style={{ flex: '1 1 300px' }}>
                        <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '0.85rem' }}>Organised by Mark</span>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                            Mark is one of our personal trainers and a passionate advocate for the link between physical and mental health. He set up the club and plans every walk.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="https://www.instagram.com/thrivecollectiveexeter" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
                                <button className="btn-primary">Follow for walk updates</button>
                            </a>
                            <Link to="/meet-the-team" style={{ display: 'inline-block' }}>
                                <button className="btn-outline">Meet Mark</button>
                            </Link>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default MentalStrengthClubPage;
