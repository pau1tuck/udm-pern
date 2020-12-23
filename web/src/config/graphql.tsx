import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  isAdmin: Scalars['Boolean'];
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

export type CreateTrackMutationVariables = Exact<{
  input: TrackInput;
}>;


export type CreateTrackMutation = (
  { __typename?: 'Mutation' }
  & { CreateTrack: (
    { __typename?: 'Track' }
    & Pick<Track, 'id' | 'artist' | 'title' | 'version' | 'label' | 'youTubeId' | 'createdAt' | 'updatedAt' | 'votes'>
  ) }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { CurrentUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'country' | 'email' | 'isMember' | 'isAdmin'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { Login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'isAdmin' | 'isMember'>
  )> }
);


export const CreateTrackDocument = gql`
    mutation createTrack($input: TrackInput!) {
  CreateTrack(input: $input) {
    id
    artist
    title
    version
    label
    youTubeId
    createdAt
    updatedAt
    votes
  }
}
    `;
export type CreateTrackMutationFn = Apollo.MutationFunction<CreateTrackMutation, CreateTrackMutationVariables>;

/**
 * __useCreateTrackMutation__
 *
 * To run a mutation, you first call `useCreateTrackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrackMutation, { data, loading, error }] = useCreateTrackMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTrackMutation(baseOptions?: Apollo.MutationHookOptions<CreateTrackMutation, CreateTrackMutationVariables>) {
        return Apollo.useMutation<CreateTrackMutation, CreateTrackMutationVariables>(CreateTrackDocument, baseOptions);
      }
export type CreateTrackMutationHookResult = ReturnType<typeof useCreateTrackMutation>;
export type CreateTrackMutationResult = Apollo.MutationResult<CreateTrackMutation>;
export type CreateTrackMutationOptions = Apollo.BaseMutationOptions<CreateTrackMutation, CreateTrackMutationVariables>;
export const CurrentUserDocument = gql`
    query currentUser {
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

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  Login(email: $email, password: $password) {
    id
    firstName
    lastName
    isAdmin
    isMember
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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