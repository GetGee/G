import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Trust',
  fields: {
    toId: {
      type: GraphQLID,
    },
    fromId: {
      type: GraphQLID,
    },
  }
});
