import { connect } from 'react-redux';
import {DashboardPage} from "../../pages/DashboardPage";
import { projectsSelector } from '../../selectors/projectsSelector';
import { tasksSelector } from '../../selectors/tasksSelector';
import { isFetchingSelector } from '../../selectors/isFetchingSelector';
import { filterTasksByCurrentUser } from '../../helpers/filterTasksByCurrentUser';

const mapStateToProps = state => ({
    projects: projectsSelector(state),
    tasks: tasksSelector(state),
    isFetching: isFetchingSelector(state),
    filteredTasks: filterTasksByCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
});

export const DashboardPageContainer = connect(mapStateToProps, mapDispatchToProps)(DashboardPage);