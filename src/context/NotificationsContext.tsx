/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, createContext, ReactNode } from 'react';
import { Snackbar } from 'components/snackbar';
import { SnackbarCloseReason } from '@material-ui/core';
import { SnackbarType } from 'components/snackbar/snackbar';

type notifyType = {
    duration?: number | null;
    message: string;
    type: SnackbarType;
};

type NotificationsContextProps = {
    notify: ({ duration, message, type }: notifyType) => void;
    close: () => void;
};

const NotificationsContext = createContext<NotificationsContextProps>({ notify: () => {}, close: () => {} });
export const useNotifications = (): NotificationsContextProps =>
    useContext<NotificationsContextProps>(NotificationsContext);

const DEFAULT_SNACK_STATE = {
    open: false,
    autoHideDuration: 6000,
    message: '',
    type: 'success' as SnackbarType,
};

export const NotificationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [snack, setSnackState] = React.useState(DEFAULT_SNACK_STATE);

    const notify = ({ duration, message, type }: notifyType): void => {
        const newState = {
            open: true,
            autoHideDuration: duration || 6000,
            type: type || 'info',
            message,
        };
        setSnackState(newState);
    };

    const close = (): void => setSnackState(DEFAULT_SNACK_STATE);

    const onClose = (_?: any, reason?: SnackbarCloseReason): void => {
        if (reason === 'clickaway') {
            return;
        }

        close();
    };

    return (
        <NotificationsContext.Provider value={{ notify, close }}>
            {children}
            <Snackbar {...snack} onClose={onClose} />
        </NotificationsContext.Provider>
    );
};
