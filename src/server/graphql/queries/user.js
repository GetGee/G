import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import userType from '../types/user';
import getProjection from '../get-projection';
import UserModel from '../../models/user';

export default {
  user: {
    type: userType,
    args: {
      handle: {
        name: 'handle',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return UserModel
        .findOne({ handle: params.handle })
        .select(projection)
        .exec();
    }
  },
  allUsers: {
    type: new GraphQLList(userType),
    args: {},
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldASTs[0]);

      return UserModel
        .find()
        .select(projection)
        .exec();
    }
  }
};
