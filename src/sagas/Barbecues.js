import { call, put } from 'redux-saga/effects';
import { barbecues } from '@/services';
import * as BarbecuesActions from '@/redux/Barbecues';


export function* getAll() {
  try {
    const allBarbecues = yield call(barbecues.getAll);
    yield put(BarbecuesActions.getBarbecuesSuccess(allBarbecues));
  } catch (error) {
    console.log(error);
    yield put(BarbecuesActions.getBarbecuesFailure());
  }
}
