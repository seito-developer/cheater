// const path = require('path');
// import path from 'path';

module.exports = {
    entry: './src/assets/js/main.js',
    devtool: 'source-map',
    output: {
      path: `${__dirname}/dist`,
      filename: 'main.js'  
    },
    watch: true,
    module: {
        rules: [
          {
            test: /\.js$/, 
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
              // options: {
              //   presets: ['es2015']
              // }
            }
          }
        ]
    }
};