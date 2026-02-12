import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ activeTab, onTabChange }) {
    const tabs = ['Inicio', 'Trámites', 'Noticias', 'Ayuda'];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleTabClick = (tab) => {
        onTabChange(tab);
        setIsMenuOpen(false);
    };

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

                {/* Nav Links - Conditional class for mobile */}
                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
