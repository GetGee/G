import {
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import treeType from '../types/tree';
import getProjection from '../get-projection';
import TreeModel from '../../models/tree';

export default {
  tree: {
    type: treeType,
    args: {
      _id: {
        name: 'id',
        type: new GraphQLNonNull(GraphQLID),
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return TreeModel
        .findById(params.id)
        .select(projection)
        .exec();
    }
  },
  treesByCategory: {
    type: new GraphQLList(treeType),
    args: {
      category: {
        name: 'category',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return TreeModel
        .find({ category: params.category })
        .select(projection)
        .exec();
    }
  },
  allTrees: {
    type: new GraphQLList(treeType),
    args: {},
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return TreeModel
        .find()
        .select(projection)
        .exec();
    }
  }
};
