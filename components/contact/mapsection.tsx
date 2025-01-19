import React from "react";
import * as motion from "motion/react-client";

function Mapsection() {
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const mapAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const locationUrl =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3444.910441766923!2d78.01813890000001!3d30.2966111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1737267664098!5m2!1sen!2sin&markers=30.296611,78.018083"; // Added marker

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full px-10 md:px-32 flex flex-col md:flex-row items-center justify-center"
    >
      {/* Map Section */}
      <motion.div
        className="p-5 w-full md:w-1/2"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={mapAnimation}
      >
        <iframe
          src={locationUrl}
          width="600"
          height="450"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </motion.div>

      {/* Information Section */}
      <motion.div
        className="flex flex-col p-5 w-full md:w-1/2"
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2, duration: 0.8 }}
        variants={textAnimation}
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Our Location</h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
          Connecting Near and Far
        </h2>
        <p className="text-gray-600 mb-4">
          Phyoli Health Care In Dehradun, <br />
          Prem Nagar,
          <br /> Dehradun,
          <br /> Uttarakhand 248007
        </p>
        <p className="text-gray-600 mb-4">
          At Phyoli Health Care, we prioritize compassionate and personalized
          care for our patients. Whether it's elder care, post-surgical
          recovery, or chronic illness support, our team is dedicated to
          providing top-notch services to families in need.
        </p>
        <p className="text-gray-600 mb-4">
          Visit us to experience unparalleled nursing care or reach out to us
          through the contact options provided to learn more about our
          offerings.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Mapsection;
