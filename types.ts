export interface Tour {
  id: number;
  title: string;
  image: string;
  images: {
    src: string;
    alt: string;
  }[];
  route: {
    lat: number;
    lng: number;
    name: string;
  }[];
  passBy: string[];
  description: string;
  rating: number;
  departure: string;
  arrival: string;
  type: string;
  duration: string; // Peut être en heures ou jours (ex: "2h", "3 jours")
  startDate: string; // Format ISO : "2025-03-15T10:00:00Z"
  endDate?: string; // Facultatif, sera défini seulement si le tour dure plusieurs jours
  latesPrice: number;
  newPrice: {
    priceAdults: number;
    priceChildren: number;
    priceBabies: number;
  };
}
