import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} from 'graphql';

export const ConstellationTree = new GraphQLObjectType({
  name: 'ConstellationTree',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  },
});

export const ConstellationTrust = new GraphQLObjectType({
  name: 'ConstellationTrust',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  }
});

export const ConstellationTheme = new GraphQLObjectType({
  name: 'ConstellationTheme',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  }
});

export const Edge = new GraphQLObjectType({
  name: 'Edge',
  fields: {
    fromId: {
      type: GraphQLID,
    },
    toId: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    documentation: {
      type: new GraphQLList(GraphQLString),
    },
  },
});

export const GalaxyConstellation = new GraphQLObjectType({
  name: 'GalaxyConstellation',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});

export const TreeConstellation = new GraphQLObjectType({
  name: 'TreeConstellation',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});

export const ConstellationTreeInput = new GraphQLInputObjectType({
  name: 'ConstellationTreeInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  },
});

export const ConstellationTrustInput = new GraphQLInputObjectType({
  name: 'ConstellationTrustInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  }
});

export const ConstellationThemeInput = new GraphQLInputObjectType({
  name: 'ConstellationThemeInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLID,
    },
  }
});

export const EdgeInput = new GraphQLInputObjectType({
  name: 'EdgeInput',
  fields: {
    fromId: {
      type: GraphQLID,
    },
    toId: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    documentation: {
      type: new GraphQLList(GraphQLString),
    },
  },
});

export const GalaxyConstellationInput = new GraphQLInputObjectType({
  name: 'GalaxyConstellationInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});

export const TreeConstellationInput = new GraphQLInputObjectType({
  name: 'TreeConstellationInput',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
  },
});
