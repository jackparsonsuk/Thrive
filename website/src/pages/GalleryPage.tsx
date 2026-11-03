import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import PhotoGallery from '../components/PhotoGallery';
import { photosFromGlob } from '../utils/photos';

// Every image dropped into src/assets/gallery is picked up automatically at build time.
// No code changes needed to add or remove photos — see the README in that folder.
const photos = photosFromGlob(import.meta.glob<string>(
    '../assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF}',
    { eager: true, query: '?url', import: 'default' }
));

const GalleryPage = () => {
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
                    <PhotoGallery photos={photos} />
                )}
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
        </div>
    );
};

export default GalleryPage;
