const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    stats: 'minimal',
    overlay: true,
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    port: 5000,
    historyApiFallback: true
  },
  mode: 'development',
});
