import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

type SpinnerProps = {
    title?: string;
    disableShrink?: boolean;
    style?: React.CSSProperties;
    spinnerStyle?: React.CSSProperties;
    color?: 'inherit' | 'secondary' | 'primary';
};

export const Spinner: React.FC<SpinnerProps> = ({ title, disableShrink, style, spinnerStyle, color }) => {
    return (
        <Grid container justify="center" alignItems="center" direction="column" style={{ ...style }}>
            <CircularProgress style={spinnerStyle} disableShrink={disableShrink} color={color || 'secondary'} />

            {title && (
                <Grid item style={{ marginTop: '5px' }}>
                    <Typography> {title}</Typography>
                </Grid>
            )}
        </Grid>
    );
};
