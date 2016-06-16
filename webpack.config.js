var path = require("path");

module.exports = {
    entry: {
        graphiql: "graphiql",
    },
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