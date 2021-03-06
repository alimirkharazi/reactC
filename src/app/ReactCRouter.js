import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import BasePage from "./BasePage";
import { AuthPage } from "./modules/Auth";

export function ReactCRouter(props) {
	const { isAuthorized } = useSelector(
		({ auth }) => ({
			isAuthorized: auth.user != null || props.authenticationModule,
		}),
		shallowEqual
	);

	return (
		<Switch>
			{!isAuthorized ? (
				<Route>
					<AuthPage />
				</Route>
			) : (
					<Redirect from="/auth" to="/" />
				)}
			{!isAuthorized ? (
				<Redirect to="/auth/login" />
			) : (
					<BasePage />
				)}
		</Switch>
	);
}
