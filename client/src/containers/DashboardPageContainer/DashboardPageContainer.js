import { connect } from 'react-redux';
import {DashboardPage} from "../../pages/DashboardPage";
import { projectsSelector } from '../../selectors/projectsSelector';
import { tasksSelector } from '../../selectors/tasksSelector';
import { epicsSelector } from '../../selectors/epicsSelector';
import { userStoriesSelector } from '../../selectors/userStoriesSelector';
import { isFetchingSelector } from '../../selectors/isFetchingSelector';
import { filterTasksByCurrentUser } from '../../helpers/filterTasksByCurrentUser';

const mapStateToProps = state => ({
    projects: projectsSelector(state),
    tasks: tasksSelector(state),
    epics: epicsSelector(state),
    userStories: userStoriesSelector(state),
    isFetching: isFetchingSelector(state),
    filteredTasks: filterTasksByCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export const DashboardPageContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);