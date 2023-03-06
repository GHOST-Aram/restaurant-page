const path = require('path')
const  HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        bundle:'./src/scripts/main.js',
       
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][ext]',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Restaurant Page',
            template: './src/templates/index_template.html',
            filename:'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif|jfif)$/i,
                type: 'asset/resource'
            }
        ]
        
    },
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: '3000',
        hot: true,
        open: true,
        compress: true,
        historyApiFallback: true,
    }
    
}