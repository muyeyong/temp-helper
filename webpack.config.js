const path = require('path');

module.exports = {
  entry: './bin/test.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
            {
                test:  /\.m?js$/,
                options: {
                  cacheDirectory: true,
                  presets: ['@babel/preset-env'],
                },
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,  
                use: "ts-loader",  
                exclude: "/node-modules/"
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    mode: "development",
    target: "node"
};
