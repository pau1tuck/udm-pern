import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql/",
    credentials: "include",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
