import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Tramites from './pages/Tramites';
import Noticias from './pages/Noticias';
import Ayuda from './pages/Ayuda';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/tramites" element={<PageWrapper><Tramites /></PageWrapper>} />
            <Route path="/noticias" element={<PageWrapper><Noticias /></PageWrapper>} />
            <Route path="/ayuda" element={<PageWrapper><Ayuda /></PageWrapper>} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
