import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { UserNetworkStatus } from 'enum';

const StatusSwitch = ({ status = UserNetworkStatus.Online, classes }) => {
    const [newStatus, setStatus] = useState(status);
    return (
        <div className={classes.statusSwitch} id="snackbar-user-status">
            <ButtonGroup
                className={classes.statusSwitchRoot}
                color="primary"
                aria-label="Outlined primary button group"
            >
                <Button
                    onClick={() => setStatus(UserNetworkStatus.Online)}
                    className={`${newStatus === UserNetworkStatus.Online ? classes.online : classes.notChecked}`}
                    style={{ textTransform: 'none' }}
                >
                    Online
                </Button>
                <Button
                    onClick={() => setStatus(UserNetworkStatus.invisible)}
                    className={`${newStatus === UserNetworkStatus.invisible ? classes.invisible : classes.notChecked}`}
                    style={{ textTransform: 'none' }}
                >
                    Invisible
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default StatusSwitch;
