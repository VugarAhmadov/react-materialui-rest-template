import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import App from 'views/layout/app';
import EmployerDashboard from 'views/layout/dashboard/employer';
import { Spinner } from 'components';
import browserHistory from 'lib/browser-history';
import { Analytics } from 'lib/analytics';

const Routes: React.FC = () => {
    const renderDashboard = (): any => {
        return <EmployerDashboard />;
    };

    return (
        <Router history={browserHistory}>
            <Suspense fallback={<Spinner style={{ width: '100vw', height: '100vh' }} color="primary" />}>
                <Route path="/" component={Analytics} />

                <Switch>
                    <Route path="/dashboard" component={renderDashboard} />
                    <Route path="/" component={App} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routes;
