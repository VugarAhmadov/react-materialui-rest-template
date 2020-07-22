import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyle = makeStyles((theme) => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100px',
            backgroundColor: `${theme.palette.type === Theme.Light ? '#303030' : '#282828'}`,
        },
        content: {
            display: 'flex',
            width: '100%',
            paddingRight: '23px',
            paddingLeft: '23px',
            marginRight: 'auto',
            marginLeft: 'auto',
            [theme.breakpoints.up('lg')]: {
                maxWidth: '1200px',
            },
            [theme.breakpoints.down('lg')]: {
                maxWidth: '1200px',
            },
            [theme.breakpoints.down('md')]: {
                maxWidth: '900px',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '720px',
                padding: '0 25px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '540px',
            },
        },
        topSection: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '250px',
            padding: '35px 0',
            borderBottom: theme.palette.type === Theme.Light ? '1px solid #484848' : '1px solid #353535',
            borderTop: theme.palette.type === Theme.Light ? '1px solid #484848' : '1px solid #353535',
            [theme.breakpoints.up(650)]: {
                padding: 0,
                height: '100px',
            },
            '& h3': {
                fontSize: '28px',
                fontWeight: 'lighter',
                color: '#eee',
                [theme.breakpoints.down(650)]: {
                    margin: 0,
                },
            },
        },
        topSectionContent: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            flexDirection: 'column',
            [theme.breakpoints.up(650)]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
        },
        topLeftSide: {
            display: 'flex',
            alignItems: 'center',
        },
        topRightSide: {
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            [theme.breakpoints.up(650)]: {
                flex: 0,
                flexDirection: 'row',
                alignItems: 'center',
            },
        },
        select: {
            backgroundColor: '#444',
            boxSizing: 'border-box',
            border: 'none',
            color: 'white',
            transition: '.5s',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            padding: '12px 40px 12px 18px',
            [theme.breakpoints.up(650)]: {
                marginLeft: '45px',
                width: '160px',
            },
            '&.MuiSelect-select': {
                paddingRight: '40px',
            },
            '&:hover': {
                backgroundColor: '#2196f3',
            },
        },
        selectIcon: {
            color: '#ccc',
            marginRight: '10px',
        },
        middleSection: {
            padding: '35px 0',
            borderBottom: theme.palette.type === Theme.Light ? '1px solid #484848' : '1px solid #353535',
        },
        middleSectionContent: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            [theme.breakpoints.up(650)]: {
                flexDirection: 'row',
            },
        },
        middleLeftSide: {
            flex: 1,
        },
        middleRightSide: {
            flex: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            [theme.breakpoints.up(650)]: {
                alignItems: 'center',
            },
        },
        appStoreIcon: {
            [theme.breakpoints.up(650)]: {
                marginRight: '20px',
            },
            '& img': {
                width: '156px',
                height: '48.2px',
                [theme.breakpoints.down(370)]: {
                    width: '130px',
                    height: '40px',
                },
            },
        },
        playStoreIcon: {
            justifySelf: 'flex-end',
            '& img': {
                width: '156px',
                height: '48.2px',
                [theme.breakpoints.down(370)]: {
                    width: '130px',
                    height: '40px',
                },
            },
        },
        bottomSection: {
            padding: '25px 0',
            '& p': {
                color: 'silver',
                fontSize: '16px',
                margin: 0,
            },
            '& a': {
                color: '#fff',
                textDecoration: 'none',
            },
            '& a:hover': {
                textDecoration: 'underline',
            },
        },
        bottomSectionContent: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
    };
});
