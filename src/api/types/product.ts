import { Image } from './image';
import { Category } from './category';

export interface Store {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  colors: string[];
  sizes: string[];
  images: Image[];
  reviewsCount: number;
  reviewsAvg: number;
  description: string;
  price: number;
  quantity: number;
  isActive: boolean;
  onDiscount: boolean;
  store: Store;
}
