import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
    return {
        link: {
            textAlign: 'center',
            width: '100% !important',
            boxShadow: '0 4px 12px rgba(42,65,232,.1)',
            padding: '10px 20px',
            lineHeight: '24px',
            color: '#fff',
            position: 'relative',
            fontSize: '16px',
            fontWeight: 500,
            display: 'inline-block',
            transition: 'all .3s ease-in-out',
            cursor: 'pointer',
            overflow: 'hidden',
            borderRadius: '4px',
            [theme.breakpoints.down('md')]: {
                marginTop: '10px',
            },
        },
        slidingIcon: {
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
                '& span': {
                    maxWidth: '20px',
                    opacity: 1,
                    transform: 'translateX(0)',
                    lineHeight: 'unset',
                },
            },
        },
        color: {
            border: '1px solid',
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
            },
        },
        icon: {
            fontSize: '20px',
            width: '30px',
            top: '3px',
            position: 'relative',
            display: 'inline-block',
            marginLeft: '6px',
            paddingRight: '0px',
            opacity: 0,
            maxWidth: 0,
            transition: '.4s',
            transform: 'translateX(-20px)',
        },
    };
});
