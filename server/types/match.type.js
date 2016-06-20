import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const matchType = new GraphQLObjectType({
  name: 'Match',
  fields: {
    _id: { type: GraphQLString },
    Date: { type: GraphQLString },
    HomeTeam: { type: GraphQLString },
    AwayTeam: { type: GraphQLString },
  }
});

export { matchType };