import React from 'react';
import { Route } from "react-router-dom";
import Profile from "./Profile";

const SettingsWrapper = () => {

	return (
		<div>
			<Route path="/settings/profile" component={Profile} />
		</div>
	)
};

export default SettingsWrapper;
