module.exports = {
    entry: "./src/app/main.ts",
    output: {
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
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