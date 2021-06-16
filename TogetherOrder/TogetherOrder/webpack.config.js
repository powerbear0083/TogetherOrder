const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: { 
        app: path.resolve(__dirname, "src", "index.tsx") 
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(js)$|(jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                meta: {
                    viewport: 'width=device-width, initial-scale=1.0',
                },
                title: '開發模式',
                template: path.resolve(__dirname, "src", "index.html")
            }
        )
    ]
};