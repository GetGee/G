import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import nodeInputType from '../types/node-input';
import nodeType from '../types/node';
import getProjection from '../get-projection';
import NodeModel from '../../models/node';

export default {
  addNode: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(nodeInputType)
      }
    },
    async resolve(root, params, context, options) {
      const nodeModel = new NodeModel(params.data);
      const newNode = await nodeModel.save();

      if (!newNode) {
        throw new Error('Error adding new node');
      }
      return true;
    }
  },
  removeNode: {
    type: nodeType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const removedNode = await NodeModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!removedNode) {
        throw new Error('Error removing node');
      }

      return removedNode;
    }
  },
};