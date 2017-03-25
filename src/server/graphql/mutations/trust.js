import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import trustInputType from '../types/trust-input';
import trustType from '../types/trust';
import TrustModel from '../../models/trust';

export default {
  addTrust: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(trustInputType)
      }
    },
    async resolve(root, params, context, options) {
      const trustModel = new TrustModel(params.data);
      const newTrust = await trustModel.save();

      if (!newTrust) {
        throw new Error('Error adding new trust');
      }
      return true;
    }
  },
  removeTrust: {
    type: trustType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const removedTrust = await TrustModel
        .findByIdAndRemove(params._id)
        .exec();

      if (!removedTrust) {
        throw new Error('Error removing trust');
      }

      return removedTrust;
    }
  },
};
