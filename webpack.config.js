const path = require('path');
const webpack = require("webpack")

const { production } = require("yargs")
    .option("production", {
        alias: "prod",
        default: false
    })
    .argv;


module.exports = {
    entry: './src/entry.ts',
    mode: production ? "production" : "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 3000
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: JSON.stringify(!production)
        })
    ]
};