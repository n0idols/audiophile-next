export interface Service {
  service: {
    title: string;
    desc: string;
  };
}

export interface Product {
  id: number;
  name: string;
  price: number;
  desc: string;
  image?: string;
  category?: {
    name: string;
  };
}
