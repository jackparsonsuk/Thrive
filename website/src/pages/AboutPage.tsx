import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import AccordionSection from '../components/AccordionSection';

const AboutPage = () => {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '150px', paddingBottom: '100px', background: 'var(--color-charcoal-darkest)' }}>
            <SEO title="About Us | Our Story" description="Learn about Thrive Collective's mission, our vision for Exeter, and why we built the gym we wished existed." canonicalUrl="/about" />

            <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                        <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '0.9rem' }}>About Us / Our Story</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-white)', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                        We built the gym we wished existed.
                    </h1>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.8 }}>

                    {/* Our Story */}
                    <AccordionSection title="Our Story" defaultOpen={true}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Thrive Collective began life as a series of conversations between three people who each had a different story — but shared exactly the same vision. Tom, an experienced personal trainer with roots deep in the Exeter community. Nick, one of his clients who had discovered a love for fitness after years of believing it simply wasn't for him. And Mark, a personal trainer who had walked his own path through transformation and understood first-hand what it means to need more than just a workout.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            What started as a shared frustration grew into a shared vision. Together, they'd seen it from every angle — the people who walked into traditional gyms and never came back. The ones who'd been made to feel unwelcome, overwhelmed, or simply invisible. The ones who'd given up because nobody gave them the right support at the right time. And the ones who needed to talk as much as they needed to train.
                        </p>
                        <p>
                            In late 2025, Thrive Collective became a reality. Three founders, each with lived experience of what fitness can do when it's done right — and a shared determination to create something that celebrated every person who walked through the door. A personal training facility designed around the people who need it most. Inclusive, warm, and expert-led — with a community that genuinely has your back, in every sense.
                        </p>
                    </AccordionSection>

                    {/* What Makes Us Different */}
                    <AccordionSection title="What Makes Us Different">
                        <p style={{ marginBottom: '1.5rem' }}>
                            We're not here to sell you a lifestyle. We're here to help you build one — sustainably, realistically, and in a way that works for your life. Between us, we've been the client, the trainer, and the person who needed to talk before they could even begin to move. That range of lived experience is at the heart of everything we do.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Our space is deliberately small. We don't want to be a big box gym, and that's the point. When you train with us, you get the full attention of a qualified expert in an environment that feels safe and supportive. No crowds. No judgement. No pressure. Just people who genuinely want to see you thrive.
                        </p>
                        <p>
                            We also believe that fitness is about far more than what you look like. It's about how you feel, what you can do, and what you're capable of. That's why our approach brings together physical and mental wellbeing — because the two are inseparable. Whether you need a training plan, a safe space to talk, or simply a community that celebrates you as you are, you'll find it here.
                        </p>
                    </AccordionSection>

                    {/* Our Vision for Exeter */}
                    <AccordionSection title="Our Vision for Exeter">
                        <p style={{ marginBottom: '1.5rem' }}>
                            We want Thrive Collective to be genuinely embedded in the Exeter community. That means community-led sessions, partnerships with local organisations, and would love to work with the NHS on referral pathways for clients who could benefit from health and fitness support.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We're already working towards pre-natal support classes and sessions, post-natal sessions to help new parents regain their strength and confidence, and specialist, adaptive programmes for older adults, people with long-term health conditions, and young athletes. Beyond this, we have a range of small classes – a men's Mental Strength Group, ladies only group, a female-only Power-up Powerlifting group (and a male group if there is interest!) and a Saturday Running group.
                        </p>
                        <p>
                            This is just the beginning. Thrive Collective wants to grow to benefit the community, so let us know what you need, and we can see how we can help.
                        </p>
                    </AccordionSection>

                    {/* Our Values */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        style={{ marginTop: '2rem' }}
                    >
                        <h2 style={{ fontSize: '2rem', color: 'var(--color-white)', marginBottom: '2rem', textAlign: 'center' }}>Our Values</h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ color: 'var(--color-orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>Community</h3>
                                <p style={{ fontSize: '1.1rem' }}>We believe in people supporting each other. Thrive Collective is built on connection, not competition.</p>
                            </div>

                            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ color: 'var(--color-orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>Inclusivity</h3>
                                <p style={{ fontSize: '1.1rem' }}>Everyone is welcome here, full stop. Whatever your background, ability, or starting point.</p>
                            </div>

                            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ color: 'var(--color-orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>Accessibility</h3>
                                <p style={{ fontSize: '1.1rem' }}>We remove barriers to fitness — whether that's cost, confidence, knowledge, or anything else.</p>
                            </div>

                            <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                                <h3 style={{ color: 'var(--color-orange)', fontSize: '1.5rem', marginBottom: '1rem' }}>Authenticity</h3>
                                <p style={{ fontSize: '1.1rem' }}>We're not about quick fixes or fitness trends. We're about real, lasting change.</p>
                            </div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;
