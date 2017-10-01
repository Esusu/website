const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  webpack: function (config, { dev }) {
    
    if (dev) return config

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        filename: 'sw.js',
        minify: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        staticFileGlobs: ['static/**/*'],
        forceDelete: true,
        runtimeCaching: [
          {
            handler: 'fastest',
            urlPattern: /[.](png|jpg|css)/
          },
          {
            handler: 'networkFirst',
            urlPattern: /^http.*/
          }
        ]
      })
    )

    return config
  }
}
