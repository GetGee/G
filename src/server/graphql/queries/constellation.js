import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';

import constellationType from '../types/constellation';
import getProjection from '../get-projection';
import ConstellationModel from '../../models/constellation';

export default {
  constellationByName: {
    type: constellationType,
    args: {
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return ConstellationModel
        .findOne({ name: params.name })
        .select(projection)
        .exec();
    }
  },
  constellationsInList: {
    type: constellationType,
    args: {
      constellationIDs: {
        name: 'constellationIDs',
        type: new GraphQLList(GraphQLID)
      },
    },
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return ConstellationModel
        .find({
          _id: {
            $in: params.constellationIDs,
          }
        })
        .select(projection)
        .exec();
    },
  },
  allConstellations: {
    type: new GraphQLList(constellationType),
    args: {},
    resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return ConstellationModel
        .find()
        .select(projection)
        .exec();
    }
  }
};
