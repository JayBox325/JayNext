const nextConfig = {
    reactStrictMode: true,

    experimental: {
        scrollRestoration: false,
    },

    // Custom Webpack config
    webpack(config) {
        config.module.rules.push(
            // SVGR config
            {
                test: /\.svg$/,
                issuer: {
                    and: [/\.(js|ts)x?$/],
                },
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgProps: {
                                className: 'w-auto h-full fill-current',
                            },

                            // SVG Optimisation
                            svgo: true,
                            svgoConfig: {
                                cleanupAttrs: true,
                                inlineStyles: false,
                                plugins: [
                                    {
                                        removeAttrs: { attrs: '(class)' },
                                        removeStyleElement: true,
                                    },
                                ],
                            },
                        },
                    },
                ],
            }
        );

        return config;
    },
}

module.exports = nextConfig
