import { createRequestTypes, actionCreators, action } from '../../actions';

export const SET_SNACKBAR = 'SET_SNACKBAR';
export const setSnackbar = (toast) => action(SET_SNACKBAR, { toast });

export const REMOVE_TOAST = 'REMOVE_TOAST';
export const removeToast = () => action(REMOVE_TOAST);
