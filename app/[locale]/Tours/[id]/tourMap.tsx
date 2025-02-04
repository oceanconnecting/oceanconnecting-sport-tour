"use client";

import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";
// Correction pour icônes Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});
interface TourMapsProps{
    route:[number,number][]
}

// Définition de l'itinéraire avec une structure correcte pour Polyline


export default function TourMap({route}:TourMapsProps) {
    const [isClient, setIsClient] = useState(false);
    if (!route || route.length === 0) {
        return <div className="text-center p-4">No route data available</div>;
      }

      const centerPoint:[number , number] = [
        route.reduce((sum, [lat]) => sum + lat, 0) / route.length,
        route.reduce((sum, [, lng]) => sum + lng, 0) / route.length,
      ];
    return (
    <div className="w-full h-[500px] rounded-xl shadow-lg">
      <MapContainer
      
        center={centerPoint} 
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
