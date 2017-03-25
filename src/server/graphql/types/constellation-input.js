import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import {
  ConstellationTreeInput,
  ConstellationTrustInput,
  ConstellationThemeInput,
  EdgeInput
} from './subdocuments';

export default new GraphQLInputObjectType({
  name: 'ConstellationInput',
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
      type: new GraphQLList(ConstellationTreeInput),
    },
    trustedBy: {
      type: new GraphQLList(ConstellationTrustInput),
    },
    theme: {
      type: ConstellationThemeInput,
    },
    nodes: {
      type: new GraphQLList(GraphQLID),
    },
    edges: {
      type: new GraphQLList(EdgeInput),
    },
    trustRequired: {
      type: GraphQLInt,
    },
  },
});
