const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'dist/',
        assetModuleFilename: 'assets/[hash][ext]',
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
            },
            /*             {
                            test: /\.[tj]s$/,
                            use: 'ts-loader',
                            exclude: '/node_modules/',
                        }, */
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'style-loader',
                    'css-loader', 'sass-loader'
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'] /* Какие расширения не указываем при импорте/экспорте */
    },
    plugins: [
        new HtmlWebpackPlugin({
            /* Перекомпилирует index.html в минимизированную версию и закинет в dist */
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './css/index.css',
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        })
    ],
};