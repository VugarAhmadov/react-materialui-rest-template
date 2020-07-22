import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyle = makeStyles((theme) => {
    return {
        container: {
            borderRadius: '0px',
            overflow: 'hidden',
            width: '100%',
            marginBottom: 0,
            padding: '35px',
            display: 'block',
            position: 'relative',
            [theme.breakpoints.down('xs')]: {
                padding: '25px',
            },
            '&::before': {
                content: 'close-quote',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: '100%',
                display: 'block',
                transition: '.3s',
                opacity: 0,
            },
            '&:hover': {
                cursor: 'pointer',
                transform: 'none',
                textDecoration: 'none',
                '&::before': {
                    opacity: 1,
                    borderLeft: `3px solid ${theme.palette.primary.main}`,
                },
                '& button': {
                    backgroundColor: '#2196f3',
                    color: '#fff',
                    boxShadow: '0 0px 12px rgba(42,65,232,.15)',
                },
            },
        },
        oddBackground: {
            backgroundColor: `${theme.palette.type === Theme.Light ? '#fafafa' : '#3d3d3d'}`,
        },
        details: {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            padding: 0,
            top: 0,
        },
        logoContainer: {
            width: '50px',
            height: '50px',
            marginRight: '30px',
            borderRadius: '4px',
            boxShadow: `${theme.palette.type === Theme.Light ? '0 0 3px #ccc' : '0 0 3px #222'}`,
            flexBasis: 'unset',
            backgroundColor: 'white',
        },
        logo: {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
        },
        description: {
            flex: 1,
            paddingTop: '3px',
            '& li': {
                display: 'inline-block',
                marginRight: '14px',
                fontSize: '14px',
                color: theme.palette.common.grey,
            },
            '& ul': {
                listStyle: 'none',
                padding: 0,
                margin: 0,
            },
            '& span': {
                fontSize: '16px',
                transform: 'translateY(2px)',
            },
        },
        footer: {
            marginTop: '5px',
        },
        verified: {
            width: '25px',
            color: theme.palette.success.main,
            borderRadius: '50%',
            textAlign: 'center',
            zIndex: 10,
            fontWeight: 500,
            position: 'relative',
            display: 'inline-block',
            transform: 'scale(.8) translateY(5px)',
            top: '2px',
        },
        JobTitle: {
            margin: 0,
            fontSize: '17px',
            lineHeight: '28px',
            fontWeight: 500,
        },
        applyButton: {
            color: `${theme.palette.type === Theme.Light ? '#666' : '#ddd'}`,
            textTransform: 'none',
            transition: '.3s',
            backgroundColor: `${theme.palette.type === Theme.Light ? '#f0f0f0' : '#333'}`,
            padding: '10px 20px',
            [theme.breakpoints.down('sm')]: {
                marginTop: '15px',
                width: '100%',
            },
        },
    };
});
