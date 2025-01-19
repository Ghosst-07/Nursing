import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import * as motion from "motion/react-client";

// Required CSS for Leaflet
import "leaflet/dist/leaflet.css";

const Mapsection = () => {
  // Coordinates for the marker
  const center: [number, number] = [30.296611, 78.018083];

  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const mapAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // Fixing default Leaflet marker image issue (with React + Leaflet)
  const markerIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"), // Default marker icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  // Google Maps URL for the location (updated to use your provided URL)
  const googleMapsUrl = `https://maps.app.goo.gl/3oywQKzBHSaHqtn79`;

  // Function to handle marker click and redirect to Google Maps
  const handleMarkerClick = () => {
    window.open(googleMapsUrl, "_blank");
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
        <MapContainer
          center={center}
          zoom={15}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "500px" }}
        >
          {/* Tile Layer (using OpenStreetMap) */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker with Tooltip (permanent title above marker) */}
          <Marker
            position={center}
            icon={markerIcon}
            eventHandlers={{ click: handleMarkerClick }}
          >
            <Tooltip permanent direction="top">
              Phyoli Health Care
            </Tooltip>
            <Popup>
              Phyoli Health Care
              <br />
              Dehradun, Uttarakhand 248007
            </Popup>
          </Marker>
        </MapContainer>
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
};

export default Mapsection;
