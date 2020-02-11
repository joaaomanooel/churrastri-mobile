import { createAction, handleActions } from 'redux-actions';

export const findUserRequest = createAction('FIND_USER_REQUEST');
export const findUserSuccess = createAction('FIND_USER_SUCCESS');
export const findUserFailure = createAction('FIND_USER_FAILURE');

export const createUserRequest = createAction('CREATE_USER_REQUEST');
export const createUserSuccess = createAction('CREATE_USER_SUCCESS');
export const createUserFailure = createAction('CREATE_USER_FAILURE');

export const updateUserRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');
export const updateUserFailure = createAction('UPDATE_USER_FAILURE');

export const removeUserRequest = createAction('CREATE_USER_REQUEST');
export const removeUserSuccess = createAction('CREATE_USER_SUCCESS');
export const removeUserFailure = createAction('CREATE_USER_FAILURE');

export const getUserByIdRequest = createAction('GET_USER_BY_ID_REQUEST');
export const getUserByIdSuccess = createAction('GET_USER_BY_ID_SUCCESS');
export const getUserByIdFailure = createAction('GET_USER_BY_ID_FAILURE');

export const setUser = createAction('SET_USER');

const INITIAL_STATE = { data: {} };

export default handleActions({
  [setUser]: (state, { payload }) => ({ ...state, data: payload }),

  [findUserRequest]: state => ({ ...state }),
  [findUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [findUserFailure]: state => ({ ...state }),

  [createUserRequest]: state => ({ ...state }),
  [createUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [createUserFailure]: state => ({ ...state }),

  [updateUserRequest]: state => ({ ...state }),
  [updateUserSuccess]: (state, { payload }) => ({ ...state, data: payload }),
  [updateUserFailure]: state => ({ ...state }),

  [removeUserRequest]: state => ({ ...state }),
  [removeUserSuccess]: () => INITIAL_STATE,
  [removeUserFailure]: state => ({ ...state }),

  [getUserByIdRequest]: state => ({ ...state }),
  [getUserByIdSuccess]: state => ({ ...state }),
  [getUserByIdFailure]: state => ({ ...state }),
}, INITIAL_STATE);
