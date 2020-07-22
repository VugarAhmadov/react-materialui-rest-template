import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { AuthProvider } from 'context/AuthContext';
import { NotificationsProvider } from 'context/NotificationsContext';
import { useSettings } from 'context/SettingsContext';
import React from 'react';
import Routes from 'routes';
import customTheme from 'theme';
import './App.css';

const App = () => {
    const { theme } = useSettings();
    const muiTheme = customTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            <NotificationsProvider>
                <AuthProvider>
                    <CssBaseline />
                    <Routes />
                </AuthProvider>
            </NotificationsProvider>
        </ThemeProvider>
    );
};

export default App;
