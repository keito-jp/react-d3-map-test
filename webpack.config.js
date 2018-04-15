const path = require("path");
const webpack = require("webpack");

const js_dist = path.join(__dirname, "./dist");

module.exports = [{
  name: "chartComponent",
  entry: {
    line: "./Line.jsx"
  },
  output: {
    path: js_dist,
    filename: "map.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                }
              }],
              ["@babel/preset-react", {
                development: true
              }]
            ],
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: "development"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react": __dirname + "/node_modules/react",
    }
  },
  devServer: {
    contentBase: "dist"
  },
  devtool: "source-map",
  mode: "development"
}];