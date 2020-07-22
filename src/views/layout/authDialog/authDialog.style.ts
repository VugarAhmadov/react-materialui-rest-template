import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyle = makeStyles((theme) => {
    return {
        dialog: {
            minWidth: '550px',
            minHeight: '400px',
            [theme.breakpoints.down('xs')]: {
                minWidth: '310px',
            },
        },
        header: {
            position: 'relative',
            justifyContent: 'space-between',
            backgroundColor: `${theme.palette.type === Theme.Light ? '#f8f8f8' : '#383838'}`,
            '& .MuiTabs-indicator': {
                display: 'none',
            },
        },

        navButton: {
            transition: '.5s',
            padding: theme.spacing(2.25, 3.5),
            textTransform: 'none',
            color: `${theme.palette.type === Theme.Light ? '#777' : '#eee'}`,
            position: 'relative',
            fontSize: '16px',
            '&:hover': {
                backgroundColor: `${theme.palette.type === Theme.Light ? '#f3f3f3' : '#353535'}`,
                color: `${theme.palette.type === Theme.Light ? '#333' : '#fff'}`,
            },
            [theme.breakpoints.down('xs')]: {
                padding: theme.spacing(1.5, 2.5),
                fontSize: '14px',
            },
        },
        navButtonActive: {
            backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#333'}`,
            color: '#2196f3',
            '&:hover': {
                backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#333'}`,
                color: '#2196f3',
            },
        },
        close: {
            position: 'absolute',
            height: '64px',
            top: 0,
            right: 0,
            borderRadius: '0',
            [theme.breakpoints.down('xs')]: {
                height: '48px',
            },
            '&:hover': {
                backgroundColor: `${theme.palette.type === Theme.Light ? '#f3f3f3' : '#353535'}`,
            },
        },
    };
});
