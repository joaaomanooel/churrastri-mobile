import { createAction, handleActions } from 'redux-actions';
import { resetData } from './Auth';

export const findUsersRequest = createAction('FIND_USER_REQUEST');
export const findUsersSuccess = createAction('FIND_USER_SUCCESS');
export const findUsersFailure = createAction('FIND_USER_FAILURE');

export const addUserRequest = createAction('ADD_USER_REQUEST');
export const addUserSuccess = createAction('ADD_USER_SUCCESS');
export const addUserFailure = createAction('ADD_USER_FAILURE');

export const updateUserRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
export const updateUserFailure = createAction('UPDATE_USER_FAILURE');

export const removeUserRequest = createAction('CREATE_USER_REQUEST');
export const removeUserSuccess = createAction('CREATE_USER_SUCCESS');
export const removeUserFailure = createAction('CREATE_USER_FAILURE');

export const setUser = createAction('SET_USER');

const INITIAL_STATE = { data: {}, users: [] };

export default handleActions({
  [resetData]: () => INITIAL_STATE,
  [setUser]: (state, { payload }) => ({ ...state, data: payload }),
  [findUsersSuccess]: (state, { payload }) => ({ ...state, users: payload }),
  [addUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [updateUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
}, INITIAL_STATE);
