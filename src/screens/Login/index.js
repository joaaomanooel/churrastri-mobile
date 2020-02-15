import { connect } from 'react-redux';
import * as AuthActions from '@/redux/Auth';
import { selectors as FetchSelector } from '@/redux/Fetch';
import Login from './Login';

const mapStateToProps = state => ({
  loading: FetchSelector.getFetching('LOGIN', state),
  error: FetchSelector.getError('LOGIN', state),
  user: state.user.data,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(AuthActions.loginRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
