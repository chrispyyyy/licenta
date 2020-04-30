import React, { useState } from "react";
import 'date-fns';
import get from 'lodash/get';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import { Typography } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Chip from "@material-ui/core/Chip";

export const CreateSprintPage = ({
  createSprint,
  projects
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [project, setProject] = useState("");
  const [userStories, setUserStories] = useState([]);
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isUserStoriesOpen, setIsUserStoriesOpen] = useState(false);

  const epics = get(project, 'epics', []);
  console.log('epics', epics);
  const submit = () => {
    const userStoriesIds = userStories.map(userStory => userStory._id);
    createSprint({
      name,
      description,
      goal,
      project: project._id,
      startDate,
      endDate,
      userStories: userStoriesIds,
    });
  };


  const handleUserStoriesChange = event => {
    setUserStories(event.target.value);
  };
  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const handleEndDateChange = date => {
    setEndDate(date);
  };
  const handleProjectChange = event => {
    setProject(event.target.value);
  };

  const handleProjectClose = () => {
    setIsProjectOpen(false);
  };

  const handleProjectOpen = () => {
    setIsProjectOpen(true);
  };
  const handleUserStoriesClose = () => {
    setIsUserStoriesOpen(false);
  };

  const handleUserStoriesOpen = () => {
    setIsUserStoriesOpen(true);
  };

  return (
    <Grid>
      <Row style={{ marginBottom: 20, marginTop: 20 }}>
        <Col lg={4} lgOffset={4}>
          <Typography variant="h3">CREATE SPRINT</Typography>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={4}>
          <TextField
            className="input"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            color="secondary"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={4}>
          <TextField
            className="input"
            id="outlined-basic"
            label="Description"
            variant="outlined"
            color="secondary"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={4}>
          <TextField
            className="input"
            id="outlined-basic"
            label="Goal"
            variant="outlined"
            color="secondary"
            onChange={e => setGoal(e.target.value)}
            value={goal}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={3}>
          Project
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={4}>
          <Select
              style={{ width: 300 }}
              labelId="demo-simple-select-label"
              open={isProjectOpen}
              onClose={handleProjectClose}
              onOpen={handleProjectOpen}
              onChange={handleProjectChange}
              value={project}
          >
            {projects.map(project => (
                <MenuItem key={project._id} value={project}>
                  {project.name}
                </MenuItem>
            ))}
          </Select>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={3}>
          User Story
        </Col>
      </Row>
      <Row  style={{marginBottom:20}}>
        <Col lg={4} lgOffset={4}>
          <Select
              style={{width:300}}
              labelId="demo-simple-select-label"
              open={isUserStoriesOpen}
              multiple
              onClose={handleUserStoriesClose}
              onOpen={handleUserStoriesOpen}
              onChange={handleUserStoriesChange}
              value={userStories}
              renderValue={(selected) => (
                  <div>
                    { selected.map((value) => (
                        <Chip key={value} label={value.name} />
                    ))}
                  </div>
              )}
          >
            {
              epics && epics.map(epic => epic.userStories.map(userStory => (
                      <MenuItem key={userStory._id} value={userStory}>
                        {userStory.name}
                      </MenuItem>
                  )
              ))}
            }
          </Select>
        </Col>
      </Row>
      <Row>
        <Col lg={4} lgOffset={4}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{width:300}}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start date"
                value={startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
        </Col>
      </Row>
      <Row>
        <Col lg={4} lgOffset={4}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{width:300}}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="End date"
                value={endDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={4}>
          <Button variant="contained" color="secondary" onClick={submit}>
            {" "}
            Create{" "}
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};
