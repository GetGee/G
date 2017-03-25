import { takeLatest, delay } from 'redux-saga';
import { call, select, put } from 'redux-saga/effects';
import _ from 'lodash';

import * as actions from './actions';
import postQuery from './api';

const apiMap = [
  'fetchUsers',
  'userLogin',
  'userLogout',
  'createUser',
  'editUser',
  'deleteUser',
  'addTrust',
  'removeTrust',
  'addWatch',
  'removeWatch',
  'addSupport',
  'removeSupport',
  'setTrustDegrees',
  'fetchUserConstellations',
  'createConstellation',
  'editConstellation',
  'deleteConstellation',
  'listJournalists',
  'listPublications',
  'listNodes',
  'listTrees',
  'addTree',
  'removeTree',
  'addEditor',
  'removeEditor',
  'removeEditorContent',
  'addNode',
  'editNode',
  'deleteNode',
  'addEdge',
  'editEdge',
  'deleteEdge',
  'fetchUserGalaxies',
  'createGalaxy',
  'editGalaxy',
  'deleteGalaxy',
  'listConstellations',
  'addConstellation',
  'removeConstellation',
  'editFlter',
  'fetchHypernode',
  'listHypernodeConstellations',
  'createReality',
  'editReality',
  'deleteReality',
  'attachRealities',
  'createTree',
  'editTree',
  'deleteTree',
  'listTreeConstellations',
];

function* fetchEntitySaga(entity, action) {
  const { response } = yield call(postQuery, action);
  if (!response.error) {
    yield put(entity.success(response));
  } else {
    yield put(entity.failure(response.error));
  }
}

function fetchEntity(entity) {
  return fetchEntitySaga.bind(null, entity);
}

export function* takeLatestRequest(entity) {
  yield takeLatest(entity.types.REQUEST, fetchEntity(entity));
}

export default function* fetchers() {
  yield _.map(apiMap, fetcher => takeLatestRequest(actions[fetcher]));
}
