import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCurrencies: Array<Currency>;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomeQuery = { __typename?: 'Query', getCurrencies: Array<{ __typename?: 'Currency', id: number, name?: string | null, code?: string | null }> };


export const GetHomeDocument = gql`
    query getHome {
  getCurrencies {
    id
    name
    code
  }
}
    `;

/**
 * __useGetHomeQuery__
 *
 * To run a query within a React component, call `useGetHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomeQuery(baseOptions?: Apollo.QueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, options);
      }
export function useGetHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomeQuery, GetHomeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomeQuery, GetHomeQueryVariables>(GetHomeDocument, options);
        }
export type GetHomeQueryHookResult = ReturnType<typeof useGetHomeQuery>;
export type GetHomeLazyQueryHookResult = ReturnType<typeof useGetHomeLazyQuery>;
export type GetHomeQueryResult = Apollo.QueryResult<GetHomeQuery, GetHomeQueryVariables>;
export const namedOperations = {
  Query: {
    getHome: 'getHome'
  }
}