import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => {
    return {
        logoContainer: {
            marginTop: '3px',
        },
        logo: {
            fill: '#2196f3',
        },
        toolbar: {
            paddingRight: theme.spacing(3), // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#282828'}`,
            padding: theme.spacing(1, 0),
            boxShadow: `${
                theme.palette.type === Theme.Light ? '0 0 18px 0 rgba(0,0,0,.12)' : '0 0 18px 0 rgba(0,0,0,.12)'
            }`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        icon: {
            color: `${theme.palette.type === Theme.Light ? '#727272' : '#ccc'}`,
            transition: '.3s',
            '&:hover': {
                color: `${theme.palette.type === Theme.Light ? '#000' : '#fff'}`,
            },
            '& svg': {
                fill: `${theme.palette.type === Theme.Light ? '#727272' : '#ccc'}`,
                transition: '.3s',
                '&:hover': {
                    fill: `${theme.palette.type === Theme.Light ? '#000' : '#fff'}`,
                },
            },
        },
        menuButton: {
            marginRight: theme.spacing(4),
            color: `${theme.palette.type === Theme.Light ? '#424242' : '#fff'}`,
        },
        menuButtonHidden: {
            display: 'none',
        },
    };
});
