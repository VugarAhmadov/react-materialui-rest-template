import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export const Dashboard = ({ fixedHeightPaper }) => {
    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper} />
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper} />
            </Grid>
        </Grid>
    );
};
