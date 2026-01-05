// Cloudflare Worker to serve static files
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
