import { connect } from 'react-redux';
import { Register } from '../../components/Register';
import { postData } from '../../helpers/postData';
import { userErrorSelector } from '../../selectors/userErrorSelector';
import { browserHistory } from 'react-router';

const mapStateToProps = state => ({
    error: userErrorSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    registerUser: dispatch(registerUserAction),
});

export const registerUserAction = (dispatch) => async (payload) => {

    const response = await postData('http://localhost:4000/register', {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        role: payload.role,
    });
    console.log(response);
    const error = response.message;
    if ( response.code === 201 ) {
        dispatch({type: 'REGISTER_USER', payload});
        dispatch({type: 'REGISTRATION_SUCCESSFUL', payload: error});
        browserHistory.push('/dashboard');
    }
    if ( response.code === 409 )
        dispatch({type: 'REGISTER_USER_FAILED', payload: error});
    if ( response.code === 500 )
        dispatch({type: 'REGISTER_USER_FAILED', payload: error});

};


export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);