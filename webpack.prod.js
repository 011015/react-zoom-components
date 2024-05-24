const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const config = {
    entry: path.resolve(__dirname, 'src/components/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.min.js',
        clean: true,
        libraryTarget: 'module'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$/i,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
        }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin()],
    },
    externals: {
        'react': 'react'
    },
    experiments: {
        outputModule: true
    }
}

module.exports = config;