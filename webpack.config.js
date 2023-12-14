const path = require("path")


module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        libraryTarget: "umd"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },
    externals: {
        react: "react"
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)?$/, use: [
                    {loader: "style-loader"},
                    // {loader: "css-modules-typescript-loader"},
                    {loader: "css-loader", options: {modules: true}},
                    {loader: "sass-loader"},
                ]
            },
            {
                test: /\.(ts|tsx|js|jsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            }

        ]
    }
}