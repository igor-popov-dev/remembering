import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		sourcemap: true, // Включите sourcemaps для диагностики
		minify: false // Проверьте, какое минификационное средство используется
	},
	base: '/remembering/'
});
