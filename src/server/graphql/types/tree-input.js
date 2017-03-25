import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID
} from 'graphql';

import { TreeConstellationInput } from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'TreeInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    constellations: {
      type: new GraphQLList(TreeConstellationInput),
    },
    category: {
      type: new GraphQLList(GraphQLString),
    },
  }
});
