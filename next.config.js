const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  assetPrefix: "./",
  webpack: function (config, options) {
    // config.resolve.fallback = { fs: false, path: false };
    config.module.rules.push(
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].png",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
      }
    );
    return config;
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: "assets/[name].css",
    // }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(),
  ],
};
