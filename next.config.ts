import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },

typescript : {ignoreBuildErrors : true},

  experimental: {
    ppr: true,
    // after :true,
  },

  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  }


};

export default nextConfig;
