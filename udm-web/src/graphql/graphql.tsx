import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  Users: Array<User>;
  CurrentUser?: Maybe<User>;
  Tracks: PaginatedTracks;
  Track?: Maybe<Track>;
};


export type QueryTracksArgs = {
  limit: Scalars['Int'];
};


export type QueryTrackArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  isMember: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PaginatedTracks = {
  __typename?: 'PaginatedTracks';
  tracks: Array<Track>;
  hasMore: Scalars['Boolean'];
};

export type Track = {
  __typename?: 'Track';
  id: Scalars['ID'];
  artist: Scalars['String'];
  title: Scalars['String'];
  version: Scalars['String'];
  label: Scalars['String'];
  youTubeId: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  votes: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Register: Scalars['Boolean'];
  Login?: Maybe<User>;
  CreateTrack: Track;
  UpdateTrack?: Maybe<Track>;
  DeleteTrack: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  country: Scalars['String'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreateTrackArgs = {
  input: TrackInput;
};


export type MutationUpdateTrackArgs = {
  youTubeId: Scalars['String'];
  label: Scalars['String'];
  version: Scalars['String'];
  title: Scalars['String'];
  artist: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteTrackArgs = {
  id: Scalars['String'];
};

export type TrackInput = {
  artist: Scalars['String'];
  title: Scalars['String'];
  version: Scalars['String'];
  label: Scalars['String'];
  youTubeId: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { Login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'country' | 'email' | 'isMember' | 'isAdmin'>
  )> }
);

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { CurrentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'country' | 'email' | 'isMember' | 'isAdmin'>
  )> }
);


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  Login(email: $email, password: $password) {
    id
    firstName
    lastName
    country
    email
    isMember
    isAdmin
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UserDocument = gql`
    query user {
  CurrentUser {
    id
    firstName
    lastName
    country
    email
    isMember
    isAdmin
  }
}
    `;
export type UserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UserQuery, UserQueryVariables>
    } & TChildProps;
export function withUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UserQuery,
  UserQueryVariables,
  UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UserQuery, UserQueryVariables, UserProps<TChildProps, TDataName>>(UserDocument, {
      alias: 'user',
      ...operationOptions
    });
};

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;