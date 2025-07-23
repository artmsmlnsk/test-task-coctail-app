module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'plugin:vue/vue3-essential',
		'plugin:vue/vue3-strongly-recommended',
		'plugin:vue/vue3-recommended',
		'@vue/eslint-config-prettier',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['vue', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'vue/multi-word-component-names': 'off',
		'vue/no-unused-vars': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'vue/component-name-in-template-casing': ['error', 'PascalCase'],
			},
		},
	],
};
