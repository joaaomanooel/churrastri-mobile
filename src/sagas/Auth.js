import { call, put } from 'redux-saga/effects';
import { auth } from '@/services';
import * as AuthActions from '@/redux/Auth';
import * as UserActions from '@/redux/User';


export function* login({ payload: { onSuccess = () => { }, onError = () => { }, ...loginData } }) {
  try {
    const userData = yield call(auth.login, loginData);
    yield put(UserActions.setUser(userData));
    onSuccess();
  } catch (error) {
    yield put(AuthActions.loginFailure());
    onError();
  }
}
