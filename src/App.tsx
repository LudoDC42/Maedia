import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Consulting from './pages/Consulting';
import Publishing from './pages/Publishing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/publishing" element={<Publishing />} />
      </Routes>
    </Router>
  );
}
