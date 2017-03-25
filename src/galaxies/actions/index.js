import { createRequestTypes, actionCreators, action } from '../../actions';


export const FETCH_USER_GALAXIES = createRequestTypes('FETCH_USER_GALAXIES');
export const fetchUserGalaxies = actionCreators(FETCH_USER_GALAXIES);

export const CREATE_GALAXY = createRequestTypes('CREATE_GALAXY');
export const createGalaxy = actionCreators(CREATE_GALAXY);

export const EDIT_GALAXY = createRequestTypes('EDIT_GALAXY');
export const editGalaxy = actionCreators(EDIT_GALAXY);

export const DELETE_GALAXY = createRequestTypes('DELETE_GALAXY');
export const deleteGalaxy = actionCreators(DELETE_GALAXY);

export const LIST_CONSTELLATIONS = createRequestTypes('LIST_CONSTELLATIONS');
export const listConstellations = actionCreators(LIST_CONSTELLATIONS);

export const ADD_CONSTELLATION = createRequestTypes('ADD_CONSTELLATION');
export const addConstellation = actionCreators(ADD_CONSTELLATION);

export const REMOVE_CONSTELLATION = createRequestTypes('REMOVE_CONSTELLATIONS');
export const removeConstellation = actionCreators(REMOVE_CONSTELLATION);

export const EDIT_FILTER = createRequestTypes('EDIT_FILTER');
export const editFlter = actionCreators(EDIT_FILTER);
