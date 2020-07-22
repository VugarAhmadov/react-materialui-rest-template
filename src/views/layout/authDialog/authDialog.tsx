import React, { useEffect } from 'react';
import { Dialog, Button, Icon, Tabs, Tab } from '@material-ui/core';
import { useAuth } from 'context/AuthContext';
import { SignIn } from 'views/auth';
import { useStyle } from './authDialog.style';

const TabPanel: React.FC<any> = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && children}
        </div>
    );
};

export const AuthDialog = () => {
    const classes = useStyle();

    const { isModalOpen, closeModal, selectedTab, selectTab } = useAuth();

    useEffect(() => {
        selectTab(0);
    }, [isModalOpen]);

    const onTabChange = (_, tabIndex): void => {
        selectTab(tabIndex);
    };

    return (
        <Dialog disableBackdropClick open={isModalOpen} classes={{ paper: classes.dialog }} onClose={closeModal}>
            <div className={classes.header}>
                <Tabs value={selectedTab} onChange={onTabChange}>
                    <Tab
                        label="Log in"
                        style={{ border: 'none' }}
                        disableRipple
                        classes={{ selected: classes.navButtonActive }}
                        className={classes.navButton}
                    />
                    <Tab
                        label="Register"
                        disableRipple
                        classes={{ selected: classes.navButtonActive }}
                        className={classes.navButton}
                    />
                </Tabs>

                <Button className={classes.close} onClick={closeModal}>
                    <Icon>close</Icon>
                </Button>
            </div>

            <TabPanel value={selectedTab} index={0}>
                <SignIn />
            </TabPanel>

            <TabPanel value={selectedTab} index={1}>
                Signup
            </TabPanel>
        </Dialog>
    );
};
