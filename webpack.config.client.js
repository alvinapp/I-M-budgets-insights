const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const config = require(path.resolve(process.cwd(), env.config));

  return {
    context: path.resolve(__dirname, "src/client"),
    entry: "index.tsx",
    watch: true,
    output: {
      library: {
        type: "umd",
      },
      path: path.join(__dirname, "build"),
      filename: "bundle.js",
      clean: true,
    },
    resolve: {
      alias: {
        client: [path.resolve("./src/client")],
        assets: [path.resolve("./src/client/assets")],
      },
      extensions: [".js", ".jsx", ".tsx", ".ts"],
      modules: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "./src/client/"),
      ],
      fallback: {
        path: false,
        buffer: false,
        crypto: false,
      },
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: [/node_modules/],
        },
        { test: /\.(js|jsx)$/, loader: "source-map-loader" },
        {
          test: /.(js|jsx)$/,
          exclude: [/node_modules/],
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          include: [
            path.resolve(__dirname, "src/client"),
            path.resolve("node_modules"),
          ],
          use: [
            "style-loader",
            {
              loader: "css-loader",
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|svg)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        AppConfig: JSON.stringify(config),
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "src", "client", "index.html"),
      }),
    ],
  };
};
