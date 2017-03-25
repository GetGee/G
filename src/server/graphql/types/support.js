import {
  GraphQLObjectType,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Support',
  fields: {
    toId: {
      type: GraphQLID,
    },
    fromId: {
      type: GraphQLID,
    },
  }
});
