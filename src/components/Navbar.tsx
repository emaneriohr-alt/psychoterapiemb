import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const yOffset = -96;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Domů', path: '/' },
    { name: 'Aktuality', anchorId: 'actualities-section-a8b7c6d5' },
    { name: 'O mně', path: '/o-mne' },
    { name: 'Služby', path: '/sluzby' },
    { name: 'Pravidla', path: '/pravidla' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav 
      id="navbar-container-v7m2n9k4" 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link 
          id="nav-logo-link-b8x1p3n4"
          to="/"
          data-role="logo"
          className="flex items-center gap-2 group"
        >
          <HeartPulse className={`w-8 h-8 ${scrolled ? 'text-teal-600' : 'text-white'}`} />
          <span className={`font-display font-extralight text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'} drop-shadow-sm`}>
            MUDr. Martina Hrnčířová
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.anchorId ? (
              <button
                key={link.anchorId}
                type="button"
                id="nav-link-linknametolowercasereplace-normalizenfdreplace-111"
                onClick={() => {
                  if (!isHome) {
                    navigate('/');
                    setTimeout(() => scrollToSection(link.anchorId!), 100);
                  } else {
                    scrollToSection(link.anchorId!);
                  }
                }}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.path}
                id="nav-link-linknametolowercasereplace-normalizenfdreplace-111"
                to={link.path}
                className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/kontakt"
            id="nav-cta-button-m3v8k2p7"
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${scrolled ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-white text-teal-900 hover:bg-slate-100'}`}
          >
            Objednat se
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          id="mobile-menu-toggle-x8n2m4p9"
          className="lg:hidden text-gray-900 drop-shadow-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div 
          id="mobile-menu-overlay-k4b8n2v1" 
          className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col items-center justify-center gap-8 pt-20"
        >
          {navLinks.map((link) => (
            link.anchorId ? (
              <button
                key={link.anchorId}
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  if (!isHome) {
                    navigate('/');
                    setTimeout(() => scrollToSection(link.anchorId!), 100);
                  } else {
                    scrollToSection(link.anchorId!);
                  }
                }}
                className="text-2xl font-display font-extralight text-slate-900"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-extralight text-slate-900"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/kontakt"
            onClick={() => setIsOpen(false)}
            className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium"
          >
            Objednat se
          </Link>
        </div>
      )}
    </nav>
  );
}
