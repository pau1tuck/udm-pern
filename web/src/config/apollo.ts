import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql/",
    credentials: "same-origin",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
