import React, {useEffect, useState} from "react";
import get from "lodash/get";
import pickBy from "lodash/pickBy";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 1000,
    height: 650,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export const EditUserStoryModal = ({
  handleClose,
  open,
  userStory,
  project,
  updateUserStory
}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
useEffect(() => {
  setName(userStory.name);
}, []);
  const [name, setName] = React.useState('');
  const [isAssigneeOpen, setIsAssigneeOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [isStoryPointsOpen, setIsStoryPointsOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [storyPoints, setStoryPoints] = useState("");

  const resetValues = () => {
    setName('');
    setAssignee('');
    setDescription('');
    setPriority('');
    setStatus('');
    setStoryPoints('');
  };
  const handleAssigneeChange = event => {
    setAssignee(event.target.value);
  };
  const handlePriorityChange = event => {
    setPriority(event.target.value);
  };
  const handleStatusChange = event => {
    setStatus(event.target.value);
  };
  const handleStoryPointsChange = event => {
    setStoryPoints(event.target.value);
  };
  const handleAssigneeClose = () => {
    setIsAssigneeOpen(false);
  };

  const handleAssigneeOpen = () => {
    setIsAssigneeOpen(true);
  };
  const handlePriorityClose = () => {
    setIsPriorityOpen(false);
  };

  const handlePriorityOpen = () => {
    setIsPriorityOpen(true);
  };
  const handleStatusClose = () => {
    setIsStatusOpen(false);
  };

  const handleStatusOpen = () => {
    setIsStatusOpen(true);
  };
  const handleStoryPointsClose = () => {
    setIsStoryPointsOpen(false);
  };

  const handleStoryPointsOpen = () => {
    setIsStoryPointsOpen(true);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={4} lgOffset={3}>
          <h6 style={{ marginTop: 15 }}>Actual</h6>
        </Col>
        <Col lg={4}>
          <h6 style={{ marginTop: 15 }}>New</h6>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={1}>
          <h6 style={{ marginTop: 15 }}>Name: </h6>
        </Col>
        <Col lg={4}>
          <TextField
            disabled
            label="Name"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            value={userStory.name}
          />
        </Col>
        <Col lg={4}>
          <TextField
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={1}>
          <h6 style={{ marginTop: 15 }}>Assignee:</h6>
        </Col>
        <Col lg={4}>
          <TextField
            disabled
            label="Assignee"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            value={
              get(userStory, "assignee.firstName", "") +
              " " +
              get(userStory, "assignee.lastName", "")
            }
          />
        </Col>
        <Col lg={4}>
          <Select
            label="Assignee"
            variant="outlined"
            style={{ width: 300 }}
            labelId="demo-simple-select-label"
            open={isAssigneeOpen}
            onClose={handleAssigneeClose}
            onOpen={handleAssigneeOpen}
            onChange={handleAssigneeChange}
            value={assignee}
          >
            {project &&
              project.members.map(user => (
                <MenuItem key={user._id} value={user}>
                  {user.firstName + " " + user.lastName}
                </MenuItem>
              ))}
            {project.members === undefined && (
              <MenuItem disabled>No members available</MenuItem>
            )}
          </Select>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={1}>
          <h6 style={{ marginTop: 15 }}>Description:</h6>
        </Col>
        <Col lg={4}>
          <TextField
            multiline
            rows={3}
            disabled
            label="Description"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            value={get(userStory, "description", "")}
          />
        </Col>
        <Col lg={4}>
          <TextField
            multiline
            rows="3"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={1}>
          <h6 style={{ marginTop: 15 }}>Priority:</h6>
        </Col>
        <Col lg={4}>
          <TextField
            disabled
            label="Priority"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            value={get(userStory, "priority", "")}
          />
        </Col>
        <Col lg={4}>
          <Select
            variant="outlined"
            style={{ width: 300 }}
            labelId="demo-simple-select-label"
            open={isPriorityOpen}
            onClose={handlePriorityClose}
            onOpen={handlePriorityOpen}
            value={priority}
            onChange={handlePriorityChange}
          >
            <MenuItem value={"LOW"}>Low</MenuItem>
            <MenuItem value={"MEDIUM"}>Medium</MenuItem>
            <MenuItem value={"HIGH"}>High</MenuItem>
          </Select>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={1}>
          <h6 style={{ marginTop: 15 }}>Status:</h6>
        </Col>
        <Col lg={4}>
          <TextField
            disabled
            label="Status"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            value={get(userStory, "status", "")}
          />
        </Col>
        <Col lg={4}>
          <Select
            variant="outlined"
            style={{ width: 300 }}
            labelId="demo-simple-select-label"
            open={isStatusOpen}
            onClose={handleStatusClose}
            onOpen={handleStatusOpen}
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value={"TO_DO"}>TO DO</MenuItem>
            <MenuItem value={"IN_ANALYSIS"}>IN ANALYSIS</MenuItem>
            <MenuItem value={"READY_FOR_DEVELOPMENT"}>
              READY FOR DEVELOPMENT
            </MenuItem>
            <MenuItem value={"IN_DEVELOPMENT"}>IN DEVELOPMENT</MenuItem>
            <MenuItem value={"READY_FOR_TESTING"}>READY FOR TESTING</MenuItem>
            <MenuItem value={"IN_TESTING"}>IN TESTING</MenuItem>
            <MenuItem value={"DONE"}>DONE</MenuItem>
          </Select>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={1}>
          <h6 style={{ marginTop: 15 }}>Story points:</h6>
        </Col>
        <Col lg={4}>
          <TextField
            disabled
            label="Story points"
            className="input"
            id="outlined-basic"
            variant="outlined"
            color="secondary"
            value={get(userStory, "storyPoints", "not estimated")}
          />
        </Col>
        <Col lg={4}>
          <Select
            variant="outlined"
            style={{ width: 300 }}
            labelId="demo-simple-select-label"
            open={isStoryPointsOpen}
            onClose={handleStoryPointsClose}
            onOpen={handleStoryPointsOpen}
            value={storyPoints}
            onChange={handleStoryPointsChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={21}>21</MenuItem>
            <MenuItem value={34}>34</MenuItem>
            <MenuItem value={55}>55</MenuItem>
            <MenuItem value={89}>89</MenuItem>
          </Select>
        </Col>
      </Row>
      <Row style={{ marginBottom: 20 }}>
        <Col lg={2} lgOffset={6}>
          <Button
            style={{ width: 100 }}
            onClick={() => {
              updateUserStory(pickBy({_id: userStory._id, name, assignee, description, priority, status, storyPoints }));
              resetValues();
              handleClose();
            }}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
