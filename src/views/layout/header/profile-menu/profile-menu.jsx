import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { Typography, Avatar, IconButton, Icon } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import browserHistory from 'lib/browser-history';
import { useStyle } from './profile-menu.style';

export const ProfileMenu = ({ user, logOut }) => {
    const classes = useStyle();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{ position: 'relative' }}>
            <IconButton edge="start" onClick={(event) => handleClick(event)} className={classes.toggleButton}>
                <Icon>person</Icon>
            </IconButton>
            <Popover
                className={classes.popover}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className={classes.userStatus}>
                    <div className={classes.userDetails}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={classes.userAvatar}>
                                <Avatar className={classes.avatar} />
                            </div>
                            <div className={classes.userName}>
                                {`${user.firstName} ${user.lastName}`}
                                <span>{user.role}</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.userMenu}>
                        <Button
                            onClick={() => {
                                browserHistory.push('/dashboard');
                            }}
                            className={classes.userMenuItem}
                        >
                            <DashboardOutlinedIcon style={{ fontSize: '16px' }} />
                            <Typography variant="caption" className={classes.userMenuItemText}>
                                Dashboard
                            </Typography>
                        </Button>
                        <Button onClick={() => logOut()} disableTouchRipple className={classes.userMenuItem}>
                            <PowerSettingsNewOutlinedIcon style={{ fontSize: '16px' }} />
                            <Typography variant="subtitle1" className={classes.userMenuItemText}>
                                Logout
                            </Typography>
                        </Button>
                    </div>
                </div>
            </Popover>
        </div>
    );
};
