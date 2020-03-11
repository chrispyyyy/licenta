import { connect } from 'react-redux';
import { Register } from '../../components/Register';
import { postData } from "../../components/Login/Login";

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
    registerUser: dispatch(registerUserAction),
});

export const registerUserAction = (dispatch) => async (payload) => {

    const response = await postData('http://localhost:3000/api/user', {
        first_name: payload.firstName,
        last_name: "sirb",
        email: "uuuu@yahoo.com",
        password: "xxx"
    });
    console.log(response);

    if ( response.code === 201 )
        dispatch({type: 'REGISTER_USER', payload});

};


export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);