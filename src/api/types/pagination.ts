export interface PaginatedResponse<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[];
}
