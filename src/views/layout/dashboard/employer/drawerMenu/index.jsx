import React from 'react';
import { Drawer, IconButton, Icon, Divider, List } from '@material-ui/core';
import clsx from 'clsx';
import { MainListItems, secondaryListItems } from './listitems';
import { useStyles } from './drawerMenu.style';

export const DrawerMenu = ({ open, handleDrawerClose, variant }) => {
    const classes = useStyles();
    return (
        <Drawer
            variant={variant}
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            onClose={handleDrawerClose}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <Icon>chevron_left</Icon>
                </IconButton>
            </div>
            <Divider />
            <MainListItems />
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
    );
};
