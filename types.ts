export interface Tour {
    id: number;
    title: string;
    image: string;
    description: string;
    duration: string;
    type: string;
    departure: string;
    arrival: string;
    rating: number;
    newPrice?: {
      priceAdults:number,
      priceChildren:number,
      priceBabies:number

    };
    latesPrice: number;
    route: [number, number][];
    passBy: string[];
  }
  