import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { scssLoader } from './loaders/buildCssLoaders';

const svgLoader = () => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
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
        scssLoader(options.isDev),
        svgLoader(),
        fileLoader(),
    ];
}
