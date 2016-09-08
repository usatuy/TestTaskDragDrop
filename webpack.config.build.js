var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry:{
        index:[
            'babel-polyfill',
            './src/index',
            './src/index.css'
        ],
        bootstrap:[
            'bootstrap/dist/css/bootstrap.css',
            'bootstrap/dist/js/bootstrap.js'
        ]

    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            // A common mistake is not stringifying the "production" string.
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("css/[name].css"),
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],
        loaders: [
            { test: require.resolve("jquery"), loader: "imports?jQuery=jquery" },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            {
                loaders: ['babel-loader'],
                include: [
                    path.resolve(__dirname, "src")
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
            }
        ]
    }
}