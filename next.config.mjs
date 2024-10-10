/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      ppr: 'incremental',
    },
  };

export default nextConfig;

module.exports = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : 'https://nextjs-dashboard-eight-lake-62.vercel.app/',
  },
};
