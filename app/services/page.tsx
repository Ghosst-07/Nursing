import React from "react";
import * as motion from "motion/react-client";
import { nursingServices, medicalEquipment } from "@/data/services";
import { LogoScroll } from "@/components/home/logo-scroll";

const Services = () => {
  return (
    <div className="w-screen bg-white">
      <div
        className="p-8 md:p-16 lg:p-32 flex flex-col items-start bg-orange-400"
        style={{
          backgroundImage:
            "url('/service.png'), linear-gradient(to bottom, rgba(255, 165, 0, 0.3), rgba(255, 165, 0, 0.3))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-black">
          Our Services
        </h1>
        <p className="text-left text-base md:text-lg lg:text-xl mt-2 text-black">
          We offer a wide range of nursing services and medical equipment to
          meet your healthcare needs. Our team of professionals is dedicated to
          providing the highest quality care and support. Whether you need
          in-home nursing care, medical equipment for recovery, or specialized
          services for chronic conditions, we are here to help. Our services are
          designed to be flexible and tailored to each individual's unique
          needs. We work closely with healthcare providers to ensure seamless
          coordination of care.
        </p>
      </div>
      <LogoScroll />
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold pb-8">
          Nursing services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {nursingServices.map((service, index) => (
            <motion.div
              key={index}
              className="border border-orange-500 p-4 md:p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl md:text-2xl border w-fit p-2 rounded-full px-4 border-orange-500 text-orange-500 font-semibold mb-4">
                {service.title}
              </h2>
              <img
                src={service.image} // Placeholder image
                alt={service.title}
                className="w-full h-32 md:h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mt-12 mb-8"></h2>
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold pb-8">
          Medical Equipments
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {medicalEquipment.map((equipment, index) => (
            <motion.div
              key={index}
              className="border border-orange-500 p-4 md:p-6 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl md:text-2xl border w-fit p-2 rounded-full px-4 border-orange-500 text-orange-500 font-semibold mb-4">
                {equipment.title}
              </h2>
              <img
                src={equipment.image} // Placeholder image
                alt={equipment.title}
                className="w-full h-32 md:h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700">{equipment.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
