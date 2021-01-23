import React from "react";
import { BrowserRouter, useHistory, Route, Switch } from "react-router-dom";

import Homepage from "../pages/Home";

const Routes = () => {
	const history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route exact key="homepage" component={Homepage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
