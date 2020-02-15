import { all, takeLatest } from 'redux-saga/effects';

/* ------------- Types ------------- */
// import * as UserActions from '@/redux/User';
import * as AuthActions from '@/redux/Auth';
import * as BarbecuesActions from '@/redux/Barbecues';

/* ------------- Sagas ------------- */
// import * as UserSagas from './User';
import * as AuthSagas from './Auth';
import * as BarbecuesSagas from './Barbecues';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    // AUTH
    takeLatest(AuthActions.loginRequest().type, AuthSagas.login),

    // BARBECUES
    takeLatest(BarbecuesActions.getBarbecuesRequest().type, BarbecuesSagas.getAll),

    // USER
  ]);
}
