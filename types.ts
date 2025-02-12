export interface Tour {
  id: number;
  title: string;
  image: string;
  images: string[];
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
  duration: string;
  latesPrice: number;
  newPrice: {
    priceAdults: number;
    priceChildren: number;
    priceBabies: number;
  };
}
