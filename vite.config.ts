import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	resolve: {
		alias: {
			$components: path.resolve('./src/lib/components'),
			$images: path.resolve('./src/lib/assets/images'),
			$lib: path.resolve('./src/lib'),
			$utils: path.resolve('./src/lib/utils')
		}
	}
});
