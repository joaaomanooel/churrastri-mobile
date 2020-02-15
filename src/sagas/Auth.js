import { call, put } from 'redux-saga/effects';
import { auth } from '@/services';
import * as AuthActions from '@/redux/Auth';
import * as UserActions from '@/redux/User';


export function* login({ payload }) {
  try {
    const userData = yield call(auth.login, payload);
    yield put(UserActions.setUser(userData));
    yield put(AuthActions.loginSuccess());
  } catch (error) {
    console.log(error);
    yield put(AuthActions.loginFailure());
  }
}
