import { connect } from 'react-redux';
import { projectsSelector } from '../../selectors/projectsSelector';
import { isFetchingSelector } from '../../selectors/isFetchingSelector';
import { filterEpicsByCurrentUser } from '../../helpers/filterEpicsByCurrentUser';
import {filterUserStoriesByCurrentUser} from "../../helpers/filterUserStoriesByCurrentUser";
import {filterTasksByCurrentUser} from "../../helpers/filterTasksByCurrentUser";
import {ProjectOverviewPage} from "../../pages/ProjectOverviewPage";

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => ({
});

export const ProjectOverviewPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectOverviewPage);