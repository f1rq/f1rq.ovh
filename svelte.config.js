import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: 'fallback.html', // Specify the fallback page
      strict: false // Allow dynamic routes
    }),
  }
};

export default config;