const { CheckerPlugin } = require("awesome-typescript-loader");
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import {Configuration} from "webpack";

const extractCss = new ExtractTextPlugin({
    filename: "[name].css"
});


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
                    declaration: false
                }
            },
            // Handle less files
            {
                test: /\.less$/,
                use: extractCss.extract({fallback: "style-loader", use: "css-loader!less-loader"})
            }
        ]
    },

    devServer: {
        port: 3000,
        hot: true
    },

    plugins: [
        new CheckerPlugin(),
        extractCss,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/example/index.html'
        })
    ]
};

export = exampleConfig;