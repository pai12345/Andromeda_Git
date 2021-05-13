const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const path_dist = path.resolve(__dirname, "dist");
const path_src = path.resolve(__dirname, "src");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()],
  devtool: false,
  output: {
    filename: "bundle.js",
    path: path_dist,
    pathinfo: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        include: path_src,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          }
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
};