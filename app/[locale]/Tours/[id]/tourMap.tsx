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
interface TourMapsProps{
    route:[number,number][]
}

// Définition de l'itinéraire avec une structure correcte pour Polyline
const route: [number, number][] = [
   
];

export default function TourMap({route}:TourMapsProps) {
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