import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'src/lib',
    }
  },
  preprocess: vitePreprocess()
};
