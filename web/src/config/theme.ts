import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: "'Architects Daughter', sans-serif",
        heading: "'Montserrat', sans-serif",
        title: "'Michroma', monospace",
    },
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
    styles: {
        global: {
            body: {
                color: "white",
            },
        },
    },
});
