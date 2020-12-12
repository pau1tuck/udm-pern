import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter as Router } from "react-router-dom";
import App from "./components/_app";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Router>
                    <App />
                </Router>
            </ChakraProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
