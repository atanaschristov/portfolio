import path from 'path';
import react from '@vitejs/plugin-react-swc';
import pkg from './package.json' with { type: 'json' };

import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		base: process.env.NODE_ENV === 'production' ? 'portfolio' : '',
		define: {
			APP_AUTHOR: {
				name: pkg.author.name,
				uname: pkg.author.username,
				domain: pkg.author.domain,
				tf: pkg.author.phone,
			},
			APP_VERSION: JSON.stringify(pkg.version),
			BASE_DATA_URL: JSON.stringify(env.VITE_DATA_URL_BASE || '/'),
			PORTFOLIO_PATH: JSON.stringify(env.VITE_PORTFOLIO_PATH || '/data/portfolio.json'),
			ROOT_PATH: JSON.stringify(process.env.NODE_ENV === 'production' ? env.VITE_ROOT_PATH : ''),
		},
	};
});
