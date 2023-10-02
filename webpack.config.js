module.exports = {
  entry: {
    gettingStarted: "./gettingStarted.jsx",
    p2: "./p2.jsx",
    p4: "./pj.jsx",
    p5: "./p5.jsx"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: `${__dirname}/compiled`,
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  mode: "development",
};
module.exports = {
  entry: {
    gettingStarted: "./gettingStarted.jsx",
    p2: "./p2.jsx",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: `${__dirname}/compiled`,
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  mode: "development",
};
const path = require('path');

module.exports = {
  entry: './p4.jsx',
  output: {
    filename: 'p4.bundle.js',
    path: path.resolve(__dirname, 'compiled'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
