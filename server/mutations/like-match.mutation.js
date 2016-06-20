import * as Types from '../types';
import * as Db from '../../db'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean,
} from 'graphql';

const likeMatch = {
    type: new GraphQLList(Types.matchType),
    args: {
        id: { type: GraphQLString }
    },
    resolve: (root, {id}) => new Promise((resolve, reject) => {
        const collection = Db.get().collection('epl_2015_16');

        collection.updateOne({ _id: id }, { $set: { likeCount: 1 } }, (err, res) => {
            if (err) reject(false);
            else {
                console.log("mutation successful");
                collection.find({ _id: id }).toArray((err, res) => {
                    if (err) reject(err);

                    console.log(res);
                    resolve(res);
                })
            }
        })

    })
}

export { likeMatch };