import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import watchType from '../types/watch';
import WatchModel from '../../models/watch';

export default {
  userWatches: {
    type: new GraphQLList(watchType),
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, params, context, options) {
      return WatchModel
        .find({ fromId: params.user })
        .exec();
    }
  },
  userWatchedBy: {
    type: new GraphQLList(watchType),
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, params, context, options) {
      return WatchModel
        .find({ toId: params.user })
        .exec();
    }
  }
};
