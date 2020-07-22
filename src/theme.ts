import { red, green, blue } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

type PaletteType = 'light' | 'dark' | undefined;

// A custom theme for this app
const theme = (type: PaletteType) =>
    createMuiTheme({
        palette: {
            type,
            primary: {
                main: blue[500],
            },
            secondary: {
                main: '#f50057',
            },
            error: {
                main: red.A400,
            },
            success: { light: green[600], main: green[500], dark: green[400], contrastText: '#fff' },
        },
        typography: {
            fontFamily: ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
        },
    });

export default theme;
