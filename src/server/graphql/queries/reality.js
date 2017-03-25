import {
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
import { Types } from 'mongoose';

import realityType from '../types/reality';
import getProjection from '../get-projection';
import RealityModel from '../../models/reality';

export default {
  reality: {
    type: realityType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return RealityModel
        .findOne({ handle: params.handle })
        .select(projection)
        .exec();
    }
  },
  realitiesInList: {
    type: new GraphQLList(realityType),
    args: {
      realityIDs: {
        name: 'realityIDs',
        type: new GraphQLList(GraphQLID),
      }
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);

      return RealityModel
        .find({
          _id: {
            $in: params.realityIDs,
          },
        })
        .select(projection)
        .exec();
    }
  },
  realitiesByName: {
    type: new GraphQLList(realityType),
    args: {
      name: {
        name: 'name',
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return RealityModel
        .find({ name: params.name })
        .select(projection)
        .exec();
    },
  },
  realitiesInHypernode: {
    type: new GraphQLList(realityType),
    args: {
      hypernode: {
        name: 'hypernode',
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return RealityModel
        .find({ hypernode: params.hypernode })
        .select(projection)
        .exec();
    },
  },
  allRealities: {
    type: new GraphQLList(realityType),
    args: {},
    resolve(root, parroot, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      return RealityModel
        .find()
        .select(projection)
        .exec();
    },
  },
};
