import React from "react";
import { BrowserRouter, useHistory, Route, Switch } from "react-router-dom";

import Homepage from "../pages/Home";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";

const Routes = () => {
	const history = useHistory();
	return (
		<BrowserRouter history={history}>
			<Switch>
				<Route exact key="homepage" path="/" component={Homepage} />
				<Route exact key="signin" path="/signin" component={LoginPage} />
				<Route exact key="register" path="/register" component={RegisterPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
