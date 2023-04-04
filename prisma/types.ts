export interface Category {
  id: string;
  name: string;
  image: string;
  Products: Product[];
}
export interface Product {
  id: string;
  name: string;
  shortname: string;
  price: number;
  desc: string;
  features: string;
  image?: string;
  mobileimg?: string;
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
