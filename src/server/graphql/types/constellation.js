import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import { ConstellationTree, ConstellationTrust, ConstellationTheme, Edge } from './subdocuments';

export default new GraphQLObjectType({
  name: 'Constellation',
  fields: {
    _id: {
      type: GraphQLID,
    },
    editors: {
      type: new GraphQLList(GraphQLID),
    },
    avatar: {
      type: GraphQLString,
    },
    trees: {
      type: new GraphQLList(ConstellationTree),
    },
    trustedBy: {
      type: new GraphQLList(ConstellationTrust),
    },
    theme: {
      type: ConstellationTheme,
    },
    nodes: {
      type: new GraphQLList(GraphQLID),
    },
    edges: {
      type: new GraphQLList(Edge),
    },
    trustRequired: {
      type: GraphQLInt,
    },
  },
});
