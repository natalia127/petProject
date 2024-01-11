import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

const svgLoader = () => ({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});
const scssLoader = ({ isDev }: BuildOptions) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: ((resourcePath: string) => resourcePath.includes('.module.')),
          localIdentName: isDev ? '[path][name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
        },
      },
    },
    'sass-loader',
  ],
});
const tsLoader = () => ({
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
});

const fileLoader = () => ({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
}
);
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  return [
    tsLoader(),
    scssLoader(options),
    svgLoader(),
    fileLoader(),
  ];
}
