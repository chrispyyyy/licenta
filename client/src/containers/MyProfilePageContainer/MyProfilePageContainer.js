import { connect } from 'react-redux';
import {MyProfilePage} from "../../pages/MyProfilePage/MyProfilePage";
import {loggedUserSelector} from "../../selectors/loggedUserSelector";

const mapStateToProps = state => ({
    loggedUser: loggedUserSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export const MyProfilePageContainer = connect(mapStateToProps, mapDispatchToProps)(MyProfilePage);