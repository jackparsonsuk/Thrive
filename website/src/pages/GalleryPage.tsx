import SEO from '../components/SEO';

const GalleryPage = () => {
    return (
        <div className="container" style={{ minHeight: '60vh', paddingTop: '150px', paddingBottom: '100px' }}>
            <SEO title="Facility Gallery" description="Take a look inside Thrive Collective's premium personal training facility." canonicalUrl="/gallery" />
            <h1>Gallery</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>[Work in Progress]</p>

            <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                {[1, 2, 3, 4, 5, 6].map((img) => (
                    <div key={img} style={{ height: '200px', background: 'var(--color-charcoal)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                        [Image {img}]
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
