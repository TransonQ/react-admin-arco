const path = require(`path`)
const ArcoWebpackPlugin = require('@arco-design/webpack-plugin')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: {
    add: [
      new ArcoWebpackPlugin({
        theme: '@arco-themes/react-quange',
      }),
    ],
  },
}
