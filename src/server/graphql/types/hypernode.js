import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Hypernode',
  fields: {
    _id: {
      type: GraphQLID,
    },
  }
});
