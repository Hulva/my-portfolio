const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  distDir: 'build',
  output: process.env.NODE_ENV === 'production' ? 'export' : 'standalone',
  // basePath: process.env.NODE_ENV === 'production' ? `${basePath}` : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? `${basePath}` : '',
  basePath: `${process.env.BASE_PATH}`,
  assetPrefix: `${process.env.BASE_PATH}`,
}