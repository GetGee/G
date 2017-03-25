import { createRequestTypes, actionCreators, action } from '../../actions';

export const CREATE_TREE = createRequestTypes('CREATE_TREE');
export const createTree = actionCreators(CREATE_TREE);

export const EDIT_TREE = createRequestTypes('EDIT_TREE');
export const editTree = actionCreators(EDIT_TREE);

export const DELETE_TREE = createRequestTypes('DELETE_TREE');
export const deleteTree = actionCreators(DELETE_TREE);

export const LIST_TREE_CONSTELLATIONS = createRequestTypes('LIST_TREE_CONSTELLATIONS');
export const listTreeConstellations = actionCreators(LIST_TREE_CONSTELLATIONS);
