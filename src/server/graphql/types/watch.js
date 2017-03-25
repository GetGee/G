import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Watch',
  fields: {
    toId: {
      type: GraphQLID,
    },
    fromId: {
      type: GraphQLID,
    },
  }
});
