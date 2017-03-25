import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { GalaxyConstellationInput } from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'GalaxyInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    avatar: {
      type: GraphQLString,
    },
    trees: {
      type: new GraphQLList(GraphQLID),
    },
    trustedBy: {
      type: new GraphQLList(GraphQLID),
    },
    theme: {
      type: GraphQLID,
    },
    constellations: {
      type: new GraphQLList(GalaxyConstellationInput),
    },
  }
});
