// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

const env = process.env.NODE_ENV;

const config = {
  entry: {
    index: './src/index.js',
  },
  mode: env,
  output: {
    publicPath: '/',
    filename: 'vue-accordion-styless.min.js',
    library: 'vue-accordion-styless',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  // optimization: {
  //   splitChunks: {
  //     // Must be specified for HtmlWebpackPlugin to work correctly.
  //     // See: https://github.com/jantimon/html-webpack-plugin/issues/882
  //     chunks: 'all',
  //   },
  // },
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
  ],
};

module.exports = config;
