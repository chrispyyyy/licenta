import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { getDashboardAsync } from "../../actions/dashboardActions";
import { useEffect } from "react";
import { ProjectCard } from "../../components/ProjectCard";
import { TaskExpansionPanel } from "../../components/TaskExpansionPanel";

const useStyles = makeStyles(theme => ({
  container: {
    width: 1200
  },
  tasksPaper: {
    // padding: theme.spacing(20),
    color: theme.palette.text.secondary,
    display: 'block',
  },
  projectsPaper: {
    // padding: theme.spacing(20),
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  grid: {

  }
}));

export const DashboardPage = ({ projects, tasks, isFetching, filteredTasks }) => {
  const dispatch = useDispatch();
  console.log('pr', filteredTasks);
  useEffect(() => {
    dispatch(getDashboardAsync());
  }, []);

  const classes = useStyles();
  return (
      <Container className={classes.container}>
      { isFetching ? <CircularProgress color="secondary" /> :
       <Grid container spacing={3}>
              <Grid item xs={6} className={classes.grid} >
              <Paper className={classes.projectsPaper}>
            { projects.map(project => {
              return (
              <ProjectCard
              projectName={project.name}
              projectDescription={project.type}
              />
              );
            })}
              </Paper>
              </Grid>
              <Grid item xs={6}>
              <Paper className={classes.tasksPaper}>
                My Tasks
              { filteredTasks.map(task => {
              return (
              <TaskExpansionPanel task={task} />
              );
              })}
              </Paper>
              </Grid>
              <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
              </Grid>
              </Grid>

      }


      </Container>


  );
};
