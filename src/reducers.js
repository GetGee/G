import { combineReducers } from 'redux';

// import constellations from './constellations/reducers';
import core from './core/reducers';
// import galaxies from './galaxies/reducers';
// import universe from './universe/reducers';
// import metaverse from './metaverse/reducers';
// import userprofiles from './userprofiles/reducers';

const appReducer = combineReducers({
  // constellations,
  core,
  // galaxies,
  // universe,
  // metaverse,
  // userprofiles,
});

const rootReducer = (state, action) => {
  // space for extra steps
  return appReducer(state, action);
};

export default rootReducer;
