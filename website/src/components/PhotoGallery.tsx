import { useCallback, useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Photo } from '../utils/photos';

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

// Masonry grid — portrait and landscape shots keep their natural shape — with a click-to-open lightbox.
const PhotoGallery = ({ photos }: { photos: Photo[] }) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const selected = selectedIndex === null ? null : photos[selectedIndex];

    const close = useCallback(() => setSelectedIndex(null), []);
    const step = useCallback((delta: number) => {
        setSelectedIndex((current) => {
            if (current === null) return current;
            return (current + delta + photos.length) % photos.length;
        });
    }, [photos.length]);

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
        <>
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
        </>
    );
};

export default PhotoGallery;
