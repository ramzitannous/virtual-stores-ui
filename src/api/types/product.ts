export interface ImageSizes {
  productLarge: string;
  productMedium: string;
  productSmall: string;
}
export interface ProductImage {
  id: string;
  image: ImageSizes;
}

export interface Store {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  colors: string;
  sizes: string;
  images: ProductImage[];
  reviewsCount: number;
  reviewsAvg: number;
  description: string;
  price: number;
  quantity: number;
  isActive: boolean;
  onDiscount: boolean;
}
