import { Icon, IconButton, Snackbar as MUISnackbar, SnackbarContent, SnackbarCloseReason } from '@material-ui/core';
import React from 'react';
import { useStyles } from './snackbar.style';

const variantIcon = {
    success: 'check',
    warning: 'warning',
    error: 'error',
    info: 'info',
};
export type SnackbarType = 'success' | 'error' | 'info' | 'warning';

type SnackbarProps = {
    open?: boolean;
    autoHideDuration?: number | null;
    onClose: (event?: React.SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => void;
    type: SnackbarType;
    message: string;
};
export const Snackbar: React.FC<SnackbarProps> = ({ open, autoHideDuration, onClose, type, message }) => {
    const classes = useStyles();

    return (
        <MUISnackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
        >
            <SnackbarContent
                className={classes[type]}
                aria-describedby="client-snackbar"
                message={
                    <span className={classes.message} id="client-snackbar">
                        <Icon className={`${classes.icon} ${classes.iconVariant}`}>{variantIcon[type]}</Icon>
                        {message}
                    </span>
                }
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={onClose}
                    >
                        <Icon className={classes.icon}>close</Icon>
                    </IconButton>,
                ]}
            />
        </MUISnackbar>
    );
};
