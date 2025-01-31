"use client";

import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Correction pour icônes Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Définition de l'itinéraire avec une structure correcte pour Polyline
const route: [number, number][] = [
    [30.4278, -9.5981],  // Agadir
    [30.6464, -9.2121],  // Amskroud
    [30.8456, -8.6938],  // Imi n'Tanout
    [31.5339, -8.7653],  // Chichaoua
    [31.6295, -7.9811],  // Marrakech
];

export default function TourMap() {
  return (
    <div className="w-full h-[500px] rounded-xl shadow-lg">
      <MapContainer
        center={[30.4278, -9.5981]} 
        zoom={7} 
        scrollWheelZoom 
        className="h-full"
      >
        {/* TileLayer pour afficher la carte */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Tracé de l'itinéraire */}
        <Polyline positions={route} color="blue" />

        {/* Marqueurs avec popup */}
        {route.map(([lat, lng], index) => (
          <Marker key={index} position={[lat, lng]}>
            <Popup>{`Point ${index + 1}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
