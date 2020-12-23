module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: "17", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-unused-vars": [1, { varsIgnorePattern: "^_" }],
        "import/prefer-default-export": "off",
        "max-classes-per-file": [0],
        "@typescript-eslint/no-unused-vars": [1, { varsIgnorePattern: "^_" }],
    },
    root: true,
};
