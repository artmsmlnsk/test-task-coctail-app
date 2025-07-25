import typescript from '@eslint/js';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vueParser from 'vue-eslint-parser';

export default [
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: vueParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			vue,
			'@typescript-eslint': tsPlugin,
			prettier,
		},
		rules: {
			// TypeScript recommended rules
			'@typescript-eslint/no-unused-vars': 'error',
			// Vue recommended rules
			'vue/no-unused-vars': 'error',
			'vue/multi-word-component-names': 'off',
			// Prettier
			'prettier/prettier': 'error',
			// General JS
			'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		},
	},
	{
		files: ['*.vue'],
		rules: {
			'vue/component-name-in-template-casing': ['error', 'PascalCase'],
		},
	},
];
