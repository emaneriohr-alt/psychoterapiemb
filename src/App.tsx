import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import RulesPage from './pages/RulesPage';

export default function App() {
  return (
    <HashRouter>
      <div id="app-root-k8n2m5p1" className="min-h-screen overflow-x-hidden font-sans bg-slate-50">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-mne" element={<AboutPage />} />
          <Route path="/sluzby" element={<ServicesPage />} />
          <Route path="/pravidla" element={<RulesPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
