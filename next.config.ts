import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
  allowedDevOrigins: ["terminal.local"],
};
export default config;
