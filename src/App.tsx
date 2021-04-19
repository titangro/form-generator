import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import { withContexts } from './hocs/withContexts';

import { screensPaths } from './screens';
import { ScreensConfig } from './screens/config/config';
import { ScreensResult } from './screens/result/result';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to={screensPaths.config} />
				</Route>
				<Route exact path={screensPaths.config} component={ScreensConfig} />
				<Route exact path={screensPaths.result} component={ScreensResult} />
			</Switch>
		</Router>
	);
};

export default withContexts(App);
