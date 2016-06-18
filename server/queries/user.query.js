import * as Types from '../types';
import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

import data from '../../data.json';

const user = {
    type: Types.userType,
    args: {
        id: { type: GraphQLString }
    },
    resolve: function (_, args) {
        return data[args.id];
    }
}

export { user };