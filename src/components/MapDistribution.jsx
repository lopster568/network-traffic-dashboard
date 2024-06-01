import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Leaf from "leaflet";
import icon from "../assets/marker-icon.png";
const MapDistribution = ({ alertData }) => {
  const customMarker = Leaf.icon({
    iconUrl: icon,
    iconSize: [30, 30],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <MapContainer
      center={[0, 0]}
      zoomControl={false}
      zoom={2}
      style={{ height: "500px" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}@2x.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {alertData.map((alert, index) => (
        <Marker
          key={index}
          icon={customMarker}
          position={[alert.lat, alert.lng]}
        >
          <Popup>Source IP: {alert.src_ip}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapDistribution;
