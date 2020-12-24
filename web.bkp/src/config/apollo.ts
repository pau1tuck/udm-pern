import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import { cache } from "./cache";

const httpLink = createHttpLink({
    uri: "http://localhost:5000/graphql/",
    credentials: "include",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    cache,
    connectToDevTools: true,
});
