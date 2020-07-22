import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyle = makeStyles((theme) => {
    return {
        toggleButton: {
            marginRight: '20px',
            marginLeft: '10px',
            color: `${theme.palette.type === Theme.Light ? '#727272' : '#ccc'}`,
            transition: '.3s',
            '&:hover': {
                color: `${theme.palette.type === Theme.Light ? '#000' : '#fff'}`,
            },
            [theme.breakpoints.down('sm')]: {
                marginRight: '5px',
            },
        },
        avatar: {
            width: '42px',
            height: '42px',
            backgroundColor: '#2196f333',
            color: '#2196f3',
        },
        popover: {
            '& .MuiPopover-paper': {
                minWidth: '300px',

                [theme.breakpoints.down('xs')]: {
                    width: '100%',
                    marginTop: '17px',
                },
            },
        },
        userStatus: {
            width: '100%',
            transition: '.3s',
            borderRadius: '4px',
            backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#404040'}`,
            [theme.breakpoints.down('sm')]: {},
        },
        userDetails: {
            display: 'flex',
            padding: '25px',
            flexDirection: 'column',
            borderBottom: `${theme.palette.type === Theme.Light ? '1px solid #e6e6e6' : '1px solid #484848'}`,
        },
        userAvatar: {
            display: 'inline-block',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            position: 'relative',
            // "&::after": {
            //   position: "absolute",
            //   content: `""`,
            //   height: "12px",
            //   width: "12px",
            //   backgroundColor: "#38b653",
            //   bottom: 0,
            //   right: 0,
            //   display: "block",
            //   border: "2px solid #fff",
            //   borderRadius: "50%",
            //   boxShadow: "0 2px 3px rgba(0,0,0,.3)"
            // },
            '& img': {
                width: '100%',
                display: 'inline-block',
                borderRadius: '50%',
                imageRendering: '-webkit-optimize-contrast',
            },
        },
        userName: {
            display: 'block',
            alignItems: 'center',
            fontWeight: 500,
            color: `${theme.palette.type === Theme.Light ? '#333' : '#fff'}`,
            fontSize: '16px',
            lineHeight: '20px',
            padding: '2px 0 0 15px',
            '& span': {
                display: 'block',
                fontSize: '14.7px',
                color: `${theme.palette.type === Theme.Light ? '#888' : '#ccc'}`,
                fontWeight: 500,
                textTransform: 'uppercase',
            },
        },
        statusSwitch: {
            background: '#eee',
            width: '100%',
            display: 'block',
            borderRadius: '4px',
            height: '36px',
            padding: 0,
            position: 'relative',
            zoom: 1,
            marginTop: '20px',
            '& button': {
                float: 'left',
                flex: 1,
                position: 'relative',
                zIndex: 2,
                cursor: 'pointer',
                color: '#fff',
                fontSize: '14.7px',
                textAlign: 'center',
                transition: '.3s',
                margin: 0,
            },
        },
        statusSwitchRoot: {
            width: '100%',
        },
        userMenu: {
            padding: '15px 25px',
        },
        userMenuItem: {
            display: 'flex',
            padding: '5px 0',
            width: '100%',
            color: `${theme.palette.type === Theme.Light ? '#666' : '#ddd'}`,
            transition: '.3s',
            justifyContent: 'flex-start',
            '&:hover': {
                color: '#2196f3',
                backgroundColor: 'transparent',
            },
        },
        userMenuItemText: {
            fontSize: '16px',
            textTransform: 'none',
            marginLeft: '5px',
        },
        online: {
            background: '#38b653',
            '&:hover': {
                backgroundColor: '#38b653',
            },
        },
        invisible: {
            background: '#333',
            '&:hover': {
                backgroundColor: '#333',
            },
        },
        notChecked: {
            color: '#888 !important',
            borderColor: '#2196f3',
        },
    };
});
