import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";

export default function BasePage() {
	return (
		<Suspense>
			<Switch>
				{
					<Redirect exact from="/" to="/dashboard" />
				}
				<Route path="/dashboard" component={DashboardPage} />
			</Switch>
		</Suspense>
	);
}
