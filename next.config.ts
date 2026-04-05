import type { NextConfig } from "next";

/** Site is served at https://gybyn.com/portfolio (change here and redeploy to move). */
const basePath = "/portfolio";

const nextConfig: NextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // So http://localhost:3000/ opens the app (otherwise `/` has no page and dev feels “broken”).
  async redirects() {
    return [
      {
        source: "/",
        destination: basePath,
        permanent: false,
        basePath: false,
      },
    ];
  },
  // Dev: Next compares the request Origin *hostname* to these strings (not full URLs).
  // `localhost` is already allowed; add 127.0.0.1 when you open the site as http://127.0.0.1:3000
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
