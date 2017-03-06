import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import treeInputType from '../types/tree-input';
import treeType from '../types/tree';
import getProjection from '../get-projection';
import TreeModel from '../../models/tree';

export default {
  addTree: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(treeInputType)
      }
    },
    async resolve(root, params, context, options) {
      const treeModel = new TreeModel(params.data);
      const newTree = await treeModel.save();

      if (!newTree) {
        throw new Error('Error adding new tree');
      }
      return true;
    }
  },
  removeTree: {
    type: treeType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const removedTree = await TreeModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!removedTree) {
        throw new Error('Error removing tree');
      }

      return removedTree;
    }
  },
};