
// Handle css modules
export const cssModuleHandler = {
    test: /\.css$/,
    loader: 'css-loader',
    options: {
        modules: true,
        namedExport: true
    }
};