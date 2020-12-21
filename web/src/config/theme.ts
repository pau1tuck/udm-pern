import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    fonts: {
        body: "'Architects Daughter', sans-serif",
        heading: "'Montserrat', sans-serif",
        tag: "'Michroma', monospace",
    },
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
});
