import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getDashboardAsync } from "../../actions/dashboardActions";
import { useEffect } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { TaskExpansionPanel } from "../../components/TaskExpansionPanel";
import {getUserAsync} from "../../actions/usersActions";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import get from "lodash/get";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles(theme => ({
  container: {
    width: 1200
  },
  tasksPaper: {
    color: theme.palette.text.secondary,
    display: "block",
    marginTop: 20

  },
  projectsPaper: {
    // padding: theme.spacing(20),
    color: theme.palette.text.secondary,
    display: "flex"
  },
  grid: {}
}));

export const DashboardPage = ({
  projects,
  tasks,
  isFetching,
  epics,
  userStories,
  sprints
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDashboardAsync());
  }, []);

  const classes = useStyles();
  return (
    <Grid>
      { isFetching &&
      <CircularProgress color="secondary"/>
      }
      { !isFetching &&
        <Row style={{ marginTop: 30 }}>
          <Col lg={6}>
            <h6>My projects</h6>
            <Paper className={classes.projectsPaper}>
              {projects.map(project => {
                return <ProjectCard projectName={project.name} />;
              })}
            </Paper>
            <Row style={{ marginTop: 30 }}>
              <Col lg={12}>
                <h6>Active Sprints</h6>
                <Paper className={classes.projectsPaper}>
                  { sprints.map(sprint =>
                    sprint.status === "ACTIVE" ? (
                        <TableContainer component={Paper}>
                          <Table aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell>User Story</TableCell>
                                <TableCell>Epic</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Assignee</TableCell>
                                <TableCell>Story Points</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {
                                sprint.userStories.map(userStory => {
                                  return (<TableRow>
                                    <TableCell>
                                      <Chip label={get(userStory, 'name', '')} color="primary" />
                                     </TableCell>
                                    <TableCell>
                                      <Chip label={get(userStory, 'epic.name', '')} color="secondary" />
                                    </TableCell>
                                    <TableCell>{userStory.status}</TableCell>
                                    <TableCell>{userStory.assignee.firstName + ' '+userStory.assignee.lastName}</TableCell>
                                    <TableCell>
                                      <Chip label={userStory.storyPoints ? userStory.storyPoints : 'not estimated'}/>
                                    </TableCell>
                                  </TableRow>)
                                })
                              }
                            </TableBody>
                          </Table>
                        </TableContainer>
                    ) : (
                      <div></div>
                    )
                  )}
                </Paper>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <h6>Assigned to me</h6>
            <h2 style={{marginTop:20}}>Epics</h2>
            <Paper className={classes.tasksPaper}>
              { epics.length > 0 && epics.map(epic => {
                return <TaskExpansionPanel epic={epic} />;
              })}
            </Paper>
            <h2 style={{marginTop:20}}>User stories</h2>
            <Paper className={classes.tasksPaper}>
              { userStories.length > 0 && userStories.map(userStory => {
                return <TaskExpansionPanel userStory={userStory} />;
              })}
            </Paper>
            <h2 style={{marginTop:20}}>Tasks</h2>
            <Paper className={classes.tasksPaper}>
              { tasks.length > 0 && tasks.map(task => {
                return <TaskExpansionPanel task={task} />;
              })}
            </Paper>
          </Col>
        </Row>
      }
    </Grid>
  );
};
