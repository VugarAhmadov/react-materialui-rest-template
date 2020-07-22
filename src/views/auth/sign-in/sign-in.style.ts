import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyle = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoContainer: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        boxShadow: `${theme.palette.type === Theme.Light ? '0 0 16px #eee' : '0 0 16px #111'}`,
        margin: theme.spacing(4),
        marginTop: 0,
        [theme.breakpoints.down('xs')]: {
            marginBottom: theme.spacing(3),
            width: '80px',
            height: '80px',
        },
    },
    logo: {
        width: '100%',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        '& .MuiFormHelperText-root.Mui-error': {
            display: 'none',
        },
    },
    inputIcon: {
        color: 'grey',
    },
    submit: {
        fontSize: '15px',
        margin: theme.spacing(2, 0, 1),
        padding: theme.spacing(1.7),
    },
    container: {
        padding: '36px',
        backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#333'}`,
        [theme.breakpoints.up('lg')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('lg')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '700px',
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '540px',
            padding: '24px 16px',
        },
    },
    heading: {
        fontWeight: 'bold',
        display: 'block',
        textAlign: 'center',
        color: `${theme.palette.type === Theme.Light ? '#333' : '#fff'}`,
    },
    navButton: {
        padding: 0,
        color: '#2196f3',
        marginTop: theme.spacing(0.5),
        textTransform: 'none',
        fontSize: '16px',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    passwordMessage: {
        width: '100%',
        textAlign: 'center',
        padding: '15px 20px',
        backgroundColor: '#47bb67',
        color: '#fff',
        borderRadius: '4px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
            padding: '10px',
        },
    },
}));
