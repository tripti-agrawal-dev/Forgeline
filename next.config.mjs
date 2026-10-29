const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Forgeline" : "";

const config = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default config;
