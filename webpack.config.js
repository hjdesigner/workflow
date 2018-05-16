const path = require('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const styleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	entry: { main: './src/scripts/app.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
  },
  module: {
		rules: [
			{
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
			},
			{
        test: /\.scss$/,
				use:  [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
			{
  			test: /\.(gif|png|jpe?g|svg)$/i,
  			use: [
    			'file-loader',
    			{
      			loader: 'image-webpack-loader',
      			options: {
        			bypassOnDebug: true,
     	 			},
    			},
  			],
			}
    ]
	},
	plugins: [
		new CleanWebpackPlugin('dist', {} ),
		new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
		new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
		}),
		new WebpackMd5Hash(),
		new styleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.css',
      failOnError: false,
      quiet: false,
    })
  ]
};
