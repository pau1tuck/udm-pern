module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    extends: [
        "airbnb-typescript-prettier",
        //"plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    rules: {
        "no-console": [0],
        "import/prefer-default-export": "off",
        "max-classes-per-file": [0],
        "class-methods-use-this": [0],
        "@typescript-eslint/no-unused-vars": [0],
        "@typescript-eslint/no-explicit-any": [0],
        "@typescript-eslint/explicit-module-boundary-types": [0],
    },
};
