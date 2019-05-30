
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.gif$/,
        use: ['url-loader'],
      },
      {
        test: /\.(jpeg|ttf|eot|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  resolve: {
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Api: path.resolve(__dirname, 'src/api/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Helpers: path.resolve(__dirname, 'src/helpers/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Test: path.resolve(__dirname, 'src/test/'),
      Assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
};

module.exports = config;
