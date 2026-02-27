import SEO from '../components/SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Placeholder images for categories - the web team will populate these with actual images later.
// Note: Aim for images that reflect diversity, warmth, and energy. Avoid stock photos wherever possible.
const galleryData = {
    'Our Space': [
        { id: 'space1', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600', alt: 'Training Environment' },
        { id: 'space2', url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600', alt: 'Equipment Layout' },
        { id: 'space3', url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600', alt: 'Private Feel' },
    ],
    'In Action': [
        { id: 'action1', url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=600', alt: 'Training Session' },
        { id: 'action2', url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=600', alt: 'Client Workout' },
        { id: 'action3', url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=600', alt: 'Trainer Guiding Client' },
        { id: 'action4', url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600', alt: 'Functional Training' },
    ],
    'Our Community': [
        { id: 'com1', url: 'https://images.unsplash.com/photo-1528720208104-3d9bd03cb874?auto=format&fit=crop&q=80&w=600', alt: 'Group Session' },
        { id: 'com2', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600', alt: 'Community Moment' },
    ],
    'Grand Opening': [
        { id: 'launch1', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600', alt: 'Launch Event' },
        { id: 'launch2', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600', alt: 'Opening Day Highlights' },
        { id: 'launch3', url: 'https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&q=80&w=600', alt: 'Celebration' },
    ]
};

type Category = keyof typeof galleryData;
const categories: Category[] = ['Our Space', 'In Action', 'Our Community', 'Grand Opening'];

const GalleryPage = () => {
    const [activeTab, setActiveTab] = useState<Category>('Our Space');
    const [selectedImage, setSelectedImage] = useState<{ id: string, url: string, alt: string } | null>(null);

    return (
        <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '100vh' }}>
            <SEO title="Gallery | Thrive Collective" description="Take a look around our small, intimate, private personal training facility in Exeter." canonicalUrl="/gallery" />

            {/* Page Introduction */}
            <section className="container" style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--color-white)', textTransform: 'uppercase' }}>
                        Gallery
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        Take a look around. Our space is small by design — intimate, private, and built for the kind of training that actually works.
                    </p>
                </motion.div>
            </section>

            {/* Gallery Tabs */}
            <section className="container">
                {/* Tab Navigation */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'center',
                    marginBottom: '3rem'
                }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            style={{
                                padding: '0.8rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                border: 'none',
                                background: activeTab === cat ? 'var(--color-orange)' : 'rgba(255, 255, 255, 0.05)',
                                color: activeTab === cat ? '#fff' : 'var(--text-secondary)',
                                fontWeight: activeTab === cat ? 600 : 400,
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div layout style={{ minHeight: '400px' }}>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                                gap: '1.5rem'
                            }}
                        >
                            {galleryData[activeTab].map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-panel"
                                    style={{
                                        position: 'relative',
                                        height: '300px',
                                        borderRadius: 'var(--radius-md)',
                                        overflow: 'hidden',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            backgroundImage: `url('${item.url}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="gallery-image"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0, left: 0, right: 0,
                                        padding: '1.5rem',
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'flex-end'
                                    }}
                                        className="gallery-overlay"
                                    >
                                        <p style={{ color: 'var(--color-white)', fontWeight: 500, margin: 0 }}>{item.alt}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* CSS for hover effects within motion.div since inline styles can't handle pseudoclasses easily without extra setup */}
                <style>{`
                    .gallery-image {
                        transform: scale(1);
                    }
                    .glass-panel:hover .gallery-image {
                        transform: scale(1.05);
                    }
                    .glass-panel:hover .gallery-overlay {
                        opacity: 1 !important;
                    }
                `}</style>

            </section>

            {/* Photography Notice */}
            <section className="container" style={{ marginTop: '5rem', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '1.5rem 2rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    maxWidth: '800px'
                }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
                        <strong>Photography Notice:</strong> All photography is taken with the full knowledge and consent of those featured. If you have any questions about images on our site, please contact us.
                    </p>
                </div>
            </section>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.9)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                cursor: 'pointer',
                                zIndex: 10000
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: 'var(--radius-sm)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default GalleryPage;
