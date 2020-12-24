import { makeVar, InMemoryCache } from "@apollo/client";

export const userVar = makeVar("");

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                currentUser: {
                    read() {
                        return userVar();
                    },
                },
            },
        },
    },
});
