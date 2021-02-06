import axios from 'axios';
import { parseResponse } from './helpers';
import { PaginatedResponse } from './types/pagination';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const makeRequestWithPageParam = async <T>(
  url: string,
  pageParam: number,
) => {
  const response = await apiClient.get<PaginatedResponse<T>>(url, {
    params: {
      page: pageParam,
      page_size: process.env.REACT_APP_PAGE_SIZE,
    },
  });
  return response.data;
};

apiClient.interceptors.response.use(response => parseResponse(response));
