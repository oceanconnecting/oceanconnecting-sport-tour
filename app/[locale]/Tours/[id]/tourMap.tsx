import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useTranslations } from "next-intl";
interface Id {
  id:number
}
// Définir le type pour les points de la route
interface Point {
  lat: number;
  lng: number;
  name: string;
  
}


// Définir le type pour les props du composant
interface TourMapProps {
  route: Point[]; // Un tableau de points
  id:Id;
}

// Fix for default marker icons in Leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const TourMap: React.FC<TourMapProps> = ({ id,route }) => {
  const tt = useTranslations("homepage.tours.tour");
  useEffect(() => {
    return () => {
      const container = L.DomUtil.get('map');
      if (container != null) {
        (container as any)._leaflet_id = null; // Fix TypeScript issue
      }
    };
  }, []);

  // Convertir les coordonnées de la route en format attendu par Polyline
  const polylinePositions: [number, number][] = route.map(point => [point.lat, point.lng]);

  return (
    <MapContainer id="map" center={polylinePositions[0] as [number, number]} zoom={7} style={{ height: '800px', width: '900px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={polylinePositions} color="blue" />
      {route.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]}>
          <Popup>
          {tt(`tour_${id.id}.route.${point.name}`)}<br />

          {id.id}
          Latitude {point.lat}, Longitude {point.lng}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TourMap;
