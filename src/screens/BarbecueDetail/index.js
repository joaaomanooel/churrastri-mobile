import { connect } from 'react-redux';
import * as BarbecuesActions from '@/redux/Barbecues';
import BarbecueDetail from './BarbecueDetail';

const mapStateToProps = state => ({
  user: state.user.data,
});

const mapDispatchToProps = dispatch => ({
  updateBarbecues: data => dispatch(BarbecuesActions.updateBarbecuesRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BarbecueDetail);
