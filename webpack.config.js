module.exports = {
    entry: ["./src/utils.js", "./src/app.js"],
    output: {
        filename: "./src/bundle.js"
    },
    watch: true,
    devServer: {
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}
