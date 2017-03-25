import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'WatchInput',
  fields: {
    toId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    fromId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }
});
