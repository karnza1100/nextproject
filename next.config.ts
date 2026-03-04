/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'd3544la1u8djza.cloudfront.net' },
      { protocol: 'https', hostname: 'd3544la1u8djza.cloudfront.net' },
      { protocol: 'https', hostname: 'cdn-icons-png.flaticon.com' },
      { protocol: 'https', hostname: 'images.squarespace-cdn.com' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'www.hugsinsurance.com' },
      { protocol: 'https', hostname: 'www.jorakay.co.th' },
      { protocol: 'https', hostname: 'vanguard.com.sg' },
      { hostname: 'www.jorakay.co.th' },
      { hostname: 'vanguard.com.sg' },
    ],
  },
};

export default nextConfig;