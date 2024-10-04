// webpack.config.js
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const plugins = [
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
];

export const module = {
    rules: [
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
            ],
        },
    ],
};

export const resolve = {
    fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "buffer": require.resolve("buffer/"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "path": require.resolve("path-browserify"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "url": require.resolve("url/"),
        "fs": false,
        "net": false,
        "tls": false
    }
};