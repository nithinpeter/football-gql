var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');
var db = require('./db');

var app = express();
var data = require('./data.json');

var userType = new graphql.GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString },
  }
});


var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: userType,
        args: {
          id: { type: graphql.GraphQLString }
        },
        resolve: function (_, args) {
          return data[args.id];
        }
      }
    }
  })
});

app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))

var url;
if(process.env.NODE_ENV == 'production')
    url = 'mongodb://' + process.env.DB_USER_NAME + ':'+ process.env.DB_PASSWORD + '@ds011251.mlab.com:11251/mallujunkies';
else
    url = 'mongodb://localhost:27017/mallunjunkies';

db.connect(url, function (err) {
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        console.log('Connected to Mongo server.')
        var port = process.env.PORT || 4000;
        app.listen(port, function () {
            console.log('GraphQL server running on ' + port);
        })
    }
});