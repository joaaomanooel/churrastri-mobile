import { createAction, handleActions } from 'redux-actions';
import { resetData } from './Auth';

export const getBarbecuesRequest = createAction('GET_BARBECUES_REQUEST');
export const getBarbecuesSuccess = createAction('GET_BARBECUES_SUCCESS');
export const getBarbecuesFailure = createAction('GET_BARBECUES_FAILURE');

export const addBarbecuesRequest = createAction('ADD_BARBECUES_REQUEST');
export const addBarbecuesSuccess = createAction('ADD_BARBECUES_SUCCESS');
export const addBarbecuesFailure = createAction('ADD_BARBECUES_FAILURE');

export const updateBarbecuesRequest = createAction('UPDATE_BARBECUES_REQUEST');
export const updateBarbecuesSuccess = createAction('UPDATE_BARBECUES_SUCCESS');
export const updateBarbecuesFailure = createAction('UPDATE_BARBECUES_FAILURE');

export const removeBarbecuesRequest = createAction('REMOVE_BARBECUES_REQUEST');
export const removeBarbecuesSuccess = createAction('REMOVE_BARBECUES_SUCCESS');
export const removeBarbecuesFailure = createAction('REMOVE_BARBECUES_FAILURE');

const INITIAL_STATE = {
  barbecues: [],
};

export default handleActions({
  [resetData]: () => INITIAL_STATE,
  [getBarbecuesSuccess]: (state, { payload }) => ({
    ...state,
    barbecues: payload,
  }),
}, INITIAL_STATE);
