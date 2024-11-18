/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    implementation: 'sass-embedded',
    // Setting api to use modern compiler do not work
    // api: 'modern-compiler',
    silenceDeprecations: ['legacy-js-api'],
  },
}

module.exports = nextConfig
