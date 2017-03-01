'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        htmlWebpackPluginConfig
    ]
};
