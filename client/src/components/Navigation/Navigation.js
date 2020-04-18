import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {CreateMenuButton} from "../CreateMenuButton";

const useStyles = makeStyles(theme => ({
    grid: {
        margin: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    div: {
        display: 'inline-flex'
    }
}));

export const Navigation = ({ logOut, loggedUser }) => {
    console.log('gg',loggedUser);
    const classes = useStyles();
    return (
            <Grid item xs={10} className={classes.grid}>
                <Paper className={classes.paper}>
                    { loggedUser &&
                        <div className={classes.div}>
                            <CreateMenuButton/>
                        <Button href='/logout' onClick={logOut}> Log out</Button>
                            Hi, {loggedUser.firstName}
                        </div>

                    }
                </Paper>
            </Grid>
    );
};