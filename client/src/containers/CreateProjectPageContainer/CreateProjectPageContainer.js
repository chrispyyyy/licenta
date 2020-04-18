import { connect } from 'react-redux';
import { projectsSelector } from '../../selectors/projectsSelector';
import { tasksSelector } from '../../selectors/tasksSelector';
import { isFetchingSelector } from '../../selectors/isFetchingSelector';
import {CreateProjectPage} from "../../pages/CreateProjectPage/CreateProjectPage";

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({

});

export const CreateProjectPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateProjectPage);