import { useState } from 'react';
import { GOVERNMENT_SERVICES } from '../data/servicesData';
import ExternalLinkCard from '../components/Tramites/ExternalLinkCard';
import PreparationModal from '../components/Tramites/PreparationModal';
import './Tramites.css';

export default function Tramites() {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (service) => {
        setSelectedService(service);
    };

    const handleConfirm = () => {
        if (selectedService && selectedService.targetUrl) {
            window.open(selectedService.targetUrl, '_blank', 'noopener,noreferrer');
            setSelectedService(null);
        }
    };

    return (
        <div className="tramites-page-container">
            <div className="tramites-header">
                <h1>Directorio de Trámites</h1>
                <p>Encuentra el enlace oficial y prepárate con los requisitos necesarios.</p>
            </div>

            <div className="tramites-grid">
                {GOVERNMENT_SERVICES.map((service) => (
                    <ExternalLinkCard
                        key={service.id}
                        service={service}
                        onClick={() => handleServiceClick(service)}
                    />
                ))}
            </div>

            <PreparationModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}
