/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// eslint-disable-next-line import/no-extraneous-dependencies, quotes
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({}),
    ],
  },
});
