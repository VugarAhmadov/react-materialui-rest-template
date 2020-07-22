import React from 'react';
import categories from 'data/categories.json';
import { useStyles } from './home.style';
import browserHistory from 'lib/browser-history';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Button, Icon, Grid } from '@material-ui/core';
import { Job } from './components/job';
import jobs from './jobs.json';

export const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.banner}>
                <div className={classes.bannerContainer}>
                    <div className={classes.row}>
                        <div className={classes.rowInner}>
                            <div className={classes.bannerHeadline}>
                                <h3>
                                    <strong>Hire experts or be hired for any job, any time.</strong>
                                    <br />
                                    <span>
                                        Thousands of small businesses use{' '}
                                        <strong style={{ color: '#2196f3' }}>Yourdomain</strong> to turn their ideas
                                        into reality
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowInner}>
                            <div className={classes.bannerSearchForm}>
                                <div className={classes.bannerSearchField}>
                                    <label className={classes.searchFieldTitle}>Where?</label>
                                    <div className={classes.searchFieldInputContainer}>
                                        <TextField
                                            fullWidth
                                            id="location"
                                            name="location"
                                            placeholder="Online Job"
                                            autoComplete="off"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Icon className={classes.inputIcon}>room</Icon>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={classes.bannerSearchField} style={{ border: 'none' }}>
                                    <label className={classes.searchFieldTitle}>What job you want?</label>
                                    <div className={classes.searchFieldInputContainer}>
                                        <TextField
                                            fullWidth
                                            id="title"
                                            name="title"
                                            placeholder="Job Title or Keywords"
                                            autoComplete="off"
                                        />
                                    </div>
                                </div>
                                <Button
                                    variant="contained"
                                    onClick={() => browserHistory.push('jobs')}
                                    className={classes.searchFieldButton}
                                    color="primary"
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowInner}>
                            <ul className={classes.bannerStats}>
                                <li>
                                    <strong>1,586</strong>
                                    <span>Jobs posted</span>
                                </li>
                                <li>
                                    <strong>3,543</strong>
                                    <span>Tasks posted</span>
                                </li>
                                <li>
                                    <strong>1,232</strong>
                                    <span>Freelancers</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={classes.imageContainer}
                    style={{ backgroundImage: `url(${require('assets/home-background.jpg')})` }}
                />
            </div>
            <div className={classes.categories}>
                <div className={classes.categoriesHeadline}>
                    <h3>Popular job Categories</h3>
                </div>
            </div>
            <div className={classes.jobs}>
                <div className={classes.jobsContainer}>
                    <div className={classes.jobsHeadline}>
                        <h3>Featured Jobs</h3>
                        <a className={classes.jobsLink} href="jobs">
                            <span>Browse all Jobs</span> <Icon>arrow_right_alt</Icon>
                        </a>
                    </div>
                    <Grid item container className={classes.jobList} justify="space-between">
                        {jobs.map((job, i) => {
                            return (
                                <Grid key={job.id} item xs={12}>
                                    <Job odd={i % 2 === 1} key={job.id} job={job} />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    );
};
