import { useAPIPaginatedQuery } from '../../../api/hooks';
import { Product } from '../../../api/types/product';
import { useQuery } from 'react-query';
import { apiClient } from '../../../api/client';

export const useProducts = page =>
  useAPIPaginatedQuery<Product>('products', page, 'products/');

export const useProductById = productId =>
  useQuery<Product>(['product', { id: productId }], async () => {
    const result = await apiClient.get<Product>(`products/${productId}/`);
    return result.data;
  });
