
export interface Tour {
  highlights: any;
  id: number;
  title: string;
  image: string;
  images: {
    src: string,
    alt: string}[];
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
