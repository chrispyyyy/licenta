import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { CreateMenuButton } from "../CreateMenuButton";
import { Col, Row } from "react-styled-flexboxgrid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "auto",
    marginTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  div: {
    display: "inline-flex"
  }
}));

export const Navigation = ({ logOut, loggedUser }) => {
  const classes = useStyles();
  const onLogOut = () => {
    logOut();
  };

  return (
    <Grid item xs={10} className={classes.grid}>
      <Paper className={classes.paper}>
        <Row>
          <Col lg={2}>SCRUMMER</Col>
          {loggedUser && (
            <div className={classes.div}>
                <Button style={{width:50}}>
              <Link
                href="/dashboard"
                style={{
                  fontSize: 13,
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginRight: 30
                }}
              >
                DASHBOARD
              </Link>
                </Button>
              <CreateMenuButton />
              <Col lgOffset={25} lg={10}>
                Hi, {loggedUser.firstName}
                <Button onClick={onLogOut}> Log out</Button>
              </Col>
            </div>
          )}
        </Row>
      </Paper>
    </Grid>
  );
};
