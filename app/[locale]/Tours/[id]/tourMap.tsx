import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Définir le type pour les points de la route
interface Point {
  lat: number;
  lng: number;
  name: string;
}

// Définir le type pour les props du composant
interface TourMapProps {
  route: {
    lat: number;
    lng: number;
    name: string;
  }[]; // Un tableau de points
}

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const TourMap: React.FC<TourMapProps> = ({ route }) => {
  useEffect(() => {
    // Ensure the map container is not re-initialized
    return () => {
      const container = L.DomUtil.get('map');
      if (container != null) {
        container._leaflet_id = null;
      }
    };
  }, []);

  // Convertir les coordonnées de la route en format attendu par Polyline
  const polylinePositions = route.map(point => [point.lat, point.lng]);

  return (
 
    <MapContainer id="map" center={polylinePositions[0]} zoom={13} style={{ height: '400px', width: '600px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={polylinePositions} color="blue" />
      {route.map((point, index) => (
        <Marker key={index} position={[point.lat, point.lng]}>
          <Popup>
            {point.name}: Latitude {point.lat}, Longitude {point.lng}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
   
  );
};

export default TourMap;