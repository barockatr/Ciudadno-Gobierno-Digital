
import { useState, useMemo } from 'react';
import { TRAMITES, CATEGORIAS } from '../data/tramites';
import TramiteCard from '../components/Tramites/TramiteCard';
import PreFlightModal from '../components/Tramites/PreFlightModal';
import { Search, ArrowLeft, Grid, Building2 } from 'lucide-react';
import './Tramites.css';

export default function Tramites() {
    // Logic State
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTramite, setSelectedTramite] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Handlers
    const handleCategoryClick = (catId) => {
        setSelectedCategory(catId);
        setSearchTerm(''); // Clear search when drilling down
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBackToDashboard = () => {
        setSelectedCategory(null);
        setSearchTerm('');
    };

    const handleTramiteClick = (tramite) => {
        setSelectedTramite(tramite);
    };

    // Filtering Logic
    const filteredTramites = useMemo(() => {
        const normalizeText = (text) =>
            text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const term = normalizeText(searchTerm);

        let filtered = TRAMITES;

        // Level 1 Filter: Category drill-down
        if (selectedCategory) {
            filtered = filtered.filter(t => t.categoria === selectedCategory);
        }

        // Level 2 Filter: Search Term (if user types while in a category or global)
        if (term) {
            filtered = filtered.filter(t =>
                normalizeText(t.titulo).includes(term) ||
                normalizeText(t.descripcion).includes(term) ||
                normalizeText(t.institucion).includes(term)
            );
        }

        return filtered;
    }, [searchTerm, selectedCategory]);

    const currentCategoryInfo = CATEGORIAS.find(c => c.id === selectedCategory);

    return (
        <div className="tramites-page-container">

            {/* Header & Search */}
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

                {/* Always allow search, but maybe style it differently or keep it simpler */}
                <div className="tramites-search fade-in">
                    <div className="search-input-wrapper">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder={selectedCategory ? `Buscar en ${selectedCategory}...` : "Buscar trámite global..."}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>
            </div>

            {/* VISTA 1: DASHBOARD (Categories) - Only show if NO category selected AND NO search term */}
            {!selectedCategory && !searchTerm && (
                <div className="categories-grid fade-in">
                    {CATEGORIAS.map((cat) => (
                        <button
                            key={cat.id}
                            className="category-card"
                            onClick={() => handleCategoryClick(cat.id)}
                            style={{ '--cat-color': cat.color }}
                        >
                            <div className="cat-icon-container" style={{ backgroundColor: cat.color }}>
                                <Building2 color="white" size={32} />
                            </div>
                            <h3>{cat.label}</h3>
                            <span>{cat.desc}</span>
                        </button>
                    ))}
                </div>
            )}

            {/* VISTA 2: LISTADO (Grid of Tramites) - Show if Category selected OR Search Active */}
            {(selectedCategory || searchTerm) && (
                <div className="tramites-grid fade-in-up">
                    {filteredTramites.length > 0 ? (
                        filteredTramites.map((tramite) => (
                            <TramiteCard
                                key={tramite.id}
                                tramite={tramite}
                                onClick={() => handleTramiteClick(tramite)}
                            />
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No encontramos trámites.</p>
                            {selectedCategory && (
                                <button className="btn-clean" onClick={handleBackToDashboard}>
                                    Ver otras instituciones
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )}

            <PreFlightModal
                tramite={selectedTramite}
                isOpen={!!selectedTramite}
                onClose={() => setSelectedTramite(null)}
            />
        </div>
    );
}
