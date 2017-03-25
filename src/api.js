import fetch from 'isomorphic-fetch';
import * as actions from './actions';
import constellations from './constellations/queries';
import core from './core/queries';
import galaxies from './galaxies/queries';
import universe from './universe/queries';
import metaverse from './metaverse/queries';
import userprofiles from './userprofiles/queries';

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://getgee.herokuapp.com/graphql/' : 'http://localhost:3000/graphql/';

const queries = {
  ...constellations,
  ...core,
  ...galaxies,
  ...universe,
  ...metaverse,
  ...userprofiles,
};

export default function postQuery(action, entity) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: queries[action.type](action),
  })
  .then(rawResponse => rawResponse.json())
  .then(response => ({ response }),
    error => ({ error }))
  .catch(error => {
    console.log('Err: ', error);
    return { error };
  });
}
