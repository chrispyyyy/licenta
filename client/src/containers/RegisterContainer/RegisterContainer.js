import { connect } from 'react-redux';
import { Register } from '../../components/Register';
import { userErrorSelector } from '../../selectors/userErrorSelector';
import {postRegisterAsync} from "../../actions/registerActions";

const mapStateToProps = state => ({
    error: userErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    registerUser: dispatch(postRegisterAsync),
});

export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);