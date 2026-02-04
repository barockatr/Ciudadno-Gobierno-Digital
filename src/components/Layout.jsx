import { useState } from 'react';
import Chatbot from './Chatbot';
import './Navbar.css';

export default function Layout({ children }) {
    const [activeTab, setActiveTab] = useState('Inicio');

    const tabs = ['Inicio', 'Trámites', 'Noticias', 'Ayuda'];

    return (
        <div className="layout">
            <nav className="navbar">
                <div className="container nav-container">
                    <div className="logo">CiudadanoApp</div>
                    <div className="nav-links">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    // Basic client-side routing simulation via state in App usually, 
                                    // but here we are in Layout. Ideally activeTab should be controlled props.
                                    // For now, I will emit an event or expects props. 
                                    // Wait, cleaner to manage state in App.jsx. 
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* 
          Correcting Design: The Layout should receive "activeTab" and "onTabChange" 
          to properly control the view if we are not using React Router.
          I will just render children and let App.jsx handle the switching.
          But the Navbar needs to tell App.jsx what to switch to.
      */}
        </div>
    );
}
/* Re-thinking Layout strategy to be simpler. */
