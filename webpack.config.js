module.exports = {
    entry: ["./src/utils.js", "./src/app.js"],
    output: {
        filename: "./src/bundle.js"
    },
    watch: true,
    devServer: {
        disableHostCheck: true
    }
}