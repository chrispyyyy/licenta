import React, {useEffect, useState} from "react";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Alert from '@material-ui/lab/Alert';
import {useDispatch} from "react-redux";
import {getUsersAsync} from "../../actions/usersActions";

export const CreateProjectPage = ({ createProject, error }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [members, setMembers] = useState([]);
    const [projectLead, setProjectLead] = useState('');

    const submit = () => {
        createProject({name, type, members, projectLead});
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsersAsync());
    }, []);
    return (
        <div>
            Create New Project
            <div className="row input">
                <TextField
                    className="input"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div className="row input">
                <TextField
                    className="input"
                    id="outlined-basic"
                    label="Type"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                />
            </div>
            <div className="row input">
                <TextField
                    className="input"
                    id="outlined-basic"
                    label="Members"
                    variant="outlined"
                    color="secondary"
                    onChange={(e) => setMembers(e.target.value)}
                    value={members}
                />
            </div>
            <div className="row input">
                <Button variant="contained" color="secondary" onClick={submit} > Create  </Button>
            </div>
        </div>
    );

};