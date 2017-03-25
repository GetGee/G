'use strict';

import mongoose from 'mongoose';

export default {
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdOn: {
    type: Date,
  },
};
