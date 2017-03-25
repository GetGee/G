import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import galaxyType from '../types/galaxy';
import getProjection from '../get-projection';
import GalaxyModel from '../../models/galaxy';

export default {
  galaxy: {
    type: galaxyType,
    args: {
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return GalaxyModel
        .findOne({ name: params.name })
        .select(projection)
        .exec();
    }
  },
  allGalaxies: {
    type: new GraphQLList(galaxyType),
    args: {},
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return GalaxyModel
        .find()
        .select(projection)
        .exec();
    }
  }
};
