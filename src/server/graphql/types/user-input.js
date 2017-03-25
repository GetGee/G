import {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    handle: {
      type: new GraphQLNonNull(GraphQLString),
    },
    auth0id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    bio: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    public: {
      type: GraphQLBoolean,
    },
    donate: {
      type: GraphQLString,
    },
  }
});
