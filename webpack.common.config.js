const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const envConfig = require('./env-config');
const assetsPath = function (_path) {
    return path.posix.join('static', _path)
}


commonConfig = {
    name: envConfig.title,
    entry: {
        app: [
            "es5-shim", "es5-shim/es5-sham",
            "babel-polyfill",
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, `dist/${envConfig.envName}`),
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[name].[chunkhash].js'),
        publicPath: "/"
    },
    module: {
        postLoaders: [
            {
                test: /\.js$/,
                loaders: ['export-from-ie8/loader']
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10240&name=static/img/[name].[hash:7].[ext]',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=10240&name=static/fonts/[name].[hash:7].[ext]',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html'),
            favicon: path.resolve('src/static/favicon.ico'),
        }),
        // new webpack.HashedModuleIdsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'runtime'
        // }),
        new es3ifyPlugin()
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};

module.exports = commonConfig;