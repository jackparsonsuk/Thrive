const GalleryPage = () => {
    return (
        <div className="container section-padding" style={{ minHeight: '60vh' }}>
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
