import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

import { GalaxyConstellation } from './subdocuments';

export default new GraphQLObjectType({
  name: 'Galaxy',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
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
      type: new GraphQLList(GalaxyConstellation),
    },
  }
});
