import { useState, useMemo } from 'react';
import { GOVERNMENT_SERVICES } from '../data/servicesData';
import ExternalLinkCard from '../components/Tramites/ExternalLinkCard';
import PreparationModal from '../components/Tramites/PreparationModal';
import { Search } from 'lucide-react';
import './Tramites.css';

export default function Tramites() {
    const [selectedService, setSelectedService] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const handleConfirm = () => {
        if (selectedService && selectedService.targetUrl) {
            window.open(selectedService.targetUrl, '_blank', 'noopener,noreferrer');
            setSelectedService(null);
        }
    };

    const filteredServices = useMemo(() => {
        const normalizeText = (text) =>
            text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const term = normalizeText(searchTerm);

        return GOVERNMENT_SERVICES.filter(service =>
            normalizeText(service.title).includes(term) ||
            normalizeText(service.description).includes(term)
        );
    }, [searchTerm]);

    return (
        <div className="tramites-page-container">
            <div className="tramites-header">
                <h1>Directorio de Trámites</h1>
                <p>Encuentra el enlace oficial y prepárate con los requisitos necesarios.</p>

                <div className="tramites-search">
                    <div className="search-input-wrapper">
                        <Search className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="¿Qué trámite buscas? (ej. CURP, Pasaporte...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>
            </div>

            {filteredServices.length > 0 ? (
                <div className="tramites-grid">
                    {filteredServices.map((service) => (
                        <ExternalLinkCard
                            key={service.id}
                            service={service}
                            onClick={() => handleServiceClick(service)}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-results">
                    <p>No encontramos trámites que coincidan con <strong>"{searchTerm}"</strong>.</p>
                    <button className="btn-clean" onClick={() => setSearchTerm('')}>Ver todos</button>
                </div>
            )}

            <PreparationModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}
