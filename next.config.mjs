/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedOrigins: [
            'localhost:3000',
            'rr-v2.vercel.app',
            'solid-space-telegram-4j7xw57jjj7hqwv-3000.app.github.dev',
          ]
        }
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.cloudinary.com',
            port: '',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            port: '',
            pathname: '**',
          },
        ],
      },
    
};


export default nextConfig;
