import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Consulting from './pages/Consulting';
import Publishing from './pages/Publishing';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Shop from './pages/Shop';
import BookDetail from './pages/BookDetail';
import CookieConsent from './components/CookieConsent';

export default function App() {
  return (
    <Router>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}
