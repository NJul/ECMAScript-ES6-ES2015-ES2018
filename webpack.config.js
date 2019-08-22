const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-destructuring",
              "@babel/plugin-proposal-object-rest-spread",
              "transform-es2015-destructuring"
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|jpg|gif|ico|svg|woff|woff2|ttf|eot|wav|mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "src"
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          zindex: false
        }
      })
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      minify: {
        // deleted type="text/javascript"
        removeScriptTypeAttributes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
