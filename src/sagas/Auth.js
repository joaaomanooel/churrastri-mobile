import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { t } from '@/i18n';
import { auth } from '@/services';
import * as AuthActions from '@/redux/Auth';
import * as UserActions from '@/redux/User';

export function* login({ payload }) {
  try {
    const userData = yield call(auth.login, payload);
    yield put(UserActions.setUser(userData));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    Alert.alert(t('error'), t('loginError'));
    yield put(AuthActions.loginFailure());
  }
}
