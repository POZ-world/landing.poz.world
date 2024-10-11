import path from 'path';
import * as craco from '@craco/types';
import Webpack from 'webpack';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpackConfig from './webpack.config';

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
          ...webpackConfig.resolve,
          // Removed deprecated options
        },
        // Other configurations...
      };
    },
  },
};

export default cracoConfig;
