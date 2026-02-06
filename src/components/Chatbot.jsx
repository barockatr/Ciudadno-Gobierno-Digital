import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { sendMessageToGroq } from '../services/groqService';
import './Chatbot.css';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: '¡Hola! ¿En qué puedo ayudarte hoy?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleOpenChatbot = (e) => {
            setIsOpen(true);
            if (e.detail?.message) {
                if (e.detail.autoSubmit) {
                    handleSend(e.detail.message);
                } else {
                    setInputValue(e.detail.message);
                }
            }
        };

        window.addEventListener('open-chatbot', handleOpenChatbot);
        return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
    }, []);

    const handleSend = async (text = null) => {
        const messageToSend = typeof text === 'string' ? text : inputValue;

        if (!messageToSend.trim()) return;

        setInputValue(''); // Clear input
        setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
        setIsLoading(true);

        const botResponse = await sendMessageToGroq(
            messageToSend,
            messages.map(m => ({ role: m.role, content: m.content }))
        );

        setMessages(prev => [...prev, { role: 'assistant', content: botResponse }]);
        setIsLoading(false);
    };

    const suggestions = [
        "¿Cómo saco mi CURP?",
        "Requisitos para pasaporte",
        "Cita médica IMSS"
    ];

    return (
        <>
            <button
                className={`chatbot-toggle ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
            >
                <MessageCircle size={28} />
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-title">
                            <span className="status-dot"></span>
                            Asistente Ciudadano
                        </div>
                        <button onClick={() => setIsOpen(false)} className="close-btn">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.role}`}>
                                <div className="message-content">{msg.content}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message assistant">
                                <div className="message-content loading">
                                    <Loader2 className="spinner" size={16} /> Escribiendo...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-suggestions">
                        {suggestions.map((s, i) => (
                            <button key={i} className="suggestion-chip" onClick={() => handleSend(s)}>
                                {s}
                            </button>
                        ))}
                    </div>

                    <div className="chatbot-input">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Escribe tu mensaje..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            disabled={isLoading}
                        />
                        <button onClick={() => handleSend()} disabled={isLoading || !inputValue.trim()}>
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
