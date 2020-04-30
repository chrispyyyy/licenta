import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import {Typography} from "@material-ui/core";

export const CreateProjectPage = ({ createProject, users }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [members, setMembers] = useState([]);
    const [open, setOpen] = useState(false);

    const submit = () => {
        const membersId = members.map(member => member._id);
        createProject({name, description, members: membersId})
    };


    const handleChange = (event) => {
        setMembers(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Grid>
            <Row style={{marginBottom:20, marginTop:20}}>
                <Col lg={5} lgOffset={4}>
                    <Typography variant='h3'>CREATE PROJECT</Typography>
                </Col>
            </Row>
            <Row  style={{marginBottom:20}}>
                <Col lg={4} lgOffset={4}>
                <TextField
                    className="input"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                </Col>
            </Row>
            <Row  style={{marginBottom:20}}>
                <Col lg={4} lgOffset={4}>
                <TextField
                    className="input"
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                </Col>
            </Row>
            <Row style={{marginBottom:20}}>
                <Col lg={4} lgOffset={3}>
                    Members:
                </Col>
            </Row>
            <Row  style={{marginBottom:20}}>
                <Col lg={4} lgOffset={4}>
                <Select
                    style={{width:300}}
                    labelId="demo-simple-select-label"
                    open={open}
                    multiple
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                    value={members}
                    renderValue={(selected) => (
                        <div>
                            { selected.map((value) => (
                                <Chip key={value} label={value.firstName + ' ' + value.lastName} />
                            ))}
                        </div>
                    )}
                >
                    { users.map(user =>
                        <MenuItem key={user._id} value={user}>{user.firstName+' '+user.lastName}</MenuItem>
                    )
                    }
                </Select>
                </Col>
            </Row>
            <Row  style={{marginBottom:20}}>
                <Col lg={4} lgOffset={4}>
                <Button variant="contained" color="secondary" onClick={submit} > Create  </Button>
                </Col>
            </Row>
        </Grid>
    );

};