const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((act, type) => {
    act[type] = `${base}_${type}`;
    return act;
  }, {});
}

function action(type, payload = {}) {
  return { type, ...payload };
}

function actionCreators(type) {
  return {
    request: (args) => action(type.REQUEST, { args }),
    success: (response) => action(type.SUCCESS, { response }),
    failure: (error) => action(type.FAILURE, { error }),
    types: type,
  };
}

export const FETCH_USERS = createRequestTypes('FETCH_USERS');
export const fetchUsers = actionCreators(FETCH_USERS);

export const USER_LOGIN = createRequestTypes('USER_LOGIN');
export const userLogin = actionCreators(USER_LOGIN);

export const CREATE_USER = createRequestTypes('CREATE_USER');
export const createUser = actionCreators(CREATE_USER);

export const EDIT_USER = createRequestTypes('EDIT_USER');
export const editUser = actionCreators(EDIT_USER);

export const ADD_TRUST = createRequestTypes('ADD_TRUST');
export const addTrust = actionCreators(ADD_TRUST);

export const REVOKE_TRUST = createRequestTypes('REVOKE_TRUST');
export const revokeTrust = actionCreators(REVOKE_TRUST);

export const ADD_WATCH = createRequestTypes('ADD_WATCH');
export const addWatch = actionCreators(ADD_WATCH);

export const REVOKE_WATCH = createRequestTypes('REVOKE_WATCH');
export const revokeWatch = actionCreators(REVOKE_WATCH);

export const ADD_SUPPORT = createRequestTypes('ADD_SUPPORT');
export const addSupport = actionCreators(ADD_SUPPORT);

export const REVOKE_SUPPORT = createRequestTypes('REVOKE_SUPPORT');
export const revokeSupport = actionCreators(REVOKE_SUPPORT);

export const FETCH_USER_CONSTELLATIONS = createRequestTypes('FETCH_USER_CONSTELLATIONS');
export const fetchUserConstellations = actionCreators(FETCH_USER_CONSTELLATIONS);

export const CREATE_CONSTELLATION = createRequestTypes('CREATE_CONSTELLATION');
export const createConstellation = actionCreators(CREATE_CONSTELLATION);

export const CREATE_GALAXY = createRequestTypes('CREATE_GALAXY');
export const createGalaxy = actionCreators(CREATE_GALAXY);

export const CREATE_NODE = createRequestTypes('CREATE_NODE');
export const createNode = actionCreators(CREATE_NODE);

export const EDIT_NODE = createRequestTypes('EDIT_NODE');
export const editNode = actionCreators(EDIT_NODE);

export const DELETE_NODE = createRequestTypes('DELETE_NODE');
export const deleteNode = actionCreators(DELETE_NODE);

export const ATTACH_REALITIES = createRequestTypes('ATTACH_REALITIES');
export const attachRealities = actionCreators(ATTACH_REALITIES);

export const FETCH_HYPERNODE = createRequestTypes('FETCH_HYPERNODE');
export const fetchHypernode = actionCreators(FETCH_HYPERNODE);

export const SET_SNACKBAR = 'SET_SNACKBAR';
export const setSnackbar = (toast) => action(SET_SNACKBAR, { toast });

export const REMOVE_TOAST = 'REMOVE_TOAST';
export const removeToast = () => action(REMOVE_TOAST);
