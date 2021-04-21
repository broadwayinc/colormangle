const path = require('path');

module.exports = {
    //mode: 'development',
    mode: 'production',
    entry: './src/colormangle.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'colormangle.js',
    },
    jest: {
        "transform": {
            "^.+\\.jsx?$": "babel-jest"
        }
    },
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
    },
};