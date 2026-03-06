
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TRAMITES, CATEGORIAS } from '../data/tramites';
import TramiteCard from '../components/Tramites/TramiteCard';
import PreFlightModal from '../components/Tramites/PreFlightModal';
import CoverFlow3D from '../components/CoverFlow3D';

import { Search, ArrowLeft, Building2, SearchX, MessageSquare } from 'lucide-react';

import './Tramites.css';

export default function Tramites() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Logic State
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTramite, setSelectedTramite] = useState(null);
    const [searchTerm, setSearchTerm] = useState(() => searchParams.get('q') || '');

    // Nuevo estado para el 3D Cover Flow interactivo
    const [activeCategory, setActiveCategory] = useState(CATEGORIAS[0]);

    // Si cambia el param ?q en la URL, sincronizar el estado
    useEffect(() => {
        const qParam = searchParams.get('q') || '';
        setSearchTerm(qParam);
        if (qParam) {
            setSelectedCategory(null); // búsqueda global, sin categoría
        }
    }, [searchParams]);

    // Handlers
    const handleCategoryClick = (catId) => {
        setSelectedCategory(catId);
        setSearchTerm('');
        setSearchParams({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToDashboard = () => {
        setSelectedCategory(null);
        setSearchTerm('');
        setSearchParams({});
    };

    const handleTramiteClick = (tramite) => {
        setSelectedTramite(tramite);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value) {
            setSearchParams({ q: value });
        } else {
            setSearchParams({});
        }
    };

    // Filtering Logic
    const filteredTramites = useMemo(() => {
        const normalizeText = (text) =>
            text ? text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") : "";

        const term = normalizeText(searchTerm);

        let filtered = TRAMITES;

        // Level 1 Filter: Category drill-down
        if (selectedCategory) {
            filtered = filtered.filter(t => t.categoria === selectedCategory);
        }

        // Level 2 Filter: Search Term (title, description, or keywords)
        if (term) {
            filtered = filtered.filter(t =>
                normalizeText(t.titulo).includes(term) ||
                normalizeText(t.descripcion).includes(term) ||
                normalizeText(t.institucion).includes(term) ||
                (t.keywords && t.keywords.some(k => normalizeText(k).includes(term)))
            );
        }

        return filtered;
    }, [searchTerm, selectedCategory]);

    const handleAskAI = () => {
        const event = new CustomEvent('open-chatbot', {
            detail: {
                message: `Hola, no encontré lo que buscaba sobre "${searchTerm}". ¿Podrías ayudarme?`,
                autoSubmit: true
            }
        });
        window.dispatchEvent(event);
    };

    const currentCategoryInfo = CATEGORIAS.find(c => c.id === selectedCategory);

    // Links Rápidos basados en la categoría activa
    const contextualLinks = useMemo(() => {
        if (!activeCategory) return [];
        return TRAMITES.filter(t => t.categoria === activeCategory.id).slice(0, 3);
    }, [activeCategory]);

    // Variantes de Framer Motion para la animación en cascada
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div
            className="page-tramites"
            style={{ '--bg-glow': activeCategory?.color || '#f8fafc' }}
        >
            <div className="tramites-page-container">
                <div className="tramites-header">
                    {!selectedCategory ? (
                        <>
                            <h1 className="fade-in">Directorio de Servicios</h1>
                            <p className="fade-in">Selecciona una institución para ver sus trámites disponibles.</p>
                        </>
                    ) : (
                        <div className="header-breadcrumbs fade-in">
                            <button onClick={handleBackToDashboard} className="btn-back">
                                <ArrowLeft size={18} />
                                Volver al inicio
                            </button>
                            <h1 style={{ color: currentCategoryInfo?.color }}>
                                {currentCategoryInfo?.label}
                            </h1>
                            <p>{currentCategoryInfo?.desc}</p>
                        </div>
                    )}

                    <div className="tramites-search fade-in">
                        <div className="search-input-wrapper">
                            <Search className="search-icon" size={20} />
                            <input
                                type="text"
                                placeholder={selectedCategory ? `Buscar en ${selectedCategory}...` : "Buscar trámite global... (ej. 'bebé', 'viaje')"}
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="search-input"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* VISTA 1: DASHBOARD COVERFLOW (Categories) */}
            {!selectedCategory && !searchTerm && (
                <motion.div className="fade-in coverflow-section-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <CoverFlow3D
                        items={CATEGORIAS}
                        itemWidth="300px" // Las tarjetas de instituciones son más cuadradas
                        height="320px"  // Altura adecuada para un tile de institución
                        translateOffset={120} // Pixeles de separación
                        translateUnit="px"
                        autoPlayInterval={5000} // Autoplay activado de 5s, con Pausa Inteligente
                        onActiveChange={setActiveCategory} // Notifica qué tarjeta está activa
                        renderItem={({ item: cat, isActive, onClick }) => (
                            <button
                                className={`category-card ${isActive ? 'active-tile' : ''}`}
                                onClick={() => {
                                    if (!isActive) {
                                        onClick();
                                    } else {
                                        handleCategoryClick(cat.id);
                                    }
                                }}
                                style={{
                                    '--cat-color': cat.color,
                                    width: '100%',
                                    height: '100%',
                                    margin: 0 // Resetea márgenes
                                }}
                            >
                                <div className="cat-icon-container" style={{ backgroundColor: cat.color }}>
                                    <Building2 color="white" size={32} />
                                </div>
                                <h3>{cat.label}</h3>
                                <span>{cat.desc}</span>
                            </button>
                        )}
                    />

                    {/* 3. Información Contextual (Anclaje) */}
                    <div className="contextual-info-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory?.id}
                                className="contextual-info-container"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{ '--context-color': activeCategory?.color }}
                            >
                                <h4>Trámites Populares de {activeCategory?.label}</h4>
                                <div className="quick-links-row">
                                    {contextualLinks.map(link => (
                                        <button
                                            key={link.id}
                                            className="quick-link-pill"
                                            onClick={() => {
                                                handleTramiteClick(link);
                                            }}
                                        >
                                            {link.titulo}
                                        </button>
                                    ))}
                                    <button
                                        className="quick-link-pill active"
                                        onClick={() => handleCategoryClick(activeCategory?.id)}
                                    >
                                        Ver todos →
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}

            {/* VISTA 2: LISTADO (Grid of Tramites) */}
            <div className="tramites-page-container" style={{ paddingTop: 0, minHeight: 'auto' }}>
                {(selectedCategory || searchTerm) && (
                    <motion.div
                        className="tramites-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        {filteredTramites.length > 0 ? (
                            filteredTramites.map((tramite) => (
                                <motion.div key={tramite.id} variants={itemVariants}>
                                    <TramiteCard
                                        tramite={tramite}
                                        onClick={() => handleTramiteClick(tramite)}
                                    />
                                </motion.div>
                            ))
                        ) : (
                            <div className="no-results-container fade-in">
                                <div className="no-results-icon">
                                    <SearchX size={48} />
                                </div>
                                <h3>No encontramos "{searchTerm}"</h3>
                                <p>Intenta con otras palabras clave o categorías.</p>

                                <div className="no-results-actions">
                                    {selectedCategory && (
                                        <button className="btn-clean" onClick={handleBackToDashboard}>
                                            Ver todas las instituciones
                                        </button>
                                    )}

                                    <button className="btn-ai-help" onClick={handleAskAI}>
                                        <MessageSquare size={18} />
                                        Preguntar al Asistente IA
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}

                <PreFlightModal
                    tramite={selectedTramite}
                    isOpen={!!selectedTramite}
                    onClose={() => setSelectedTramite(null)}
                />
            </div>
        </div>
    );
}
