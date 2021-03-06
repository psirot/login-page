const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')

const withImages = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(jpe?g|png|gif|webp|svg|ico)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: '[path][name]-[hash:8].[ext]',
          },
        },
      ],
    })

    return config
  },
})

const config = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  exportPathMap: function() {
    /*
      Код ниже следует раскомментить, если вы собираетесь использовать GitHub Pages для деплоя.

      В объект exportPathMap следует добавлять те страницы, которые должны будут экспорироваться и быть видны на GitHub Pages.

      К примеру, после создания файла страницы `examplePage.jsx` в директории `pages`, нужно добавить такую строчку:
      '/examplePage': { page: '/examplePage' },
    */
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = withPlugins([withImages, withFonts], /* config */ )
