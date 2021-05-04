const path = require('path');

module.exports = (env) => {
    return {
        mode: env.mode || 'development',
        entry: path.resolve(__dirname, './src/colormangle.js'),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: './colormangle.js',
            libraryTarget: 'window'
        },
        // jest: {
        //     "transform": {
        //         "^.+\\.jsx?$": "babel-jest"
        //     }
        // },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        optimization: {
            usedExports: true,
        }
    };
};