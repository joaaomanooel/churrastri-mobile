import { createAction, handleActions } from 'redux-actions';

export const findUsersRequest = createAction('FIND_USER_REQUEST');
export const findUsersSuccess = createAction('FIND_USER_SUCCESS');
export const findUsersFailure = createAction('FIND_USER_FAILURE');

export const createUserRequest = createAction('CREATE_USER_REQUEST');
export const createUserSuccess = createAction('CREATE_USER_SUCCESS');
export const createUserFailure = createAction('CREATE_USER_FAILURE');

export const updateUserRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
export const updateUserFailure = createAction('UPDATE_USER_FAILURE');

export const removeUserRequest = createAction('CREATE_USER_REQUEST');
export const removeUserSuccess = createAction('CREATE_USER_SUCCESS');
export const removeUserFailure = createAction('CREATE_USER_FAILURE');

export const setUser = createAction('SET_USER');

const INITIAL_STATE = { data: {} };

export default handleActions({
  [setUser]: (state, { payload }) => ({ ...state, data: payload }),

  [findUsersRequest]: state => ({ ...state }),
  [findUsersSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [findUsersFailure]: state => ({ ...state }),

  [createUserRequest]: state => ({ ...state }),
  [createUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [createUserFailure]: state => ({ ...state }),

  [updateUserRequest]: state => ({ ...state }),
  [updateUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [updateUserFailure]: state => ({ ...state }),
}, INITIAL_STATE);
