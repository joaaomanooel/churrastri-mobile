import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { t } from '@/i18n';
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

export function* insert({ payload }) {
  try {
    yield call(barbecues.insert, payload);
    yield put(BarbecuesActions.addBarbecuesSuccess());
  } catch (error) {
    Alert.alert(t('error'), t('addBarbecueError'));
    yield put(BarbecuesActions.addBarbecuesFailure());
  }
}
