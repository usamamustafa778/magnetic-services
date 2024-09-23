import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Example coordinates (London)
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }} // Adjust the map size
    >
      {/* TileLayer: Base map layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Marker Example */}
      <Marker position={[51.505, -0.09]}>
        <Popup>
          We are here! <br /> Nationwide Coverage.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
