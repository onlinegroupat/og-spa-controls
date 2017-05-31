import * as CopyWebpackPlugin from "copy-webpack-plugin";

import {Configuration, LoaderOptionsPlugin} from "webpack";
import {CheckerPlugin} from "awesome-typescript-loader/dist/watch-mode";

//
// config for library
//
const libraryConfig:Configuration = {
    entry: {
        "main": __dirname + "/src/main/typescript/index.ts"
    },
    output: {
        filename: "index.js",
        path: __dirname + "/lib",
        library: 'og-spa-controls',
        libraryTarget: 'umd',
        publicPath: '/lib'
    },
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
                    module: "es2015",
                    target: "es2015",
                    jsx: "react",
                    lib: ["dom", "es6"],
                    declaration: true,
                    declarationDir: __dirname + '/lib',
                    experimentalDecorators: true,
                    sourceRoot: __dirname + '/src/main/typescript'
                }
            }
        ]
    },
    plugins: [
        new LoaderOptionsPlugin({
            debug: true
        }),
        new CheckerPlugin(),
        new CopyWebpackPlugin([{ from: __dirname + '/src/main/less/**/*', to: __dirname + '/lib', flatten: true }]),
    ],
    externals: {
        "react": "react",
        "react-dom": "react-dom",
        "uuid": "uuid"
    }
};

export = libraryConfig;