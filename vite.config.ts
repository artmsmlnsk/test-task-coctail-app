import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use '@/styles/variables.scss' as vars;`,
			},
		},
	},
	server: {
		port: 3000,
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
	},
});
