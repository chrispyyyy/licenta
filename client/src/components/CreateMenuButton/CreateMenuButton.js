import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const CreateMenuButton= () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                CREATE
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem><Button href='/create-project'> Project </Button></MenuItem>
                <MenuItem><Button href='/create-sprint'> Sprint </Button></MenuItem>
                <MenuItem><Button href='/create-epic'> Epic </Button></MenuItem>
                <MenuItem><Button href='/create-user-story'> User Story </Button></MenuItem>
                <MenuItem><Button href='/create-task'> Task </Button></MenuItem>
            </Menu>
        </div>
    );
};
