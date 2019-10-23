const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');
const envConfig = require('./env-config');

const publicConfig = {
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")}
        ]
    },
    plugins: [
        new CleanWebpackPlugin([`dist/${envConfig.envName}/*.*`]),
        new UglifyJSPlugin({
            mangle: {
                screw_ie8: false
            },
            mangleProperties: {
                screw_ie8: false,
            },
            compress: {
                screw_ie8: false,
            },
            output: {
                screw_ie8: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                ENV_TYPE: '\"' + process.env.ENV_TYPE + '\"',
                PUBLIC_URL: JSON.stringify('static')
            },
            // 'process.env.ENV_TYPE': '\"' + process.env.ENV_TYPE + '\"',
        }),
        new ExtractTextPlugin('static/css/[name].[contenthash:5].css')
    ]

};

module.exports = merge(commonConfig, publicConfig);