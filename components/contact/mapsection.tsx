import React from "react";
import * as motion from "motion/react-client";

function Mapsection() {
  const locationUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.5946174779674!2d77.95760257620255!3d30.334046604790387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b34f93ca005%3A0x3485d71a41c7d621!2sPyoli%20Nursing%20Services%20%7C%20Nursing%20Services%20In%20Dehradun!5e0!3m2!1sen!2sin!4v1735766242208!5m2!1sen!2sin";

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const mapAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

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
          className="rounded-lg shadow-lg"
          title="Pyoli Nursing Services Location"
          src={locationUrl}
          style={{ border: 0, width: "100%", height: "500px" }}
          allowFullScreen
          loading="lazy"
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
          Pyoli Nursing Services <br /> Nursing Services In Dehradun, <br />
          Prem Nagar,
          <br /> Dehradun,
          <br /> Uttarakhand 248007
        </p>
        <p className="text-gray-600 mb-4">
          At Pyoli Nursing Services, we prioritize compassionate and
          personalized care for our patients. Whether it's elder care,
          post-surgical recovery, or chronic illness support, our team is
          dedicated to providing top-notch services to families in need.
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
