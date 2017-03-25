import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import watchInputType from '../types/watch-input';
import watchType from '../types/watch';
import WatchModel from '../../models/watch';

export default {
  addWatch: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(watchInputType)
      }
    },
    async resolve(root, params, context, options) {
      const watchModel = new WatchModel(params.data);
      const newWatch = await watchModel.save();

      if (!newWatch) {
        throw new Error('Error adding new watch');
      }
      return true;
    }
  },
  removeWatch: {
    type: watchType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const removedWatch = await WatchModel
        .findByIdAndRemove(params._id)
        .exec();

      if (!removedWatch) {
        throw new Error('Error removing watch');
      }

      return removedWatch;
    }
  },
};
