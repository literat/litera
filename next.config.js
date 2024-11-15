/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      /**
       * Maximum size of the request body
       *
       * @see { @link https://nextjs.org/docs/app/api-reference/config/next-config-js/serverActions#bodysizelimit }
       */
      bodySizeLimit: '2mb',
    },
  },
  reactStrictMode: true,
  sassOptions: {
    implementation: 'sass-embedded',
    // Setting api to use modern compiler do not work
    // api: 'modern-compiler',
    silenceDeprecations: ['legacy-js-api'],
  },
  images: {
    /**
     * Allow loading external images from the specified domains and pathnames
     *
     * @see { @link https://nextjs.org/docs/app/api-reference/components/image#remotepatterns }
     */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/literat/**'
      },
    ],
  },
}

module.exports = nextConfig
