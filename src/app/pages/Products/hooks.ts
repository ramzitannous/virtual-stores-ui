import { useAPIPaginatedQuery } from '../../../api/hooks';
import { Product } from '../../../api/types/product';
import { useQuery } from 'react-query';
import { apiClient } from '../../../api/client';
import { Review } from '../../../api/types/review';

export const useProducts = (page: number) =>
  useAPIPaginatedQuery<Product>('products', page, 'products/');

export const useProductById = (productId: string) =>
  useQuery<Product>(['product', { id: productId }], async () => {
    const result = await apiClient.get<Product>(`products/${productId}/`);
    return result.data;
  });

export const useProductReviews = (productId: string, page: number) =>
  useAPIPaginatedQuery<Review>(
    ['product-reviews', { id: productId }],
    page,
    `products/${productId}/reviews/`,
  );
