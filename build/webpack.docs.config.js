// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const env = process.env.NODE_ENV;

const config = {
  entry: {
    demo: './src/demo/index.js',
  },
  mode: env,
  output: {
    path: path.join(__dirname, '../docs'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.join(__dirname, 'src')],
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
        },
      ],
    },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vue simple menu demo',
      template: 'index.html',
      inject: true,
      // filename: path.join(__dirname, 'docs/index.html'),
      // template: 'src/index.html',
    }),
  ],
};

module.exports = config;
