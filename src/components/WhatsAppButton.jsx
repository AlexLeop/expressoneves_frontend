import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappNumber = "5511999999999"; // Replace with actual WhatsApp number
  const message = "Olá! Gostaria de saber mais sobre os serviços da Expresso Neves.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Info */}
      {isExpanded && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-fade-in">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">Expresso Neves</h3>
              <p className="text-xs text-gray-600">Atendimento Online</p>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Olá! 👋 Como podemos ajudá-lo hoje?
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Iniciar Conversa
          </button>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce-slow"
        style={{
          boxShadow: '0 8px 32px rgba(34, 197, 94, 0.3)',
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Pulse Effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </div>
  );
};

export default WhatsAppButton;