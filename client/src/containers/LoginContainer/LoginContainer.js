import { connect } from 'react-redux';
import { Login } from '../../components/Login';
import { userErrorSelector } from '../../selectors/userErrorSelector';
import {postLoginAsync} from "../../actions/loginActions";

const mapStateToProps = state => ({
    error: userErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: dispatch(postLoginAsync),
});

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);