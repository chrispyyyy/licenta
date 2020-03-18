import { connect } from 'react-redux';
import { Login } from '../../components/Login';
import { postData } from '../../helpers/postData';
import { userErrorSelector } from '../../selectors/userErrorSelector';
import {browserHistory} from "react-router";

const mapStateToProps = state => ({
    error: userErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: dispatch(loginUserAction),
});

export const loginUserAction = (dispatch) => async (payload) => {

    const response = await postData('http://localhost:4000/login', {
        email: payload.email,
        password: payload.password
    });
    console.log(payload);
    const error = response.message;
    if ( response.code === 200 )
        dispatch({type: 'LOG_IN_USER', payload});
        // dispatch({type: 'LOG_IN_SUCCESSFUL', payload: error});
        browserHistory.push('/dashboard');
    if ( response.code === 404 || response.code === 400 || payload.email === '' )
        dispatch({type: 'LOG_IN_USER_FAILED', payload: error});

};


export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);