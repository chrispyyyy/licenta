import { connect } from 'react-redux';
import {CreateProjectPage} from "../../pages/CreateProjectPage/CreateProjectPage";
import {postProjectAsync} from "../../actions/projectActions";
import {usersSelector} from "../../selectors/usersSelector";

const mapStateToProps = state => ({
    users: usersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createProject: dispatch(postProjectAsync),
});

export const CreateProjectPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProjectPage);