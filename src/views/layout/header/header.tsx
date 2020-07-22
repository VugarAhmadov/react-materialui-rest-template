import { ButtonBase, Grid, Hidden, Icon, IconButton, ListItemText, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { ReactComponent as LoginIcon } from 'assets/login-variant.svg';
import clsx from 'clsx';
import { logoBlue } from 'config';
import { useAuth } from 'context/AuthContext';
import { useNotifications } from 'context/NotificationsContext';
import { useSettings } from 'context/SettingsContext';
import browserHistory from 'lib/browser-history';
import React, { useState } from 'react';
import { useStyles } from './header.style';
import { ProfileMenu } from './profile-menu';

type HeaderProps = {
    handleDrawerOpen?: any;
    open?: boolean;
    variant?: string;
};

export const Header: React.FC<HeaderProps> = ({ handleDrawerOpen, open, variant }) => {
    const classes = useStyles();
    const { notify } = useNotifications();
    const { isDarkMode, toggleTheme } = useSettings();
    const [anchorEl, setAnchorEl] = useState(null);

    const { user, isLoggedIn, removeAuthData, openModal } = useAuth();

    const handleMenu = (event): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const logOut = (): void => {
        removeAuthData();

        notify({
            type: 'success',
            message: 'Logout successful!',
        });
    };
    return (
        <AppBar elevation={0} className={clsx(classes.appBar, open && variant !== 'temporary' && classes.appBarShift)}>
            <Grid container>
                <Grid item xs={7} sm={9}>
                    <Toolbar className={classes.toolbar}>
                        {handleDrawerOpen && (
                            <IconButton
                                edge="start"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                            >
                                <Icon>chevron_right</Icon>
                            </IconButton>
                        )}
                        <ButtonBase onClick={(): void => browserHistory.push({ pathname: '/' })} disableRipple>
                            <div className={classes.logoContainer}>
                                <img style={{ width: '100px' }} src={logoBlue} alt="{Yourdomain} logo" />
                            </div>
                        </ButtonBase>
                    </Toolbar>
                </Grid>
                <Grid item container justify="flex-end" alignItems="center" xs={5} sm={3}>
                    <Hidden smDown>
                        <IconButton edge="start" onClick={toggleTheme} className={classes.icon}>
                            <Icon>{isDarkMode ? 'brightness_4' : 'brightness_7'}</Icon>
                        </IconButton>

                        {!isLoggedIn && (
                            <IconButton
                                edge="start"
                                onClick={openModal}
                                style={{ marginRight: '20px', marginLeft: '10px' }}
                                className={classes.icon}
                            >
                                <LoginIcon width="26px" height="26px" />
                            </IconButton>
                        )}
                    </Hidden>

                    {isLoggedIn && <ProfileMenu user={user} logOut={logOut} />}

                    <Hidden mdUp>
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                className={classes.icon}
                            >
                                <Icon>menu</Icon>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={!!anchorEl}
                                onClose={handleClose}
                            >
                                {isLoggedIn || (
                                    <MenuItem
                                        onClick={(): void => {
                                            handleClose();
                                            openModal();
                                        }}
                                    >
                                        <ListItemText primary="Login" />
                                    </MenuItem>
                                )}
                                <MenuItem
                                    onClick={(): void => {
                                        handleClose();
                                        toggleTheme();
                                    }}
                                >
                                    <ListItemText primary="Toggle Theme" />
                                </MenuItem>
                            </Menu>
                        </div>
                    </Hidden>
                </Grid>
            </Grid>
        </AppBar>
    );
};
