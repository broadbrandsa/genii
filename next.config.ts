import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so build tooling doesn't pick up a
  // stray lockfile from a parent directory. This project is fully self-contained.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
