// components/AppointmentCallToAction.tsx
import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

interface AppointmentCallToActionProps {
  phoneNumber: string;
  whatsappNumber: string;
}

const AppointmentCallToAction: React.FC<AppointmentCallToActionProps> = ({ phoneNumber, whatsappNumber }) => {
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
      <p className="mb-4">To book an appointment, you can:</p>
      <div className="flex flex-col gap-4">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          <FaPhoneAlt /> Call Us: {phoneNumber}
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          <FaWhatsapp /> WhatsApp Us: {whatsappNumber}
        </a>
      </div>
    </div>
  );
};

export default AppointmentCallToAction;
