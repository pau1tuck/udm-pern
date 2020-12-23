module.exports = {
	parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
		ecmaFeatures: {
			jsx: true // Allows for the parsing of JSX
		}
	},
	plugins: [ "@typescript-eslint" ],
	extends: [
		"airbnb-typescript/base",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
		"plugin:prettier/recommended"
	],
	parserOptions: {
		project: "./tsconfig.json"
	},
	rules: {
		//"no-unused-vars": [1, { varsIgnorePattern: "_" }],
		"import/prefer-default-export": "off",
		"max-classes-per-file": [ 1 ],
		"@typescript-eslint/no-unused-vars": [ 0 ],
		"@typescript-eslint/no-explicit-any": [ 0 ],
		"class-methods-use-this": [ 0 ]
	},
	root: false
};
