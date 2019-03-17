import React from 'react';
import { Route } from "react-router-dom";
import Profile from "./Profile";
import NotFound from "../../Authorized/NotFound";

const SettingsWrapper = () => {

	return (
		<div>
			<Route path="/settings/profile" component={Profile} />
			<Route component={NotFound} />
		</div>
	)
};

export default SettingsWrapper;
