import * as React from "react";
import get from "lodash/get";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import { EditUserStoryModal } from "../../components/EditUserStoryModal";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "auto",
    marginTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    width: 1150
  },
  div: {
    display: "inline-flex"
  }
}));

export const ProjectOverviewPage = ({
  project,
  updateSprint,
  updateUserStory,
  users,
  loggedUser
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentUserStory, setCurrentUserStory] = React.useState({});
  const [members, setMembers] = React.useState([]);
  const [isMembersOpen, setIsMembersOpen] = React.useState(false);
  const handleMembersClose = () => {
    setIsMembersOpen(false);
  };

  const handleMembersOpen = () => {
    setIsMembersOpen(true);
  };

  const handleChange = event => {
    setMembers(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = userStory => {
    setCurrentUserStory(userStory);
    setOpen(true);
  };

  return (
    <Grid>
      <EditUserStoryModal
        handleClose={handleClose}
        open={open}
        userStory={currentUserStory}
        project={project}
        updateUserStory={updateUserStory}
      />
      <Row style={{ marginTop: 30 }}>
        <Col lg={3}>
          <h2>Project: {project.name}</h2>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Paper className={classes.paper}>
          <Col lg={10}>
            <Row>
              <h6>Members:</h6>
            </Row>

            {project.members.map(member => (
              <Row>
                {" "}
                {member.firstName +
                  " " +
                  member.lastName +
                  " - " +
                  member.role}{" "}
              </Row>
            ))}
          </Col>
          {loggedUser && loggedUser.role === "PRODUCT_OWNER" && (
          <Row style={{ marginTop: 30 }}>
            <Col>
              <Select
                variant="outlined"
                style={{ width: 300 }}
                labelId="demo-simple-select-label"
                open={isMembersOpen}
                multiple
                rows={4}
                onClose={handleMembersClose}
                onOpen={handleMembersOpen}
                onChange={handleChange}
                value={members}
                renderValue={selected => (
                  <div>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value.firstName + " " + value.lastName}
                      />
                    ))}
                  </div>
                )}
              >
                {users.map(user => (
                  <MenuItem key={user._id} value={user}>
                    {user.firstName + " " + user.lastName}
                  </MenuItem>
                ))}
              </Select>
            </Col>
              <Button color="primary" variant="contained">
                {" "}
                Add members
              </Button>
          </Row>
          )}
        </Paper>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col lg={2}>
          <h4>Sprints</h4>
        </Col>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <Col lg={2}>
          <h6 style={{color:'green'}}>Active sprints</h6>
        </Col>
      </Row>
      {project.sprints &&
        project.sprints.map(sprint => {
          if (sprint.status === "ACTIVE")
            return (
              <Grid>
                <Row style={{ marginTop: 30 }}>
                  <Col lg={12}>
                    <h6>
                      <Row>
                        {sprint.name} - {sprint.status}
                      </Row>
                      <Row>Start date: {sprint.startDate.split("T")[0]}</Row>
                      <Row>End date: {sprint.endDate.split("T")[0]}</Row>
                    </h6>
                  </Col>
                  {sprint.status === "ACTIVE" && loggedUser.role === 'SCRUM_MASTER' && (
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() =>
                        updateSprint({ ...sprint, status: "FINISHED" })
                      }
                    >
                      Finish sprint
                    </Button>
                  )}
                </Row>
                <Row style={{ marginTop: 30 }}>
                  <Col lg={12}>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>User Story</TableCell>
                            <TableCell>Epic</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Assignee</TableCell>
                            <TableCell>Story Points</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sprint.userStories.map(userStory => {
                            return (
                              <TableRow>
                                <TableCell>
                                  <Button>
                                    <Chip
                                      label={get(userStory, "name", "")}
                                      color="primary"
                                    />
                                  </Button>
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={get(userStory, "epic.name", "")}
                                    color="secondary"
                                  />
                                </TableCell>
                                <TableCell>{userStory.priority}</TableCell>
                                <TableCell>{userStory.status}</TableCell>
                                <TableCell>
                                  {userStory.assignee.firstName +
                                    " " +
                                    userStory.assignee.lastName}
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={
                                      userStory.storyPoints
                                        ? userStory.storyPoints
                                        : "not estimated"
                                    }
                                  />
                                </TableCell>
                                <TableCell>
                                  <Button
                                    onClick={() =>
                                      console.log(userStory) ||
                                      handleOpen(userStory)
                                    }
                                  >
                                    <EditIcon />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Col>
                </Row>
              </Grid>
            );
        })}
      <Row style={{ marginTop: 30 }}>
        <Col lg={2}>
          <h6 style={{color:'blue'}}>Inactive sprints</h6>
        </Col>
      </Row>
      {project.sprints &&
        project.sprints.map(sprint => {
          if (sprint.status === "INACTIVE")
            return (
              <Grid>
                <Row style={{ marginTop: 30 }}>
                  <Col lg={12}>
                    <h6>
                      <Row>
                        {sprint.name} - {sprint.status}
                      </Row>
                      <Row>Start date: {sprint.startDate.split("T")[0]}</Row>
                      <Row>End date: {sprint.endDate.split("T")[0]}</Row>
                    </h6>
                  </Col>
                  {sprint.status === "INACTIVE" && loggedUser.role === 'SCRUM_MASTER' &&(
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() =>
                        updateSprint({ ...sprint, status: "ACTIVE" })
                      }
                    >
                      Start sprint
                    </Button>
                  )}
                </Row>
                <Row style={{ marginTop: 30 }}>
                  <Col lg={12}>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>User Story</TableCell>
                            <TableCell>Epic</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Assignee</TableCell>
                            <TableCell>Story Points</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sprint.userStories.map(userStory => {
                            return (
                              <TableRow>
                                <TableCell>
                                  <Chip
                                    label={get(userStory, "name", "")}
                                    color="primary"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={get(userStory, "epic.name", "")}
                                    color="secondary"
                                  />
                                </TableCell>
                                <TableCell>{userStory.priority}</TableCell>
                                <TableCell>{userStory.status}</TableCell>
                                <TableCell>
                                  {userStory.assignee.firstName +
                                    " " +
                                    userStory.assignee.lastName}
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={
                                      userStory.storyPoints
                                        ? userStory.storyPoints
                                        : "not estimated"
                                    }
                                  />
                                </TableCell>
                                <TableCell>
                                  <Button onClick={() => handleOpen(userStory)}>
                                    <EditIcon />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Col>
                </Row>
              </Grid>
            );
        })}
      <Row style={{ marginTop: 30 }}>
        <Col lg={2}>
          <h6 style={{color:'red'}}>Finished sprints</h6>
        </Col>
      </Row>
      {project.sprints &&
        project.sprints.map(sprint => {
          if (sprint.status === "FINISHED")
            return (
              <Grid>
                <Row style={{ marginTop: 30 }}>
                  <Col lg={12}>
                    <h6>
                      <Row>
                        {sprint.name} - {sprint.status}
                      </Row>
                      <Row>Start date: {sprint.startDate.split("T")[0]}</Row>
                      <Row>End date: {sprint.endDate.split("T")[0]}</Row>
                    </h6>
                  </Col>
                </Row>
                <Row style={{ marginTop: 30 }}>
                  <Col lg={12}>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>User Story</TableCell>
                            <TableCell>Epic</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Assignee</TableCell>
                            <TableCell>Story Points</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {sprint.userStories.map(userStory => {
                            return (
                              <TableRow>
                                <TableCell>
                                  <Chip
                                    label={get(userStory, "name", "")}
                                    color="primary"
                                  />
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={get(userStory, "epic.name", "")}
                                    color="secondary"
                                  />
                                </TableCell>
                                <TableCell>{userStory.priority}</TableCell>
                                <TableCell>{userStory.status}</TableCell>
                                <TableCell>
                                  {userStory.assignee.firstName +
                                    " " +
                                    userStory.assignee.lastName}
                                </TableCell>
                                <TableCell>
                                  <Chip
                                    label={
                                      userStory.storyPoints
                                        ? userStory.storyPoints
                                        : "not estimated"
                                    }
                                  />
                                </TableCell>
                                <TableCell>
                                  <Button onClick={() => handleOpen(userStory)}>
                                    <EditIcon />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Col>
                </Row>
              </Grid>
            );
        })}
    </Grid>
  );
};
