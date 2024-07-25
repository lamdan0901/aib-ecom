/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    if (process.env.NEXT_ENV === process.env.NEXT_ENV_PROD) {
      return [
        {
          source: "/:all*(svg|jpg|png|gif|js|webp)",
          locale: false,
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=86400, must-revalidate",
            },
          ],
        },
      ];
    }
    return [];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
