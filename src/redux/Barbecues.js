import { createAction, handleActions } from 'redux-actions';


export const getBarbecuesRequest = createAction('GET_BARBECUES_REQUEST');
export const getBarbecuesSuccess = createAction('GET_BARBECUES_SUCCESS');
export const getBarbecuesFailure = createAction('GET_BARBECUES_FAILURE');

const INITIAL_STATE = {
  barbecues: [],
};

export default handleActions({
  [getBarbecuesSuccess]: (state, { payload }) => ({
    ...state,
    barbecues: payload,
  }),
}, INITIAL_STATE);
