import { useState } from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Tramites from './pages/Tramites';
import Noticias from './pages/Noticias';
import Ayuda from './pages/Ayuda';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Inicio');

  const renderContent = () => {
    switch (activeTab) {
      case 'Inicio': return <Home navigateToTramites={() => setActiveTab('Trámites')} />;
      case 'Trámites': return <Tramites />;
      case 'Noticias': return <Noticias />;
      case 'Ayuda': return <Ayuda />;
      default: return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="main-content">
        {renderContent()}
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
