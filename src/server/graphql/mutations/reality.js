import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import realityInputType from '../types/reality-input';
import realityType from '../types/reality';
import getProjection from '../get-projection';
import RealityModel from '../../models/reality';

export default {
  addReality: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(realityInputType)
      }
    },
    async resolve(root, params, context, options) {
      console.log('BARG!');
      const realityModel = new RealityModel(params.data);
      const newReality = await realityModel.save();

      if (!newReality) {
        throw new Error('Error adding new reality');
      }
      return true;
    }
  },
  deleteReality: {
    type: realityType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const deletedReality = await RealityModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!deletedReality) {
        throw new Error('Error deleting reality');
      }

      return deletedReality;
    }
  },
};
