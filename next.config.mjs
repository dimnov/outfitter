/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cngeboyvccurpfdvorce.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/products/**",
      },
      {
        protocol: "https",
        hostname: "cngeboyvccurpfdvorce.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/categories/**",
      },
      {
        protocol: "https",
        hostname: "cngeboyvccurpfdvorce.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/brands/**",
      },
    ],
  },
};

export default nextConfig;
