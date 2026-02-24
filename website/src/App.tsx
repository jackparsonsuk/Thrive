import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import LandingPage from './pages/LandingPage';
import MeetPTsPage from './pages/MeetPTsPage';
import AboutPage from './pages/AboutPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import BookingPage from './pages/BookingPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Analytics />
            <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/meet-the-team" element={<MeetPTsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/location" element={<LocationPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/booking" element={<BookingPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
