import React from 'react';
import { Tooltip, Icon } from '@material-ui/core';
import { socialShareLink } from 'config';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from 'enum';

const useStyle = makeStyles((theme) => {
    return {
        socialShareButtons: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 0,
            margin: 0,
            minWidth: '220px',
            listStyle: 'none',
            minHeight: '80px',
            marginBottom: '14px',
            marginLeft: ' -7px',
            color: '#484848',
            [theme.breakpoints.up(650)]: {
                height: '100%',
                marginBottom: 0,
                marginLeft: 0,
                justifyContent: 'center',
                borderLeft: `${theme.palette.type === Theme.Light ? '1px solid #484848' : '1px solid #353535'}`,
                borderRight: `${theme.palette.type === Theme.Light ? '1px solid #484848' : '1px solid #353535'}`,
            },
            '& a': {
                height: '50px',
                width: '44px',
                display: ' inline-block',
                lineHeight: '44px',
                padding: '10px',
                color: '#aaa',
                transition: '.5s',
            },
            '& a:hover': {
                color: '#fff',
            },
            '& span': {
                width: '44px',
                fontSize: '20px',
            },
        },
    };
});

export const SocialButtons = () => {
    const url = 'https://ci.{yourdomain}.io';

    const classes = useStyle();

    return (
        <ul className={classes.socialShareButtons}>
            <li>
                <Tooltip arrow title="Facebook">
                    <a rel="noreferrer noopener" target="_blank" href="https://www.facebook.com/{yourdomain}.az/">
                        <Icon className="fab fa-facebook-f" />
                    </a>
                </Tooltip>
            </li>
            <li>
                <Tooltip arrow title="Instagram">
                    <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/{yourdomain}.az/">
                        <Icon className="fab fa-instagram" />
                    </a>
                </Tooltip>
            </li>
            <li>
                <Tooltip arrow title="Twitter">
                    <a rel="noreferrer noopener" target="_blank" href="https://twitter.com/{yourdomain}_io">
                        <Icon className="fab fa-twitter" />
                    </a>
                </Tooltip>
            </li>

            <li>
                <Tooltip arrow title="Linkedin">
                    <a rel="noreferrer noopener" target="_blank" href={`${socialShareLink.linkedin(encodeURI(url))}`}>
                        <Icon className="fab fa-linkedin-in" />
                    </a>
                </Tooltip>
            </li>
        </ul>
    );
};
