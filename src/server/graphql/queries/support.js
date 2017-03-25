import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import supportType from '../types/support';
import SupportModel from '../../models/support';

export default {
  userSupports: {
    type: new GraphQLList(supportType),
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, parroot, params, context, options) {
      return SupportModel
        .find({ fromId: params.user })
        .exec();
    }
  },
  userSupportedBy: {
    type: new GraphQLList(supportType),
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, params, context, options) {
      return SupportModel
        .find({ toId: params.user })
        .exec();
    }
  }
};
