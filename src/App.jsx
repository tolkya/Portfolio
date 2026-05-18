import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Internships from './pages/Internships';
import TechWatch from './pages/TechWatch';
import Resume from './pages/Resume';
import Certifications from './pages/Certifications';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/stages" element={<Internships />} />
            <Route path="/veille" element={<TechWatch />} />
            <Route path="/cv" element={<Resume />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
