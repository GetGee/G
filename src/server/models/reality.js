'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const realitySchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
  typeP: {
    type: Boolean,
    default: true,
  },
  typeL: {
    type: Boolean,
    default: false,
  },
  typeT: {
    type: Boolean,
    default: false,
  },
  hypernode: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    index: true,
  },
  nodeType: {
    type: String,
    enum: [ 'P', 'E', 'C', 'T', 'M', 'I' ],
  },
  name: {
    type: String,
    required: true,
  },
  language: {
    type: String,
  },
  temporal: {
    type: String,
  },
  description: {
    type: String,
  },
  geotags: {
    type: String,
  },
  image: {
    type: Buffer,
  },
});

export default mongoose.model('Reality', realitySchema);
