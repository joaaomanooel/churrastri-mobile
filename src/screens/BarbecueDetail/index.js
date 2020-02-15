import { connect } from 'react-redux';
import * as BarbecuesActions from '@/redux/Barbecues';
import * as UserActions from '@/redux/User';
import { selectors as FetchSelector } from '@/redux/Fetch';
import BarbecueDetail from './BarbecueDetail';

const mapStateToProps = state => ({
  loading: FetchSelector.getFetching('ADD_BARBECUES', state),
  error: FetchSelector.getError('ADD_BARBECUES', state),
  barbecues: state.barbecues.barbecues,
  users: state.user.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: dispatch(UserActions.findUsersRequest()),
  addBarbecues: data => dispatch(BarbecuesActions.addBarbecuesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarbecueDetail);
