import { extendTheme } from "@chakra-ui/react";
import Image from "next/image";

const theme = extendTheme({
    useSystemColorMode: false,
    initialColorMode: "dark",

    fonts: {
        body: "'Montserrat', sans-serif",
        track: "'Architects Daughter', sans-serif",
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
            "::placeholder": {
                /* Chrome, Firefox, Opera, Safari 10.1+ */ color: "yellow",
            },
        },
    },
    components: {
        Box: {
            variants: {
                "no-border": {
                    _active: {
                        borderWidth: 0,
                    },
                },
            },
        },
    },
});

export default theme;
