import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'HypernodeInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
  }
});
