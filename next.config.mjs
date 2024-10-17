/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fa', 'en'],
    defaultLocale: 'fa',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.drebadian.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.drebadian.comundefined',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.drebadian.comnull',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.drebadian.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.drebadian.comundefined',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.drebadian.comnull',
        port: '',
        pathname: '/**',
      },
      // {
      // protocol: 'https',
      // hostname: 'tokid.com',
      // port: '',
      // pathname: '/media/**',
      // },
    ],
  },
}

export default nextConfig
