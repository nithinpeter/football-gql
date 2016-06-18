import * as Types from '../types';
import * as Db from '../../db'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} from 'graphql';

const match = {
    type: new GraphQLList(Types.matchType),
    args: {
        id: { type: GraphQLString }
    },
    resolve: () => new Promise((resolve, reject) => {
        const cursor = Db.get().collection('epl_2015_16').find().project().limit(10);
        
        cursor.toArray((err, res) => {
            if(err) reject(err);
            
            console.log(res);
            resolve(res);
        })
    })
}

export { match };