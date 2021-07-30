import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
        </Switch>
    );
}

export default Routes;
