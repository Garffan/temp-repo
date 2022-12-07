const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = "development"

if (process.env.NODE_ENV === "production") {
    mode = "production"
}

console.log(mode + " mode")

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: false
},
plugins: [
    new MiniCssExtractPlugin({
        filename: './css/style.css',
    }),
    new HtmlWebpackPlugin({
        template: "./dist/index.html",
        minify : {
          removeComments: true
        }
    })],
    module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
                (mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader),
                "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    "postcss-preset-env",
                                    {
                                        // Options
                                    },
                                ],
                            ],
                        },
                    },
                },
            ],
        },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
    
        }
        ],
      },
};