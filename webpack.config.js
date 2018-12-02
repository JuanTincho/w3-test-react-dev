const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: './index.html',
});

module.exports = {
  entry: {
    app: './client/index.js',
  },
  plugins: [new CleanWebpackPlugin(['build']), htmlPlugin],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: 'w3-test-react-dev',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
