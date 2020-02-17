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
    yield put(BarbecuesActions.getBarbecuesRequest());
  } catch (error) {
    Alert.alert(t('error'), t('addBarbecueError'));
    yield put(BarbecuesActions.addBarbecuesFailure());
  }
}

export function* update({ payload }) {
  try {
    yield call(barbecues.update, payload);
    yield put(BarbecuesActions.updateBarbecuesSuccess());
    yield put(BarbecuesActions.getBarbecuesRequest());
  } catch (error) {
    Alert.alert(t('error'), t('updateBarbecueError'));
    yield put(BarbecuesActions.updateBarbecuesFailure());
  }
}

export function* remove({ payload }) {
  try {
    yield call(barbecues.remove, payload);
    yield put(BarbecuesActions.removeBarbecuesSuccess());
    yield put(BarbecuesActions.getBarbecuesRequest());
  } catch (error) {
    Alert.alert(t('error'), t('removeBarbecueError'));
    yield put(BarbecuesActions.removeBarbecuesFailure());
  }
}
