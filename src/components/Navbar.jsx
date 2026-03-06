import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
    { label: 'Inicio', path: '/home' },
    { label: 'Trámites', path: '/tramites' },
    { label: 'Noticias', path: '/noticias' },
    { label: 'Ayuda', path: '/ayuda' },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <span className="logo-icon">🏛️</span>
                    Gobierno Digital
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Nav Links */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {NAV_LINKS.map(({ label, path }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
