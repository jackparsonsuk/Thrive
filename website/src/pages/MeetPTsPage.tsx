import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';
import SEO from '../components/SEO';

const trainers = [
    {
        id: 1,
        name: 'Nick Davies',
        role: 'Co-Founder & Client',
        bio: `Nick's journey to co-founding Thrive Collective began not with a business idea, but with a single step through a door he wasn't sure was meant for him.\n\nDiagnosed with Myalgic Encephalopathy (ME) in 2007, Nick had spent years believing that fitness simply wasn't something he could access. A Christmas gift of six PT sessions with Tom changed that — and over time, losing 35kg and completing his first half-marathon, he discovered something he hadn't expected: what it feels like to be genuinely supported, encouraged, and welcomed, without judgement.\n\nIt was that experience — of finding the right people — that made Nick want to be part of building something bigger. When discussions started about creating a space that could offer that same feeling to everyone, Nick knew he wanted to help make it happen. Not as a trainer, but as someone who understands exactly what it feels like to walk through the door for the first time, unsure if this world is for you.\n\nThat perspective sits at the heart of everything Thrive Collective is. Alongside his background in business management, teaching, and leadership, Nick brings the lived experience of a client who found his people — and wants everyone else to find theirs too.\n\nSo if you're unsure whether fitness is for you, or simply don't know where to start, feel free to reach out to Nick directly — he's always happy to have an honest, no-pressure conversation.`,
        specialisms: [],
        contact: {
            email: 'thrivecollectiveexeter@gmail.com',
            instagram: 'wheres_nick_gone',
            whatsapp: '07812055812',
        },
        image: '/images/pts/nick.jpeg'
    },
    {
        id: 2,
        name: 'Tom Bottoms',
        role: 'Co-Founder & Personal Trainer',
        bio: `Tom was born and raised in Exeter, and has spent his career building something he genuinely believes in: a fitness space where nobody feels left behind.\n\nAs a Level 3 Personal Trainer with specialist qualifications in pre- and post-natal exercise, Tom brings both technical expertise and the personal touch that makes the difference. His track record includes supporting a national swimming champion in earning a scholarship to Stanford and working with competitive motor sports athletes — but his proudest achievements are often the quieter ones: helping a new mum regain her strength, or supporting someone with a long-term health condition take their first steps back into exercise.\n\nTom is passionate about developing fellow trainers too, actively mentoring and championing inclusive approaches to fitness.`,
        specialisms: [
            'Pre- and post-natal exercise',
            'Junior athlete development',
            'Competitive sport performance',
            'Community fitness'
        ],
        contact: {
            email: 'thrivecollectiveexeter@gmail.com',
            instagram: 'tnbpt',
            whatsapp: '07757777470',
            googleReviews: 'https://maps.app.goo.gl/F61NqxCPWBHRRrpw8'
        },
        image: '/images/pts/tom.jpeg'
    },
    {
        id: 3,
        name: 'Mark Flynn',
        role: 'Co-Founder & Personal Trainer',
        bio: `Mark’s path to personal training wasn’t a straight line — and that’s exactly what makes him such a powerful presence at Thrive Collective. Having gone on his own significant weight loss journey before qualifying as a PT, Mark knows from the inside what it feels like to want change, to doubt yourself, and to ultimately discover what you’re capable of. That lived experience shapes everything he does.\n\nMark is a passionate advocate for the connection between physical and mental health — and he puts that belief into practice. He runs dedicated groups for both men and women that bring these two elements together, creating safe, supportive spaces where people can be honest about how they’re feeling as well as how they’re moving. He is currently training to become a counsellor, deepening his ability to support clients in a truly holistic way.\n\nFor Mark, Thrive Collective represents the chance to build something he’d always wanted to represent and what the power of good health and wellbeing can achieve — a warm, welcoming environment where physical and mental wellbeing are nurtured together, diversity is celebrated, and no one is ever made to feel like they don’t belong.`,
        specialisms: [
            'Mental health and physical wellbeing',
            'Men’s and women’s group training',
            'Holistic wellness coaching',
            'Positive mindset change',
            'Training for life',
            'Weight loss supported coaching',
            'Level 3 Sports massage'
        ],
        contact: {
            email: 'Thrivecollectiveexeter@gmail.com',
            instagram: 'markflynnfitness',
            facebook: 'https://www.facebook.com/markflynnfitness',
            whatsapp: '07477442601'
        },
        image: '/images/pts/mark.jpeg'
    },
    {
        id: 4,
        name: 'Sarah Pattinson',
        role: 'Personal Trainer & Adaptive Exercise Specialist',
        bio: `A Therapy Assistant and Dementia Champion on the Trauma ward at her local hospital, Sarah became more and more passionate about 'getting people moving'. At the same time, she developed a keen love for weightlifting, meeting a trainer who always casually stated, 'When you can't get another rep, do one more rep’. Training became the easiest thing in the world.\n\nBecoming a mum of two presented its challenges, especially after two c-sections, and Sarah had to learn how to move her body again safely after this. Competing firstly at a local, and then at a national Bodybuilding competition with an 18-month-old baby further taught her how incredible the body and the power of the mind could be.\n\nThen perimenopause hit. Like a truck. Vowing not give up on her body or on others, she is currently studying to become a Specialist Perimenopause and Menopause Fitness Coach. Already qualified as a Seated Exercise Instructor to help those that may be a little older and/or a little less mobile, Sarah is passionate about helping to support people through these trickier times in life, understanding the importance of movement and strength, and the impact this has on life as we get older.\n\nWherever you are on your journey, whether you are looking to start, realising your training needs to adapt, or if you are older and wanting to become more mobile and regain some independence, we've got you!`,
        specialisms: [
            'Seated and adaptive exercise',
            'Accessible fitness',
            'Long-term health conditions',
            'Premenopause/menopause fitness',
            'Reduced mobility and rehabilitation'
        ],
        contact: {
            email: 'thrivecollectiveexeter@gmail.com',
            instagram: 'sarahmae_pt',
            facebook: 'https://www.facebook.com/share/1Kownr2SrZ/?mibextid=wwXlfr',
            whatsapp: '07794473220'
        },
        image: '/images/pts/sarah.jpeg'
    },
    {
        id: 5,
        name: 'Charlie Reynolds',
        role: 'Personal Trainer & Wellness Coach',
        bio: `Charlie understands what it feels like to not feel at home in your own body. Growing up underweight and lacking confidence, he knows first-hand how powerful the right support can be, and that lived experience underpins everything he does.\n\nWith over 10 years of coaching experience, a degree in Physical & Outdoor Education, and Level 3 Personal Training and GP Referral qualifications, Charlie brings a calm, strategic and holistic approach to health and performance.\n\nAs the founder of Cloud9 Wellness, Charlie specialises in long-term behaviour change, helping people build strength, resilience and confidence in a way that fits real life. His coaching goes beyond workouts, considering lifestyle, stress, recovery and mindset to create sustainable results.\n\nHis three-phase process, Lifestyle, Build & Thrive, ensures clients not only achieve progress but maintain it, feeling stronger and more capable year after year.\n\nCharlie is passionate about creating environments, like Thrive, where people can train hard, switch off from outside stress, and feel genuinely supported in their long-term wellbeing.`,
        specialisms: [
            'All-round wellness',
            'Physical and mental health',
            'Sustainable lifestyle change',
            'General fitness and conditioning'
        ],
        contact: {
            email: 'Charlie.cloud9pt@gmail.com',
            instagram: 'charliereynoldswellness',
            whatsapp: '07889018351',
            googleReviews: 'https://maps.app.goo.gl/twcokdFeEPp4LVS68',
            website: 'www.cloud9personaltraining.co.uk'
        },
        image: '/images/pts/charlie.jpeg'
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
                    style={{ maxWidth: '900px', margin: '0 auto' }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                        <span style={{ color: 'var(--color-orange)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontSize: '0.9rem' }}>The Collective</span>
                        <div style={{ width: '40px', height: '2px', background: 'var(--color-orange)' }} />
                    </div>
                    <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-white)', lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
                        Our Expert Team.
                    </h1>
                    <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto', fontWeight: 400 }}>
                        <p style={{ marginBottom: '1rem' }}>
                            We’re a team of experienced, passionate personal trainers who believe that fitness should be accessible to everyone. Between us, we bring a wide range of specialist expertise — and a genuine commitment to helping every single client succeed.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Clean Vertical Stacked Layout for detailed bios */}
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4rem'
                }}>
                    {trainers.map((trainer) => (
                        <motion.div
                            key={trainer.id}
                            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-panel"
                            style={{
                                borderRadius: 'var(--radius-lg)',
                                overflow: 'hidden',
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : '350px 1fr',
                                gap: '0',
                                position: 'relative'
                            }}
                        >
                            {/* Image Section */}
                            <div style={{
                                height: isMobile ? '400px' : '100%',
                                minHeight: '400px',
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
                                        backgroundPosition: trainer.name === 'Charlie Reynolds' && !isMobile ? 'calc(50% + 50px) top' : 'center top',
                                    }}
                                />
                            </div>

                            {/* Content Section */}
                            <div style={{
                                padding: isMobile ? '2.5rem 1.5rem' : '3.5rem 3rem',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.2rem', color: 'var(--color-white)' }}>
                                    {trainer.name}
                                </h2>
                                <p style={{
                                    color: 'var(--color-orange)',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '2rem'
                                }}>
                                    {trainer.role}
                                </p>

                                <div style={{
                                    fontSize: '1.05rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                    marginBottom: '2.5rem',
                                }}>
                                    {trainer.bio.split('\n\n').map((paragraph, i) => (
                                        <p key={i} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                                    ))}
                                </div>

                                {trainer.specialisms.length > 0 && (
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Specialisms</h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {trainer.specialisms.map((spec, i) => (
                                                <span key={i} style={{
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    color: 'var(--text-secondary)',
                                                    padding: '0.4rem 0.8rem',
                                                    borderRadius: 'var(--radius-full)',
                                                    fontSize: '0.9rem'
                                                }}>
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <h4 style={{ color: 'var(--color-white)', fontSize: '1.1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact {trainer.name.split(' ')[0]}</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                        {trainer.contact.email && (
                                            <a href={`mailto:${trainer.contact.email}`} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'rgba(255,255,255,0.1)' }}>
                                                Email
                                            </a>
                                        )}
                                        {trainer.contact.whatsapp && (
                                            <a href={`https://wa.me/${trainer.contact.whatsapp.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'rgba(255,255,255,0.1)' }}>
                                                WhatsApp
                                            </a>
                                        )}
                                        {trainer.contact.instagram && (
                                            <a href={`https://instagram.com/${trainer.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'rgba(255,255,255,0.1)' }}>
                                                Instagram
                                            </a>
                                        )}
                                        {trainer.contact.facebook && (
                                            <a href={trainer.contact.facebook.startsWith('http') ? trainer.contact.facebook : `https://${trainer.contact.facebook}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'rgba(255,255,255,0.1)' }}>
                                                Facebook
                                            </a>
                                        )}
                                        {trainer.contact.googleReviews && (
                                            <a href={trainer.contact.googleReviews} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'rgba(255,255,255,0.1)' }}>
                                                Google Reviews
                                            </a>
                                        )}
                                        {/* @ts-ignore - website is an optional property not typed in the main array type initially but added for trainer id 5 */}
                                        {(trainer.contact as any).website && (
                                            <a href={(trainer.contact as any).website.startsWith('http') ? (trainer.contact as any).website : `https://${(trainer.contact as any).website}`} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderColor: 'rgba(255,255,255,0.1)' }}>
                                                Website
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetPTsPage;
