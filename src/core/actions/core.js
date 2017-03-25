export default {
  setOrigin( state, origin ) {
    return state.set('ORIGIN', origin);
  },
  setDirection(state, direction) {
    return state.set('DIRECTION', direction);
  }
};
