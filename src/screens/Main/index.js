import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => ({ user: state.user.data });

export default connect(mapStateToProps)(Main);
