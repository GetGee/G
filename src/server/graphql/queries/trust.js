import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import trustType from '../types/trust';
import TrustModel from '../../models/trust';

export default {
  userTrusts: {
    type: new GraphQLList(trustType),
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, parroot, params, context, options) {
      return TrustModel
        .find({ fromId: params.user })
        .exec();
    }
  },
  userTrustedBy: {
    type: new GraphQLList(trustType),
    args: {
      user: {
        name: 'user',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, params, context, options) {
      return TrustModel
        .find({ toId: params.user })
        .exec();
    }
  }
};
