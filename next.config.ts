import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev: Next compares the request Origin *hostname* to these strings (not full URLs).
  // `localhost` is already allowed; add 127.0.0.1 when you open the site as http://127.0.0.1:3000
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
