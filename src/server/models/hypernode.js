'use strict';

import mongoose from 'mongoose';

import Meta from './meta';

const hypernodeSchema = new mongoose.Schema({
  meta: {
    type: Meta,
  },
});

export default mongoose.model('Hypernode', hypernodeSchema);
