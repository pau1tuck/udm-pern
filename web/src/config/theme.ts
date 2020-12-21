import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    fonts: {
        body: "'My Body Font', sans-serif",
        heading: "'My Heading Font', sans-serif",
        mono: "'My Monospaced Font', monospace",
    },
    colors: {
        brand: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
        },
    },
});
