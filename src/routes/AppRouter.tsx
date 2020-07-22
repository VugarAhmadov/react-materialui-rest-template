import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('views').then((module) => ({ default: module.Home })));

const AppRouter: React.FC = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
    </Switch>
);
export default AppRouter;
