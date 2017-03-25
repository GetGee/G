'use strict';

import mongoose from 'mongoose';

// import Admin from './admin';

export const TreeConstellation = mongoose.model('TreeConstellation', new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  }
  name: {
    type: String,
  }
}));

export default mongoose.model('Edge', edgeSchema);
