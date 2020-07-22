import { Card, Grid, Icon, Tooltip, Typography, Zoom, Hidden, Button } from '@material-ui/core';
import { API_URL, defaultCompanyLogo } from 'config';
import browserHistory from 'lib/browser-history';
import React from 'react';
import clsx from 'clsx';
import { useStyle } from './job.style';

export const Job = ({ job, odd }) => {
    const {
        objectId,
        title,
        location,
        posted,
        company: { name, logo, verified },
    } = job;

    const companyLogoUrl = logo && `${API_URL}/files/${logo.name}`;

    const classes = useStyle();

    return (
        <Card
            onClick={() => browserHistory.push(`/job/${objectId}`)}
            className={clsx(classes.container, odd && classes.oddBackground)}
            elevation={0}
        >
            <Grid container direction="column">
                <Grid item container spacing={1} alignItems="center">
                    <Hidden smDown>
                        <Grid
                            item
                            xs={2}
                            className={classes.logoContainer}
                            container
                            justify="center"
                            alignItems="center"
                        >
                            <img
                                className={classes.logo}
                                src={companyLogoUrl || defaultCompanyLogo}
                                onError={(e) => {
                                    if (e.target.src !== defaultCompanyLogo) {
                                        e.target.src = defaultCompanyLogo;
                                    }
                                }}
                                alt="Company Logo"
                            />
                        </Grid>
                    </Hidden>
                    <Grid item xs className={classes.description}>
                        <Typography variant="body1" className={classes.JobTitle}>
                            {title}
                        </Typography>
                        <div className={classes.footer}>
                            <ul>
                                {name && (
                                    <li>
                                        <Icon>business</Icon> {name}
                                        {verified && (
                                            <Tooltip
                                                TransitionComponent={Zoom}
                                                placement="top"
                                                title="Verified Employer"
                                            >
                                                <Icon className={classes.verified}>check_circle</Icon>
                                            </Tooltip>
                                        )}
                                    </li>
                                )}
                                {location && (
                                    <li>
                                        <Icon>location_on</Icon> {location}
                                    </li>
                                )}
                                <li>
                                    <Icon>access_time</Icon> {posted}
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid style={{ display: 'flex', justifyContent: 'flex-end' }} item xs={12} md={2}>
                        <Button disableElevation className={classes.applyButton} variant="contained">
                            Apply now
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};
