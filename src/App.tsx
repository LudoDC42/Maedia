import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Consulting from './pages/Consulting';
import Publishing from './pages/Publishing';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
