import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Navigation } from "../../components/Navigation";
import Container from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { getProjectsAsync } from "../../actions/dashboardActions";
import { useEffect } from "react";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(20),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const DashboardPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjectsAsync())
    }, []);

    const classes = useStyles();
    return (
        <Container maxWidth="sm" fixed>
        <Grid container spacing={3}>
            <Navigation/>
            <Grid item xs={6}>
                <Paper>
                    Projects
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>My Tasks
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
        </Container>
    )
};