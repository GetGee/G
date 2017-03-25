import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'RealityInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    typeP:{
      type: GraphQLBoolean,
    },
    typeL:{
      type: GraphQLBoolean,
    },
    typeT:{
      type: GraphQLBoolean,
    },
    hypernode: {
      type: GraphQLID,
    },
    nodeType: {
      type: new GraphQLEnumType({
        name: 'nodeType',
        values: {
          P: { value: 'P' },
          E: { value: 'E' },
          C: { value: 'C' },
          T: { value: 'T' },
          M: { value: 'M' },
          I: { value: 'I' },
        },
      }),
    },
    name: {
      type: GraphQLString,
    },
    language: {
      type: GraphQLString,
    },
    temporal: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    geotags: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
  }
});
