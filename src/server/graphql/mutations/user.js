import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import userInputType from '../types/user-input';
import userType from '../types/user';
import getProjection from '../get-projection';
import UserModel from '../../models/user';

export default {
  createUser: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(userInputType)
      }
    },
    async resolve(root, params, context, options) {
      console.log('BARG BARG!');
      const userModel = new UserModel(params.data);
      const newUser = await userModel.save();

      if (!newUser) {
        throw new Error('Error creating new user');
      }
      return true;
    }
  },
  deleteUser: {
    type: userType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const deletedUser = await UserModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!deletedUser) {
        throw new Error('Error deleting blog post');
      }

      return deletedUser;
    }
  },
};
