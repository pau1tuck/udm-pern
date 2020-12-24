import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        body: "'Montserrat', sans-serif",
        label: "'Architects Daughter', sans-serif",
        heading: "'Montserrat', sans-serif",
        title: "'Michroma', monospace",
    },
    colors: {
        primary: {
            100: "#f7fafc",
            // ...
            900: "#1a202c",
            main: "#0886F7",
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

export default theme;
