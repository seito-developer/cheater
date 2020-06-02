const path = require('path');
// import path from 'path';

module.exports = {
    entry: {
      main: './src/assets/js/main.js',
      library: './src/assets/js/library.js'
      // './src/assets/sass/style.sass'
    },
    devtool: 'source-map',
    output: {
      // path: `${__dirname}/dist/assets/js`,
      path: path.resolve(__dirname, 'dist/assets/js'),
      filename: '[name].js'
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