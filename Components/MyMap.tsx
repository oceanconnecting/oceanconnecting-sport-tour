import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Ensure the map container is not re-initialized
const TourMap = () => {
  useEffect(() => {
    return () => {
      const container = L.DomUtil.get("map");
      if (container != null) {
        (container as any)._leaflet_id = null;
      }
    };
  }, []);

  return (
    <MapContainer
      id="map"
      center={[30.435881, -9.55593]}
      zoom={13}
      style={{ height: "400px", width: "600px" }}
      className="rounded-lg border border-background-200 z-0"
      scrollWheelZoom={true}
      dragging={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[30.435881, -9.55593]}></Marker>
    </MapContainer>
  );
};

export default TourMap;
