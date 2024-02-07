import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const scssLoader = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: ((resourcePath: string) => resourcePath.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]__[hash:base64:5]'
                        : '[hash:base64:5]',
                },
            },
        },
        'sass-loader',
    ],
});
