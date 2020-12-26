import { extendTheme } from "@chakra-ui/react";
import Image from "next/image";

const theme = extendTheme({
    useSystemColorMode: false,
    initialColorMode: "dark",

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
                backgroundImage: "url('/images/background.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                color: "white",
            },
        },
    },
});

export default theme;
