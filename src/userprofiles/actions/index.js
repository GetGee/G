import { createRequestTypes, actionCreators, action } from '../../actions';

export const FETCH_USERS = createRequestTypes('FETCH_USERS');
export const fetchUsers = actionCreators(FETCH_USERS);

export const USER_LOGIN = createRequestTypes('USER_LOGIN');
export const userLogin = actionCreators(USER_LOGIN);

export const USER_LOGOUT = createRequestTypes('USER_LOGOUT');
export const userLogout = actionCreators(USER_LOGOUT);

export const CREATE_USER = createRequestTypes('CREATE_USER');
export const createUser = actionCreators(CREATE_USER);

export const EDIT_USER = createRequestTypes('EDIT_USER');
export const editUser = actionCreators(EDIT_USER);

export const DELETE_USER = createRequestTypes('DELETE_USER');
export const deleteUser = actionCreators(DELETE_USER);

export const ADD_TRUST = createRequestTypes('ADD_TRUST');
export const addTrust = actionCreators(ADD_TRUST);

export const REMOVE_TRUST = createRequestTypes('REMOVE_TRUST');
export const removeTrust = actionCreators(REMOVE_TRUST);

export const ADD_WATCH = createRequestTypes('ADD_WATCH');
export const addWatch = actionCreators(ADD_WATCH);

export const REMOVE_WATCH = createRequestTypes('REMOVE_WATCH');
export const removeWatch = actionCreators(REMOVE_WATCH);

export const ADD_SUPPORT = createRequestTypes('ADD_SUPPORT');
export const addSupport = actionCreators(ADD_SUPPORT);

export const REMOVE_SUPPORT = createRequestTypes('REMOVE_SUPPORT');
export const removeSupport = actionCreators(REMOVE_SUPPORT);

export const SET_TRUST_DEGREES = createRequestTypes('SET_TRUST_DEGREES');
export const setTrustDegrees = actionCreators(SET_TRUST_DEGREES);