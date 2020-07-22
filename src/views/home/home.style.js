import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

export const useStyles = makeStyles((theme) => {
    return {
        banner: {
            padding: '105px 0',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                padding: '70px 0',
            },
            '&::before': {
                content: `""`,
                position: 'absolute',
                height: '100%',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 15,
                background: `${
                    theme.palette.type === Theme.Light
                        ? 'linear-gradient(to right,rgba(250,250,250,1) 20%,rgba(250,250,250,.95) 50%,rgba(250,250,250,0.1) 80%,rgba(250,250,250,0) 100%)'
                        : 'linear-gradient(to right,rgba(47,47,47,1) 20%,rgba(47,47,47,.95) 50%,rgba(250,250,250,0.1) 80%,rgba(250,250,250,0) 100%)'
                }`,
                [theme.breakpoints.down('sm')]: {
                    background: `${theme.palette.type === Theme.Light ? 'rgba(250,250,250,.9)' : 'rgba(47,47,47,.9)'}`,
                },
            },
        },
        row: {
            display: 'flex',
            flexWrap: 'wrap',
            marginRight: ' -15px',
            marginLeft: ' -15px',
        },
        rowInner: {
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
        },
        imageContainer: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '100% 60%',
            position: 'absolute',
            top: 0,
            left: '10%',
            width: '90%',
            height: '100%',
            zIndex: 10,
            overflow: 'hidden',
            [theme.breakpoints.down('sm')]: {
                left: 0,
                width: '100%',
            },
        },
        bannerContainer: {
            position: 'relative',
            zIndex: 100,
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
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
                maxWidth: '540px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '540px',
            },
        },
        bannerHeadline: {
            display: 'block',
            maxWidth: '55%',
            [theme.breakpoints.down('md')]: {
                maxWidth: '70%',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '100%',
            },
            '& h3': {
                fontSize: '26px',
                fontWeight: 400,
                marginTop: 0,
                marginBottom: 0,
                color: `${theme.palette.type === Theme.Light ? '#777' : '#ccc'}`,
                lineHeight: '42px',
                [theme.breakpoints.down('lg')]: {
                    fontSize: '24px',
                },
                [theme.breakpoints.down('sm')]: {
                    fontSize: '22px',
                },
            },
            '& strong': {
                fontWeight: 600,
                color: `${theme.palette.type === Theme.Light ? '#333' : '#fff'}`,
            },
        },
        bannerSearchForm: {
            marginTop: '90px',
            display: 'flex',
            width: '100%',
            backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#444'}`,
            borderRadius: '4px',
            boxShadow: '0 2px 12px rgba(0,0,0,.09)',
            [theme.breakpoints.down('sm')]: {
                marginTop: '0px',
                flexDirection: 'column',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
        },
        bannerSearchField: {
            padding: '10px 12px',
            borderRight: `${theme.palette.type === Theme.Light ? '1px solid #e4e4e4' : '1px solid #333'}`,
            flex: 1,
            alignItems: 'center',
            display: 'flex',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                marginTop: '80px',
                boxShadow: '0 2px 12px rgba(0,0,0,.07)',
                backgroundColor: `${theme.palette.type === Theme.Light ? '#fff' : '#444'}`,
                padding: '0px 10px',
                borderRadius: '4px',
            },
        },
        searchFieldTitle: {
            content: `''`,
            position: 'absolute',
            top: 0,
            left: 0,
            background: '#2196f3',
            color: '#fff',
            borderRadius: '4px',
            padding: '5px 10px',
            lineHeight: '22px',
            transform: 'translateY(calc(-100% - 15px))',
            cursor: 'default',
        },
        searchFieldInputContainer: {
            flex: 1,
            padding: '10px',
            '& .MuiInput-underline::after': {
                border: 'none!important',
            },
            '& .MuiInput-underline::before': {
                border: 'none!important',
            },
            '& .MuiInputBase-input::placeholder': {
                opacity: 1,
            },
        },
        inputIcon: {
            fontSize: '26px',
            color: `${theme.palette.type === Theme.Light ? '#777' : '#eee'}`,
        },
        searchFieldButton: {
            backgroundColor: '#2196f3',
            color: '#fff',
            padding: '0 30px',
            textTransform: 'none',
            fontSize: '18px',
            margin: '8px',
            lineHeight: '52px',
            boxShadow: '0 0 12px #2196f333',
            [theme.breakpoints.down('sm')]: {
                margin: 0,
                marginTop: '30px',
                width: '120px',
            },
        },
        bannerStats: {
            marginTop: '45px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            '& li': {
                flex: 'auto',
                flexGrow: 0,
                marginRight: '35px',
                paddingRight: '35px',
                borderRight: '1px solid #e0e0e0',
            },
            '& strong': {
                display: 'block',
                margin: 0,
                padding: 0,
                fontWeight: 500,
                color: `${theme.palette.type === Theme.Light ? '#333' : '#fff'}`,
                fontSize: '26px',
                marginBottom: '2px',
            },
            '& span': {
                display: 'block',
                margin: 0,
                padding: 0,
                fontWeight: 400,
                color: '#888',
                fontSize: '16px',
            },
            '& li:last-child': {
                borderRight: 'none',
            },
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        categories: {
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '65px',
            marginBottom: '45px',
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
                maxWidth: '540px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '540px',
            },
        },
        categoriesHeadline: {
            textAlign: 'center',
            padding: 0,
            marginBottom: '15px',
            '& h3': {
                fontSize: '26px',
                lineHeight: '36px',
                fontWeight: 500,
            },
        },
        jobs: {
            backgroundColor: `${theme.palette.type === Theme.Light ? '#f5f5f5' : '#383838'}`,
            paddingTop: '65px',
            paddingBottom: '75px',
        },
        jobsContainer: {
            position: 'relative',
            width: '100%',
            paddingRight: '15px',
            paddingLeft: '15px',
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
                maxWidth: '540px',
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '540px',
            },
        },
        jobsHeadline: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '35px',
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            },
            '& h3': {
                fontSize: '26px',
                lineHeight: '36px',
                fontWeight: 400,
                margin: 0,
            },
        },
        jobList: {
            boxShadow: '0 0 12px rgba(0,0,0,.12)',
            borderRadius: '4px',
            '& .MuiGrid-item:first-child': {
                borderRadius: '4px 4px 0 0',
                '& .MuiCard-root': {
                    borderRadius: '4px 4px 0 0',
                },
            },
            '& .MuiGrid-item:last-child': {
                borderRadius: '0 0 4px 4px',
                '& .MuiCard-root': {
                    borderRadius: '0 0 4px 4px',
                },
            },
        },
        jobsLink: {
            display: 'flex',
            color: '#2196f3',
            fontSize: '16px',
            alignItems: 'center',
            textDecoration: 'none',
            '& span': {
                marginRight: '5px',
            },
        },
    };
});
