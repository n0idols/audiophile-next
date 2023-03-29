export interface Category {
  id: string;
  name: string;
  Products: Product[];
}
export interface Product {
  id: string;
  name: string;
  price: number;
  desc: string;
  features: string;
  image?: string;
  gallery?: string[];
  category?: {
    id: string;
  };
  categoryId?: string;
}

export type Params = {
  params: {
    id: string;
  };
};
