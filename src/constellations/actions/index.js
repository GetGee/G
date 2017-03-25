import { createRequestTypes, actionCreators } from '../../actions';

export const FETCH_USER_CONSTELLATIONS = createRequestTypes('FETCH_USER_CONSTELLATIONS');
export const fetchUserConstellations = actionCreators(FETCH_USER_CONSTELLATIONS);

export const CREATE_CONSTELLATION = createRequestTypes('CREATE_CONSTELLATION');
export const createConstellation = actionCreators(CREATE_CONSTELLATION);

export const EDIT_CONSTELLATION = createRequestTypes('EDIT_CONSTELLATION');
export const editConstellation = actionCreators(EDIT_CONSTELLATION);

export const DELETE_CONSTELLATION = createRequestTypes('DELETE_CONSTELLATION');
export const deleteConstellation = actionCreators(DELETE_CONSTELLATION);

export const LIST_JOURNALISTS = createRequestTypes('LIST_JOURNALISTS');
export const listJournalists = actionCreators(LIST_JOURNALISTS);

export const LIST_PUBLICATIONS = createRequestTypes('LIST_PUBLICATIONS');
export const listPublications = actionCreators(LIST_PUBLICATIONS);

export const LIST_NODES = createRequestTypes('LIST_NODES');
export const listNodes = actionCreators(LIST_NODES);

export const LIST_TREES = createRequestTypes('LIST_TREES');
export const listTrees = actionCreators(LIST_TREES);

export const ADD_TREE = createRequestTypes('ADD_TREE');
export const addTree = actionCreators(ADD_TREE);

export const REMOVE_TREE = createRequestTypes('REMOVE_TREE');
export const removeTree = actionCreators(REMOVE_TREE);

export const ADD_EDITOR = createRequestTypes('ADD_EDITOR');
export const addEditor = actionCreators(ADD_EDITOR);

export const REMOVE_EDITOR = createRequestTypes('REMOVE_EDITOR');
export const removeEditor = actionCreators(REMOVE_EDITOR);

export const REMOVE_EDITOR_CONTENT = createRequestTypes('REMOVE_EDITOR_CONTENT');
export const removeEditorContent = actionCreators(REMOVE_EDITOR_CONTENT);

export const ADD_NODE = createRequestTypes('ADD_NODE');
export const addNode = actionCreators(ADD_NODE);

export const EDIT_NODE = createRequestTypes('EDIT_NODE');
export const editNode = actionCreators(EDIT_NODE);

export const DELETE_NODE = createRequestTypes('DELETE_NODE');
export const deleteNode = actionCreators(DELETE_NODE);

export const ADD_EDGE = createRequestTypes('ADD_EDGE');
export const addEdge = actionCreators(ADD_EDGE);

export const EDIT_EDGE = createRequestTypes('EDIT_EDGE');
export const editEdge = actionCreators(EDIT_EDGE);

export const DELETE_EDGE = createRequestTypes('DELETE_EDGE');
export const deleteEdge = actionCreators(DELETE_EDGE);