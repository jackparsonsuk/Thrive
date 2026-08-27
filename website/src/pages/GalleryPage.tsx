import SEO from '../components/SEO';
import { useCallback, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Every image dropped into src/assets/gallery is picked up automatically at build time.
// No code changes needed to add or remove photos — see the README in that folder.
const imageModules = import.meta.glob<string>(
    '../assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF}',
    { eager: true, query: '?url', import: 'default' }
);

// Proper nouns keep their capitals wherever they land in a filename.
const properNouns = /\b(thrive|collective|exeter)\b/gi;

// Turn "01_squat-rack.jpg" into "Squat rack" for the alt text.
const toAlt = (path: string) => {
    const name = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
    const words = name.replace(/^[\d\s_-]+/, '').replace(/[_-]+/g, ' ').trim();
    if (!words) return 'Thrive Collective, Exeter';
    const sentence = words.charAt(0).toUpperCase() + words.slice(1);
    return sentence.replace(properNouns, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

const photos = Object.keys(imageModules)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((path) => ({ path, url: imageModules[path], alt: toAlt(path) }));

const arrowStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
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
};

const GalleryPage = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selected = selectedIndex === null ? null : photos[selectedIndex];

    const close = useCallback(() => setSelectedIndex(null), []);
    const step = useCallback((delta: number) => {
        setSelectedIndex((current) => {
            if (current === null) return current;
            return (current + delta + photos.length) % photos.length;
        });
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };

        window.addEventListener('keydown', onKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [selectedIndex, close, step]);

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
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                        Take a look around. Our space is small by design — intimate, private, and built for the kind of training that actually works.
                    </p>
                </motion.div>
            </section>

            {/* Masonry grid — portrait and landscape shots keep their natural shape */}
            <section className="container">
                {photos.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '4rem 2rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: 'var(--radius-lg)',
                        color: 'var(--text-muted)'
                    }}>
                        <p style={{ margin: 0 }}>Our gallery is being photographed right now — check back very soon.</p>
                    </div>
                ) : (
                    <div className="gallery-masonry">
                        {photos.map((photo, index) => (
                            <button
                                key={photo.path}
                                type="button"
                                className="gallery-item"
                                onClick={() => setSelectedIndex(index)}
                                aria-label={`View photo: ${photo.alt}`}
                                style={{ animationDelay: `${Math.min(index, 12) * 0.06}s` }}
                            >
                                <img
                                    src={photo.url}
                                    alt={photo.alt}
                                    loading={index < 4 ? 'eager' : 'lazy'}
                                    decoding="async"
                                />
                            </button>
                        ))}
                    </div>
                )}

                <style>{`
                    .gallery-masonry {
                        column-count: 3;
                        column-gap: 1.5rem;
                    }
                    @media (max-width: 992px) {
                        .gallery-masonry { column-count: 2; }
                    }
                    @media (max-width: 600px) {
                        .gallery-masonry { column-count: 1; column-gap: 0; }
                    }
                    .gallery-item {
                        display: block;
                        width: 100%;
                        padding: 0;
                        border: 1px solid rgba(255, 255, 255, 0.06);
                        border-radius: var(--radius-md);
                        overflow: hidden;
                        background: rgba(255, 255, 255, 0.03);
                        cursor: pointer;
                        break-inside: avoid;
                        margin-bottom: 1.5rem;
                        line-height: 0;
                        opacity: 0;
                        animation: galleryFadeIn 0.6s ease forwards;
                        transition: border-color 0.3s ease, transform 0.4s ease;
                    }
                    .gallery-item img {
                        display: block;
                        width: 100%;
                        height: auto;
                        transition: transform 0.5s ease;
                    }
                    @media (hover: hover) {
                        .gallery-item:hover {
                            border-color: var(--color-orange);
                            transform: translateY(-4px);
                        }
                        .gallery-item:hover img {
                            transform: scale(1.04);
                        }
                    }
                    .gallery-item:focus-visible {
                        outline: 2px solid var(--color-orange);
                        outline-offset: 3px;
                    }
                    @keyframes galleryFadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    @media (prefers-reduced-motion: reduce) {
                        .gallery-item {
                            animation: none;
                            opacity: 1;
                            transition: border-color 0.3s ease;
                        }
                        .gallery-item:hover,
                        .gallery-item:hover img { transform: none; }
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
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0, 0, 0, 0.92)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        onClick={close}
                    >
                        <button
                            aria-label="Close image"
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
                                close();
                            }}
                        >
                            <X size={24} />
                        </button>

                        {photos.length > 1 && (
                            <>
                                <button
                                    aria-label="Previous photo"
                                    style={{ ...arrowStyle, left: '1.5rem' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        step(-1);
                                    }}
                                >
                                    <ChevronLeft size={26} />
                                </button>
                                <button
                                    aria-label="Next photo"
                                    style={{ ...arrowStyle, right: '1.5rem' }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        step(1);
                                    }}
                                >
                                    <ChevronRight size={26} />
                                </button>
                            </>
                        )}

                        <motion.img
                            key={selected.path}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            src={selected.url}
                            alt={selected.alt}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '85vh',
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
