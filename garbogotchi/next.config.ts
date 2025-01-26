import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plnjateerbgrrpieywhd.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
