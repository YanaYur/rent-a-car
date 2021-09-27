const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ruleForStyles = {
  test: /\.(sc|c)ss$/i,
  use: [
    MiniCssExtractPlugin.loader,
    "css-loader",
    "sass-loader",
    "postcss-loader",
  ],
};

const ruleForJavascript = {
  test: /\.(js|jsx)$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ]
    ],
  },
};

module.exports = () => {
  return {
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      compress: true,
      port: 9000,
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "build"),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "src/index.html" }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [ruleForJavascript, ruleForStyles],
    },
    // devServer: {
    //   open: true,
    //   port: 3000,
    //   overlay: true,
    //   compress: true,
    // },
  };
};
