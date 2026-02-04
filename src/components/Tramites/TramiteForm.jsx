import { useState, useEffect } from 'react';
import { TRAMITES_CONFIG } from '../../config/tramitesConfig';
import { fetchDocumento } from '../../services/tramitesService';
import { downloadFile } from '../../utils/fileUtils';
import { Loader2, Download, AlertCircle, CheckCircle } from 'lucide-react';
import './TramiteForm.css';

export default function TramiteForm({ tramiteId, onCancel }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [result, setResult] = useState(null);

    const config = TRAMITES_CONFIG[tramiteId];

    useEffect(() => {
        // Reset state when ID changes
        setFormData({});
        setErrors({});
        setStatus('idle');
        setResult(null);
    }, [tramiteId]);

    if (!config) {
        return <div className="error-message">Trámite no encontrado configuración inválida.</div>;
    }

    const validateField = (name, value) => {
        const fieldConfig = config.fields.find(f => f.name === name);
        if (!fieldConfig) return true;

        if (fieldConfig.required && !value) {
            return "Este campo es requerido.";
        }

        if (fieldConfig.validation && value) {
            // Handle optional regex validation
            const regex = new RegExp(fieldConfig.validation);
            if (!regex.test(value)) {
                return fieldConfig.errorMsg || "Formato inválido.";
            }
        }

        if (fieldConfig.maxLength && value.length > fieldConfig.maxLength) {
            return `Máximo ${fieldConfig.maxLength} caracteres.`;
        }

        return null; // Valid
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validate on change (optional, could stand-alone or be on blur)
        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {};
        let isValid = true;

        config.fields.forEach(field => {
            const error = validateField(field.name, formData[field.name]);
            if (error) {
                newErrors[field.name] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);

        if (!isValid) return;

        setStatus('loading');
        try {
            const response = await fetchDocumento(tramiteId, formData);
            setResult(response);
            setStatus('success');
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    const handleDownload = () => {
        if (result && result.data) {
            downloadFile(result.data, result.fileName);
        }
    };

    if (status === 'success') {
        return (
            <div className="tramite-result-card">
                <CheckCircle className="icon-success" size={48} />
                <h3>¡Trámite Exitoso!</h3>
                <p>{result.message}</p>
                <button className="btn-download" onClick={handleDownload}>
                    <Download size={20} /> Descargar Documento
                </button>
                <button className="btn-secondary" onClick={onCancel || (() => window.location.reload())}>
                    Realizar otro trámite
                </button>
            </div>
        );
    }

    return (
        <div className="tramite-form-container">
            <div className="form-header">
                <h2>{config.title}</h2>
                <p>{config.description}</p>
            </div>

            {status === 'error' && (
                <div className="error-banner">
                    <AlertCircle size={20} />
                    Hubo un error procesando tu solicitud. Intenta de nuevo.
                </div>
            )}

            <form onSubmit={handleSubmit} className="dynamic-form">
                {config.fields.map((field) => (
                    <div key={field.name} className="form-group">
                        <label htmlFor={field.name}>{field.label} {field.required && '*'}</label>

                        {field.type === 'select' ? (
                            <select
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                className={errors[field.name] ? 'input-error' : ''}
                            >
                                <option value="">Selecciona una opción</option>
                                {field.options && field.options.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                className={errors[field.name] ? 'input-error' : ''}
                                maxLength={field.maxLength}
                            />
                        )}

                        {errors[field.name] && <span className="error-text">{errors[field.name]}</span>}
                    </div>
                ))}

                <div className="form-actions">
                    {onCancel && (
                        <button type="button" className="btn-text" onClick={onCancel} disabled={status === 'loading'}>
                            Cancelar
                        </button>
                    )}
                    <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                        {status === 'loading' ? (
                            <> <Loader2 className="spinner" size={18} /> Procesando... </>
                        ) : (
                            'Solicitar Trámite'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
