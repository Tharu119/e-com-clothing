/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   experimental: {
    appDir: true, // Ensure app router works
  },
  output: 'standalone', // Helps with Netlify deployment
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
