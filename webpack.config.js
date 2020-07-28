const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        // library: 'MathSoil',
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/env",
                                { "targets": "defaults, not ie 11, not ie_mob 11" }
                            ]
                        ],
                        "plugins": ["@babel/plugin-proposal-class-properties"]
                    }
                }
            }
        ]
    }
};