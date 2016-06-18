import path from 'path';
import graphqlHTTP from 'express-graphql';
import express from 'express';
import db from './db';
import schema from './server/schema';

var app = express();

app.use(express.static(path.join(__dirname, 'graphiql')));
app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))


var url;
if (process.env.NODE_ENV == 'production')
    url = 'mongodb://' + process.env.DB_USER_NAME + ':' + process.env.DB_PASSWORD + '@ds011251.mlab.com:11251/football';
else
    url = 'mongodb://localhost:27017/football';

db.connect(url, function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        console.log('Connected to Mongo server.')

        app.get('/graphiql', function (req, res) {
            res.sendFile(path.join(__dirname, 'graphiql/index.html'));
        })


        var port = process.env.PORT || 4000;
        app.listen(port, function () {
            console.log('GraphQL server running on ' + port);
        })
    }
});