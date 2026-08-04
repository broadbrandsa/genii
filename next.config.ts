import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so build tooling doesn't pick up a
  // stray lockfile from a parent directory. This project is fully self-contained.
  turbopack: {
    root: __dirname,
  },

  /**
   * Discover, Managed Services, Enable and Compare were briefly separate pages.
   * The Product Page Positioning Document describes a single product page, so
   * they are now sections of /products. These permanent redirects keep any
   * existing link, bookmark or indexed URL working and pass the ranking on.
   *
   * Note: the fragment is applied by the browser — Next sends the redirect to
   * /products and the anchor resolves client-side.
   */
  async redirects() {
    return [
      { source: "/products/discover", destination: "/products#discover", permanent: true },
      {
        source: "/products/managed-services",
        destination: "/products#managed-services",
        permanent: true,
      },
      { source: "/products/enable", destination: "/products#enable", permanent: true },
      { source: "/products/compare", destination: "/products#comparison", permanent: true },
    ];
  },
};

export default nextConfig;
