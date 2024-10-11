import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import { fileURLToPath } from "url";
import * as Webpack from "webpack";
import WebpackAssetsManifest from "webpack-assets-manifest";
import CircularDependencyPlugin from "circular-dependency-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

// Get __dirname equivalent in ES module
// const __filename = fileURLToPath(require.resolve("."));
const __dirname = path.dirname(__filename);
const env = process.env;

const plugins = [
  new NodePolyfillPlugin(),
  // new MiniCssExtractPlugin({
  //   filename: "[name].css",
  //   chunkFilename: "[id].css",
  // }),
  // new Webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
  // new WebpackAssetsManifest({
  //   integrity: true,
  //   integrityHashes: ["sha256"],
  //   entrypoints: true,
  //   writeToDisk: true,
  //   publicPath: true,
  // }),
  // new CircularDependencyPlugin({ failOnError: true }),
  // new CompressionPlugin({
  //   filename: "[path][base].gz[query]",
  //   test: /\.(js|css|html|json|ico|svg|eot|otf|ttf|map)$/,
  // }),
  // new CompressionPlugin({
  //   filename: "[path][base].br[query]",
  //   algorithm: "brotliCompress",
  //   test: /\.(js|css|html|json|ico|svg|eot|otf|ttf|map)$/,
  // }),
  // new BundleAnalyzerPlugin({
  //   // generates report.html
  //   analyzerMode: "static",
  //   openAnalyzer: false,
  //   logLevel: "silent", // do not bother Webpacker, who runs with --json and parses stdout
  // }),
];

const nodeModulesToProcess = ["@poz-world/poz.world"];

const aliases = {
  zlib: require.resolve("browserify-zlib"),
  buffer: require.resolve("buffer"),
  stream: require.resolve("stream-browserify"),
  util: require.resolve("util"),
  path: require.resolve("path-browserify"),
  http: require.resolve("stream-http"),
  https: require.resolve("https-browserify"),
  url: require.resolve("url"),
  "emoji-mart": path.resolve(__dirname, "node_modules/emoji-mart-lazyload"),
  mastodon: path.resolve(
    __dirname,
    "node_modules/@poz-world/poz.world/mastodon"
  ), // Corrected package name
  "@": path.resolve(__dirname, "src/"),
};

const resolveOptions: Webpack.ResolveOptions = {
  fallback: {
    ...aliases,
    fs: false,
    net: false,
    tls: false,
    // mastodon: path.resolve(
    //   __dirname,
    //   "node_modules/@poz-world/poz.world"
    // ),
  },
  extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
};

const moduleOptions: Webpack.ModuleOptions = {
  rules: [
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    },
    {
      test: /\.tsx?$/,
      include: [
        path.resolve(__dirname, "src/"),
        ...nodeModulesToProcess.map((p) =>
          path.resolve(__dirname, `node_modules/${p}`)
        ),
      ],
      use: "ts-loader",
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

const config: Webpack.Configuration = {
  plugins: plugins,
  resolve: resolveOptions,
  module: moduleOptions,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  entry: "./src/index.tsx"
};

export default config;
