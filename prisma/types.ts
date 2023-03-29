export interface Service {
  service: {
    title: string;
    desc: string;
  };
}

export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  image?: string;
  category?: {
    id: string;
  };
  categoryId?: string;
}
