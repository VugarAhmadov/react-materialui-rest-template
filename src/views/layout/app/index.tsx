import { Container, Fab, Icon, makeStyles } from '@material-ui/core';
import { ScrollTop } from 'components';
import React from 'react';
import AppRouter from 'routes/AppRouter';

import { Header } from '../header';
import { Footer } from '../footer';
import { AuthDialog } from '../authDialog';

export const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    container: {
        padding: 0,
        marginTop: theme.spacing(2),
        minHeight: '95vh',
        maxWidth: 'unset',
    },
}));

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <div id="back-to-top-anchor" className={classes.appBarSpacer} />
            <Container className={classes.container}>
                <AppRouter />
            </Container>
            <Footer />
            <AuthDialog />
            <ScrollTop>
                <Fab color="primary" size="medium" aria-label="scroll back to top">
                    <Icon fontSize="large">keyboard_arrow_up</Icon>
                </Fab>
            </ScrollTop>
        </>
    );
};

export default App;
