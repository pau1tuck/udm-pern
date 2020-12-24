import { gql } from "@apollo/client";
import * as graphql_tag from "graphql-tag";

export const typeDefs = gql`
    extend type Query {
        isLoggedIn: Boolean!
        isAdmin: Boolean!
    }
`;
