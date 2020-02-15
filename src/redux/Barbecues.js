import { createAction, handleActions } from 'redux-actions';

export const getBarbecuesRequest = createAction('GET_BARBECUES_REQUEST');
export const getBarbecuesSuccess = createAction('GET_BARBECUES_SUCCESS');
export const getBarbecuesFailure = createAction('GET_BARBECUES_FAILURE');

export const addBarbecuesRequest = createAction('ADD_BARBECUES_REQUEST');
export const addBarbecuesSuccess = createAction('ADD_BARBECUES_SUCCESS');
export const addBarbecuesFailure = createAction('ADD_BARBECUES_FAILURE');

const INITIAL_STATE = {
  barbecues: [],
};

export default handleActions({
  [getBarbecuesSuccess]: (state, { payload }) => ({
    ...state,
    barbecues: payload,
  }),
}, INITIAL_STATE);
