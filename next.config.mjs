const isProd = process.env.NODE_ENV === "production";

const config = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? "/Forgeline" : "",
};

export default config;
