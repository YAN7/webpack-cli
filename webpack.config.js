const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true,
                            cache: true,
                            configFile: '.eslintrc',
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', {
                                decoratorsBeforeExport: true,
                            }],
                        ],
                    },
                }],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                }],
            },
            {
                test: /\.less$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                }, 'less-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack-cli',
            template: path.resolve(__dirname, 'index.html'),
        }),
    ],
    devServer: {
        hot: true,
        open: false,
        port: 3211,
    },
    stats: 'errors-only',
};
