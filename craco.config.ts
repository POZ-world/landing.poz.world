import path from "path";
import * as craco from "@craco/types";
import Webpack from "webpack";
import WebpackAssetsManifest from "webpack-assets-manifest";
import CircularDependencyPlugin from "circular-dependency-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import webpackConfig from "./webpack.config";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const env = process.env;

const tsconfig: craco.CracoTypeScriptConfig = {
  enableTypeChecking: true,
};

const cracoConfig: craco.CracoConfig = {
  typescript: tsconfig,
  webpack: {
    // alias: {...webpackConfig.resolve},
    configure: (cracoWebpackConfig) => {
      return {
        ...cracoWebpackConfig,
        resolve: {
          ...cracoWebpackConfig.resolve,
          ...webpackConfig.resolve as Webpack.ResolveOptions,
          // Removed deprecated options
        },
      };
    },
    plugins: {
      add: [
        new Webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
          "process.env.PUBLIC_URL": JSON.stringify(env.PUBLIC_URL),
        }),
        new NodePolyfillPlugin(),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),
        new Webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
        new WebpackAssetsManifest({
          integrity: true,
          integrityHashes: ["sha256"],
          entrypoints: true,
          writeToDisk: true,
          publicPath: true,
        }),
        new CircularDependencyPlugin({ failOnError: true }),
        new CompressionPlugin({
          filename: "[path][base].gz[query]",
          test: /\.(js|css|html|json|ico|svg|eot|otf|ttf|map)$/,
        }),
        new CompressionPlugin({
          filename: "[path][base].br[query]",
          algorithm: "brotliCompress",
          test: /\.(js|css|html|json|ico|svg|eot|otf|ttf|map)$/,
        }),
        new BundleAnalyzerPlugin({
          // generates report.html
          analyzerMode: "static",
          openAnalyzer: false,
          logLevel: "silent", // do not bother Webpacker, who runs with --json and parses stdout
        }),
      ],
    },
  },
};

export default cracoConfig;
