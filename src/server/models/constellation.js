'use strict';

import mongoose from 'mongoose';

import Meta from './meta';
// import Admin from './admin';

const constellationSchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
  // admin: {
  //   type: Admin,
  // },
  name: {
    type: String,
  },
  editors: {
    type: [ mongoose.Schema.Types.ObjectId ],
  },
  avatar: {
    type: Buffer,
  },
  trees: {
    type: [ {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    } ],
  },
  trustedBy: {
    type: [ {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    } ],
  },
  theme: {
    type: {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
  },
  nodes: {
    type: [ mongoose.Schema.Types.ObjectId ],
  },
  edges: {
    type: [ {
      fromId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      toId: {
        type: mongoose.Schema.Types.ObjectId,
      },
      description: {
        type: String,
      },
      documentation: {
        type: [ String ],
      },
    } ],
  },
  trustRequired: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Constellation', constellationSchema);
