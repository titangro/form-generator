// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'no-plusplus': ['off'],
		indent: ['error', 'tab'],
		'prettier/prettier': [
			'warn',
			{
				printWidth: 80,
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				tabWidth: 2,
			},
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'max-len': [
			'warn',
			{
				code: 80,
				tabWidth: 2,
				comments: 80,
				ignoreComments: false,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'react/prop-types': ['off'],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
	},
};
