import { connect } from 'react-redux';
import {CreateEpicPage} from "../../pages/CreateEpicPage";
import {postEpicAsync} from "../../actions/epicActions";
import {usersSelector} from "../../selectors/usersSelector";
import {loggedUserSelector} from "../../selectors/loggedUserSelector";
import {projectsSelector} from "../../selectors/projectsSelector";

const mapStateToProps = state => ({
    users: usersSelector(state),
    loggedUser: loggedUserSelector(state),
    projects: projectsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    createEpic: dispatch(postEpicAsync),
});

export const CreateEpicPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateEpicPage);