const { CheckerPlugin } = require("awesome-typescript-loader");
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration} from "webpack";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const exampleConfig:Configuration = {
    entry: {
        "index": __dirname + "/src/example/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/example",
        publicPath:''
    },

    devtool: "source-map",

    resolve: {
        extensions: [ ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // Handle typescript files
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                query: {
                    sourceMap: true,
                    noImplicitAny: true,
                    module: "commonjs",
                    target: "es2015",
                    jsx: "react",
                    lib: ["dom", "es6"],
                    strict: true,
                    declaration: false
                }
            },
            // Handle less files
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },

    devServer: {
        port: 5432,
        hot: true
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/example/index.html'
        })
    ]
};

export = exampleConfig;