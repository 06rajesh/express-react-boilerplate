const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // Tell webpack to start bundling our app at app/index.js
    entry: __dirname + '/resources/assets/js/index.js',
    // Output our app to the dist/ directory
    output: {
        filename: 'app.js',
        path: __dirname + '/public/js'
    },
    // Emit source maps so we can debug our code in the browser
    devtool: 'source-map',
    // Tell webpack to run our source code through Babel
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/app.css"),
    ]
};
