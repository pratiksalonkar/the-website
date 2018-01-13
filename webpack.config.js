var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './index.js',

    output: {
        path: '/',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, 
                loader: "file-loader"
            },
        ]
    },

    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8080/' })
    ]
}