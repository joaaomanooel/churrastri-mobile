import { all, takeLatest } from 'redux-saga/effects';

/* ------------- Types ------------- */
import * as UserActions from '@/redux/User';
import * as AuthActions from '@/redux/Auth';


/* ------------- Sagas ------------- */
import * as UserSagas from './User';
import * as AuthSagas from './Auth';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // USER
    takeLatest(),

    // AUTH
  ]);
}
