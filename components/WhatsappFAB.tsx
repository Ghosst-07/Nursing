// components/WhatsAppFabButton.tsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppFabButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppFabButton: React.FC<WhatsAppFabButtonProps> = ({ phoneNumber, message }) => {
  // Format the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default WhatsAppFabButton;