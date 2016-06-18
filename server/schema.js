import * as Queries from './queries';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: Queries,
  })
});

export default schema;