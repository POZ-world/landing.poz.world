import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import zlib from "browserify-zlib";
import buffer from "buffer";
import stream from "stream-browserify";
import util from "util";
import path from "path-browserify";
import http from "stream-http";
import https from "https-browserify";
import url from "url";
import fs from "fs";
import net from "net";
import tls from "tls";

const plugins = [
  new NodePolyfillPlugin(),
  new MiniCssExtractPlugin({
    filename: "[name].css",
    chunkFilename: "[id].css",
  }),
];

const nodeModulesToProcess = ["@poz-world/poz.world"];
const resolve = {
  fallback: {
    zlib: await import.meta.resolve("browserify-zlib"),
    buffer: await import.meta.resolve("buffer/"),
    stream: await import.meta.resolve("stream-browserify"),
    util: await import.meta.resolve("util"),
    path: await import.meta.resolve("path-browserify"),
    http: await import.meta.resolve("stream-http"),
    https: await import.meta.resolve("stream-http"),
    url: await import.meta.resolve("url/"),
    fs: await import.meta.resolve("fs"),
    net: await import.meta.resolve("net"),
    tls: await import.meta.resolve("tls"),
  },
  extensions: [".tsx", ".ts", ".js", ".jsx"],
};

const module = {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    },
    {
      test: /\.(ts|tsx|js|jsx)$/,
      include: nodeModulesToProcess.map((p) =>
        path.resolve(`node_modules/${p}`)
      ),
      use: 'ts-loader',
      // use: [
      //   {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "@babel/preset-env",
      //         "@babel/preset-react",
      //         "@babel/preset-typescript",
      //       ],
      //     },
      //   },
      // ],
      exclude: /node_modules/,
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
      exclude: /node_modules/,
    },
  ],
};

const webpack = {
  plugins,
  resolve,
  module,
};

export default webpack;
