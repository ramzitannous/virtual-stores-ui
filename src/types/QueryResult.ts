import { UseQueryResult } from 'react-query';
export declare type AppQueryResult<TData> = Omit<
  UseQueryResult<TData, any>,
  'data'
> & {
  data: TData;
};
