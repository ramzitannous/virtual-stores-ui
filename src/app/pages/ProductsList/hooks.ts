import { useAPIPaginatedQuery } from '../../../api/hooks';
import { Product } from '../../../api/types/product';

export const useProducts = page =>
  useAPIPaginatedQuery<Product>('products', page, 'products/');
