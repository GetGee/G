import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql';

import { TreeConstellation } from './subdocuments';

export default new GraphQLObjectType({
  name: 'Tree',
  fields: {
    _id: {
      type: GraphQLID,
    },
    constellations: {
      type: new GraphQLList(TreeConstellation),
    },
    category: {
      type: new GraphQLList(GraphQLString),
    },
  }
});
