const path = require('path')


module.exports = {
  mode: "production",
  entry: {
    main: './index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  target: 'node'
}