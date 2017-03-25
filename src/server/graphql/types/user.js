import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLID,
    },
    handle: {
      type: GraphQLString,
    },
    auth0id: {
      type: GraphQLString,
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
