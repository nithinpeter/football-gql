var path = require("path");

module.exports = {
    entry: path.join(__dirname, "graphiql/index.js"),
    output: {
        fileName: "[name].bundle.js",
        path: __dirname + "/graphiql/"
    },

    resolve: {
        extensions: ["", ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

}