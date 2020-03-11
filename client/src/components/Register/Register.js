import React, { useState } from "react";
import Button from '@material-ui/core/Button';

export const Register = ({ registerUser }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    console.log(firstName);

    const submit = () => {
        registerUser({firstName, lastName, email});
    };
    return (
        <div>
            <input onChange={(e) => setFirstName(e.target.value)}
                   value={firstName} />
            <Button variant="contained" color="secondary" onClick={submit} > Haha </Button>
        </div>
    );

};