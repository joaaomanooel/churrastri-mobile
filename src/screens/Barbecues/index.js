import { connect } from 'react-redux';
import * as BarbecuesActions from '@/redux/Barbecues';
import { selectors as FetchSelector } from '@/redux/Fetch';
import Barbecues from './Barbecues';

const mapStateToProps = state => ({
  loading: FetchSelector.getFetching('GET_BARBECUES', state),
  error: FetchSelector.getError('GET_BARBECUES', state),
  barbecues: state.barbecues.barbecues,
});

const mapDispatchToProps = dispatch => ({
  startup: dispatch(BarbecuesActions.getBarbecuesRequest()),
  getBarbecues: () => dispatch(BarbecuesActions.getBarbecuesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Barbecues);
