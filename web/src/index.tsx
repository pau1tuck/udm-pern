import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./config/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/_App";

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ChakraProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ChakraProvider>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
