const path = require('path')
module.exports = {
    mode: 'development',
    entry: {
        bundle:'./src/scripts/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    }
    
}