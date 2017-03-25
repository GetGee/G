'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const galaxySchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
  avatar: {
    type: Buffer,
  },
  name: {
    type: String,
  },
  trees: {
    type: [ mongoose.Schema.Types.ObjectId ],
  },
  trustedBy: {
    type: [ mongoose.Schema.Types.ObjectId ],
  },
  theme: {
    type: mongoose.Schema.Types.ObjectId,
  },
  constellations: {
    type: [ {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    } ],
  },
});

export default mongoose.model('Galaxy', galaxySchema);
