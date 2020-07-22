import { Container } from '@material-ui/core';
import React from 'react';
import EmployerRouter from 'routes/Dashboard/EmployerRouter';
import { Header } from '../../header';
import { useStyles } from './dashboard.style';
import { DrawerMenu } from './drawerMenu';

const Dashboard: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = (): void => {
        setOpen(true);
    };
    const handleDrawerClose = (): void => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.root}>
                <Header handleDrawerOpen={handleDrawerOpen} open={open} variant="permanent" />
                <DrawerMenu open={open} variant="permanent" handleDrawerClose={handleDrawerClose} />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="xl" className={classes.container}>
                        <EmployerRouter />
                    </Container>
                </main>
            </div>
        </>
    );
};

export default Dashboard;
