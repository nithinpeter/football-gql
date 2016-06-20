import * as Queries from './queries';
import * as Mutations from './mutations';
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: Queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: Mutations,
  })
});

export default schema;