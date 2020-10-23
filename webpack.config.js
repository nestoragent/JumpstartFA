const path = require('path');

const PATHS = {
    app: "./containers/app",
    build: path.join(__dirname, 'build')
};

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: PATHS.app
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }, {
                test: /\.ts&/,
                loader: 'ts-loader'
            }
        ]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    watch: true
};
