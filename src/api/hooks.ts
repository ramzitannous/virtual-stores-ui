import { PaginatedResponse } from './types/pagination';
import { useInfiniteQuery, useQuery, useQueryClient } from 'react-query';
import { flatten } from 'lodash';
import { useEffect } from 'react';
import { makeRequestWithPageParam } from './client';
import { AppQueryResult } from '../types/QueryResult';

export const useAPIInfiniteScroll = <T>(
  keyName: string,
  func: (pageParam: number) => Promise<PaginatedResponse<T>>,
) => {
  const result = useInfiniteQuery(
    keyName,
    ({ pageParam = 1 }) => func(pageParam),
    {
      getNextPageParam: lastPage => lastPage.next,
      getPreviousPageParam: firstPage => firstPage.previous,
    },
  );
  const pages = result.data?.pages || [];
  const flattenedPages = flatten(pages.map(page => page.results));

  return {
    results: flattenedPages,
    ...result,
  };
};

const initialData: PaginatedResponse<any> = {
  results: [],
  previous: null,
  next: 2,
  count: 0,
};

export const useAPIPaginatedQuery = <T>(
  key: any,
  page: number,
  url: string,
): AppQueryResult<PaginatedResponse<T>> => {
  const queryResult = useQuery<PaginatedResponse<T>>(
    [key, { page }],
    () => makeRequestWithPageParam<T>(url, page),
    {
      keepPreviousData: true,
      staleTime: 5000,
    },
  );

  const queryClient = useQueryClient();

  useEffect(() => {
    if (queryResult.data?.next) {
      queryClient.prefetchQuery([key, { page: page + 1 }], () =>
        makeRequestWithPageParam<T>(url, page + 1),
      );
    }
  }, [page]);

  return {
    ...queryResult,
    data: queryResult.data || initialData,
  } as AppQueryResult<PaginatedResponse<T>>;
};
