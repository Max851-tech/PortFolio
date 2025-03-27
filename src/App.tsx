import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Briefcase, Home, BookOpen, Shield, AlignCenterVertical as Certificate, Code, Eye, Menu, X } from 'lucide-react';
import Accueil from './pages/Accueil';
import BTSSIO from './pages/BTSSIO';
import Projets from './pages/Projets';
import Veille from './pages/Veille';
import Certifications from './pages/Certifications';

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
          : 'hover:bg-white/10 text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/90 backdrop-blur-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Portfolio</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                <NavLink to="/">
                  <Home className="h-4 w-4" />
                  <span>Accueil</span>
                </NavLink>
                <NavLink to="/bts-sio">
                  <BookOpen className="h-4 w-4" />
                  <span>BTS SIO</span>
                </NavLink>
                <NavLink to="/projets">
                  <Code className="h-4 w-4" />
                  <span>Projets</span>
                </NavLink>
                <NavLink to="/veille">
                  <Eye className="h-4 w-4" />
                  <span>Veille</span>
                </NavLink>
                <NavLink to="/certifications">
                  <Certificate className="h-4 w-4" />
                  <span>Certifications</span>
                </NavLink>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
              <div className="px-4 py-6 space-y-2">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  <Home className="h-4 w-4" />
                  <span>Accueil</span>
                </NavLink>
                <NavLink to="/bts-sio" onClick={() => setIsMenuOpen(false)}>
                  <BookOpen className="h-4 w-4" />
                  <span>BTS SIO</span>
                </NavLink>
                <NavLink to="/projets" onClick={() => setIsMenuOpen(false)}>
                  <Code className="h-4 w-4" />
                  <span>Projets</span>
                </NavLink>
                <NavLink to="/veille" onClick={() => setIsMenuOpen(false)}>
                  <Eye className="h-4 w-4" />
                  <span>Veille</span>
                </NavLink>
                <NavLink to="/certifications" onClick={() => setIsMenuOpen(false)}>
                  <Certificate className="h-4 w-4" />
                  <span>Certifications</span>
                </NavLink>
              </div>
            </div>
          )}
        </nav>

        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/bts-sio" element={<BTSSIO />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-xl">Portfolio BTS SIO</span>
              </div>
              <div className="text-gray-400">
                © {new Date().getFullYear()} - Tous droits réservés
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;