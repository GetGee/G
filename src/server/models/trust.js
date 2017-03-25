'use strict';

import mongoose from 'mongoose';

const trustSchema = new mongoose.Schema({
  toId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
  },
  fromId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
  },
});

export default mongoose.model('Trust', trustSchema);
