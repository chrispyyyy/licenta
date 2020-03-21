import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import {Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const Register = ({ registerUser, error }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [open, setOpen] = useState(false);

    const submit = () => {
        registerUser({firstName, lastName, email, password, role});
    };
    const handleChange = event => {
        setRole(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            { error.length &&
                <div className="row input">
                    <Alert severity="error" variant="outlined">{error}</Alert>
                </div>
            }
            <div className="row input">
            <TextField
                className="input"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                color="secondary"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            </div>
            <div className="row input">
            <TextField
                className="input"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                color="secondary"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            </div>
            <div className="row input">
            <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                color="secondary"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div className="row input">
            <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                color="secondary"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </div>
            <div className="row input select">
                <FormControl className="select">
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={role}
                onChange={handleChange}
            >
                <MenuItem value={'Dev Team Member'}>Dev Team Member</MenuItem>
                <MenuItem value={'Scrum Master'}>Scrum Master</MenuItem>
                <MenuItem value={'Product Owner'}>Product Owner</MenuItem>
            </Select>
                </FormControl>
            </div>
            <div className="row input">
            <Button variant="contained" color="secondary" onClick={submit} > Register </Button>
            <Button variant="contained" color="secondary" href='/login' > Login </Button>
            </div>
        </div>
    );

};