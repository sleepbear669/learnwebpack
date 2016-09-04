module.exports = {
    entry: "./entry.js",
    output: {
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }
};