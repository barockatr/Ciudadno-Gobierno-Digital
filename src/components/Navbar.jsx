import './Navbar.css';

export default function Navbar({ activeTab, onTabChange }) {
    const tabs = ['Inicio', 'Trámites', 'Noticias', 'Ayuda'];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <span className="logo-icon">🏛️</span>
                    Gobierno Digital
                </div>
                <div className="nav-links">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => onTabChange(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
