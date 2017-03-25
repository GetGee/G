import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import supportInputType from '../types/support-input';
import supportType from '../types/support';
import SupportModel from '../../models/support';

export default {
  addSupport: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(supportInputType)
      }
    },
    async resolve(root, params, context, options) {
      const supportModel = new SupportModel(params.data);
      const newSupport = await supportModel.save();

      if (!newSupport) {
        throw new Error('Error adding new support');
      }
      return true;
    }
  },
  removeSupport: {
    type: supportType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const removedSupport = await SupportModel
        .findByIdAndRemove(params._id)
        .exec();

      if (!removedSupport) {
        throw new Error('Error removing support');
      }

      return removedSupport;
    }
  },
};
