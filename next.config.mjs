/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    assetPrefix: isProd ? process.env.ASSET_PREFIX || "https://jeremiahedavid.online" : "",
    generateBuildId: () => {
        return process.env.APP_VERSION || `${new Date().getTime()}`;
    },
};

export default nextConfig;
