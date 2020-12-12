import {
    ApolloClient,
    createHttpLink,
    NormalizedCacheObject,
} from "@apollo/client";
import { cache } from "./cache";
import { typeDefs } from "./typeDefs";

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql/",
    credentials: "same-origin",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: httpLink,
    typeDefs,
    cache,
});
