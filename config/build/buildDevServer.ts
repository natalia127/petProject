import { Configuration as ConfigurationDev } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): ConfigurationDev {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
