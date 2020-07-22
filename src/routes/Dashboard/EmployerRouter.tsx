import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('views/dashboard/employer').then((module) => ({ default: module.Dashboard })));

const EmployerRouter: React.FC = () => (
    <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
);
export default EmployerRouter;
