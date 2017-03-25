'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const treeSchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
  cosntellations: {
    type: [ {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    } ],
  },
  category: {
    type: [ String ],
  },
});

export default mongoose.model('Tree', treeSchema);
