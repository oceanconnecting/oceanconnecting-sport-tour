"use client"; // Ensures this file runs only on the client side

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState, useRef } from "react";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Polyline = dynamic(() => import("react-leaflet").then(mod => mod.Polyline), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

let L: any = null;

if (typeof window !== "undefined") {
  L = require("leaflet");
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
}

interface TourMapsProps {
  route: [number, number][];
}

export default function TourMap({ route }: TourMapsProps) {
  const [isClient, setIsClient] = useState(false);
  const mapRef = useRef<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (mapRef.current) return null;
  mapRef.current = true;

  if (!route || route.length === 0) {
    return <div className="text-center p-4">No route data available</div>;
  }

  const centerPoint: [number, number] = [
    route.reduce((sum, [lat]) => sum + lat, 0) / route.length,
    route.reduce((sum, [, lng]) => sum + lng, 0) / route.length,
  ];

  return isClient ? (
    <div className="w-full h-[500px] rounded-xl shadow-lg">
      <MapContainer center={centerPoint} zoom={7} scrollWheelZoom className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={route} color="blue" />
        {route.map(([lat, lng], index) => (
          <Marker key={index} position={[lat, lng]}>
            <Popup>{`Point ${index + 1}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  ) : null;
}