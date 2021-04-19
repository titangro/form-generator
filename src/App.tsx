import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withContexts } from './hocs/withContexts';

import { screensPaths } from './screens';
import { ScreensConfig } from './screens/config/config';
import { ScreensResult } from './screens/result/result';

import { LayoutsMain } from '~/layouts/main/LayoutsMain';

const App: React.FC = () => {
	return (
		<LayoutsMain>
			<Router>
				<div>
					<Switch>
						<Route path={screensPaths.config} component={ScreensConfig} />
						<Route exact path={screensPaths.result} component={ScreensResult} />
					</Switch>
				</div>
			</Router>
		</LayoutsMain>
	);
};

export default withContexts(App);
