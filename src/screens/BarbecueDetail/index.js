import { connect } from 'react-redux';
import BarbecueDetail from './BarbecueDetail';

const mapStateToProps = state => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(BarbecueDetail);
